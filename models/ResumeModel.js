import mongoose from "mongoose";
import { resumeInputCodes } from "../constants/constants.js";

// Schemas
const personalInfoSchema = new mongoose.Schema({
  [resumeInputCodes.NAME]: { type: String },
  [resumeInputCodes.PROFESSION]: { type: String },
  [resumeInputCodes.IMAGESRC]: { type: String },
  [resumeInputCodes.TAGLINE]: { type: String },
  id: { type: String }
});

const techskillSchema = new mongoose.Schema({
  [resumeInputCodes.TECHSKILL]: { type: String },
  id: { type: String }
});

const progLangSchema = new mongoose.Schema({
  [resumeInputCodes.PROGLANG]: { type: String },
  [resumeInputCodes.PROGLANGLEVEL]: { type: Number },
  id: { type: String }
});

const experienceSchema = new mongoose.Schema({
  [resumeInputCodes.JOBSTARTDATE]: { type: String },
  [resumeInputCodes.JOBENDDATE]: { type: String },
  [resumeInputCodes.JOBPRESENT]: { type: Boolean },
  [resumeInputCodes.JOBTITLE]: { type: String },
  [resumeInputCodes.JOBCOMPANY]: { type: String },
  [resumeInputCodes.JOBDESC]: { type: String },
  id: { type: String }
});

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
  id: { type: String }
});

const projectSchema = new mongoose.Schema({
  [resumeInputCodes.PROJECTTITLE]: { type: String },
  [resumeInputCodes.PROJECTTECHSTACK]: { type: String },
  [resumeInputCodes.PROJECTDESC]: { type: String },
  [resumeInputCodes.PROJECTGITLINK]: { type: String },
  [resumeInputCodes.PROJECTVIDEOLINK]: { type: String },
  [resumeInputCodes.PROJECTLIVEDEMO]: { type: String },
  id: { type: String }
});

const languageSchema = new mongoose.Schema({
  [resumeInputCodes.LANGUAGE]: { type: String },
  [resumeInputCodes.LANGUAGELEVEL]: { type: String },
  id: { type: String }
});

const educationSchema = new mongoose.Schema({
  [resumeInputCodes.STUDYPROGRAM]: { type: String },
  [resumeInputCodes.INSTITUTION]: { type: String },
  [resumeInputCodes.CGPA]: { type: String },
  [resumeInputCodes.STUDYSTARTDATE]: { type: String },
  [resumeInputCodes.STUDYENDDATE]: { type: String },
  [resumeInputCodes.STUDYPRESENT]: { type: Boolean },
  [resumeInputCodes.STUDYPLACE]: { type: String },
  id: { type: String }
});

const interestSchema = new mongoose.Schema({
  [resumeInputCodes.INTEREST]: { type: String },
  id: { type: String }
});

