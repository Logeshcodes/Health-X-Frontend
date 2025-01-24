import { Upload } from 'lucide-react';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordField from '../Users/common/passwordField';
import InputField from '../Users/common/inputField';
import { DoctorRegister } from '../../@types/DoctorSignupType';
import { signup } from '../../api/DoctorAuthentication';

const DoctorSignup = () => {
  const navigate = useNavigate();
  const [medicalLicensePreview, setMedicalLicensePreview] = useState<string>("");

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setFieldValue: any) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFieldValue("MedicalLicense", file);

      // File preview
      const reader = new FileReader();
      reader.onload = () => setMedicalLicensePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
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
    MedicalLicense: Yup.mixed().required("Medical License is required"),
  });

  const handleSubmit = useCallback(async (values: DoctorRegister) => {
    try {


      console.log("Signup click")

      const formData = new FormData();
      if (values.MedicalLicense) {
        formData.append("MedicalLicense", values.MedicalLicense);
      }

      // Append all other fields except MedicalLicense
    for (const key of Object.keys(values) as (keyof DoctorRegister)[]) {
      if (key !== "MedicalLicense" && values[key] !== undefined) {
        formData.append(key, values[key] as string); // Append as string
      }
    }


     // Debugging: Log form data entries
     for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    // Log form data for debugging
    for (const [key, value] of formData.entries()) {
      if (key == "MedicalLicense") console.log(`${key}:`, value);
    }

      const response = await signup(formData);
      console.log("response ?" ,response, );
      if (response.success) {
        localStorage.setItem("verificationToken", response.token);
        localStorage.setItem("email", values.email);
        toast.success(response.message);
        navigate("/doctor/verify_otp");
      } else {
        toast.error(response.message);
      }
    } catch (error: any) {
      toast.error(error.message || "An unknown error occurred!");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-purple-100 p-4 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-xl overflow-hidden flex">
        {/* Left side - Branding */}
        <div className="w-1/2 bg-purple-600 p-12 hidden lg:block">
          <div className="flex items-center space-x-2 mb-8">
            <div className="bg-white p-2 rounded-lg">
              <div className="text-purple-600 text-2xl">👨‍⚕️</div>
            </div>
            <h2 className="text-white text-2xl font-bold">Health X</h2>
          </div>
          <h1 className="text-white text-4xl font-bold mb-6">Doctor Signup</h1>
          <img src="../../../Logo.png" className="rounded-lg mb-4" alt="Health X Logo" />
        </div>

        {/* Right side - Form */}
        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-6">Create a new account!</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={signupSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, isSubmitting }) => (
              <Form className="space-y-6 my-4 flex flex-col">
                <InputField type="text" name="name" placeholder="Name" label="Name" />
                <InputField type="email" name="email" placeholder="Email" label="Email" />
                <InputField type="text" name="phone" placeholder="Phone" label="Phone" />
                <InputField type="text" name="department" placeholder="Department" label="Department" />
                <InputField type="text" name="consultationType" placeholder="In-person/Online" label="Consultation Type [ In-person, Online ]" />
                <InputField type="text" name="education" placeholder="Education" label="Education" />
                <InputField type="number" name="experience" placeholder="Experience" label="Experience (years)" />
                <InputField type="textarea" name="description" placeholder="Short Description" label="Description" />
                <PasswordField name="password" placeholder="Password" />
                <PasswordField name="confirmPassword" placeholder="Confirm Password" />
                
                {/* File Upload Field */}
                <div className="flex items-center space-x-4">
                  <label className="flex items-center cursor-pointer">
                    <Upload className="text-gray-400" />
                    <span className="ml-2 text-sm text-gray-500">Upload Medical License</span>
                    <input
                      type="file"
                      name="MedicalLicense"
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="hidden"
                      onChange={(e) => handleFileChange(e, setFieldValue)}
                    />
                  </label>
                </div>

                {/* Preview */}
                {medicalLicensePreview && (
                  <img src={medicalLicensePreview} alt="License Preview" className="w-32 h-32 mt-2" />
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Continue
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default DoctorSignup;