import UserModel from "../models/UserModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import transporter from "../config/emailConfig.js";

const createUser = async (req, res) => {
  try {
    const userDetails = req.body
    res.json(userDetails)
  } catch (error) {
    console.log(error)
  }
}

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body
    if (email, password) {
      const user = await UserModel.findOne({ email: email })
      console.log("user= ", user)
      if (user != null) {
        const isMatch = await bcrypt.compare(password, user.password)
        if (user.email === email && isMatch) {
          const token = jwt.sign({ userID: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' })
          res.send({ "status": "success", "message": "Login successfull", "token": token })
        } else {
          res.send({ "status": "failed", "message": "Email or password is not valid" })
        }
      } else {
        res.send({ "status": "failed", "message": "user not found" })
      }
    } else {
      res.send({ "status": "failed", "message": "all fields are required" })
    }
  } catch (error) {

  }
}

const userRegister = async (req, res) => {
  const { name, email, password, password_confirmation, tc } = req.body
  const user = await UserModel.findOne({ email: email })
  if (user) {
    res.send({ "status": "failed", "message": "Email already exists" })
  } else {
    if (name && email && password && password_confirmation && tc) {
      if (password === password_confirmation) {
        try {
          const salt = await bcrypt.genSalt(10)
          const hashPassword = await bcrypt.hash(password, salt)
          const doc = new UserModel({
            name: name,
            email: email,
            password: hashPassword,
            tc: tc
          })
          await doc.save()
          const saved_user = await UserModel.findOne({ email: email })
          const token = jwt.sign({ userId: saved_user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '5d' })
          res.status(201).send({ "status": "success", "message": "user registered successfully", "token": token })
        } catch (error) {
          console.log(error)
          res.send({ "status": "failed", "message": "unable to register" })
        }
      } else {
        res.send({ "status": "failed", "message": "password does not match" })
      }
    } else {
      res.send({ "status": "failed", "message": "filll all details" })
    }
  }
}

const updateUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.pic = req.body.pic || user.pic;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      pic: updatedUser.pic,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
};

const changeUserPassword = async (req, res) => {
  const { password, password_confirmation } = req.body
  if (password && password_confirmation) {
    if (password === password_confirmation) {
      const salt = await bcrypt.genSalt(12)
      const newHashPassword = await bcrypt.hash(password, salt)
      await UserModel.findByIdAndUpdate(req.user._id, { $set: { password: newHashPassword } })
      res.send({ "status": "success", "message": "password changed successfully" })
    } else {
      res.send({ "status": "failed", "message": "password and confirm password doesn't match" })
    }
  } else {
    res.send({ "status": "failed", "message": "all fields are required" })
  }
}

const loggedUser = async (req, res) => {
  res.send({ "user": req.user })
}

const sendUserPasswordResetEmail = async (req, res) => {
  console.log("running email sent")
  const { email } = req.body
  if (email) {
    const user = await UserModel.findOne({ email: email })
    console.log(user)
    if (user) {
      const secret = user._id + process.env.JWT_SECRET_KEY
      const token = jwt.sign({ userID: user._id }, secret, { expiresIn: '15m' })
      const link = `http://127.0.0.1:3000/api/user/reset/${user._id}/${token}`
      // send email
      let info = await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: user.email,
        subject: "just testing",
        html: `<a href=${link}>Click Here</a> to Reset your password`
      })
      console.log(link)
      res.send({ "status": "success", "message": "password reset email sent... check your email" })
    } else {
      res.send({ "status": "failed", "message": "email doesn't exist" })
    }
  } else {
    res.send({ "status": "failed", "message": "email field required" })
  }
}

const userPasswordReset = async (req, res) => {
  const { password, password_confirmation } = req.body
  const { id, token } = req.params
  const user = await UserModel.findById(id)
  const new_secret = user._id + process.env.JWT_SECRET_KEY
  try {
    jwt.verify(token, new_secret)
    if (password && password_confirmation) {
      if (password === password_confirmation) {
        const salt = await bcrypt.genSalt(12)
        const newHashPassword = await bcrypt.hash(password, salt)
        await UserModel.findByIdAndUpdate(user._id, { $set: { password: newHashPassword } })
        res.send({ "status": "success", "message": "password reset successfully" })
      } else {
        res.send({ "status": "failed", "message": "password dont match" })
      }
    }
  } catch (error) {

  }
}

export { createUser, userLogin, userRegister, updateUserProfile, userPasswordReset }

// dummy data

// {
//   "name": "krish",
//   "email": "krish@gmail.com",
//   "password": "1234",
//   "password_confirmation": "1234",
//   "tc": true
// }