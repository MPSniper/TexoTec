import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPlus,
  faHouse,
  faBuilding,
  faMapPin,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

const BuildingForm = () => {
  // Initial form state matching the MongoDB schema
  const [formData, setFormData] = useState({
    name: "",
    buildingNumber: "",
    postalCode: "",
    address: "",
    totalFloors: "",
    totalUnits: "",
    apartmentUnits: [],
    commonAreas: [],
    totalMaintenanceCost: 0,
  });

  // Handle basic field changes
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? (value === "" ? "" : Number(value)) : value,
    }));
  };

  // Add new apartment unit
  const addApartmentUnit = () => {
    const newUnit = {
      unitName: "",
      unitNumber: "",
      floor: "",
      bathrooms: "",
      isCompleted: false,
      maintenanceCost: 0,
      rooms: [],
    };
    setFormData((prev) => ({
      ...prev,
      apartmentUnits: [...prev.apartmentUnits, newUnit],
    }));
  };

  // Remove apartment unit
  const removeApartmentUnit = (index) => {
    setFormData((prev) => ({
      ...prev,
      apartmentUnits: prev.apartmentUnits.filter((_, i) => i !== index),
    }));
  };

  // Update apartment unit
  const updateApartmentUnit = (index, field, value) => {
    const updatedUnits = [...formData.apartmentUnits];
    if (field === "isCompleted") {
      updatedUnits[index][field] = value;
    } else if (["floor", "bathrooms", "maintenanceCost"].includes(field)) {
      updatedUnits[index][field] = value === "" ? "" : Number(value);
    } else {
      updatedUnits[index][field] = value;
    }
    setFormData((prev) => ({
      ...prev,
      apartmentUnits: updatedUnits,
    }));
  };

  // Add room to apartment unit
  const addRoom = (unitIndex) => {
    const newRoom = {
      roomType: "",
      roomName: "",
      electronics: [],
    };
    const updatedUnits = [...formData.apartmentUnits];
    updatedUnits[unitIndex].rooms.push(newRoom);
    setFormData((prev) => ({
      ...prev,
      apartmentUnits: updatedUnits,
    }));
  };

  // Remove room from apartment unit
  const removeRoom = (unitIndex, roomIndex) => {
    const updatedUnits = [...formData.apartmentUnits];
    updatedUnits[unitIndex].rooms.splice(roomIndex, 1);
    setFormData((prev) => ({
      ...prev,
      apartmentUnits: updatedUnits,
    }));
  };

  // Update room in apartment unit
  const updateRoom = (unitIndex, roomIndex, field, value) => {
    const updatedUnits = [...formData.apartmentUnits];
    updatedUnits[unitIndex].rooms[roomIndex][field] = value;
    setFormData((prev) => ({
      ...prev,
      apartmentUnits: updatedUnits,
    }));
  };

  // Add electronics to room
  const addElectronicsToRoom = (unitIndex, roomIndex) => {
    const newElectronic = {
      electronicsId: "",
      quantity: 1,
    };
    const updatedUnits = [...formData.apartmentUnits];
    updatedUnits[unitIndex].rooms[roomIndex].electronics.push(newElectronic);
    setFormData((prev) => ({
      ...prev,
      apartmentUnits: updatedUnits,
    }));
  };

  // Remove electronics from room
  const removeElectronicsFromRoom = (
    unitIndex,
    roomIndex,
    electronicsIndex
  ) => {
    const updatedUnits = [...formData.apartmentUnits];
    updatedUnits[unitIndex].rooms[roomIndex].electronics.splice(
      electronicsIndex,
      1
    );
    setFormData((prev) => ({
      ...prev,
      apartmentUnits: updatedUnits,
    }));
  };

  // Update electronics in room
  const updateElectronicsInRoom = (
    unitIndex,
    roomIndex,
    electronicsIndex,
    field,
    value
  ) => {
    const updatedUnits = [...formData.apartmentUnits];
    if (field === "quantity") {
      updatedUnits[unitIndex].rooms[roomIndex].electronics[electronicsIndex][
        field
      ] = value === "" ? 1 : Number(value);
    } else {
      updatedUnits[unitIndex].rooms[roomIndex].electronics[electronicsIndex][
        field
      ] = value;
    }
    setFormData((prev) => ({
      ...prev,
      apartmentUnits: updatedUnits,
    }));
  };

  // Add common area
  const addCommonArea = () => {
    const newArea = {
      areaType: "",
      areaName: "",
      electronics: [],
      maintenanceCost: 0,
    };
    setFormData((prev) => ({
      ...prev,
      commonAreas: [...prev.commonAreas, newArea],
    }));
  };

  // Remove common area
  const removeCommonArea = (index) => {
    setFormData((prev) => ({
      ...prev,
      commonAreas: prev.commonAreas.filter((_, i) => i !== index),
    }));
  };

  // Update common area
  const updateCommonArea = (index, field, value) => {
    const updatedAreas = [...formData.commonAreas];
    if (field === "maintenanceCost") {
      updatedAreas[index][field] = value === "" ? 0 : Number(value);
    } else {
      updatedAreas[index][field] = value;
    }
    setFormData((prev) => ({
      ...prev,
      commonAreas: updatedAreas,
    }));
  };

  // Add electronics to common area
  const addElectronicsToCommonArea = (areaIndex) => {
    const newElectronic = {
      electronicsId: "",
      quantity: 1,
    };
    const updatedAreas = [...formData.commonAreas];
    updatedAreas[areaIndex].electronics.push(newElectronic);
    setFormData((prev) => ({
      ...prev,
      commonAreas: updatedAreas,
    }));
  };

  // Remove electronics from common area
  const removeElectronicsFromCommonArea = (areaIndex, electronicsIndex) => {
    const updatedAreas = [...formData.commonAreas];
    updatedAreas[areaIndex].electronics.splice(electronicsIndex, 1);
    setFormData((prev) => ({
      ...prev,
      commonAreas: updatedAreas,
    }));
  };

  // Update electronics in common area
  const updateElectronicsInCommonArea = (
    areaIndex,
    electronicsIndex,
    field,
    value
  ) => {
    const updatedAreas = [...formData.commonAreas];
    if (field === "quantity") {
      updatedAreas[areaIndex].electronics[electronicsIndex][field] =
        value === "" ? 1 : Number(value);
    } else {
      updatedAreas[areaIndex].electronics[electronicsIndex][field] = value;
    }
    setFormData((prev) => ({
      ...prev,
      commonAreas: updatedAreas,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Here you would typically send the data to your backend API
    // Example: await fetch('/api/buildings', { method: 'POST', body: JSON.stringify(formData) })
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Header */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-blue-500">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <FontAwesomeIcon
                icon={faBuilding}
                className="h-8 w-8 text-blue-500"
              />
              Building Registration Form
            </h1>
            <p className="mt-2 text-gray-600">
              Enter the building details and manage apartment units
            </p>
          </div>

          {/* Basic Building Information */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center gap-2">
              <FontAwesomeIcon icon={faHouse} className="h-5 w-5" />
              Basic Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Building Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter building name"
                />
              </div>

              <div>
                <label
                  htmlFor="buildingNumber"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Building Number *
                </label>
                <input
                  type="number"
                  id="buildingNumber"
                  name="buildingNumber"
                  required
                  value={formData.buildingNumber}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter building number"
                />
              </div>

              <div>
                <label
                  htmlFor="postalCode"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Postal Code *
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  required
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter postal code"
                />
              </div>

              <div>
                <label
                  htmlFor="totalFloors"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Total Floors *
                </label>
                <input
                  type="number"
                  id="totalFloors"
                  name="totalFloors"
                  required
                  min="1"
                  value={formData.totalFloors}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Number of floors"
                />
              </div>

              <div>
                <label
                  htmlFor="totalUnits"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Total Units *
                </label>
                <input
                  type="number"
                  id="totalUnits"
                  name="totalUnits"
                  required
                  min="1"
                  value={formData.totalUnits}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Number of units"
                />
              </div>

              <div>
                <label
                  htmlFor="totalMaintenanceCost"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Total Maintenance Cost
                </label>
                <input
                  type="number"
                  id="totalMaintenanceCost"
                  name="totalMaintenanceCost"
                  min="0"
                  step="0.01"
                  value={formData.totalMaintenanceCost}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter maintenance cost"
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Address *
                </label>
                <textarea
                  id="address"
                  name="address"
                  required
                  rows="2"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter complete address"
                />
              </div>
            </div>
          </div>

          {/* Apartment Units Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <FontAwesomeIcon icon={faLayerGroup} className="h-5 w-5" />
                Apartment Units
              </h2>
              <button
                type="button"
                onClick={addApartmentUnit}
                className="flex items-center gap-1 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                <FontAwesomeIcon icon={faPlus} className="h-4 w-4" />
                Add Unit
              </button>
            </div>

            {formData.apartmentUnits.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                No apartment units added yet. Click "Add Unit" to start.
              </p>
            ) : (
              <div className="space-y-4">
                {formData.apartmentUnits.map((unit, unitIndex) => (
                  <div
                    key={unitIndex}
                    className="border border-gray-200 rounded-lg p-4 bg-gray-50"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-medium text-gray-700">
                        Unit #{unitIndex + 1}
                      </h3>
                      <button
                        type="button"
                        onClick={() => removeApartmentUnit(unitIndex)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                        aria-label="Remove unit"
                      >
                        <FontAwesomeIcon icon={faTrash} className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                          Unit Name
                        </label>
                        <input
                          type="text"
                          value={unit.unitName}
                          onChange={(e) =>
                            updateApartmentUnit(
                              unitIndex,
                              "unitName",
                              e.target.value
                            )
                          }
                          className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="Optional name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                          Unit Number *
                        </label>
                        <input
                          type="text"
                          value={unit.unitNumber}
                          onChange={(e) =>
                            updateApartmentUnit(
                              unitIndex,
                              "unitNumber",
                              e.target.value
                            )
                          }
                          required
                          className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="e.g., 101"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                          Floor *
                        </label>
                        <input
                          type="number"
                          value={unit.floor}
                          onChange={(e) =>
                            updateApartmentUnit(
                              unitIndex,
                              "floor",
                              e.target.value
                            )
                          }
                          required
                          min="0"
                          className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="Floor number"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                          Bathrooms *
                        </label>
                        <input
                          type="number"
                          value={unit.bathrooms}
                          onChange={(e) =>
                            updateApartmentUnit(
                              unitIndex,
                              "bathrooms",
                              e.target.value
                            )
                          }
                          required
                          min="0"
                          className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="Number of bathrooms"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                          Maintenance Cost
                        </label>
                        <input
                          type="number"
                          value={unit.maintenanceCost}
                          onChange={(e) =>
                            updateApartmentUnit(
                              unitIndex,
                              "maintenanceCost",
                              e.target.value
                            )
                          }
                          min="0"
                          step="0.01"
                          className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="Cost"
                        />
                      </div>

                      <div className="flex items-center">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={unit.isCompleted}
                            onChange={(e) =>
                              updateApartmentUnit(
                                unitIndex,
                                "isCompleted",
                                e.target.checked
                              )
                            }
                            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                          />
                          <span className="text-sm font-medium text-gray-600">
                            Completed
                          </span>
                        </label>
                      </div>
                    </div>

                    {/* Rooms Section */}
                    <div className="mt-4 border-t pt-3">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm font-semibold text-gray-600">
                          Rooms
                        </h4>
                        <button
                          type="button"
                          onClick={() => addRoom(unitIndex)}
                          className="text-sm px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                        >
                          Add Room
                        </button>
                      </div>

                      {unit.rooms.length === 0 ? (
                        <p className="text-xs text-gray-400">No rooms added</p>
                      ) : (
                        <div className="space-y-2">
                          {unit.rooms.map((room, roomIndex) => (
                            <div
                              key={roomIndex}
                              className="bg-white p-3 rounded border border-gray-200"
                            >
                              <div className="flex justify-between items-start mb-2">
                                <span className="text-sm font-medium text-gray-600">
                                  Room #{roomIndex + 1}
                                </span>
                                <button
                                  type="button"
                                  onClick={() =>
                                    removeRoom(unitIndex, roomIndex)
                                  }
                                  className="text-red-400 hover:text-red-600"
                                  aria-label="Remove room"
                                >
                                  <FontAwesomeIcon
                                    icon={faTrash}
                                    className="h-4 w-4"
                                  />
                                </button>
                              </div>

                              <div className="grid grid-cols-2 gap-2 mb-2">
                                <div>
                                  <label className="block text-xs font-medium text-gray-500 mb-1">
                                    Room Type *
                                  </label>
                                  <input
                                    type="text"
                                    value={room.roomType}
                                    onChange={(e) =>
                                      updateRoom(
                                        unitIndex,
                                        roomIndex,
                                        "roomType",
                                        e.target.value
                                      )
                                    }
                                    required
                                    className="w-full px-2 py-1 text-sm border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
                                    placeholder="e.g., Bedroom"
                                  />
                                </div>
                                <div>
                                  <label className="block text-xs font-medium text-gray-500 mb-1">
                                    Room Name *
                                  </label>
                                  <input
                                    type="text"
                                    value={room.roomName}
                                    onChange={(e) =>
                                      updateRoom(
                                        unitIndex,
                                        roomIndex,
                                        "roomName",
                                        e.target.value
                                      )
                                    }
                                    required
                                    className="w-full px-2 py-1 text-sm border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
                                    placeholder="e.g., Master"
                                  />
                                </div>
                              </div>

                              {/* Electronics in Room */}
                              <div className="mt-2">
                                <div className="flex justify-between items-center mb-1">
                                  <span className="text-xs font-medium text-gray-500">
                                    Electronics
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      addElectronicsToRoom(unitIndex, roomIndex)
                                    }
                                    className="text-xs px-1 py-0.5 bg-blue-500 text-white rounded hover:bg-blue-600"
                                  >
                                    Add
                                  </button>
                                </div>
                                {room.electronics.length === 0 ? (
                                  <p className="text-xs text-gray-400">
                                    No electronics
                                  </p>
                                ) : (
                                  <div className="space-y-1">
                                    {room.electronics.map(
                                      (electronic, elecIndex) => (
                                        <div
                                          key={elecIndex}
                                          className="flex gap-2 items-center"
                                        >
                                          <input
                                            type="text"
                                            value={electronic.electronicsId}
                                            onChange={(e) =>
                                              updateElectronicsInRoom(
                                                unitIndex,
                                                roomIndex,
                                                elecIndex,
                                                "electronicsId",
                                                e.target.value
                                              )
                                            }
                                            className="flex-1 px-1 py-0.5 text-xs border border-gray-200 rounded"
                                            placeholder="Electronics ID"
                                          />
                                          <input
                                            type="number"
                                            value={electronic.quantity}
                                            onChange={(e) =>
                                              updateElectronicsInRoom(
                                                unitIndex,
                                                roomIndex,
                                                elecIndex,
                                                "quantity",
                                                e.target.value
                                              )
                                            }
                                            min="1"
                                            className="w-16 px-1 py-0.5 text-xs border border-gray-200 rounded"
                                            placeholder="Qty"
                                          />
                                          <button
                                            type="button"
                                            onClick={() =>
                                              removeElectronicsFromRoom(
                                                unitIndex,
                                                roomIndex,
                                                elecIndex
                                              )
                                            }
                                            className="text-red-400 hover:text-red-600"
                                          >
                                            <FontAwesomeIcon
                                              icon={faTrash}
                                              className="h-3 w-3"
                                            />
                                          </button>
                                        </div>
                                      )
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Common Areas Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <FontAwesomeIcon icon={faMapPin} className="h-5 w-5" />
                Common Areas
              </h2>
              <button
                type="button"
                onClick={addCommonArea}
                className="flex items-center gap-1 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
              >
                <FontAwesomeIcon icon={faPlus} className="h-4 w-4" />
                Add Area
              </button>
            </div>

            {formData.commonAreas.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                No common areas added yet. Click "Add Area" to start.
              </p>
            ) : (
              <div className="space-y-4">
                {formData.commonAreas.map((area, areaIndex) => (
                  <div
                    key={areaIndex}
                    className="border border-gray-200 rounded-lg p-4 bg-gray-50"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-medium text-gray-700">
                        Common Area #{areaIndex + 1}
                      </h3>
                      <button
                        type="button"
                        onClick={() => removeCommonArea(areaIndex)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                        aria-label="Remove common area"
                      >
                        <FontAwesomeIcon icon={faTrash} className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                          Area Type *
                        </label>
                        <input
                          type="text"
                          value={area.areaType}
                          onChange={(e) =>
                            updateCommonArea(
                              areaIndex,
                              "areaType",
                              e.target.value
                            )
                          }
                          required
                          className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="e.g., Lobby"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                          Area Name *
                        </label>
                        <input
                          type="text"
                          value={area.areaName}
                          onChange={(e) =>
                            updateCommonArea(
                              areaIndex,
                              "areaName",
                              e.target.value
                            )
                          }
                          required
                          className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="e.g., Main Lobby"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                          Maintenance Cost
                        </label>
                        <input
                          type="number"
                          value={area.maintenanceCost}
                          onChange={(e) =>
                            updateCommonArea(
                              areaIndex,
                              "maintenanceCost",
                              e.target.value
                            )
                          }
                          min="0"
                          step="0.01"
                          className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                          placeholder="Cost"
                        />
                      </div>
                    </div>

                    {/* Electronics in Common Area */}
                    <div className="mt-3 border-t pt-3">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm font-semibold text-gray-600">
                          Electronics
                        </h4>
                        <button
                          type="button"
                          onClick={() => addElectronicsToCommonArea(areaIndex)}
                          className="text-sm px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                        >
                          Add Electronics
                        </button>
                      </div>

                      {area.electronics.length === 0 ? (
                        <p className="text-xs text-gray-400">
                          No electronics added
                        </p>
                      ) : (
                        <div className="space-y-2">
                          {area.electronics.map((electronic, elecIndex) => (
                            <div
                              key={elecIndex}
                              className="flex gap-2 items-center bg-white p-2 rounded"
                            >
                              <input
                                type="text"
                                value={electronic.electronicsId}
                                onChange={(e) =>
                                  updateElectronicsInCommonArea(
                                    areaIndex,
                                    elecIndex,
                                    "electronicsId",
                                    e.target.value
                                  )
                                }
                                className="flex-1 px-2 py-1 text-sm border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
                                placeholder="Electronics ID"
                              />
                              <input
                                type="number"
                                value={electronic.quantity}
                                onChange={(e) =>
                                  updateElectronicsInCommonArea(
                                    areaIndex,
                                    elecIndex,
                                    "quantity",
                                    e.target.value
                                  )
                                }
                                min="1"
                                className="w-20 px-2 py-1 text-sm border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-400"
                                placeholder="Quantity"
                              />
                              <button
                                type="button"
                                onClick={() =>
                                  removeElectronicsFromCommonArea(
                                    areaIndex,
                                    elecIndex
                                  )
                                }
                                className="text-red-400 hover:text-red-600"
                                aria-label="Remove electronics"
                              >
                                <FontAwesomeIcon
                                  icon={faTrash}
                                  className="h-4 w-4"
                                />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-end gap-4">
              <button
                type="button"
                onClick={() =>
                  setFormData({
                    name: "",
                    buildingNumber: "",
                    postalCode: "",
                    address: "",
                    totalFloors: "",
                    totalUnits: "",
                    apartmentUnits: [],
                    commonAreas: [],
                    totalMaintenanceCost: 0,
                  })
                }
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors font-medium"
              >
                Reset Form
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faBuilding} className="h-5 w-5" />
                Submit Building
              </button>
            </div>
          </div>
        </form>

        {/* Form Data Preview (for development) */}
        <div className="mt-8 bg-gray-800 text-gray-100 rounded-lg p-6 shadow-lg">
          <h3 className="text-lg font-semibold mb-3 text-green-400">
            Form Data Preview (Dev Mode)
          </h3>
          <pre className="overflow-x-auto text-xs">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default BuildingForm;
