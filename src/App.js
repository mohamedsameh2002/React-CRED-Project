import Navbar from "./compoenents/Navbar";
import Sidebar from "./compoenents/Sidebar";
import "./App.css"
import { Route, Routes, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import ProductDetails from "./pages/ProductDetails";
import EditProduct from "./pages/EditProduct";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="row">
        <div className="col-2 sidebar">
          <Sidebar></Sidebar>
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="products" element={<Outlet></Outlet>}>
              <Route path="" element={<Products></Products>}></Route>
              <Route path="add" element={<AddProduct></AddProduct>}></Route>
              <Route path=":productID" element={<ProductDetails></ProductDetails>}></Route>
              <Route path="edit/:productID" element={<EditProduct></EditProduct>}></Route>
            </Route>
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default App;
