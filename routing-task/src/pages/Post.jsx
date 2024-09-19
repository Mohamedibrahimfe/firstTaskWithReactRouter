import React from 'react';
import { useEffect, useState } from 'react';

const Post = () => {
    const [id, setId] = useState(0);
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const getPost = async () => {
            setLoading(true);
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}?delay=5000`);
            const data = await response.json();
            setLoading(false);
            setPost(data);
        }

        getPost();
    }, [id])


    return ( <div>
        <label className='text-primary  p-2 ' htmlFor="id">serch by id</label>
        <input className=' p-2 m-2 shadow rounded-pill border-0 ' type="text" onChange={(e) => setId(e.target.value)} />
        <div className='text-primary  p-2 '>{loading && "Loading..."}</div>
        {post &&!loading && <div className='text-dark  p-2 '> {post.title}</div>}   
        {post && <div className='text-muted  p-2 '>{post.body}</div>}   
    </div> );
}
 
export default Post;