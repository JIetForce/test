import React, { useState, useEffect } from 'react';

import axios from 'axios';

import './news.css';

const News = () => {
  const [articles, setArticles] = useState([]);

  const url =
    'http://newsapi.org/v2/top-headlines?' +
    'country=ua&' +
    'apiKey=ca74971e4b224cc4aa732fa0de7a27bc';

  useEffect(() => {
    axios.get(url).then(res => {
      const articles = res.data.articles;
      setArticles(articles);
    });
  }, [url]);

  const news = articles.map(el => {
    return (
      <li key={el.title}>
        <p>{el.publishedAt.slice(0, -10)}</p>
        <h2>{el.title}</h2>
        <p>{el.description}</p>
      </li>
    );
  });

  return (
    <div className='news'>
      <h1>News Page</h1>
      <ul>{news}</ul>
    </div>
  );
};

export default News;
