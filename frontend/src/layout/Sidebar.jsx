import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">Inventory System</div>

      <nav className="sidebar-nav">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Dashboard
        </NavLink>

        <div className="nav-section">
          <div className="nav-section-title">Data</div>

          <div className="nav-sub-links">
            <NavLink
              to="/data/products"
              className={({ isActive }) =>
                isActive ? "nav-link sub-link active-link" : "nav-link sub-link"
              }
            >
              Products
            </NavLink>

            <NavLink
              to="/data/suppliers"
              className={({ isActive }) =>
                isActive ? "nav-link sub-link active-link" : "nav-link sub-link"
              }
            >
              SuppliersPage
            </NavLink>

            <NavLink
              to="/data/inventory"
              className={({ isActive }) =>
                isActive ? "nav-link sub-link active-link" : "nav-link sub-link"
              }
            >
              Inventory
            </NavLink>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;