import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from './useFetch';
import {ref, remove } from "firebase/database";
import { database } from "../firebase"; // Import the 'database' object from your 'firebase.js' file

const BlogDetails = () => {
    const {id} = useParams();
    const { data: blog, isPending, error } = useFetch(`blogs/${id}`);
  const navigate = useNavigate();

  const handleDelete = () => {
    const blogRef = ref(database, `blogs/${id}`);

    remove(blogRef)
    .then(() => {
      console.log('Blog deleted');
      navigate('/');
    })
    .catch((err) => {
      console.error('Error deleting blog:', err);
    });
  }
  return (
    <div className='blog-details'>
      {isPending && <div>Loading...</div>}
      {error && {error}}
      {blog && (
        <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>
                {blog.body}
            </div>
            <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  )
}

export default BlogDetails
