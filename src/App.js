import React from "react";
import { Route, Routes } from "react-router-dom";

// Context Products
import ContextProducts from "./Context/ContextProducts";
import CartContextProvider from "./Context/CartContextProvider";

//Components
import Store from "./Components/Store";
import ProductsDetail from "./Components/ProductsDetail";
import Navbar from "./Components/Navbar";
import CartShop from "./Components/CartShop";
import Landing from "./Components/Landing";
import Blogs from "./Components/Blogs";
import Footer from "./Components/Footer";
import ContactUs from "./Components/ContactUs";
import SignUp from './Components/Account/SignUp';
import LogIn from "./Components/Account/LogIn";

//style
import './App.css'


function App() {
  return (
    <div className="App">
      <ContextProducts>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path='/log-in' element={<LogIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/products' element={<Store />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/cart' element={<CartShop />} />
            <Route path='/products/:id' element={<ProductsDetail />} />
            <Route path='/' element={ <Landing />} />
          </Routes>
          <Footer />
        </CartContextProvider>
      </ContextProducts>
    </div>
  );
}

export default App;
