import React from 'react';

//stylesheet
import styles from './styles/Logos.module.css';

import apple from "../image/apple.svg"
import xiaomi from "../image/xiaomi.jpg"
import sumsung from "../image/samsung.png"

const Logos = () => {
    return (
        <div className={styles.container}>
            <h2>Who Supports Us?</h2>
            <div className={styles.logos}>
                <img src={sumsung} alt='logo'/>
                <img src={apple} alt='logo'/>
                <img src={xiaomi} alt='logo'/>
            </div>
        </div>
    );
};

export default Logos;