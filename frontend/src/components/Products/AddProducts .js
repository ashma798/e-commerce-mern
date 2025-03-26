import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosConfig/axiosConfig";
import Navbar from '../Navbar';


const AddProducts  = () => {
    const [image,setImage] =useState(null);
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [volume, setVolume] = useState("");

    const navigate = useNavigate();
    
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
      };
    
    const handleProducts = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image); // Add the image file
        formData.append("name", name);
        formData.append("brand", brand);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("volume", volume);
        try {
           
            const response = await axiosInstance.post('/addProduct', formData, {
                headers: {
                    "Content-Type": "multipart/form-data", 
                  },
                
            });

            console.log("product Response:", response.data); 

            if (response.data.success) {
                console.log("Redirecting to product list");
             navigate("/products");
            } 
            else{
                console.error("Unexpected response:", response.data);
            }
        }catch (error) {
            console.error("add product failed:", error);
           
        }
    };
    return (
        <>
         <div> <Navbar /></div>

        <div className="d-flex justify-content-center container-fluid align-items-center my-5 vh-100" style={{ backgroundColor: "#B4EBE6" }}>
            <div className="card p-4  mx-5 my-5  shadow " style={{width : '900px'}}>
                <h3 className="text-center mb-3">Add Products</h3>   
                <form onSubmit={handleProducts}>
                    
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Brand</label>
                        <input type="text" className="form-control" value={brand} onChange={(e) => setBrand(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">description</label>
                        <input type="text" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">price</label>
                        <input type="Number" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Volume</label>
                        <input type="text" className="form-control" value={volume} onChange={(e) => setVolume(e.target.value)} />
                    </div>
                    <div className="mb-3">
                    <label className="form-label me-5">Product Image</label>
                    <input type="file" onChange={handleImageChange} required />
                   
                    </div>
                    
                    <button type="submit" className="btn btn-primary w-100">Save</button>
                   

                </form>
               
            </div>
        </div>
        </>
    );
};

export default AddProducts ;
