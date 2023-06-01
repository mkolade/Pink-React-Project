import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, push, set } from "firebase/database";

const Create = () => {
  const [title,setTitle] = useState('');
  const [body,setBody] = useState('');
  const [author,setAuthor] = useState('mario');
  const [isPending,setIsPending] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsPending(true);
    const newBlog = {
      title,
      body,
      author
    };

    const db = getDatabase();
    const blogsRef = ref(db, 'blogs');
    const newBlogRef = push(blogsRef);

    
    const newBlogKey = newBlogRef.key; // to Get the unique key
    const newBlogWithKey = {
      ...newBlog,
      id: newBlogKey // Add the key to the new blog object
    };
  

    set(newBlogRef, newBlogWithKey)
    .then(() => {
      console.log('New blog added');
      setIsPending(false);
      navigate('/');
    })
    .catch((err) => {
      console.error(err);
      setIsPending(false);
    });
  };


  return (
    <div className='create'>
      <h2>Add a New Blog</h2>
      <form  onSubmit={handleSubmit}>
        <label >Blog Title:</label>
        <input 
          type="text"
          required
          value={title}
          onChange = { (e) => setTitle(e.target.value)}
        />

        <label >Blog Body:</label>
        <textarea 
          required
          type="text"
          value={body}
          onChange = { (e) => setBody(e.target.value)}
        ></textarea>

        <label >Blog Author</label>
        <select 
          value={author}
          onChange = { (e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
          <option value="luigi">luigi</option>
        </select>
        {!isPending && <button>Add blog</button>}
        {isPending && <button disabled>Adding blog...</button>}
      </form>
    </div>
  )
}

export default Create
