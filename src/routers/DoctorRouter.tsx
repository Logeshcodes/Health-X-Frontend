import { Routes , Route } from 'react-router-dom'
import {Suspense} from 'react';
import BrickLoader from '../components/BrickLoader';
import DoctorLogin from '../pages/Doctors/DoctorLogin';
import DoctorSignup from '../pages/Doctors/DoctorSignup';
import Home from '../pages/Doctors/DoctorHome';
import DoctorVerificationOTP from '../pages/Doctors/DoctorOtpPage';
import DoctorLayout from '../DoctorLayout';

const DoctorRouter = () => {
  return (
    <Suspense fallback={<BrickLoader />}>
        <Routes>
            <Route path="/" element={<DoctorLayout />}>
                <Route path="" element={<Home />} />
            </Route>
            <Route path="login" element={<DoctorLogin />} />
            <Route path="register" element={<DoctorSignup />} />
            <Route path="verify_otp" element={<DoctorVerificationOTP />} />
            
        </Routes>

    </Suspense>
  )
}

export default DoctorRouter