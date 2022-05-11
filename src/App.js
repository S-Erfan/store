import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// Context Products
import ContextProducts from "./Context/ContextProducts";
import CartContextProvider from "./Context/CartContextProvider";

//Components
import Store from "./Components/Store";
import ProductsDetail from "./Components/ProductsDetail";
import Navbar from "./Components/Navbar";
import CartShop from "./Components/CartShop";


function App() {
  return (
    <div>
      <ContextProducts>
        <CartContextProvider>
          <Navbar />
          <Routes>
            <Route path='/products' element={<Store />} />
            <Route path='/cart' element={<CartShop />} />
            <Route path='/products/:id' element={<ProductsDetail />} />
            <Route path='/' element={<Navigate to='/products' />} />
          </Routes>
        </CartContextProvider>
      </ContextProducts>
    </div>
  );
}

export default App;
