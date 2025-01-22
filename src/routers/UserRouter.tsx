import {Suspense} from 'react';
import BrickLoader from '../components/BrickLoader';
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
import About from '../pages/Users/About';

const UserRouter = () => {
  return (
    <Suspense fallback={<BrickLoader />}>
        <Routes>
            <Route path="/user" element={<Layout />}>
                <Route path="" element={<Home />} />
            </Route>
            <Route path="/user/login" element={<LoginPage />} />
            <Route path="/user/signup" element={<SignupPage />} />
            <Route path="/user/forgot_password" element={<ForgotPassword />} />
            <Route path="/user/verify_otp" element={<OTPVerification />} />
            <Route path="/user/reset_password" element={<ResetPassword />} />
            <Route path="/user/reset_verify_otp" element={<ResetVerificationOTP />} />
            <Route path="/user" element={<Layout />}>
                <Route path="/user/doctor_list" element={<DoctorListingPage />} />
            </Route>
            <Route path="/user" element={<Layout />}>
                <Route path="about" element={<About />} />
            </Route>
            
        </Routes>

    </Suspense>
  )
}

export default UserRouter