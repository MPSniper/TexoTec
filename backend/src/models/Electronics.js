import mongoose from "mongoose";

const electronicsSchema = new mongoose.Schema(
  {
    electronicstype: { type: String, required: true },
    brand: { type: String, required: true },
    name: { type: String, required: true, trim: true },
    modelyear: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true } // createdAt, updatedAt
);

const Electronics = mongoose.model(
  "Electronics",
  electronicsSchema,
  "electronics"
);

export default Electronics;
