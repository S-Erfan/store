import React, { useContext } from 'react';

//functions
import { shorted } from '../../helper/functions';

//context
import { CartContext } from '../../Context/CartContextProvider';

//stylesheet
import styles from '../styles/Cart.module.css';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const Cart = (props) => {

    const { dispatch } = useContext(CartContext) 
    const { image, quantity, title, price } = props.data;

    return (
        <div className={styles.container}>
            <img src={image} alt="product" />
            <div className={styles.details}>
                <h3>{shorted(title)}</h3>
                <span>{price}$</span>
            </div>
            <span className={styles.quantity}>{quantity}</span>
            <div className={styles.containerBtn}>
                {
                    quantity > 1 ?
                    <button className={styles.DOne} onClick={()=> dispatch({type:"DECREASE", payload: props.data})} >-</button> :
                    <button className={styles.trash} onClick={()=> dispatch({type:"REMOVE_ITEM", payload: props.data})}><FontAwesomeIcon icon={faTrash} /></button>
                }
                <button className={styles.upOne} onClick={()=> dispatch({type:"INCREASE", payload: props.data})} >+</button>
            </div>
        </div>
    );
};

export default Cart;