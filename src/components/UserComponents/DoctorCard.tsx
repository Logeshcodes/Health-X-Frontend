import {CheckCircle } from 'lucide-react';

const DoctorCard = () => {
  return (
    
    
              <div className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="relative flex-shrink-0">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-400 flex items-center justify-center">
                      <img
                        src="/api/placeholder/96/96"
                        alt="Doctor"
                        className="w-20 h-20 rounded-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center text-white border-2 border-white">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    {/* <div className="absolute bottom-0 right-0 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center text-white">
                    ✓
                  </div> */}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-blue-500 mb-1">Dr. Abin Babu</h3>
                        <p className="text-gray-600 mb-1">Dentist</p>
                        <p className="text-gray-500 text-sm mb-2">10 years experience overall</p>
                        <p className="font-medium mb-1">Bengaluru, Karnataka</p>
                        <p className="text-gray-600 text-sm">Smilessence Center for Advanced Dentistry + 1 more</p>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="text-green-500 text-sm font-medium">FREE</span>
                          <span className="text-gray-500 text-sm">₹500 Consultation fee at clinic</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-start md:items-end gap-2">
                        <span className="text-green-500 flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-green-500"></span>
                          Available Today
                        </span>
                        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                          Consult Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
  )
}

export default DoctorCard