import Contacts from "../models/contact.model.js";

export const getContacts = async (req, res) => {
  try {
    const contacts = await Contacts.find();

    if (!contacts) return res.status(401).json({ message: "Not Found" });

    res.status(200).json(contacts);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const getContact = async (req, res) => {
  try {
    const contact = await Contacts.findOne({ _id: req.params.id });

    if (!contact) return res.status(401).json({ message: "Not Found" });

    res.status(200).json(contact);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const newContact = async (req, res) => {
  try {
    const { name, phone, subject, message } = req.body;

    if (!name || !phone || !subject || !message)
      return res.status(401).json({ message: "All field are required" });

    const createContact = new Contacts({ name, phone, subject, message });

    await createContact.save();

    res.status(201).json({ message: "Message send", contact: createContact });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
