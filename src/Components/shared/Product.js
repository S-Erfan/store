import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//stylesheet
import styles from '../styles/Products.module.css';

// functions
import { shorted, isInCart, quantityCount } from '../../helper/functions';

//context
import { CartContext } from '../../Context/CartContextProvider';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


const Product = ({productData}) => {

    const {image, title, price, id } = productData;

    const {state, dispatch} =useContext(CartContext);

    return (
        <div className={styles.container}>
            <img src={image} alt='Product' />
            <h3>{shorted(title)}</h3>
            <p>{`${price}$`}</p>
            <div className={styles.btnContainer}>
                <Link to={`/products/${id}`}>Detail</Link>
                <div className={styles.btnsChanger}>
                    {
                        isInCart(state, id) ?
                        <button className={styles.upOne} onClick={()=> dispatch({type: 'INCREASE', payload: productData})} >+</button> :
                        <button className={styles.add} onClick={()=> dispatch({type: 'ADD_ITEM', payload: productData})} >Add to cart</button>
                    }
                    {quantityCount(state, id) > 1 && <button className={styles.DOne} onClick={()=> dispatch({type: 'DECREASE', payload: productData})} >-</button>}
                    {quantityCount(state, id) === 1 && <button className={styles.trash} onClick={()=> dispatch({type: 'REMOVE_ITEM', payload: productData})}><FontAwesomeIcon icon={faTrash}/></button>}
                </div>
            </div>
        </div>
    );
};

export default Product;