import { Upload} from 'lucide-react';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {  toast } from "react-toastify";
import { useCallback } from 'react';

import { useNavigate } from 'react-router-dom';
import PasswordField from '../Users/common/passwordField';

import InputField from '../Users/common/inputField';

import { DoctorRegister } from '../../@types/DoctorSignupType';
import { signup } from '../../api/DoctorAuthentication';


const DoctorSignup = () => {




  const navigate = useNavigate()

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    department: "",
    consultationType: "",
    education: "",
    experience: "",
    description: "",
    password: "",
    confirmPassword: "",
    MedicalLicense: "",
  };
  


  const signupSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    department: Yup.string().required("Department is required"),
    consultationType: Yup.string()
      .oneOf(["In-person", "Online"], "Invalid consultation type")
      .required("Consultation type is required"),
    education: Yup.string()
      .min(2, "Education must be at least 2 characters")
      .required("Education is required"),
    experience: Yup.number()
      .typeError("Experience must be a number")
      .min(0, "Experience cannot be negative")
      .required("Experience is required"),
    description: Yup.string()
      .max(500, "Description must be less than 500 characters")
      .required("Description is required"),
    password: Yup.string()
      .matches(/^\S*$/, "Password must not contain spaces")
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
    MedicalLicense: Yup.string().required("Medical License is required"),
  });
  

  const handleSubmit =  useCallback ( async (values: DoctorRegister) => {
    try {
      
      console.log("Signup click")
      const response = await signup(values);
      console.log(response, "ressss");
      if (response.success) {
       
        localStorage.setItem("verificationToken",response.token);
        localStorage.setItem("email",values.email)
        console.log("sucess");

        toast.success(response.message);
        
        navigate("/doctor/verify_otp");
      } else {
        toast.error(response.message);
       
      }
    } catch (error: any) {
      toast.error(error.message || "Unknown Error Occured !");
    }
  },[]
);




  return (
    <div className="min-h-screen bg-purple-100 p-4 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-xl overflow-hidden flex">
        {/* Left side - Image and branding */}
        <div className="w-1/2 bg-purple-600 p-12 hidden lg:block">
          <div className="flex items-center space-x-2 mb-8">
            <div className="bg-white p-2 rounded-lg">
              <div className="text-purple-600 text-2xl">👨‍⚕️</div>
            </div>
            <h2 className="text-white text-2xl font-bold">Health X</h2>
          </div>
          <h1 className="text-white text-4xl font-bold mb-6">Doctor Login</h1>
          <div className="bg-purple-500 rounded-xl p-6">
         
          <img
                    src="../../../Logo.png"
                    className="rounded-lg mb-4"
                  />
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6">Create a new account!</h2>
        

      <Formik
          initialValues={initialValues}
          validationSchema={signupSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting  }) => (
             <Form className="space-y-6 my-4 flex flex-col justify-center">
             {/* Name Field */}
             <div>
               <InputField type="text" name="name" placeholder="Name" label="Name" />
             </div>
   
             {/* Email Field */}
             <div>
               <InputField type="email" name="email" placeholder="Email" label="Email" />
             </div>
   
             {/* Phone Field */}
             <div>
               <InputField
                 type="text"
                 name="phone"
                 placeholder="Phone Number"
                 label="Phone"
               />
             </div>
   
             {/* Department Field */}
             <div>
               <InputField
                 type="text"
                 name="department"
                 placeholder="Department"
                 label="Department"
               />
             </div>
   
             {/* Consultation Type Field */}
             <div>
               <InputField
                 type="text"
                 name="consultationType"
                 placeholder="Consultation Type"
                 label="Consultation Type (In-person/Online)"
               />
             </div>
   
             {/* Education Field */}
             <div>
               <InputField
                 type="text"
                 name="education"
                 placeholder="Education"
                 label="Education"
               />
             </div>
   
             {/* Experience Field */}
             <div>
               <InputField
                 type="number"
                 name="experience"
                 placeholder="Experience (in years)"
                 label="Experience"
               />
             </div>
   
             {/* Description Field */}
             <div>
               <InputField
                 type="textarea"
                 name="description"
                 placeholder="Short Description"
                 label="Description"
               />
             </div>
   
             {/* Password Field */}
             <div>
               <PasswordField  name="password" placeholder="Password" />
             </div>
   
             {/* Confirm Password Field */}
             <div>
               <PasswordField
                 name="confirmPassword"
                 placeholder="Confirm Password"
               />
             </div>
   
             {/* Upload Medical License Field */}
             <div className="flex items-center space-x-4">
               <div className="flex-1 border border-dashed border-gray-300 rounded-lg p-4">
                 <label className="flex items-center justify-center cursor-pointer">
                   <Upload className="text-gray-400" />
                   <span className="ml-2 text-sm text-gray-500">
                     Medical License
                   </span>
                   <InputField
                     type="file"
                     name="MedicalLicense"
                     placeholder=''
                     label=''
                    
                   />
                 </label>
               </div>
             </div>
   
             {/* Submit Button */}
             <button
               type="submit"
               disabled={isSubmitting}
               className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
             >
               Continue
             </button>
   
             {/* Login Redirect */}
             <div className="text-sm font-medium text-gray-900 cursor-pointer text-center">
               Have an account?{" "}
               <a href="/doctor/login" className="text-purple-700 hover:underline">
                 Log In
               </a>
             </div>
           </Form>
          )}
        </Formik>
        </div>
      </div>
    </div>
  );
};

export default DoctorSignup;