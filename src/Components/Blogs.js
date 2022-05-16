import React, { useEffect, useState } from 'react';

//stylesheet
import styles from './styles/Blogs.module.css';

//function
import { getBlog } from '../service/api';

//components
import Baner from './shared/Baner';
import axios from 'axios';
import Blog from './shared/Blog';


const Blogs = () => {

    const [blog, setBlog] = useState([]);

    useEffect(()=> {
        axios.get("https://api.freerealapi.com/blogs/6185a7b3b883dbaafa9448de")
            .then(res => setBlog(res.data.blog));
        
    }, [])

    return (
        <div className={styles.mainContainer}>
            <Baner />
            {
                blog &&
                <Blog data={blog} />
            }
                <button onClick={()=> console.log(blog.tags[2])}>
                    click here
                </button>
        </div>
    );
};

export default Blogs;