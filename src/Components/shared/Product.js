import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//stylesheet
import styles from '../styles/Products.module.css';

// functions
import { shorted, isInCart, quantityCount } from '../../helper/functions';

//context
import { CartContext } from '../../Context/CartContextProvider';


const Product = ({productData}) => {

    const {image, title, price, id } = productData;

    const {state, dispatch} =useContext(CartContext);

    return (
        <div className={styles.container}>
            <img src={image} alt='Product' />
            <h3>{shorted(title)}</h3>
            <p>{`${price}$`}</p>
            <div>
                <Link to={`/products/${id}`}>Detail</Link>
                <div>
                    {
                        isInCart(state, id) ?
                        <button onClick={()=> dispatch({type: 'INCREASE', payload: productData})} >+</button> :
                        <button onClick={()=> dispatch({type: 'ADD_ITEM', payload: productData})} >Add to cart</button>
                    }
                    {quantityCount(state, id) > 1 && <button onClick={()=> dispatch({type: 'DECREASE', payload: productData})} >-</button>}
                    {quantityCount(state, id) === 1 && <button onClick={()=> dispatch({type: 'REMOVE_ITEM', payload: productData})}>remove</button>}
                </div>
            </div>
        </div>
    );
};

export default Product;