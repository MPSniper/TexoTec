import mongoose from "mongoose";

const electronicsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // Remove whitespace
    },
    yearmodel: {
      type: Number,
      default: 1900, // Not required, but if not inserted the default yearmodel will be 1900
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true } // createdAt, updatedAt
);

const Electronics = mongoose.model("Electronic", electronicsSchema);

export default Electronics;
