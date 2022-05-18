import React, { useContext } from 'react';

// Components
import Product from './shared/Product';

//Products get 
import { ProductsContext } from '../Context/ContextProducts';

//stylesheet
import styles from './styles/Store.module.css';


const Store = () => {

    const products = useContext(ProductsContext);       

    return (
        <div className={styles.container}>
            {
            products.length ?  products.map(item => <Product key={item.id} productData={item} />) : <h1>Loading...</h1>
            }
        </div>
    );
};

export default Store;