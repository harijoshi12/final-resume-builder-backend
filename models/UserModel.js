import mongoose from "mongoose";
import { userInputCodes } from "../constants/constants.js";

const userSchema = new mongoose.Schema(
  {
    [userInputCodes.USERID]: { type: String },
    [userInputCodes.SIGNINPROVIDER]: { type: String },
    [userInputCodes.NAME]: { type: String, trim: true },
    [userInputCodes.USERNAME]: { type: String, trim: true },
    [userInputCodes.EMAIL]: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      index: true,
    },
    [userInputCodes.EMAILVARIFIED]: { type: Boolean, default: false },
    [userInputCodes.PASSWORD]: { type: String, trim: true },
    [userInputCodes.ISSUPERADMIN]: {
      type: Boolean,
      required: true,
      default: false,
    },
    [userInputCodes.ROLE]: { type: String, default: "subscriber" },
    [userInputCodes.CART]: { type: Array, default: [] },
    [userInputCodes.IMAGESRC]: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
    [userInputCodes.DOCUMENTS]: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resume",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Model
const UserModel = mongoose.model("User", userSchema);

export default UserModel;

// old schema

// import bcrypt from "bcrypt"
// const userSchema = new mongoose.Schema(
//   {
//     name: { type: String, trim: true },
//     userName: {type: String,required: true, unique: true, trim: true},
//     email: { type: String, required: true, trim: true, unique: true, index:true },
//     password: { type: String, required: true, trim: true },
//     isAdmin: { type: Boolean, required: true, default: false },
//     pic: {
//       type: String,
//       required: true,
//       default:
//         "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
//     },
//   },
//   {
//     timestamps: true,
//   }
// )

// userSchema.pre('save', async function (next) {
//   // only hash the password if it has been modified (or is new)
//   if (!this.isModified('password')) {
//     next()
//   }
//   // generate a salt
//   const salt = await bcrypt.genSalt(12)
//   this.password = await bcrypt.hash(this.password, salt)
// })

// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password)
// }
