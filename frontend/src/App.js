import {RouterProvider} from "react-router-dom";
import routes from "../src/routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
   <RouterProvider router = {routes} />
  );
}

export default App;
