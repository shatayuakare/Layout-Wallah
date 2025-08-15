import express from "express";
import authUser from "../middleware/auth.middleware.js";
import {
  getProperties,
  getProperty,
  newPlot,
  newProperty,
} from "../controller/property.controller.js";

const propertyRoute = express.Router();

propertyRoute.get("/", getProperties);
propertyRoute.get("/:id", authUser, getProperty);
propertyRoute.post("/new", authUser, newProperty);
propertyRoute.post("/new/:id", authUser, newPlot);

export default propertyRoute;
