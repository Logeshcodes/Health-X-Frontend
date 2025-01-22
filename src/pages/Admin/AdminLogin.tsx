

const AdminLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Side - Animation */}
            <div className="w-full md:w-1/2 bg-purple-600 p-12 flex flex-col justify-center items-center text-white">
              <div className="animate-bounce mb-4">
                
              </div>
              <div className="relative">
                <div className="w-64 h-64 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl animate-pulse">
                      <img src="https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif" alt="" />
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full border-4 border-white/30 rounded-full animate-spin-slow"></div>
                </div>
              </div>
              <h3 className="mt-6 text-2xl font-bold">Admin Login Page </h3>
              <p className="mt-4 text-center text-white/80">
                Secure repository management 
              </p>
            </div>

            {/* Right Side - Login Form */}

            <div className="w-full md:w-1/2 py-16 px-12">
              <h2 className="text-3xl mb-4 font-bold">Hi Admin, Welcome Back! 👋</h2>
              <p className="mb-8 text-gray-600">
                Please login to access your dashboard
              </p>
              <form>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Username
                  </label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:border-purple-500 focus:bg-white focus:outline-none"
                    placeholder="Enter your username"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Password
                  </label>
                  <input 
                    type="password"
                    className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:border-purple-500 focus:bg-white focus:outline-none"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <button
                  className="w-full bg-purple-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:shadow-outline transform transition-all duration-300 ease-in-out"
                >
                  Login Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;