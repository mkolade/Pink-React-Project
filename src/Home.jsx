import React from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('blogs');

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && (
        <BlogList blogs={Object.values(blogs)} title="All Blogs" />
      )}
    </div>
  );
};

export default Home;
