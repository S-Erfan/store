import React from 'react';

// functions
import { shorted } from '../../helper/functions';

const Product = ({productData}) => {

    const {image, title, price, } = productData;

    return (
        <div>
            <img src={image} alt='Product' style={{width: '200px', height: '200px'}} />
            <h3>{shorted(title)}</h3>
            <p>{`${price}$`}</p>
            <div>
                <a>Detail</a>
                <div>
                    <button>Add To Card</button>
                </div>
            </div>
        </div>
    );
};

export default Product;