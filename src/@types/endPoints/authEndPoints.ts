
const authentictaionRoutes = {

    // Users
    googleLogin_user:'/auth/user/googleLogin',

    login_user:'/auth/user/login',
    forgotResendOtp_user:'/auth/user/forgot_password',


    signup_user:"/auth/user/signup",
    verifyOtp_user:'/auth/user/verify_otp',
    resendOtp_user:'/auth/user/resendOtp',

    verifyResetOtp_user:'/auth/user/reset_verify_otp',
    resetPassword_user:'/auth/user/reset_password',
    
    logout_user:'/auth/user/logout',
    
    
    
    





    // doctor 

    signup_Doctor:"/auth/doctor/register",
    login_Doctor:'/auth/doctor/login',
    resendOtp_Doctor:'/auth/doctor/resendOtp',
    verifyOtp_Doctor:'/auth/doctor/createUser',
    
    logout_Doctor:'/auth/doctor/logout',
    verifyResetOtp_Doctor:'/auth/doctor/verifyResetOtp',
    forgotResendOtp_Doctor:'/auth/doctor/forgotResendOtp',
    resetPassword_Doctor:'/auth/doctor/resetPassword',

    
    // signup_Student:"/auth/student/register",
    // resendOtp_Student:'/auth/student/resendOtp',
    // verifyOtp_Student:'/auth/student/createUser',
    // login_Student:'/auth/student/login',
    // logout_Student:'/auth/student/logout',
    // resetPasswordLink_Student:'/auth/student/verifyEmail',
    // verifyResetOtp_Student:'/auth/student/verifyResetOtp',
    // forgotResendOtp_Student:'/auth/student/forgotResendOtp',
    // resetPassword_Student:'/auth/student/resetPassword',
    // googleLogin_Student:'/auth/student/googleLogin',
    
}






export default authentictaionRoutes;



