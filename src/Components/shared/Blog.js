import React from 'react';
import { v4 } from 'uuid';

//stylesheet
import styles from '../styles/Blog.module.css';


const Blog = ({data, tags}) => {


    return (
        <div className={styles.mainContainer} >
            <div className={styles.container}>
                <div className={styles.detail}>
                    <h3>{data.title}</h3>
                    <p>{data.text}</p>
                </div>
                <div className={styles.picture} >
                    <img src={data.image} alt='blog pic' />
                </div>
            </div>
            <div className={styles.tags}>
                { tags.length && tags.map(item => <span key={v4()}>#{item}</span>)}
            </div>
        </div>
    );
};

export default Blog;