import { API } from "../service/axios"
import authentictaionRoutes from "../@types/endPoints/authEndPoints"

import { userData } from "../@types/UserDataType"



export const UserGoogleLogin = async (loginData:object)=>{
    try {
        const response = await API.post(authentictaionRoutes.googleLogin_user, loginData,{
          withCredentials:true
        })
        return response.data
    } catch (error:any) {
        return error
    }
  }


  export const login = async (email: string,password:string): Promise<any> => {
    try {
      const response = await API.post(authentictaionRoutes.login_user, {
        email,password
      }, {
        withCredentials: true, 
      });
      console.log(response.data, "response login");
      return response.data;
    } catch (error) {
      throw error;
    }
  };


  export const signup = async (userData: userData): Promise<any> => {
    try {
      console.log("users data..", userData)

      const response = await API.post(
        authentictaionRoutes.signup_user,
        userData
      );
      console.log(response.data, "response");
      return response.data;
    } catch (error: any) {
      if (error.response.status === 404) {
        throw error;
      }
      console.log(error.message);
    }
  };


  export const resendOtp = async (email: string): Promise<any> => {
    try {
      const response = await API.post(authentictaionRoutes.resendOtp_user, {
        email,
      });
      console.log(response.data, "response resendOtp");
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  export const verifyOtp = async (otp: string): Promise<any> => {
    try {
      const response = await API.post(authentictaionRoutes.verifyOtp_user, {
        otp,
      });
      console.log(response.data, "response verifyOtp");
      return response.data;
    } catch (error) {
      throw error;
    }
  };