import { Outlet } from "react-router-dom";
import AdminHeader from "./components/AdminComponents/AdminHeader";
import AdminSidebar from "./components/AdminComponents/AdminSidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Layout, UserCheck, Users, Warehouse, CircleUserIcon, LogOut } from "lucide-react";

const AdminLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true); // Manage sidebar state globally
  const [isDarkMode, setDarkMode] = useState(true); // Manage dark mode globally
  const [activeTab, setActiveTab] = useState(""); // Track active sidebar tab
  const navigate = useNavigate();

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const toggleTheme = () => setDarkMode(!isDarkMode);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    toast.success("Logged out successfully!");
    navigate("/admin/login");
  };

  // Sidebar items with href
  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: Layout, href: "/admin/dashboard" },
    { id: "verified-doctors", label: "Verified Doctors", icon: UserCheck, href: "/admin/verified-doctors" },
    { id: "requested-doctors", label: "Requested Doctors", icon: Users, href: "/admin/requested-doctors" },
    { id: "departments", label: "Departments", icon: Warehouse, href: "/admin/department" },
    { id: "users", label: "Users", icon: CircleUserIcon, href: "/admin/users" },
    { id: "logout", label: "Logout", icon: LogOut, action: handleLogout },
  ];

  const handleNavigation = (href : string , id: string) => {
    setActiveTab(id); // Update active tab
    if (href) navigate(href); // Navigate to the route if href is defined
  };

  return (
    <div className={`h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <div className="flex h-full">
        {/* Sidebar */}
        <AdminSidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          isDarkMode={isDarkMode}
          sidebarItems={sidebarItems}
          activeTab={activeTab} // Pass activeTab for highlighting
          handleNavigation={handleNavigation} // Pass handleNavigation for actions
        />

        {/* Main Content */}
        <div className="flex-1 p-8 overflow-auto">
          <AdminHeader isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <Outlet context={{ isDarkMode }} />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;