import React, { useState, useEffect } from 'react';
import '../pages/MoviePost.css';

/**
 * Reusable Movie Post Template Component
 * Use this template for all future movie posts
 * 
 * @param {Object} movieData - Contains all movie information
 * @param {string} movieData.title - Movie/Episode title
 * @param {string} movieData.imageUrl - Poster/banner image URL
 * @param {string} movieData.rating - Rating (e.g., "8.3")
 * @param {string} movieData.year - Release year
 * @param {Array} movieData.genres - Array of genres
 * @param {Object} movieData.info - Episode/movie information
 * @param {string} movieData.synopsis - Main description
 * @param {Array} movieData.highlights - Array of highlight strings
 * @param {Object} movieData.downloadLinks - Object with quality keys and download URLs
 * @param {Object} movieData.technicalSpecs - Technical specifications
 */
const MoviePostTemplate = ({ movieData }) => {
  const [clickCount, setClickCount] = useState(0);
  const requiredClicks = 1;
  
  useEffect(() => {
    window.scrollTo(0, 0);
    if (movieData.pageTitle) {
      document.title = movieData.pageTitle;
    }
  }, [movieData.pageTitle]);

  const [clickCounts, setClickCounts] = useState({});

  const handleDownloadClick = () => {
    setClickCount(1);
  };

  const handleQualityClick = (quality) => {
    const currentCount = clickCounts[quality] || 0;
    const newCount = currentCount + 1;

    setClickCounts(prev => ({
      ...prev,
      [quality]: newCount
    }));

    const link = movieData.downloadLinks[quality];
    if (link) {
      window.open(link, '_blank');
    }
  };

  const getButtonText = (quality) => {
    return `Download ${quality}`;
  };

  return (
    <div className="movie-post-page">
      <div className="movie-post-container">
        {/* Hero Section */}
        <div className="movie-hero-section">
          <img 
            src={movieData.imageUrl} 
            alt={movieData.title} 
            className="movie-banner-image"
          />
          <div className="movie-hero-overlay">
            <div className="movie-hero-content">
              <h1 className="movie-title-hero">{movieData.title}</h1>
              <div className="movie-meta-hero">
                <span className="year-badge">{movieData.year}</span>
                <span className="rating-badge">⭐ {movieData.rating}/10</span>
                {movieData.genres && movieData.genres.map((genre, index) => (
                  <span key={index} className="genre-badge">{genre}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Movie Information */}
        {movieData.info && (
          <div className="movie-info-section">
            <div className="info-grid">
              {Object.entries(movieData.info).map(([label, value]) => (
                <div key={label} className="info-item">
                  <span className="info-label">{label}:</span>
                  <span className="info-value">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Synopsis */}
        <div className="movie-description-section">
          <h2 className="section-title">{movieData.synopsisTitle || 'Synopsis'}</h2>
          <p className="movie-description">{movieData.synopsis}</p>
          
          {movieData.highlights && movieData.highlights.length > 0 && (
            <div className="highlights-section">
              <h3 className="subsection-title">{movieData.highlightsTitle || 'Highlights:'}</h3>
              <ul className="highlights-list">
                {movieData.highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Download Section */}
        <div className="download-section-main">
          <h2 className="section-title">{movieData.downloadTitle || `Download ${movieData.title}`}</h2>
          
          <div className="download-notice">
            <p>⚠️ Click the download button to access your selected quality.</p>
            {movieData.downloadNotice && <p>💡 {movieData.downloadNotice}</p>}
          </div>

          {clickCount >= requiredClicks ? (
            <div className="download-qualities-grid">
              {Object.entries(movieData.downloadLinks).map(([quality, link]) => {
                const qualityInfo = movieData.qualityInfo && movieData.qualityInfo[quality];
                const isPremium = quality.includes('4K') || quality.includes('HDR');
                
                return (
                  <div key={quality} className={`quality-card ${isPremium ? 'premium' : ''}`}>
                    <div className="quality-header">
                      <h3>{quality}</h3>
                      {qualityInfo && qualityInfo.size && (
                        <span className="quality-size">{qualityInfo.size}</span>
                      )}
                    </div>
                    {qualityInfo && qualityInfo.description && (
                      <p className="quality-desc">{qualityInfo.description}</p>
                    )}
                    <button 
                      onClick={() => handleQualityClick(quality)}
                      className={`quality-download-btn ${isPremium ? 'premium-btn' : ''}`}
                    >
                      {getButtonText(quality)}
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="initial-download-section">
              <button 
                onClick={handleDownloadClick}
                className="main-download-button"
              >
                ⬇️ {movieData.downloadButtonText || `Download ${movieData.title}`}
              </button>
            </div>
          )}
        </div>

        {/* Technical Specifications */}
        {movieData.technicalSpecs && (
          <div className="technical-specs-section">
            <h2 className="section-title">Technical Specifications</h2>
            <div className="specs-grid">
              {Object.entries(movieData.technicalSpecs).map(([category, specs]) => (
                <div key={category} className="spec-card">
                  <h4>{category}</h4>
                  <ul>
                    {specs.map((spec, index) => (
                      <li key={index}>{spec}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Info */}
        {movieData.additionalInfo && (
          <div className="additional-info-section">
            <h2 className="section-title">{movieData.additionalInfoTitle || 'About'}</h2>
            {movieData.additionalInfo.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}

        {/* Related Content */}
        {movieData.relatedContent && (
          <div className="related-section">
            <h2 className="section-title">{movieData.relatedTitle || 'Related Content'}</h2>
            <div className="related-notice">
              <p>{movieData.relatedContent}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MoviePostTemplate;
