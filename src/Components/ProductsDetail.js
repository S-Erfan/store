import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';

//stylesheet
import styles from './styles/ProductsDetail.module.css';

//contect products
import { ProductsContext } from '../Context/ContextProducts';

const ProductsDetail = () => {

    const params = useParams();
    
    const products = useContext(ProductsContext);
    const targetProduct = products[params.id - 1];
    const {image, title, description, price, category} = targetProduct;

    return (
        <div className={styles.container}>
            <div>
                <h1>product #{params.id}</h1>
                <img src={image} alt={title} />
            </div>
            <div className={styles.detail}>
                <h3>{title}</h3>
                <p>{description}</p>
                <p><span>category:</span>{category}</p>
                <div>
                    <span>{price}$</span>
                    <Link to='/products' >go to shop page</Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetail;