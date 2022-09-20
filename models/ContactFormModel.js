import mongoose from "mongoose";
import { contactFormCodes } from "../constants/constants.js";

const contactFormSchema = new mongoose.Schema({
  [contactFormCodes.FIRSTNAME]: { type: String },
  [contactFormCodes.LASTNAME]: { type: String },
  [contactFormCodes.CONTACTEMAIL]: { type: String },
  [contactFormCodes.MESSAGE]: { type: String }
}, { timestamps: true })

// model
const ContactFormModel = mongoose.model("ContactForm", contactFormSchema)

export default ContactFormModel