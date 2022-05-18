import React, { useEffect, useState } from 'react';

//stylesheet
import styles from './styles/Blogs.module.css';


//components
import Baner from './shared/Baner';
import axios from 'axios';
import Blog from './shared/Blog';


const Blogs = () => {

    const [blog, setBlog] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(()=> {
        axios.get("https://api.freerealapi.com/blogs/6185a7b3b883dbaafa9448de")
            .then(res => {
                setBlog(res.data.blog);
                setShow(true)
            });
    }, [])

    return (
        <div className={styles.mainContainer}>
            <Baner />
            {
                show ?
                <Blog data={blog} tags={blog.tags} />
                : <h2>loading...</h2>
            }

        </div>
    );
};

export default Blogs;