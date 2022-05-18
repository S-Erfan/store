import React, { useContext } from 'react';

//components
import Cart from './shared/Cart';

//context
import { CartContext } from '../Context/CartContextProvider';
import { Link } from 'react-router-dom';

//stylesheet
import styles from './styles/CartShop.module.css';


const CartShop = () => {

    const { state, dispatch } = useContext(CartContext);

    return (
        <div className={styles.container}>
            <div className={styles.first}>
                {
                    state.selectedItems.map(item=> <Cart key={item.id} data={item} />)
                }
            </div>
            {
                state.itemCounter > 0 && <div className={styles.second}>
                    <p><span className={styles.total}>total items:</span>{state.itemCounter}</p>
                    <p><span className={styles.total}>total payments:</span>{state.total}</p>
                    <div className={styles.clean}>
                        <button onClick={()=> dispatch({type:'CHECKOUT'})} >checkout</button>
                        <button onClick={()=> dispatch({type:'CLEAR'})} >clear</button>
                    </div>
                </div>
            }
            {
                state.checkout && <div className={styles.checkoutMessage}>
                    <h3>checkout out successfully</h3>
                    <Link to='/products'>Buy More</Link>
                </div>
            }
            {
                !state.checkout && state.itemCounter === 0 && <div className={styles.clearMessage}>
                    <h3>Want to Buy?</h3>
                    <Link to='/products'>go to shop</Link>
                </div>
            }
        </div>
    );
};

export default CartShop;