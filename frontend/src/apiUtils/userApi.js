import axiosInstance from "../axiosConfig/axiosConfig";
 export const userLogin = async (payload) =>{
    const {email,password} = payload;
    if(email && password){
        const result = await axiosInstance.post('/userLogin',payload);
     
        return {
            success :true,
            message : "login successful",
            user:result?.data
        } 
        

        }else{
        return {
            success :false,
            message : "invalid data",

        } 
    }
}

