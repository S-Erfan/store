import React, { useContext } from 'react';

//components
import Cart from './shared/Cart';

//context
import { CartContext } from '../Context/CartContextProvider';
import { Link } from 'react-router-dom';

const CartShop = () => {

    const { state, dispatch } = useContext(CartContext);

    return (
        <div>
            <div>
                {
                    state.selectedItems.map(item=> <Cart key={item.id} data={item} />)
                }
            </div>
            {
                state.itemCounter > 0 && <div>
                    <p><span>total items:</span>{state.itemCounter}</p>
                    <p><span>total payments:</span>{state.total}</p>
                    <div>
                        <button onClick={()=> dispatch({type:'CHECKOUT'})} >checkout</button>
                        <button onClick={()=> dispatch({type:'CLEAR'})} >clear</button>
                    </div>
                </div>
            }
            {
                state.checkout && <div>
                    <h3>checkout out successfully</h3>
                    <Link to='/products'>Buy More</Link>
                </div>
            }
            {
                !state.checkout && state.itemCounter === 0 && <div>
                    <h3>Want to Buy?</h3>
                    <Link to='/products'>go to shop</Link>
                </div>
            }
        </div>
    );
};

export default CartShop;