import React, { useReducer } from "react";

// Context Products
import ContextProducts from "./Context/ContextProducts";

//Components
import Store from "./Components/Store";


function App() {
  return (
    <div>
      <h1>Shop Card</h1>
      <ContextProducts>
        <Store />
      </ContextProducts>
    </div>
  );
}

export default App;
