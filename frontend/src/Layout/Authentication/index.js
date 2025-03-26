import React from "react";
import { useState, useEffect } from "react";
import { useNavigate,NavLink} from 'react-router-dom';
import { userLogin } from "../../apiUtils/userApi";


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const token = JSON.parse(localStorage.getItem('@token'));
      const user = JSON.parse(localStorage.getItem('@user'));
      if (user && token) {

        navigate('/Home');
      }
     
    } catch (err) {
      console.error("Error accessing localStorage:", err);
      localStorage.removeItem('@token');
      localStorage.removeItem('@user');
      navigate('/authentication/login');
    }
  }, []);

  const isValid = () => {
    email.trim();
    password.trim();
    if (email && password) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
    else {
      return false;
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isValid()) {
      try {
        const response = await userLogin({ email: email, password: password });
        if (response?.success) {
          localStorage.setItem("@token", JSON.stringify(response.user.token));
          localStorage.setItem("@user", JSON.stringify(response.user.user));
          navigate('/');
        }
        else {
          alert("enter valid email and password");
        }

      }
      catch (error) {
        if (error.response) {
          if (error.response.status === 401) {
            alert("Incorrect email or password.");
          }
        }
      }
    } else {
      alert("Please enter a valid email and password.");
    }
  }
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 w-100 " style={{ backgroundColor: '#FFEDFA' }} >
      <div className="card p-4 shadow " style={{ width: "400px" }}>
        <h3 className="text-center mb-3">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
          <NavLink  className="btn btn-warning mt-2 mx-2 mb-2 w-100" to='/authentication/register'> New User? Register</NavLink>
        
        </form>
      </div>
    </div>

  )
}
export default Login;

