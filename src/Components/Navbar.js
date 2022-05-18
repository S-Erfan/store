import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';

//stylesheet
import styles from './styles/Navbar.module.css';
import './styles/NavbarResponsive.css'

//icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

//context
import { CartContext } from '../Context/CartContextProvider';

const Navbar = () => {

    const humbergurMenu = useRef()
    const textMenu = useRef()

    const {state} = useContext(CartContext);
    
    const humbergurHandler = () => {
        console.log(humbergurMenu.current);
        humbergurMenu.current.classList.toggle("humbergurActive");
        textMenu.current.classList.toggle("showMenu");


    }

    return (
        <header className={styles.mainContainer}>
            <div className={styles.container}>
                <ul ref={textMenu}>
                    <li><Link to='/' >Home</Link></li>
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                </ul>
                <div className={styles.humbergur} ref={humbergurMenu} onClick={humbergurHandler}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
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