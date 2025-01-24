import { Routes, Route, Navigate } from "react-router-dom";
import { Suspense } from "react";
import AdminLogin from "../pages/Admin/AdminLogin";
import BrickLoader from "../components/BrickLoader";
import Dashboard from "../pages/Admin/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Department from "../pages/Admin/Department";
import { useState } from "react";
import AdminLayout from "../AdminLayout";

const AdminRouter = () => {


    const [isDarkMode, setDarkMode] = useState(true);
  


  return (
    <Suspense fallback={<BrickLoader />}>
      <Routes>
        {/* Public Route - Admin Login */}
        <Route
          path="login"
          element={
            localStorage.getItem("isAdmin") === "true" ? (
              <Navigate to="/admin/dashboard" />
            ) : (
              <AdminLogin />
            )
          }
        />

        {/* Protected Route - Admin Dashboard */}
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        
        <Route path="" element={<AdminLayout />}>
            <Route path="department" element={<Department isDarkMode={isDarkMode} />} />
        </Route>





      </Routes>
    </Suspense>
  );
};

export default AdminRouter;
