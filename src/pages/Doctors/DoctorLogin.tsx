
import { Card } from "../../components/Card"


const DoctorLogin = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6">
          

           {/* Left Side - Animation */}
           <Card className=" max-w-6xl overflow-hidden flex flex-col md:flex-row bg-white  shadow-xl w-full">
          {/* Right Section */}
          <div className="hidden md:block relative bg-gradient-to-br from-purple-600 to-blue-500  p-14">
              <div className="text-center text-white p-4">
                <h2 className="text-3xl font-bold mb-8 ">Doctor Login</h2>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-14 ml-16 max-w-sm">
                  <img
                    src="https://cdn.pixabay.com/animation/2023/10/08/03/19/03-19-26-213_512.gif"
                    className="rounded-lg mb-4"
                  />
                  <div className="absolute bottom-8 right-8">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      <span className="text-xl">⚡</span>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </Card>

          {/* Right Section with Login Form */}
          <div className="p-8 flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Hi Doctor, Welcome Back! 👋</h2>
            </div>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full p-3 rounded-lg border border-gray-300"
                />
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 rounded-lg border border-gray-300"
                />
              </div>

              {/* <div className="text-right">
                <a href="#" className="text-sm text-red-500 hover:underline">
                  Forgot Password?
                </a>
              </div> */}

              <button 
                className="w-full bg-violet-600 hover:bg-violet-700 text-white py-3 rounded-lg"
              >
                Login Now
              </button>

              <div className="text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <a href="register" className="text-violet-600 hover:underline font-medium">
                  Sign Up
                </a>
              </div>
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DoctorLogin;