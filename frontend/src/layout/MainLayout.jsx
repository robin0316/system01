import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import "../styles/layout.css";

function MainLayout() {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;