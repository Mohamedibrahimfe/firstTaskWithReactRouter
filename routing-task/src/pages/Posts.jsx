import React from 'react';
import axios from 'axios';

import { useState,useEffect } from 'react';
const Posts = () => {
const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(response.data);
        // return
        setPosts(response.data);
    };
    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
            <a className='text-dark text-decoration-none bg-warning float-end p-3 rounded' href='/post'>Get Post by id</a>
            <h1>{ posts.map((post) => {
                return (
                    <div className='w-100 p-2 m-2 shadow' key={post.id}>
                        <h2 className='text-primary w-100 bg-white p-2 shadow'>Title: {post.title}</h2>
                        <p className='text-muted w-100  p-2 bg-white '>body: {post.body}</p>
                    </div>
                )
            })}</h1>
        </div>
    );
};

export default Posts;