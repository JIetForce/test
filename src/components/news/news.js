import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Articles from './articles';

import './news.css';
import Spinner from '../spinner/spinner';

const URL =
  'http://newsapi.org/v2/top-headlines?country=ua&apiKey=ca74971e4b224cc4aa732fa0de7a27bc';

const News = () => {
  const [articles, setArticles] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(URL)
      .then(res => {
        const articles = res.data.articles;
        setArticles(articles);
      })
      .catch(error => setError('Something went wrong!'));
  }, []);

  let show;

  if (articles) {
    show = <Articles items={articles} />;
  } else if (error) {
    show = <h1>{error}</h1>;
  } else {
    show = <Spinner />;
  }

  return (
    <div className='news'>
      <h1>News Page</h1>
      {show}
    </div>
  );
};

export default News;
