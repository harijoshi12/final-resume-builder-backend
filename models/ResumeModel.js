import mongoose from "mongoose";

const sectionTitleSchema = new mongoose.Schema({
  title: {type: String}
})

const personalInfoSchema = new mongoose.Schema({
  name: {type: String},
  profession: {type: String},
  ProfSummary: {type: String}
})

const contactDetailsSchema = new mongoose.Schema({
  email: {type: String},
  phone: {type: Number},
  addressCountry: {type: String},
  addressState: {type: String},
  addressCity: {type: String},
  website: {type: String},
  linkedin: {type: String},
  github: {type: String},
  stackOverflow: {type: String},
  quora: {type: String},
  medium: {type: String},
})

const techSkillSchema = ({
  techskill: {type: String},
})

const ProgLangSchema = ({
  progLang: {type: String},
  progLangLevel: {type: Number},
})

const experienceSchema = ({
  jobStartDate: {type: Number},
  jobEndDate: {type: Number},
  jobPresent: {type: Boolean},
  jobTitle: {type: String},
  jobCompany: {type: String},
  jobDescription: {type: String},
})

const projectSchema = ({
  projectTitle: {type: String},
  projectTechStack: {type: String},
  projectDescription: {type: String},
  projectGitLik: {type: String},
  projectLiveDemo: {type: String},
})

const languageSchema = ({
  language: {type: String},
  languageLevel: {type: Number}
})

const educationSchema = ({
  studyProgram: {type: String},
  institution: {type: String},
  cgpa: {type: Number},
  studyStartDate: {type: Number},
  studyEndDate: {type: Number},
  studyPresent: {type: Boolean},
  studyPlace: {type: String},
})

const interestSchema = ({
  interest: {type: String},
})