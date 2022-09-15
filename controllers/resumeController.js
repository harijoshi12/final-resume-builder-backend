
import ResumeModel from "../models/ResumeModel.js";

const getResume = async (req, res) => {
  const resume = await ResumeModel.find()
  res.json(resume)
}

const getResumeById = async (req, res) => {

}

const createResume = async (req, res) => {
  const resumeDetails = req.body

  const resume = new ResumeModel(resumeDetails)

  const createdResume = await resume.save()

  res.status(201).json(createdResume)
}

const updateResume = async (req, res) => {
  const resumeDetails = req.body

  let updatedResume = await ResumeModel.findByIdAndUpdate('6315927e6d93365842363ed3', { ...resumeDetails }, { new: true });

  res.json(updatedResume)

}

const deleteResume = async (req, res) => {
  const resume = await ResumeModel.findById
}

export { getResume, createResume, updateResume }