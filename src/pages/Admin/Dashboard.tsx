// Dashboard Component
import { useState } from 'react';
import { Menu, Sun, Moon, Users, UserCheck, Layout, LogOut, CircleUserIcon, Warehouse } from 'lucide-react';
import { Card } from '../../components/Card';
import Department from './Department';

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isDarkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const toggleTheme = () => setDarkMode(!isDarkMode);

  const stats = {
    doctorCount: 4689,
    usersCount: 10293,
    appointments: 89000,
  };

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Layout },
    { id: 'verified-doctors', label: 'Verified Doctors', icon: UserCheck },
    { id: 'requested-doctors', label: 'Requested Doctors', icon: Users },
    { id: 'departments', label: 'Departments', icon: Warehouse },
    { id: 'users', label: 'Users', icon: CircleUserIcon },
    { id: 'logout', label: 'Logout', icon: LogOut },
  ];

  return (
    <div className={`h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="flex h-full">
        {/* Sidebar */}
        <div
          className={`
            ${isSidebarOpen ? 'w-64' : 'w-20'} 
            ${isDarkMode ? 'bg-gray-800' : 'bg-white'}
            transition-all duration-300 p-4 shadow-lg
          `}
        >
          <div className="flex items-center justify-between mb-8">
            <h1 className={`font-bold ${!isSidebarOpen && 'hidden'}`}>Health X</h1>
            <button onClick={toggleSidebar} className="p-2 rounded-lg hover:bg-gray-700">
              <Menu size={20} />
            </button>
          </div>

          <nav className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`
                    w-full flex items-center gap-4 p-3 rounded-lg
                    ${activeTab === item.id ? (isDarkMode ? 'bg-blue-600' : 'bg-blue-100') : 'hover:bg-gray-700'}
                  `}
                >
                  <Icon size={20} />
                  {isSidebarOpen && <span>{item.label}</span>}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 overflow-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">
              {sidebarItems.find((item) => item.id === activeTab)?.label}
            </h2>
            <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-gray-700">
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h3 className="text-lg mb-2">Doctor Count</h3>
                  <p className="text-3xl font-bold">{stats.doctorCount}</p>
                </Card>
                <Card className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h3 className="text-lg mb-2">Users Count</h3>
                  <p className="text-3xl font-bold">{stats.usersCount}</p>
                </Card>
                <Card className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                  <h3 className="text-lg mb-2">Appointments</h3>
                  <p className="text-3xl font-bold">{stats.appointments}</p>
                </Card>
              </div>

              <Card className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} h-96`}>
                <h3 className="text-lg mb-4">Graph Overview</h3>
                <div className="h-full flex items-center justify-center text-gray-500">
                  Graph visualization would go here
                </div>
              </Card>
            </div>
          )}

          {activeTab === 'departments' && (
            <div className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg`}>
              <Department isDarkMode={isDarkMode} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;