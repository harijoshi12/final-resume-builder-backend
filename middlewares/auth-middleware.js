import jwt from  'jsonwebtoken'
import UserModel from '../models/User.js'

const checkUserAuth = async (req, res, next)=>{
  let token
  const { authorization } = req.headers
  if(authorization && authorization.startsWith('Bearer')){
    try {
      // get token from headerr
      token = authorization.split(' ')[1]
      console.log(token)
      console.log("aut= ", authorization)
      // varify token
      const {userID} =  jwt.verify(token, process.env.JWT_SECRET_KEY)
      console.log("userid= ",userID)
      // get user from token
      req.user = await UserModel.findById(userID).select('-password')
      console.log("user= ",req.user)
      next()
    } catch (error) {
      console.log(error)
      res.status(401).send({"status":"failed", "message":"unauthorized user"})
    }
  }
  if(!token){
    res.status(401).send({"status":"failed", "message":"unauthorized user, no token"})
  }
}

export default checkUserAuth