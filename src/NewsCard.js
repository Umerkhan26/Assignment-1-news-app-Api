// src/NewsCard.js
import React from 'react';

const NewsCard = ({ article }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card bg-secondary text-white">
        {article.urlToImage && (
          <img src={article.urlToImage} alt={article.title} className="card-img-top" />
        )}
        <div className="card-body">
          <h5 className="card-title">{article.title}</h5>
          <p className="card-text">{article.description}</p>
          <p className="card-text">
            <strong>Author:</strong> {article.author || 'Not available'}
          </p>
          <p className="card-text">
            <strong>Source:</strong> {article.source.name}
          </p>
          <p className="card-text">
            <strong>Published:</strong> {new Date(article.publishedAt).toLocaleString()}
          </p>
          <a
            href={article.url}
            className="btn btn-primary btn-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
