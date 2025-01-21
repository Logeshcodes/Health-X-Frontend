import { API } from "../service/axios"
import authentictaionRoutes from "../@types/endPoints/authEndPoints"




export const StudentGoogleLogin = async (loginData:object)=>{
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
        withCredentials: true, // Ensure that cookies are sent with the request
      });
      console.log(response.data, "response login");
      return response.data;
    } catch (error) {
      throw error;
    }
  };