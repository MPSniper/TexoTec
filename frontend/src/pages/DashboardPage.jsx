import React from "react";
import "./dashboardPage.scss";
import Sidebar from "../components/SidebarComponent/sidebar.jsx";
import ProjectSection from "../dashboard/projectSection/projectSection.jsx";

const DashboardPage = () => {
  return (
    <div className="dashboardPage">
      <Sidebar />
      <div className="dashboardPage__content">
        <ProjectSection />
      </div>
    </div>
  );
};

export default DashboardPage;
