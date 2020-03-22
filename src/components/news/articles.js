import React from 'react';

const Articles = ({ items }) => (
  <ul>
    {items.map(el => (
      <li key={el.title}>
        <p>{el.publishedAt.slice(0, -10)}</p>
        <h2>{el.title}</h2>
        <p>{el.description}</p>
      </li>
    ))}
  </ul>
);

export default Articles;