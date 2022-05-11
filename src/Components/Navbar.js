import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

//stylesheet
import styles from './styles/Navbar.module.css';

//icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

//context
import { CartContext } from '../Context/CartContextProvider';

const Navbar = () => {

    const {state} = useContext(CartContext);
    console.log(state)
    return (
        <header className={styles.mainContainer}>
            <div className={styles.container}>
                <Link to='/products'>Products</Link>
                <div className={styles.cartShop}>
                    <Link to='/cart'>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </Link>
                    <span>{state.itemCounter}</span>
                </div>
            </div>
        </header>
    );
};

export default Navbar;