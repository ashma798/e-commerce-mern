import React,{useState, useEffect} from 'react'
import axiosInstance from "../../axiosConfig/axiosConfig";
import { NavLink, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import Cart from '../Cart/Cart';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../reduxStore/cartSlice';



export const Products = () => {
    const[products,setProducts] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const FetchProducts= async () =>{
        try{
            const response = await axiosInstance('/products');
            console.log("prd:",response.data.data);
            setProducts(response.data.data);
            localStorage.getItem('products',JSON.stringify(response.data.data));
        }catch(err){
            console.error('error fetching products:',err);
        }
    }
    useEffect(()=>{
        FetchProducts();
    },[]);

    const addToCartHandler = (perfume) => {
      dispatch(addItemToCart(perfume)); 
      navigate("/Cart"); 
    };
    
  return (
    <>
   <div><Navbar/></div>
    <main>
          
        <h5  className='text-center align-items-center mt-3 '>Our Collections</h5>
        <div style={{display:'flex', justifyContent: 'flex-end'}}>
        <button className='text-center mb-5 p-2 ' style={{backgroundColor : 'blue' , 
          color: 'white',
            margin:'2px',
             border :'1px',
             borderRadius : '5px',
             width : '200px',
             height : '45px',
            
             }} 
             onClick={() => navigate("/addProduct")}>
          New Product
        </button></div>
      <div className='d-flex flex-wrap justify-content-start'>
        { products.map((perfume)=>(
    <div key={perfume._id} className="card mt-8 p-2  mx-5 mb-5" style={{width: "18rem", height :'auto'}}>
      <img className="card-img-top" style={{width: "17rem",height:"42vh"}} src= {`http://localhost:5000/uploads/${perfume.image}`} alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">{perfume.name}</h5>
          <p className="card-text text-center">{perfume.brand}-{perfume.description}</p>
          <p className="card-text text-center">{perfume.volume}ml -{perfume.price} Rs</p>
          <NavLink className="btn btn-primary justify-content-center mx-5" onClick={() => addToCartHandler(perfume)}>Add to Cart</NavLink>
        </div>
    </div>
   
         ) )
};
</div>
  </main>
  </>
);
};

export default Products;
