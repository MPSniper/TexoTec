import Electronics from "../models/Electronics.js";

export async function getAllElectronics(_, res) {
  try {
    const electronics = await Electronics.find().sort({ createdAt: -1 }); // -1 will sort in desc. order (newest first)
    res.status(200).json(electronics);
  } catch (error) {
    console.error("Error in getAllElectronics controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getElectronicsById(req, res) {
  try {
    const electronics = await Electronics.findById(req.params.id);
    if (!electronics)
      return res.status(404).json({ message: "Electronics not found!" });
    res.json(electronics);
  } catch (error) {
    console.error("Error in getElectronicsById controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createElectronics(req, res) {
  try {
    const { name, yearmodel, price } = req.body;
    const electronics = new Electronics({ name, yearmodel, price });

    const savedElectronics = await electronics.save();
    res.status(201).json(savedElectronics);
  } catch (error) {
    console.error("Error in createElectronics controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateElectronics(req, res) {
  try {
    const { name, yearmodel, price } = req.body;
    const updatedElectronics = await Electronics.findByIdAndUpdate(
      req.params.id,
      { name, yearmodel, price },
      {
        new: true,
      }
    );

    if (!updatedElectronics)
      return res.status(404).json({ message: "Electronics not found" });

    res.status(200).json(updatedElectronics);
  } catch (error) {
    console.error("Error in updateElectronics controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteElectronics(req, res) {
  try {
    const deletedElectronics = await Electronics.findByIdAndDelete(
      req.params.id
    );
    if (!deletedElectronics)
      return res.status(404).json({ message: "Electronics not found" });
    res.status(200).json({ message: "Electronics deleted successfully!" });
  } catch (error) {
    console.error("Error in deleteElectronics controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
