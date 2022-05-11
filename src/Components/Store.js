import React, { useContext } from 'react';

// Components
import Product from './shared/Product';

//Products get 
import { ProductsContext } from '../Context/ContextProducts';

const Store = () => {

    const products = useContext(ProductsContext)

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            {
            products.map(item => <Product key={item.id} productData={item} />)
            }
        </div>
    );
};

export default Store;