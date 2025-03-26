import React, { useState, useEffect } from "react";
import axiosInstance from "../../axiosConfig/axiosConfig";
import Navbar from '../Navbar';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [refresh, setRefresh] = useState(false);
  
  const FetchCustomers = async () => {
    try {
        const response = await axiosInstance.get('/user');
        setCustomers(response.data.data);
        localStorage.setItem("customers", JSON.stringify(response.data.data));
        console.log("Fetched Users:", response.data.data);
    } catch (error) {
        console.error("Error fetching customers:", error);
    }
  };


useEffect(() => {
  FetchCustomers();
}, [refresh]); 
   

  return (
    <>
    <div><Navbar/></div>
    <div className="container-fluid d-flex text-center vh-100" style={{backgroundColor : '#B7B7B7'}}>
      <div className="row my-5 mt-5 text-center align-items-center justify-content-center mx-5  my-5 overflow-auto card p-4 shadow" 
      style={{backgroundColor:'#F5F5F7',
      width : '1200px'
  }}
  
 >
  
 <section className="row mx-10 mt-0">
    <div>
      <h2>User List</h2>
      {customers.length > 0 ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer._id}>
                <td>{customer.name}</td>
                <td>{customer.username}</td>
                <td>{customer.email}</td>
                <td>{customer.isActive ? 'Active' : 'Inactive'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      
      ) : (
        <p>No customers found.</p>
      )}
    </div>
  </section></div></div>
  </>
  );
};


export default Customers;
