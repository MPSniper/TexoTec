import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import "./ProjectPage.scss";

const ProjectPage = () => {
  const { id } = useParams();
  const [projectDetails, setProjectDetails] = useState({});

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/building/${id}`
        );
        setProjectDetails(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching project details:", error);
      }
    };
    fetchProjectDetails();
  }, []);

  return (
    <div className="project__page">
      <div className="container">
        <div className="project__page-details">
          <h4 className="text-center">Project Details</h4>
          <div className="row">
            <div className="col-sm-3">
              <p>Project Name: {projectDetails.buildingName}</p>
            </div>
            <div className="col-sm-3">
              <p>Building Number: {projectDetails.buildingNumber}</p>
            </div>
            <div className="col-sm-2">
              <p>Postal Code: {projectDetails.postalCode}</p>
            </div>
            <div className="col-sm-2">
              <p>Units: {projectDetails.totalUnits}</p>
            </div>
            <div className="col-sm-2">
              <p>Floors: {projectDetails.totalFloors}</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <p>
                Total Maintenance Cost: {projectDetails.totalMaintenanceCost}
              </p>
            </div>
            <div className="col-sm-9">
              <p>Address: {projectDetails.address}</p>
            </div>
          </div>
        </div>
        <div className="project__page-addUnit"></div>
      </div>
    </div>
  );
};

export default ProjectPage;
