import Banner from "../../components/UserComponents/Banner";
import DoctorCarousel from "../../components/UserComponents/Doctors";
import Departments from "../../components/UserComponents/Departments";


const DoctorHome = () => {
    return (
      <>
        <Banner />
        <DoctorCarousel/>
        <div className="bg-blue-100 ">
        <Departments/>
        </div>
      </>
    );
  };
  

export default DoctorHome