import { useNavigate } from 'react-router-dom'; 
import React from 'react';

const Logout = () => {
  const navigate = useNavigate(); 
  const handleLogout = () => {
    localStorage.removeItem('@token');
    localStorage.removeItem('@user');
    navigate('/login');
  };

  return (
    <button style={{
        borderRadius:'5px',
        width: '120px',
        height: '35px',
        backgroundColor: '#E195AB',
        color : '#FFFFF',
        flex : 'd-flex',
        justifyContent: 'flex-end'
    }} onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
