import React, { useState } from "react";
import "./dashnoardProjectSection.scss";
import { Axios } from "axios";

const DashboardProjectSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    projectName: "",
    buildingNumber: "",
    PostalCode: "",
    Address: "",
    totalFloors: "",
    totalUnits: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await Axios.post("/api/project", formData);
      console.log("Project added successfully:", response.data);
    } catch (error) {
      console.error("Error adding project:", error);
    }
    console.log(formData);
    // Reset form and hide
    setFormData({
      projectName: "",
      buildingNumber: "",
      PostalCode: "",
      Address: "",
      totalFloors: "",
      totalUnits: "",
    });
    setShowForm(false);
  };

  return (
    <div className="project">
      <div className="project__new">
        {!showForm && (
          <button onClick={() => setShowForm(!showForm)}>
            Add New Project
          </button>
        )}
        {showForm && (
          <form onSubmit={handleSubmit} className="project__new-form">
            <div className="row justify-content-between">
              <input
                type="text"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                placeholder="Project Name"
                required
                className="col"
              />
              <input
                type="text"
                name="buildingNumber"
                value={formData.buildingNumber}
                onChange={handleChange}
                placeholder="Building Number"
                required
                className="col mx-3"
              />
              <input
                type="text"
                name="PostalCode"
                value={formData.PostalCode}
                onChange={handleChange}
                placeholder="Postal Code"
                required
                className="col"
              />
            </div>
            <div className="row my-3">
              <div className="col px-0 justify-content-between d-flex">
                <input
                  type="number"
                  name="totalFloors"
                  value={formData.totalFloors}
                  onChange={handleChange}
                  placeholder="Total Floors"
                  required
                  className="col"
                />
                <input
                  type="number"
                  name="totalUnits"
                  value={formData.totalUnits}
                  onChange={handleChange}
                  placeholder="Total Units"
                  required
                  className="col mx-3"
                />
              </div>
              <input
                name="Address"
                value={formData.Address}
                onChange={handleChange}
                placeholder="Address"
                rows="4"
                required
                className="col"
              />
            </div>
            <div className="row justify-content-center">
              <button type="button" onClick={() => setShowForm(false)}>
                Cancel
              </button>
              <button type="submit">Submit</button>
            </div>
          </form>
        )}
      </div>
      <div className="project__list">
        <table>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Postal Code</th>
              <th>Status</th>
              <th>Total Cost</th>
              <th>Click to Go</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Nandor the Relentless</td>
              <td>1234567890</td>
              <td>15</td>
              <td>$0</td>
              <td>
                <a className="a-tag-button" href="#">
                  Go to Project
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardProjectSection;
