import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
  images: [
    {
      type: String,
    },
  ],
  city: {
    type: String,
    enum: [
      "mouda",
      "borgav",
      "marodi",
      "mathani",
      "lapka",
      "bhandara",
      "jawaharnagar",
    ],
    required: true,
  },
  landmark: {
    type: String,
    required: true,
  },
  authority: {
    type: String,
    enum: ["na", "nmrda", "natp"],
  },
  address: {
    // it has a google map Property
    type: String,
    required: true,
  },

  UID: {
    type: mongoose.Schema.ObjectId,
    ref: "users",
  },
  plots: [
    {
      plotNo: {
        type: Number, // Unique number or identifier for the plot
        unique: true,
      },
      length: {
        type: Number, // Length of the plot (in feet/meters)
      },
      width: {
        type: Number, // Width of the plot (in feet/meters)
      },
      size: {
        type: Number, // Total size calculated from length and width (optional if you want to calculate on the fly)
        set: function (value) {
          // If value is provided, use it; otherwise, calculate from length and width
          if (typeof value === "number") {
            return value;
          }
          if (this.length != null && this.width != null) {
            return this.length * this.width;
          }
          return value;
        },
      },
      status: {
        type: String, // e.g., "available", "sold", "reserved"
        enum: ["available", "sold", "booked"],
      },
      rate: {
        type: Number, // Rate per unit size (e.g., per square feet or square meter)
      },
      price: {
        type: Number, // Total price based on size and rate
        // If price is not provided, calculate it as length * width * rate
        set: function (value) {
          if (typeof value === "number") {
            return value;
          }
          // If value is undefined or null, calculate from length, width, and rate
          if (this.length != null && this.width != null && this.rate != null) {
            return this.length * this.width * this.rate;
          }
          return value;
        },
      },
      description: {
        type: String,
      },
    },
  ],
});

const Properties = mongoose.model("properties", PropertySchema);

export default Properties;
