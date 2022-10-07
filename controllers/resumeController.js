import { resumeInputCodes } from "../constants/constants.js";
import ResumeModel from "../models/ResumeModel.js";
import UserModel from "../models/UserModel.js";

const getResume = async (req, res) => {
  try {
    const resume = await ResumeModel.findOne({ _id: req.currentUser.documents });
    res.status(201).json(resume);
  } catch (error) {
    console.log(error)
  }
};

const createResume = async (req, res) => {
  const resumeDetails = req.body;
  const resume = await new ResumeModel({
    ...resumeDetails,
    secContactDetails: {
      contactDetails: [{
        [resumeInputCodes.EMAIL]: req.currentUser.email,
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
      }]
    },
    user: req.currentUser._id,
  }).save();
  const updatedUser = await UserModel.findOneAndUpdate(
    { _id: req.currentUser._id },
    { documents: resume._id }
  );
  res.status(201).json(resume);
};

const updateResume = async (req, res) => {
  const resumeDetails = req.body;
  let updatedResume = await ResumeModel.findByIdAndUpdate(
    req.currentUser.documents,
    { ...resumeDetails },
    { new: true }
  );
  res.json(updatedResume);
};

const getOrCreateResume = async (req, res) => {
  const resumeDetails = req.body;
  try {
    if (req.currentUser.documents === null) {
      const resume = await new ResumeModel({
        ...resumeDetails,
        secContactDetails: {
          contactDetails: [{
            [resumeInputCodes.EMAIL]: req.currentUser.email,
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
          }]
        },
        user: req.currentUser._id,
      }).save();
      const updatedUser = await UserModel.findOneAndUpdate(
        { _id: req.currentUser._id },
        { documents: resume._id }
      );
      res.status(201).json(resume);
    } else {
      const resume = await ResumeModel.findOne({ _id: req.currentUser.documents });
      res.status(201).json(resume);
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteResume = async (req, res) => {
  const resume = await ResumeModel.findById;
};

export { getOrCreateResume, createResume, getResume, updateResume };
