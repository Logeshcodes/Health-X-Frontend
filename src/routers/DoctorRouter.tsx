import { Routes , Route } from 'react-router-dom'
import {Suspense} from 'react';
import BrickLoader from '../components/UserComponents/BrickLoader';
import DoctorLogin from '../pages/Doctors/DoctorLogin';
import DoctorSignup from '../pages/Doctors/DoctorSignup';
import Home from '../pages/Doctors/DoctorHome';
import Layout from '../Layout';

const DoctorRouter = () => {
  return (
    <Suspense fallback={<BrickLoader />}>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="" element={<Home />} />
            </Route>
            <Route path="login" element={<DoctorLogin />} />
            <Route path="register" element={<DoctorSignup />} />
            
        </Routes>

    </Suspense>
  )
}

export default DoctorRouter