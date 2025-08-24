import mongoose from "mongoose";

const electronicsItemSchema = new mongoose.Schema({
  electronicsId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Electronics",
    required: true,
  },
  quantity: { type: Number, default: 1, min: 1 },
});

// The schema for embedded Room documents
const roomSchema = new mongoose.Schema({
  roomType: { type: String, required: true },
  roomName: { type: String, required: true },
  electronics: [electronicsItemSchema],
});

// The main schema for ApartmentUnit documents
const apartmentUnitSchema = new mongoose.Schema({
  unitName: { type: String, trim: true },
  unitNumber: { type: String, required: true },
  floor: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  isCompleted: { type: Boolean, default: false },
  maintenanceCost: { type: Number, default: 0 },
  rooms: [roomSchema], //an array of subdocuments of type roomSchema
});

// The schema for embedded Common Areas of the building
const commonAreaSchema = new mongoose.Schema({
  areaType: { type: String, required: true },
  areaName: { type: String, required: true },
  electronics: [electronicsItemSchema],
  maintenanceCost: { type: Number, default: 0 },
});

// The main schema for Building documents
const buildingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    buildingNumber: { type: Number, required: true },
    postalCode: { type: String, required: true },
    address: { type: String, required: true },
    totalFloors: { type: Number, required: true },
    totalUnits: { type: Number, required: true },
    apartmentUnits: [apartmentUnitSchema], // Embedding ApartmentUnit documents
    commonAreas: [commonAreaSchema], // Embedding Common Areas documents
    totalMaintenanceCost: { type: Number, default: 0 },
  },
  { timestamps: true } // createdAt, updatedAt
);

const Building = mongoose.model("Building", buildingSchema);

export default Building;
