import React from 'react';

//stylesheet
import styles from './styles/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <p>
                &copy; All Rights Reserved
            </p>
        </div>
    );
};

export default Footer;