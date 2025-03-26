import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosConfig/axiosConfig";


const Register = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");

    const navigate = useNavigate();
    

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
           
            const response = await axiosInstance.post('/register', {
                name,
                username,
                email,
                password,
                age
            });

            console.log("Registration Response:", response.data); 

            if (response.data.success) {
                console.log("Redirecting to login...");
                 navigate("/authentication/login", { replace: true });
            } 
            else{
                console.error("Unexpected response:", response.data);
            }
        }catch (error) {
            console.error("Registration failed:", error);
           
        }
    };
    return (
        <div className="d-flex justify-content-center container-fluid align-items-center my-5 vh-100" style={{ backgroundColor: "#E3D2C3" }}>
            <div className="card p-4  mx-5 my-5  shadow " style={{width : '900px',backgroundColor : '#FFFFF'}}>
                <h3 className="text-center mb-3">Register</h3>   
               <button style={{
                backgroundColor:'grey',
                borderRadius :'5px',
                color:'white',
                height:'40px',
                width:'800px'
               }}onClick={() => navigate("/authentication/login")}>
            Already Registered? Redirect to Login
        </button>
                <form onSubmit={handleRegister}>
                    
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Username</label>
                        <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Age</label>
                        <input type="number" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
                    </div>
                   
                    <button type="submit" className="btn btn-primary w-100">Register</button>
                   

                </form>
               
            </div>
        </div>
    );
};

export default Register;
