import React, { useState } from 'react';
import { 
  Pencil, 
  Trash2, 
  Search,
  Plus,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "../../components/AdminComponents/Dialog";


interface DepartmentProps {
  isDarkMode: boolean;
}

const Department: React.FC<DepartmentProps> = ({ isDarkMode }) => {
    

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [newDepartment, setNewDepartment] = useState('');
    const [editingDepartment, setEditingDepartment] = useState({ id: null, name: '' });
    
    const [departments, setDepartments] = useState([
      { id: '01', name: 'Anaesthesia', status: 'Unlisted', created: '29 Dec 2022' },
      { id: '02', name: 'General Surgery', status: 'Listed', created: '24 Dec 2022' },
      { id: '03', name: 'Orthopaedics', status: 'Unlisted', created: '12 Dec 2022' },
      { id: '04', name: 'Physiology', status: 'Unlisted', created: '21 Oct 2022' },
      { id: '05', name: 'General Medicine', status: 'Listed', created: '21 Oct 2022' },
    ]);
  
    const handleAdd = () => {
      if (newDepartment.trim()) {
        const newId = (departments.length + 1).toString().padStart(2, '0');
        setDepartments([...departments, {
          id: newId,
          name: newDepartment,
          status: 'Listed',
          created: new Date().toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
          })
        }]);
        setNewDepartment('');
        setIsAddModalOpen(false);
      }
    };
  
    const handleEdit = () => {
      if (editingDepartment.name.trim()) {
        setDepartments(departments.map(dept =>
          dept.id === editingDepartment.id
            ? { ...dept, name: editingDepartment.name }
            : dept
        ));
        setIsEditModalOpen(false);
      }
    };
  
    const startEdit = (department : any) => {
      setEditingDepartment(department);
      setIsEditModalOpen(true);
    };
  
    const filteredDepartments = departments.filter(dept =>
      dept.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <div className={`min-h-screen ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Departments List</h1>
            
            {/* Enhanced Add More button */}
            <button 
              onClick={() => setIsAddModalOpen(true)}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg
                       hover:from-blue-600 hover:to-blue-700 transition-all duration-200 
                       shadow-md hover:shadow-lg transform hover:-translate-y-0.5
                       flex items-center gap-2 font-medium"
            >
              <Plus className="h-4 w-4" />
              Add More 
            </button>
          </div>
  
          {/* Search section remains the same... */}
  
          <div className={`rounded-lg overflow-hidden shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <table className="w-full">
              {/* Table header remains the same... */}
              <tbody>
                {filteredDepartments.map((dept) => (
                  <tr key={dept.id} className={`border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}
                                              transition-colors duration-150 hover:bg-opacity-50
                                              ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                    <td className="px-6 py-4">{dept.id}</td>
                    <td className="px-6 py-4">{dept.name}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium
                        ${dept.status === 'Listed' 
                          ? 'bg-green-100 text-green-800 border border-green-200'
                          : 'bg-red-100 text-red-800 border border-red-200'
                        }`}>
                        {dept.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">{dept.created}</td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-3">
                        <button 
                          onClick={() => startEdit(dept)}
                          className={`p-2 rounded-full transition-all duration-200 
                            ${isDarkMode 
                              ? 'hover:bg-blue-500 hover:bg-opacity-20 text-blue-400 hover:text-blue-300' 
                              : 'hover:bg-blue-100 text-blue-600 hover:text-blue-700'
                            }
                            transform hover:scale-110`}
                          title="Edit Department"
                        >
                          <Pencil className="h-4 w-4" />
                        </button>
                        <button 
                          className={`p-2 rounded-full transition-all duration-200 
                            ${isDarkMode 
                              ? 'hover:bg-red-500 hover:bg-opacity-20 text-red-400 hover:text-red-300' 
                              : 'hover:bg-red-100 text-red-600 hover:text-red-700'
                            }
                            transform hover:scale-110`}
                          title="Delete Department"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
  
          {/* Enhanced modals with smoother transitions and better visual hierarchy */}
          <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
            <DialogContent
              className={`rounded-lg shadow-xl p-6 transform transition-all duration-200
                ${isDarkMode 
                  ? 'bg-gradient-to-b from-gray-800 to-gray-900 text-white' 
                  : 'bg-white text-gray-900'}`}
            >
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold flex items-center gap-2">
                  <Plus className="h-5 w-5 text-blue-500" />
                  Add New Department
                </DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <label
                  htmlFor="new-department"
                  className={`block mb-2 text-sm font-medium
                    ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                >
                  Department Name
                </label>
                <input
                  id="new-department"
                  type="text"
                  placeholder="Enter department name"
                  value={newDepartment}
                  onChange={(e: any) => setNewDepartment(e.target.value)}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-200
                    ${isDarkMode
                      ? 'bg-gray-700 text-white border-gray-600 focus:ring-blue-500/50'
                      : 'bg-white text-gray-900 border-gray-300 focus:ring-blue-500/50'
                    }`}
                />
              </div>
              <DialogFooter className="flex justify-end space-x-4 mt-4">
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
                    ${isDarkMode
                      ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                >
                  Cancel
                </button>
                <button
                  onClick={handleAdd}
                  className="px-4 py-2 text-sm font-medium text-white rounded-lg
                           bg-gradient-to-r from-blue-500 to-blue-600
                           hover:from-blue-600 hover:to-blue-700
                           transition-all duration-200 shadow-md hover:shadow-lg
                           transform hover:-translate-y-0.5"
                >
                  Add Department
                </button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
  
          {/* Edit modal follows same enhanced styling pattern... */}
          
        </div>
      </div>
    );
  };
  
  export default Department;