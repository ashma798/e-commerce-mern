import { createBrowserRouter,Navigate} from "react-router-dom";
import  Login from "./Layout/Authentication";
import Users  from  "./components/Users";
import Home  from  "./components/Home";
import Register from "./Layout/Register";
import Products from "./components/Products";
import AddProducts from "./components/Products/AddProducts ";
import Cart from "./components/Cart/Cart"
import Logout from "./components/Logout";



const isAuthenticated= ()=>{
    try {
    const token = JSON.parse(localStorage.getItem('@token'));
    const user = JSON.parse(localStorage.getItem('@user'));
  
   
    if(user && token){
        return true;
    }
}catch (error) {
        console.error("Error parsing JSON:", error);
        return false;
    }
   
};

const ProtectedRoute = ({ element }) => {
    return isAuthenticated() ? <>{element}</> : <Navigate to="/authentication/login" />;
};

const FallbackRoute = () => {
    return isAuthenticated() ? <Navigate to="/" /> : <Navigate to="/authentication/login" />;
}


const routes = createBrowserRouter([
    { path: "/Home", element: <Home/> },
    { path: "/products", element: <Products/> },
    {path: "/addProduct", element :<AddProducts/> },
    {path: "/cart", element: <Cart />},
    { path: "/authentication/login", element: <Login /> },
    { path: "/authentication/register", element: <Register /> },
    { path: "/", element: <Navigate to="/authentication/login"/> },
    {  path: "/user",element: <ProtectedRoute element={<Users />} />, },
    { path: "*", element : <Navigate to="/authentication/login" />}, 
    { path: "/Logout", element: <Logout/> }
  ]);

export default routes;




