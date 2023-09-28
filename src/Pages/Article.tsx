import React from 'react';
import { useParams } from 'react-router-dom';

const Article = () => {
  const { id } = useParams();

  // Fetch the article data using the 'id' parameter

  return (
    <div>
      {/* Display the article content here */}
      <h1>Article {id}</h1>
      {/* Add the article content rendering */}
    </div>
  );
};

export default Article;
