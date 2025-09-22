import React from "react";
import "./dashboardPage.scss";
import Sidebar from "../components/SidebarComponent/sidebar.jsx";
import DashnoardProjectSection from "../components/dashboardProjectSection/dashnoardProjectSection.jsx";

const DashboardPage = () => {
  return (
    <div className="dashboardPage">
      <Sidebar />
      <div className="dashboardPage__content">
        <DashnoardProjectSection />
      </div>
    </div>
  );
};

export default DashboardPage;