const resumeSchema = new mongoose.Schema(
  {
    templateId: { type: String, default: "1" },
    secPersonalInfo: {
      [resumeInputCodes.SECTITLE]: { type: String, default: "Personal Info" },
      [resumeInputCodes.SECID]: { type: String, default: "1" },
      personalInfo: {
        type: [personalInfoSchema],
        default: () => [
          {
            [resumeInputCodes.NAME]: "Your Name",
            [resumeInputCodes.PROFESSION]: "Profession",
            [resumeInputCodes.IMAGESRC]:
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",

            [resumeInputCodes.TAGLINE]:
              "Seeking a challenging position in an organization where I can use my talents and skills to grow and expand an organization as well as myself.",
            id: "3e534881-edf1-419d-bed8-b525edcc7a54",
          },
        ],
      },
    },
    secTechSkills: {
      [resumeInputCodes.SECTITLE]: { type: String, default: "Technical Skills" },
      [resumeInputCodes.SECID]: { type: String, default: "2" },
      techSkills: {
        type: [techskillSchema],
        default: () => [
          {
            [resumeInputCodes.TECHSKILL]: "React",
            id: "3e534881-edf1-419d-bed8-b525edcc7a54",
          },
          {
            [resumeInputCodes.TECHSKILL]: "NodeJs",
            id: "c24ee310-6833-4d5d-9b5b-7aca1e008931",
          },
        ],
      }
    },
    secProgLangs: {
      [resumeInputCodes.SECTITLE]: { type: String, default: "Programming Languages" },
      [resumeInputCodes.SECID]: { type: String, default: "3" },
      progLangs: {
        type: [progLangSchema],
        default: () => [
          {
            [resumeInputCodes.PROGLANG]: "JavaScript",
            [resumeInputCodes.PROGLANGLEVEL]: 8,
            id: "3e534881-edf1-419d-bed8-b525edcc7a54",
          },
          {
            [resumeInputCodes.PROGLANG]: "Java",
            [resumeInputCodes.PROGLANGLEVEL]: 7,
            id: "c24ee310-6833-4d5d-9b5b-7aca1e008931",
          },
        ],
      }
    },
    secExperiences: {
      [resumeInputCodes.SECTITLE]: { type: String, default: "My Journey" },
      [resumeInputCodes.SECID]: { type: String, default: "4" },
      experiences: {
        type: [experienceSchema],
        default: () => [
          {
            [resumeInputCodes.JOBSTARTDATE]: 2021,
            [resumeInputCodes.JOBENDDATE]: "",
            [resumeInputCodes.JOBPRESENT]: true,
            [resumeInputCodes.JOBTITLE]: "FreeLancer",
            [resumeInputCodes.JOBCOMPANY]: "Freelancing",
            [resumeInputCodes.JOBDESC]:
              "I am doing freelancing since past 1 year",
            id: "3e534881-edf1-419d-bed8-b525edcc7a54",
          },
        ],
      }
    },
    secContactDetails: {
      [resumeInputCodes.SECTITLE]: { type: String, default: "Contact Details" },
      [resumeInputCodes.SECID]: { type: String, default: "5" },
      contactDetails: {
        type: [contactSchema],
        default: () => [
          {
            [resumeInputCodes.EMAIL]: "youremail@email.com",
            [resumeInputCodes.EMAILCHECKED]: true,
            [resumeInputCodes.PHONE]: "",
            [resumeInputCodes.PHONECHECKED]: false,
            [resumeInputCodes.ADDRESS]: "",
            [resumeInputCodes.ADDRESSCHECKED]: false,
            [resumeInputCodes.WEBSITE]: "",
            [resumeInputCodes.WEBSITECHECKED]: false,
            [resumeInputCodes.LINKEDIN]: "",
            [resumeInputCodes.LINKEDINCHECKED]: false,
            [resumeInputCodes.GITHUB]: "",
            [resumeInputCodes.GITHUBCHECKED]: false,
            [resumeInputCodes.STACKOVERFLOW]: "",
            [resumeInputCodes.STACKOVERFLOWCHECKED]: false,
            [resumeInputCodes.QUORA]: "",
            [resumeInputCodes.QUORACHECKED]: false,
            [resumeInputCodes.MEDIUM]: "",
            [resumeInputCodes.MEDIUMCHECKED]: false,
            id: "3e534881-edf1-419d-bed8-b525edcc7a54",
          },
        ],
      }
    },
    secProjects: {
      [resumeInputCodes.SECTITLE]: { type: String, default: "Projects" },
      [resumeInputCodes.SECID]: { type: String, default: "6" },
      projects: {
        type: [projectSchema],
        default: () => [
          {
            [resumeInputCodes.PROJECTTITLE]: "Chat App",
            [resumeInputCodes.PROJECTTECHSTACK]:
              "React Native, Socket.IO, Firebase",
            [resumeInputCodes.PROJECTDESC]:
              "A basic chat app with group chat & one to one chat functionality.",
            [resumeInputCodes.PROJECTGITLINK]: "github.com",
            [resumeInputCodes.PROJECTVIDEOLINK]: "youtube.com",
            [resumeInputCodes.PROJECTLIVEDEMO]: "playstore.com",
            id: "3e534881-edf1-419d-bed8-b525edcc7a54",
          },
        ],
      }
    },
    secLanguages: {
      [resumeInputCodes.SECTITLE]: { type: String, default: "Languages" },
      [resumeInputCodes.SECID]: { type: String, default: "7" },
      languages: {
        type: [languageSchema],
        default: () => [
          {
            [resumeInputCodes.LANGUAGE]: "English",
            [resumeInputCodes.LANGUAGELEVEL]: "4",
            id: "3e534881-edf1-419d-bed8-b525edcc7a54",
          },
          {
            [resumeInputCodes.LANGUAGE]: "Hindi",
            [resumeInputCodes.LANGUAGELEVEL]: "5",
            id: "c24ee310-6833-4d5d-9b5b-7aca1e008931",
          },
        ],
      }
    },
    secEducations: {
      [resumeInputCodes.SECTITLE]: { type: String, default: "Education" },
      [resumeInputCodes.SECID]: { type: String, default: "8" },
      educations: {
        type: [educationSchema],
        default: () => [
          {
            [resumeInputCodes.STUDYPROGRAM]: "Computer Sciene",
            [resumeInputCodes.INSTITUTION]: "Engineering College",
            [resumeInputCodes.CGPA]: "8.9",
            [resumeInputCodes.STUDYSTARTDATE]: "2017",
            [resumeInputCodes.STUDYENDDATE]: "2021",
            [resumeInputCodes.STUDYPRESENT]: false,
            [resumeInputCodes.STUDYPLACE]: "Dehradun",
            id: "3e534881-edf1-419d-bed8-b525edcc7a54",
          },
        ],
      }
    },
    secInterests: {
      [resumeInputCodes.SECTITLE]: { type: String, default: "Interests" },
      [resumeInputCodes.SECID]: { type: String, default: "9" },
      interests: {
        type: [interestSchema],
        default: () => [
          {
            [resumeInputCodes.INTEREST]: "Solving Puzzles",
            id: "3e534881-edf1-419d-bed8-b525edcc7a54",
          },
          {
            [resumeInputCodes.INTEREST]: "Coding",
            id: "c24ee310-6833-4d5d-9b5b-7aca1e008931",
          },
        ],
      }
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

// Model
const ResumeModel = mongoose.model("Resume", resumeSchema);

export default ResumeModel;
