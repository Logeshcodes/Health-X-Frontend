import { Routes , Route } from 'react-router-dom' 
import { Suspense } from 'react'
import AdminLogin from '../pages/Admin/AdminLogin'
import BrickLoader from '../components/BrickLoader';
import Dashboard from '../pages/Admin/Dashboard';

const AdminRouter = () => {
  return (
    <Suspense fallback={<BrickLoader />}>
        
        <Routes>
            
            <Route path="login" element={<AdminLogin />} />
            <Route path="dashboard" element={<Dashboard />} />
            {/* <Route path="signup" element={<SignupPage />} />
            <Route path="forgot_password" element={<ForgotPassword />} />
            <Route path="verify_otp" element={<OTPVerification />} /> */}
            
        </Routes>
        
    </Suspense>
  )
}

export default AdminRouter