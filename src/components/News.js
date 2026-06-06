import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './News.css';

const NewsCard = ({ news }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    navigate(`/news/${news.id}`);
  };

  return (
    <div 
      className="news-card"
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="news-image-container">
        <img src={news.imageUrl} alt={news.title} className="news-image" />
        <span className="news-category">{news.category}</span>
      </div>
      <div className="news-content">
        <h3>{news.title}</h3>
        <p className="news-excerpt">{news.excerpt}</p>
        <div className="news-meta">
          <span className="news-author">{news.author}</span>
          <span className="news-date">{news.date}</span>
        </div>
      </div>
    </div>
  );
};

const FeaturedNewsCard = ({ news }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/news/${news.id}`);
  };

  return (
    <div className="featured-news-container" onClick={handleCardClick}>
      <div className="featured-news-image">
        <img src={news.imageUrl} alt={news.title} />
      </div>
      <div className="featured-news-content" onClick={(e) => e.stopPropagation()}>
        <span className="news-category-featured">{news.category}</span>
        <h2>{news.title}</h2>
        <p className="featured-excerpt">{news.excerpt}</p>
        <div className="news-meta">
          <span className="news-author">{news.author}</span>
          <span className="news-date">{news.date}</span>
        </div>
        <button className="read-full-article" onClick={handleCardClick}>Read Full Article</button>
      </div>
    </div>
  );
};

const News = ({ newsData }) => {
  if (!newsData || newsData.length === 0) {
    return <div className="no-news">No news available at the moment.</div>;
  }

  const featuredNews = newsData[0];
  const latestNews = newsData.slice(1, 4);
  const featuredArticles = newsData.slice(4, 7);

  return (
    <div className="news-page">
      <div className="news-header">
        <h1>Entertainment News</h1>
        <p>Stay updated with the latest movie and entertainment industry news</p>
      </div>

      {featuredNews && (
        <section className="featured-section">
          <FeaturedNewsCard news={featuredNews} />
        </section>
      )}

      <section className="latest-news-section">
        <div className="section-header">
          <h2>Latest News</h2>
          <p>The most recent updates, breakthroughs and discoveries</p>
        </div>
        <div className="news-grid">
          {latestNews.map((news, index) => (
            <NewsCard key={index} news={news} />
          ))}
        </div>
      </section>

      <section className="featured-articles-section">
        <div className="section-header">
          <h2>Featured Articles</h2>
          <p>Explore our collection of the most important entertainment breakthroughs</p>
        </div>
        <div className="news-grid">
          {featuredArticles.map((news, index) => (
            <NewsCard key={index} news={news} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default News;
