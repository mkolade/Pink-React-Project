import React from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';
/* To open json in terminal => npx json-server --watch data/db.json --port 8000 */
/* jsonServerLink = http://localhost:8000/blogs ;
jsonEndPoints = {
  /blogs -> GET -> Fetch all Blogs
  /blogs/{id} -> GET -> Fetch a single Blog
  /blogs -> POST -> Add a new  Blog
  /blogs/{id} -> DELETE -> Delete Blog
} */


const Home = () => {

  /* const handleDelete = (id) => {
      const newBlogs = blogs.filter((blog) => blog.id !== id);
      setBlogs(newBlogs);
  } */ 
  
  const {data:blogs,isPending,error} = useFetch(`http://localhost:8000/blogs`)

  return (
    <div className="home">
      { error && 
        <div>
          {error}
        </div>
      }
      {isPending && 
        <div>
          Loading...
        </div>
      }
      {blogs && <BlogList
        blogs = {blogs}
        title = 'All Blogs'
        /*  handleDelete = {handleDelete} */
      />} 
    </div>
  )
}

export default Home

