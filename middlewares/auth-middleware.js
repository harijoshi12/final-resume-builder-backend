
import UserModel from '../models/UserModel.js'
import admin from "../firebase/index.js";
import { userInputCodes } from "../constants/constants.js";



const findOrCreateUser = async (req, res, next) => {
  const userDetails = req.body
  try {
    const firebaseUser = await admin.auth().verifyIdToken(req.headers.token)
    const user = await UserModel.findOne({ email: firebaseUser.email })

    if (user) {
      console.log("found user=====> ", user)
      req.currentUser = user
      next()
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
      req.currentUser = newUser
      next()
    }
  } catch (error) {
    console.log(error)
    res.status(401).json({ error: "Invalid or expired token" })
  }
}

export default findOrCreateUser


// import jwt from  'jsonwebtoken'
// const checkUserAuth = async (req, res, next)=>{
//   let token
//   const { authorization } = req.headers
//   if(authorization && authorization.startsWith('Bearer')){
//     try {
//       // get token from headerr
//       token = authorization.split(' ')[1]
//       console.log(token)
//       console.log("aut= ", authorization)
//       // varify token
//       const {userID} =  jwt.verify(token, process.env.JWT_SECRET_KEY)
//       console.log("userid= ",userID)
//       // get user from token
//       req.user = await UserModel.findById(userID).select('-password')
//       console.log("user= ",req.user)
//       next()
//     } catch (error) {
//       console.log(error)
//       res.status(401).send({"status":"failed", "message":"unauthorized user"})
//     }
//   }
//   if(!token){
//     res.status(401).send({"status":"failed", "message":"unauthorized user, no token"})
//   }
// }