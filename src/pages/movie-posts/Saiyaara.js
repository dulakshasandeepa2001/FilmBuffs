import React, { useState, useEffect } from 'react';
import '../MoviePost.css';

const SaiyaaraPost = () => {
  const [clickCount, setClickCount] = useState(0);
  const requiredClicks = 1; // Only need one click to show download options
  
  useEffect(() => {
    document.title = "Saiyaara (2025) Full Movie Download & Watch Online | Film Buffs";
    // SEO meta tags setup
  }, []);
  
  // DownloadPage functionality
  const [showPopup, setShowPopup] = useState(false);
  const [currentQuality, setCurrentQuality] = useState('');
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);

  // Download links for different quality options
  const downloadLinks = {
    '720p': 'https://hubdrive.space/file/2051063028', // 720P 10Bit
    '1080p': 'https://hubdrive.space/file/2761993109', // 1080P 10Bit
    'Direct Link': 'https://hubdrive.space/file/2761993109', // Default direct link to 1080p
  };

  const handleDownloadClick = () => {
    // Only need one click to show download options
    setClickCount(1);
  };

  const handleQualityClick = (quality) => {
    // Show the server selection popup immediately
    setCurrentQuality(quality);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setCurrentQuality('');
  };

  const handleDownload = (link) => {
    window.open(link, '_blank');
    closePopup();
  };

  const handleServerClick = (serverName) => {
    // Always provide the download link immediately without requiring multiple clicks
    const downloadLink = downloadLinks[currentQuality];
    if (downloadLink) {
      handleDownload(downloadLink);
    }
  };

  return (
    <div className="movie-post-page">
      <div className="movie-poster-container">
        <img 
          src="https://m.media-amazon.com/images/M/MV5BMTk2ZmFhYjctYWZiYy00N2IxLWEzMWItZGRiMDY4ZDQwZWFlXkEyXkFqcGc@._V1_FMjpg_UX933_.jpg" 
          alt="Saiyaara 2025 movie poster" 
          className="movie-poster-image" 
          title="Saiyaara (2025) - Official Movie Poster"
        />
        <div className="movie-content">
          <h1 className="movie-title">Saiyaara (2025) - Download Full Movie</h1>
          <div className="movie-rating">Rating: 7.6/10</div>
          <div className="download-section">
            <h2>Download Options</h2>
            <div className="trailer-section">
              <a 
                href="https://www.youtube.com/results?search_query=saiyaara+movie+2025+trailer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="trailer-btn"
              >
                🎬 Watch Trailer
              </a>
            </div>
            <div className="download-buttons">
              {clickCount < requiredClicks ? (
                <button onClick={handleDownloadClick} className="main-download-btn">
                  📥 Click to Download
                </button>
              ) : (
                <button onClick={() => setShowDownloadOptions(true)} className="main-download-btn">
                  📥 Show Download Options
                </button>
              )}
              <div className="download-info">
                <p>Click the download button to access download options!</p>
                <p>1080p and 720p quality available</p>
                <p>10Bit quality with excellent picture quality</p>
                <p>All downloads available instantly - no waiting!</p>
              </div>
            </div>
            {showDownloadOptions && clickCount >= requiredClicks && (
              <div className="download-options">
                <h2>Select Quality & Format</h2>
                <div className="quality-section">
                  <h3>Premium Quality Options</h3>
                  <div className="quality-buttons">
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('1080p')}
                    >
                      1080p 10Bit WEB-DL
                    </button>
                  </div>
                </div>

                <div className="quality-section">
                  <h3>Standard Quality Options</h3>
                  <div className="quality-buttons">
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('720p')}
                    >
                      720p 10Bit WEB-DL
                    </button>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('Direct Link')}
                    >
                      Direct Download Link
                    </button>
                  </div>
                </div>

                <div className="instructions">
                  <p>🔴 Select any quality to proceed to download</p>
                  <p>📱 Compatible with all devices</p>
                  <p>⚡ High-speed download servers</p>
                </div>
              </div>
            )}
            {showPopup && (
              <div className="popup-overlay">
                <div className="popup-content">
                  <div className="popup-header">
                    <h2>Select Download Server - {currentQuality}</h2>
                    <button className="close-btn" onClick={closePopup}>×</button>
                  </div>
                  
                  <div className="server-buttons">
                    <button 
                      className="server-btn"
                      onClick={() => handleServerClick('Server 1')}
                    >
                      🚀 Server 1 - Fast Download
                    </button>
                    
                    <button 
                      className="server-btn"
                      onClick={() => handleServerClick('Server 2')}
                    >
                      ⚡ Server 2 - Mirror
                    </button>
                    
                    <button 
                      className="server-btn"
                      onClick={() => handleServerClick('Server 3')}
                    >
                      💎 Server 3 - Premium
                    </button>
                  </div>
                  
                  <div className="popup-info">
                    <p>🔴 Choose any server to download immediately</p>
                    <p>📥 All servers provide fast, secure downloads</p>
                    <p>🎬 Complete movie with excellent quality</p>
                    <p>🔒 All servers provide secure and virus-free downloads</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="movie-info">
            <h2>About the Movie</h2>
            <p>
              <strong>Saiyaara (2025)</strong> is a captivating romantic drama that follows the journey of two individuals from different walks of life whose paths cross unexpectedly. Set against the backdrop of contemporary India, the film explores themes of love, destiny, and the courage to follow your heart.
            </p>
            <p>
              With its mesmerizing soundtrack, breathtaking cinematography, and compelling performances, Saiyaara delivers an emotional story that resonates with audiences. As the characters navigate their complex relationship amidst social expectations and personal challenges, they discover that true love often requires the greatest sacrifices.
            </p>
            <div className="movie-details">
              <div className="detail-item">
                <span className="label">Release Date:</span>
                <span className="value">February 2025</span>
              </div>
              <div className="detail-item">
                <span className="label">Duration:</span>
                <span className="value">2h 15m</span>
              </div>
              <div className="detail-item">
                <span className="label">Genre:</span>
                <span className="value">Romance, Drama</span>
              </div>
              <div className="detail-item">
                <span className="label">Director:</span>
                <span className="value">Rahul Sharma</span>
              </div>
              <div className="detail-item">
                <span className="label">Stars:</span>
                <span className="value">Alia Bhatt, Sidharth Malhotra, Tabu</span>
              </div>
              <div className="detail-item">
                <span className="label">File Size:</span>
                <span className="value">Varies by quality (720p/1080p)</span>
              </div>
              <div className="detail-item">
                <span className="label">Video Quality:</span>
                <span className="value">1080p, 720p (10Bit)</span>
              </div>
              <div className="detail-item">
                <span className="label">Audio:</span>
                <span className="value">Hindi (5.1)</span>
              </div>
              <div className="detail-item">
                <span className="label">Subtitles:</span>
                <span className="value">English</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaiyaaraPost;
