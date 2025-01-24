// import { useState, useEffect } from 'react';

// // Example icons (replace with actual imports for your icons)
// import { Layout, UserCheck, Users, Warehouse, CircleUserIcon, LogOut } from 'your-icon-library'; 

// const sidebarItems = [
//   { id: 'dashboard', label: 'Dashboard', icon: Layout, href: '/admin/dashboard' },
//   { id: 'verified-doctors', label: 'Verified Doctors', icon: UserCheck, href: '/admin/verified-doctors' },
//   { id: 'requested-doctors', label: 'Requested Doctors', icon: Users, href: '/admin/requested-doctors' },
//   { id: 'departments', label: 'Departments', icon: Warehouse, href: '/admin/department' },
//   { id: 'users', label: 'Users', icon: CircleUserIcon, href: '/admin/users' },
//   { id: 'logout', label: 'Logout', icon: LogOut, action: handleLogout },
// ];

// function Sidebar({ isDarkMode, isSidebarOpen }) {
//   const [activeTab, setActiveTab] = useState('');

//   useEffect(() => {
//     const currentPath = window.location.pathname;
//     const activeNavItem = sidebarItems.find((item) => item.href === currentPath);
//     if (activeNavItem) {
//       setActiveTab(activeNavItem.id);
//     }
//   }, []);

//   const handleLogout = () => {
//     // Implement logout functionality here
//     console.log('Logging out...');
//     // For example, clear tokens, redirect to login, etc.
//     window.location.href = '/login'; // Redirect to login page
//   };

//   const handleNavigation = (href: string, id: string) => {
//     setActiveTab(id);
//     window.location.href = href; // Navigate to the URL
//   };

//   return (
//     <nav className="space-y-2">
//       {sidebarItems.map((item) => {
//         const Icon = item.icon;
//         return (
//           <button
//             key={item.id}
//             onClick={item.action || (() => handleNavigation(item.href, item.id))}
//             className={`w-full flex items-center gap-4 p-3 rounded-lg transition-colors duration-200 ${
//               activeTab === item.id
//                 ? isDarkMode
//                   ? 'bg-blue-600 text-white'
//                   : 'bg-blue-100 text-blue-600'
//                 : 'hover:bg-gray-700'
//             }`}
//           >
//             <Icon size={20} />
//             {isSidebarOpen && <span>{item.label}</span>}
//           </button>
//         );
//       })}
//     </nav>
//   );
// }

// export default Sidebar;
