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



function App() {
  return (
    <div>
      <ContextProducts>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path='/products' element={<Store />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/cart' element={<CartShop />} />
            <Route path='/products/:id' element={<ProductsDetail />} />
            <Route path='/' element={ <Landing />} />
          </Routes>
        </CartContextProvider>
      </ContextProducts>
    </div>
  );
}

export default App;
