import ContactFormModel from "../models/ContactFormModel.js";

const createContactForm = async (req, res) => {
  const contactFormDetails = req.body
  try {
    const data = await new ContactFormModel(contactFormDetails).save()
    res.status(201).json(data)
  } catch (error) {
    console.log(error)
    res.status(401).json({ error: "contact form data not saved" })
  }
}

export default createContactForm