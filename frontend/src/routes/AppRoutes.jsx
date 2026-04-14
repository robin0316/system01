import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layout/MainLayout.jsx";
import DashboardPage from "../pages/data/DashboardPage.jsx";
import CategoriesPage from "../pages/data/CategoriesPage.jsx";
import InventoryPage from "../pages/data/InventoryPage.jsx";
import ProductsPage from "../pages/data/ProductsPage.jsx";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="data/products" element={<ProductsPage />} />
        <Route path="data/categories" element={<CategoriesPage />} />
        <Route path="data/inventory" element={<InventoryPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;