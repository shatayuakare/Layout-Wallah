import express from "express";
import {
  getContact,
  getContacts,
  newContact,
} from "../controller/contact.controllar.js";
import { body } from "express-validator";
import authUser from "../middleware/auth.middleware.js";

const contactRoute = express.Router();

contactRoute.get("/", authUser, getContacts);
contactRoute.get("/:id", authUser, getContact);
contactRoute.post("/new", newContact);

export default contactRoute;
