import React, { useReducer, createContext } from 'react';




const intialState = {
    selectedItems: [],
    itemCounter: 0,
    total: 0,
    checkout: false
}

const sumItems = item=> {
    const itemCounter = item.reduce((total, products)=> total + products.quantity, 0);
    const total = item.reduce((total, products)=> total + products.price * products.quantity, 0);
    return {itemCounter, total}
}


const cartReduce = (state, action)=> {
    switch(action.type) {
        case 'ADD_ITEM': 
            if(!state.selectedItems.find(item=> item.id === action.payload.id)){
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1,
                })
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumItems(state.selectedItems),
            }

        case 'REMOVE_ITEM': 
            const newSelectedItem =  state.selectedItems.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                selectedItems: [...newSelectedItem],
                ...sumItems(state.selectedItems),
            }
        
        case 'INCREASE': 
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            return {
                ...state,
                ...sumItems(state.selectedItems),
            }

        case 'DECREASE': 
            const indexD = state.selectedItems.findIndex(item=> item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            return {
                ...state,
                ...sumItems(state.selectedItems),
            }

        case 'CHECKOUT': 
            return {
                selectedItems: [],
                itemCounter: 0,
                total: 0,
                checkout: true,
            }

        case 'CLEAR':
            return {
                selectedItems: [],
                itemCounter: 0,
                total: 0,
                checkout: false,
            } 

        default: 
            return state
    }
}

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(cartReduce, intialState);

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;