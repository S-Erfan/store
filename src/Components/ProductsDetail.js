import React, { useContext } from 'react';
import {  useParams } from 'react-router-dom';
//functions 
import { isInCart, quantityCount } from '../helper/functions';

//stylesheet
import styles from './styles/ProductsDetail.module.css';

//context products
import { ProductsContext } from '../Context/ContextProducts';
import { CartContext } from '../Context/CartContextProvider';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faTrash } from '@fortawesome/free-solid-svg-icons';


const ProductsDetail = () => {

    const params = useParams();
    
    const products = useContext(ProductsContext);
    const targetProduct = products[params.id - 1];
    const {image, title, description, price, category} = targetProduct;

    const {state, dispatch} = useContext(CartContext);

    console.log(state)
    console.log(quantityCount(state, targetProduct.id ) > 1)
    return (
        <div className={styles.container}>
            <div className={styles.containerImg}>
                <img src={image} alt={title} />
            </div>
            <div className={styles.detail}>
                <h3>{title}</h3>
                <p>{description}</p>
                <p><span>category:</span>{category}</p>
                <div className={styles.btn}>
                    <span>{price}$</span> 
                    <div className={styles.btnCart}>
                        {
                            isInCart(state, targetProduct.id) ?
                            <button className={styles.upOne} onClick={()=> dispatch({type: 'INCREASE', payload: targetProduct})} >+</button>:
                            <button className={styles.add} onClick={()=> dispatch({type: "ADD_ITEM", payload: targetProduct })} >add to cart</button>
                        }
                        {quantityCount(state, targetProduct.id) > 1 && <button className={styles.DOne} onClick={()=> dispatch({type: 'DECREASE', payload: targetProduct})} >-</button>}
                        {quantityCount(state, targetProduct.id) === 1 && <button className={styles.trash} onClick={()=> dispatch({type: 'REMOVE_ITEM', payload: targetProduct})}><FontAwesomeIcon icon={faTrash}/></button>}
                    </div>       
                </div>
            </div>
            <FontAwesomeIcon icon={faArrowCircleLeft} className={styles.back} onClick={()=> window.history.back()} />
        </div>
    );
};

export default ProductsDetail;