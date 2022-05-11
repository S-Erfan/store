import React, { useContext } from 'react';

//functions
import { shorted } from '../../helper/functions';

//contect
import { CartContext } from '../../Context/CartContextProvider';

const Cart = (props) => {

    const { dispatch } = useContext(CartContext) 
    const { image, quantity, title, price } = props.data;

    return (
        <div>
            <img src={image} alt="product" />
            <div>
                <h3>{shorted(title)}</h3>
                <span>{price}</span>
            </div>
            <span>#{quantity}</span>
            <div>
                {
                    quantity > 1 ?
                    <button onClick={()=> dispatch({type:"DECREASE", payload: props.data})} >-</button> :
                    <button onClick={()=> dispatch({type:"REMOVE_ITEM", payload: props.data})}>remove</button>
                }
                <button onClick={()=> dispatch({type:"INCREASE", payload: props.data})} >+</button>
            </div>
        </div>
    );
};

export default Cart;