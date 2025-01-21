import  { useState } from 'react';


const ResetPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e : any) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Password reset requested for:', email);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-xl overflow-hidden flex">
        {/* Left side - Form */}
        <div className="w-full md:w-1/2 p-8">
          <div className="mb-8">
            <div className="h-12 w-12  rounded-xl flex items-center justify-center mb-4">
              {/* <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg> */}
              <img src="Logo.png" alt="Logo" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">Reset Password</h2>
            <p className="text-gray-600 mt-2">Enter the new password below to change your password</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-gray-600 text-sm">New Password :</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-purple-500"
                placeholder="password"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-gray-600 text-sm">Confirm New Password :</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-xl border focus:ring-2 focus:ring-purple-500"
                placeholder="password"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Confirm
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <a href="/login" className="text-purple-600 hover:text-purple-800 text-sm">
              Back to Login
            </a>
          </div>
        </div>
        
        {/* Right side - Image */}
        <div className="hidden md:block w-1/2 bg-gradient-to-br from-purple-400 to-purple-600 p-12">
          <div className="h-full flex items-center justify-center">
            <img
              src="Login-template.png"
              alt="Reset Password"
              className="rounded-2xl max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;