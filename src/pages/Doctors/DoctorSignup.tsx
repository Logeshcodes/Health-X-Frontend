import { useState } from 'react';
import { Upload, Eye, EyeOff } from 'lucide-react';


const DoctorSignup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    consultationType: '',
    education: '',
    experience: '',
    description: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e : any) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e : any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-purple-100 p-4 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-xl overflow-hidden flex">
        {/* Left side - Image and branding */}
        <div className="w-1/2 bg-purple-600 p-12 hidden lg:block">
          <div className="flex items-center space-x-2 mb-8">
            <div className="bg-white p-2 rounded-lg">
              <div className="text-purple-600 text-2xl">👨‍⚕️</div>
            </div>
            <h2 className="text-white text-2xl font-bold">Health X</h2>
          </div>
          <h1 className="text-white text-4xl font-bold mb-6">Doctor Login</h1>
          <div className="bg-purple-500 rounded-xl p-6">
          <img
                    src="https://cdn.dribbble.com/users/514480/screenshots/2091133/media/707a1f1c7d082f47858b783edaf64129.gif"
                    className="rounded-lg mb-4"
                  />
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6">Create a new account!</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200"
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200"
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200"
                onChange={handleChange}
              />
            </div>

            <div>
              <select
                name="department"
                className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200"
                onChange={handleChange}
              >
                <option value="">Department</option>
                <option value="cardiology">Cardiology</option>
                <option value="neurology">Neurology</option>
                <option value="pediatrics">Pediatrics</option>
                <option value="orthopedics">Orthopedics</option>
              </select>
            </div>

            <div>
              <select
                name="consultationType"
                className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200"
                onChange={handleChange}
              >
                <option value="">Consultation Type</option>
                <option value="inPerson">In-Person</option>
                <option value="virtual">Virtual</option>
                <option value="both">Both</option>
              </select>
            </div>

            <div>
              <input
                type="text"
                name="education"
                placeholder="Education"
                className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200"
                onChange={handleChange}
              />
            </div>

            <div>
              <input
                type="text"
                name="experience"
                placeholder="Experience"
                className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200"
                onChange={handleChange}
              />
            </div>

            <div>
              <textarea
                name="description"
                placeholder="Description"
                className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200"
                
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200"
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full p-3 rounded-lg bg-gray-50 border border-gray-200"
                onChange={handleChange}
              />
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex-1 border border-dashed border-gray-300 rounded-lg p-4">
                <div className="flex items-center justify-center">
                  <Upload className="text-gray-400" />
                  <span className="ml-2 text-sm text-gray-500">Upload Medical License</span>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Send OTP
            </button>

            <p className="text-center text-gray-600">
              Already have an account?{' '}
              <a href="login" className="text-purple-600 font-medium">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorSignup;