import UserModel from "../models/UserModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import transporter from "../config/emailConfig.js";
import admin from "../firebase/index.js";

const currentUser = async (req, res) => {
  try {
    const user = await admin.auth().verifyIdToken(req.headers.token)

    // const user = new UserModel(userDetails)

    // const createdUser = await user.save()
    console.log(user)

    res.status(201).json(user)
    // res.status(201).send(user)
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
