import {Suspense} from 'react';
import BrickLoader from '../components/UserComponents/BrickLoader';
import { Routes , Route } from 'react-router-dom';




import Layout from '../Layout';
import Home from '../pages/Users/Home';
import SignupPage from '../pages/Users/Signup';
import LoginPage from '../pages/Users/Login';
import ForgotPassword from '../pages/Users/ForgotPassword';
import OTPVerification from "../pages/Users/verifyOTP"
import ResetVerificationOTP from '../pages/Users/ResetVerifyOTP';
import ResetPassword from '../pages/Users/ResetPassword';
import DoctorListingPage from '../pages/Users/DoctorList';

const UserRouter = () => {
  return (
    <Suspense fallback={<BrickLoader />}>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="" element={<Home />} />
            </Route>
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="forgot_password" element={<ForgotPassword />} />
            <Route path="verify_otp" element={<OTPVerification />} />
            <Route path="reset_password" element={<ResetPassword />} />
            <Route path="reset_verify_otp" element={<ResetVerificationOTP />} />
            <Route path="/" element={<Layout />}>
                <Route path="doctor_list" element={<DoctorListingPage />} />
            </Route>
        </Routes>

    </Suspense>
  )
}

export default UserRouter