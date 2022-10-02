import { resumeInputCodes } from "../constants/constants.js";
import ResumeModel from "../models/ResumeModel.js";
import UserModel from "../models/UserModel.js";

const getResume = async (req, res) => {
  try {
    const user = await UserModel.findOne({ _id: req.currentUser._id });
    // console.log("already user===>", user);
    const resumeId = user.documents;
    const resume = await ResumeModel.findOne({ _id: resumeId });
    // console.log("alredy name==>", resumeId)
    // console.log("already resumeData===>", resume)
    res.status(201).json(resume);
  } catch (error) {
    console.log(error)
  }
};

const createResume = async (req, res) => {
  const resumeDetails = req.body;
  const resume = new ResumeModel({
    ...resumeDetails,
    secContactDetails: {
      contactDetails: [{ [resumeInputCodes.EMAIL]: req.currentUser.email }]
    },
    user: req.currentUser._id,
  });
  const createdResume = await resume.save();
  res.status(201).json(createdResume);
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
          contactDetails: [{ [resumeInputCodes.EMAIL]: req.currentUser.email }]
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
