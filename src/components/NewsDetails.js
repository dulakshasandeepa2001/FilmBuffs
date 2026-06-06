import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './NewsDetails.css';

const NewsDetails = ({ newsData }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Find the news article by ID
  const article = newsData.find(news => news.id === parseInt(id));

  if (!article) {
    return (
      <div className="news-details-page">
        <button className="back-button" onClick={() => navigate('/news')}>
          ← Back to News
        </button>
        <div className="not-found">
          <h2>Article not found</h2>
          <p>The article you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="news-details-page">
      <button className="back-button" onClick={() => navigate('/news')}>
        ← Back to News
      </button>

      <article className="news-article">
        <div className="article-header">
          <span className="article-category">{article.category}</span>
          <h1 className="article-title">{article.title}</h1>
          
          <div className="article-meta">
            <div className="meta-left">
              <span className="author-name">{article.author}</span>
              <span className="meta-divider">•</span>
              <span className="publish-date">{article.date}</span>
            </div>
          </div>
        </div>

        <div className="article-featured-image">
          <img src={article.imageUrl} alt={article.title} />
        </div>

        <div className="article-body">
          <p className="article-excerpt">{article.excerpt}</p>
        </div>

        <div className="article-footer">
          <div className="article-tags">
            <span className="tag">{article.category}</span>
            <span className="tag">Movie News</span>
          </div>
        </div>
      </article>

      <div className="related-articles">
        <h2>More Entertainment News</h2>
        <div className="related-grid">
          {newsData.slice(0, 3).map(news => (
            news.id !== article.id && (
              <div 
                key={news.id} 
                className="related-card"
                onClick={() => navigate(`/news/${news.id}`)}
              >
                <img src={news.imageUrl} alt={news.title} />
                <div className="related-content">
                  <span className="related-category">{news.category}</span>
                  <h3>{news.title}</h3>
                  <p>{news.date}</p>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
