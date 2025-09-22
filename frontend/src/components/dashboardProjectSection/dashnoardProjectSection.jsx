import React, { useState } from "react";
import "./dashnoardProjectSection.scss";

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

  const handleSubmit = (e) => {
    e.preventDefault();
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
            <div className="row">
              <input
                type="text"
                name="projectName"
                value={formData.projectName}
                onChange={handleChange}
                placeholder="Project Name"
                required
              />
              <input
                type="text"
                name="buildingNumber"
                value={formData.buildingNumber}
                onChange={handleChange}
                placeholder="Building Number"
                required
              />
              <input
                type="text"
                name="PostalCode"
                value={formData.PostalCode}
                onChange={handleChange}
                placeholder="Postal Code"
                required
              />
            </div>
            <textarea
              name="Address"
              value={formData.Address}
              onChange={handleChange}
              placeholder="Address"
              rows="4"
              required
            />
            <input
              type="number"
              name="totalFloors"
              value={formData.totalFloors}
              onChange={handleChange}
              placeholder="Total Floors"
              required
            />
            <input
              type="number"
              name="totalUnits"
              value={formData.totalUnits}
              onChange={handleChange}
              placeholder="Total Units"
              required
            />
            <button type="submit">Submit</button>
            <button type="button" onClick={() => setShowForm(false)}>
              Cancel
            </button>
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
