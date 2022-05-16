import React from 'react';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

//stylesheet
import styles from './styles/SearchBox.module.css'

const SearchBox = () => {
    return (
        <div className={styles.container}>
            <h1>
                Search what you want
            </h1>
            <div className={styles.inputContainer}>
                <input type='text' placeholder='Search...' />
                <FontAwesomeIcon icon={faSearch} /> 
            </div>
        </div>
    );
};

export default SearchBox;