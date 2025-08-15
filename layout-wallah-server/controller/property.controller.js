import Properties from "../models/property.model.js";

export const newProperty = async (req, res, next) => {
  try {
    const { images, city, landmark, authority, address } = req.body;

    const createProperty = new Properties({
      images,
      city,
      landmark,
      authority,
      address,
      UID: req.user ? req.user._id : undefined,
    });

    await createProperty.save();

    res
      .status(201)
      .json({ message: "New Property Added", property: createProperty });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const newPlot = async (req, res) => {
  try {
    const { plotNo, length, width, status, rate, description } = req.body;

    const newPlot = { plotNo, length, width, status, rate, description };

    const property = await Properties.findByIdAndUpdate(
      req.params.id,
      { $push: { plots: newPlot } },
      { new: true }
    );
    console.log(property);

    if (!property)
      return res.status(401).json({ message: "Property not available" });

    res.status(200).json({
      message: "New Plot added",
      plot: newPlot,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProperties = async (req, res, next) => {
  try {
    const properties = await Properties.find();
    if (!properties)
      return res.status(401).json({ message: "Unauthrized access" });

    res.status(200).json(properties);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

export const getProperty = async (req, res, next) => {
  try {
    const property = await Properties.findOne({ _id: req.params.id });
    if (!property)
      return res.status(401).json({ message: "Unauthrized access" });

    res.status(200).json(property);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};
