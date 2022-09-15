import mongoose from "mongoose";
import { resumeInputCodes } from "../constants/constants.js";

// Schemas
const secTitleSchema = new mongoose.Schema({
  [resumeInputCodes.SECTITLE]: { type: String, default: "Technical Skills" },
})

const contactSchema = new mongoose.Schema({
  [resumeInputCodes.EMAIL]: { type: String },
  [resumeInputCodes.EMAILCHECKED]: { type: Boolean },
  [resumeInputCodes.PHONE]: { type: String },
  [resumeInputCodes.PHONECHECKED]: { type: Boolean },
  [resumeInputCodes.ADDRESS]: { type: String },
  [resumeInputCodes.ADDRESSCHECKED]: { type: Boolean },
  [resumeInputCodes.WEBSITE]: { type: String },
  [resumeInputCodes.WEBSITECHECKED]: { type: Boolean },
  [resumeInputCodes.LINKEDIN]: { type: String },
  [resumeInputCodes.LINKEDINCHECKED]: { type: Boolean },
  [resumeInputCodes.GITHUB]: { type: String },
  [resumeInputCodes.GITHUBCHECKED]: { type: Boolean },
  [resumeInputCodes.STACKOVERFLOW]: { type: String },
  [resumeInputCodes.STACKOVERFLOWCHECKED]: { type: Boolean },
  [resumeInputCodes.QUORA]: { type: String },
  [resumeInputCodes.QUORACHECKED]: { type: Boolean },
  [resumeInputCodes.MEDIUM]: { type: String },
  [resumeInputCodes.MEDIUMCHECKED]: { type: Boolean },
})

const personalInfoSchema = new mongoose.Schema({
  [resumeInputCodes.NAME]: { type: String },
  [resumeInputCodes.PROFESSION]: { type: String },
  [resumeInputCodes.IMAGESRC]: {
    type: String, default:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  [resumeInputCodes.TAGLINE]: { type: String },
})

const techskillSchema = new mongoose.Schema({
  [resumeInputCodes.TECHSKILL]: { type: String },
})

const progLangSchema = new mongoose.Schema({
  [resumeInputCodes.PROGLANG]: { type: String },
  [resumeInputCodes.PROGLANGLEVEL]: { type: Number },
})

const experienceSchema = new mongoose.Schema({
  [resumeInputCodes.JOBSTARTDATE]: { type: Number },
  [resumeInputCodes.JOBENDDATE]: { type: Number },
  [resumeInputCodes.JOBPRESENT]: { type: Boolean },
  [resumeInputCodes.JOBTITLE]: { type: String },
  [resumeInputCodes.JOBCOMPANY]: { type: String },
  [resumeInputCodes.JOBDESC]: { type: String },
})

const projectSchema = new mongoose.Schema({
  [resumeInputCodes.PROJECTTITLE]: { type: String },
  [resumeInputCodes.PROJECTTECHSTACK]: { type: String },
  [resumeInputCodes.PROJECTDESC]: { type: String },
  [resumeInputCodes.PROJECTGITLINK]: { type: String },
  [resumeInputCodes.PROJECTLIVEDEMO]: { type: String },
})

const languageSchema = new mongoose.Schema({
  [resumeInputCodes.LANGUAGE]: { type: String },
  [resumeInputCodes.LANGUAGELEVEL]: { type: Number },
})

const educationSchema = new mongoose.Schema({
  [resumeInputCodes.STUDYPROGRAM]: { type: String },
  [resumeInputCodes.INSTITUTION]: { type: String },
  [resumeInputCodes.CGPA]: { type: String },
  [resumeInputCodes.STUDYSTARTDATE]: { type: Number },
  [resumeInputCodes.STUDYENDDATE]: { type: Number },
  [resumeInputCodes.STUDYPRESENT]: { type: Boolean },
  [resumeInputCodes.STUDYPLACE]: { type: String },
})

const interestSchema = new mongoose.Schema({
  [resumeInputCodes.INTEREST]: { type: String }
})

const resumeSchema = new mongoose.Schema({
  secTitles: [secTitleSchema],
  personalInfo: personalInfoSchema,
  contactDetails: contactSchema,
  techskills: [techskillSchema],
  progLangs: [progLangSchema],
  experiences: [experienceSchema],
  projects: [projectSchema],
  languages: [languageSchema],
  educations: [educationSchema],
  interests: [interestSchema],
  templateId: { type: String },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  }
}, { timestamps: true, })


// Model
const ResumeModel = mongoose.model("Resume", resumeSchema)

export default ResumeModel