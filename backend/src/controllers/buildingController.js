import Building from "../models/Building.js";

export async function getAllBuildings(_, res) {
  try {
    const buildings = await Building.find().sort({ createdAt: -1 }); // -1 will sort in desc. order (newest first)
    res.status(200).json(buildings);
  } catch (error) {
    console.error("Error in getAllBuildings controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
export async function getBuildingById(req, res) {
  try {
    const building = await Building.findById(req.params.id);
    if (!building)
      return res.status(404).json({ message: "Building not found!" });
    res.json(building);
  } catch (error) {
    console.error("Error in getBuildingById controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
export async function createBuilding(req, res) {
  try {
    const {
      buildingName,
      buildingNumber,
      postalCode,
      address,
      totalFloors,
      totalUnits,
      apartmentUnits,
      commonAreas,
      totalMaintenanceCost,
    } = req.body;
    const building = new Building({
      buildingName,
      buildingNumber,
      postalCode,
      address,
      totalFloors,
      totalUnits,
      apartmentUnits,
      commonAreas,
      totalMaintenanceCost,
    });

    const savedBuilding = await building.save();
    res.status(201).json(savedBuilding);
  } catch (error) {
    console.error("Error in createBuilding controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateBuilding(req, res) {
  try {
    const {
      buildingName,
      buildingNumber,
      postalCode,
      address,
      totalFloors,
      totalUnits,
      apartmentUnits,
      commonAreas,
      totalMaintenanceCost,
    } = req.body;
    const updatedBuilding = await Building.findByIdAndUpdate(
      req.params.id,
      {
        buildingName,
        buildingNumber,
        postalCode,
        address,
        totalFloors,
        totalUnits,
        apartmentUnits,
        commonAreas,
        totalMaintenanceCost,
      },
      {
        new: true,
      }
    );
    if (!updatedBuilding)
      return res.status(404).json({ message: "Building not found" });
    res.status(200).json(updatedBuilding);
  } catch (error) {
    console.error("Error in updateBuilding controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteBuilding(req, res) {
  try {
    const deletedBuilding = await Building.findByIdAndDelete(req.params.id);
    if (!deletedBuilding)
      return res.status(404).json({ message: "Building not found" });
    res.status(200).json({ message: "Building deleted successfully" });
  } catch (error) {
    console.error("Error in deleteBuilding controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
