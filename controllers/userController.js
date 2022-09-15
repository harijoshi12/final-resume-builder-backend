import UserModel from "../models/UserModel.js";
import admin from "../firebase/index.js";
import { userInputCodes } from "../constants/constants.js";

const currentUser = async (req, res) => {
  const userDetails = req.body
  try {
    const firebaseUser = await admin.auth().verifyIdToken(req.headers.token)

    const user = await UserModel.findOne({ email: firebaseUser.email })

    if (user) {
      console.log("found user=====> ", user)
      res.status(201).json(user)
    } else {
      let newUser = await new UserModel({
        [userInputCodes.USERID]: firebaseUser.uid,
        [userInputCodes.SIGNINPROVIDER]: firebaseUser.firebase.sign_in_provider,
        [userInputCodes.NAME]: firebaseUser.name ? firebaseUser.name : (userDetails.name || firebaseUser.email.split("@")[0]),
        [userInputCodes.USERNAME]: (userDetails.userName || firebaseUser.email.split("@")[0]),
        [userInputCodes.EMAIL]: firebaseUser.email,
        [userInputCodes.EMAILVARIFIED]: firebaseUser.email_verified,
        [userInputCodes.PASSWORD]: userDetails?.password,
        [userInputCodes.ISSUPERADMIN]: userDetails?.isSuperAdmin,
        [userInputCodes.ROLE]: userDetails?.role,
        [userInputCodes.CART]: userDetails?.cart,
        [userInputCodes.IMAGESRC]: firebaseUser.picture ? firebaseUser.picture : userDetails.picture,
        [userInputCodes.DOCUMENTS]: userDetails.documentIds
      }).save()

      console.log("new user===> ", newUser)
      res.status(201).json(newUser)
    }
    // const createdUser = await user.save()
  } catch (error) {
    console.log(error)
    res.status(401).json({ error: "Invalid or expired token" })
  }
}

const getUser = async (req, res) => {

  try {
    const user = await UserModel.find()
    res.json(user)
  } catch (error) {
    console.log(error)
  }
}

export { currentUser, getUser }
