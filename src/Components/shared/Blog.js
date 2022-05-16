import React from 'react';

const Blog = ({data}) => {

    const { tags } = data;

    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.text}</p>
            <img src={data.image} />
            <div>
                
            </div>
        </div>
    );
};

export default Blog;