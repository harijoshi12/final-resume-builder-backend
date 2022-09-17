import UserModel from "../models/UserModel.js";


const currentUser = async (req, res) => {
  console.log("returning current user ====> ")
  res.status(201).json(req.currentUser)
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
