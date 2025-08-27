import React, { useState } from 'react';
import '../MoviePost.css';

const TheMapThatLeadsToYouPost = () => {
  const [clickCount, setClickCount] = useState(0);
  const requiredClicks = 5;
  const [showPopup, setShowPopup] = useState(false);
  const [currentQuality, setCurrentQuality] = useState('');
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);

  // Redirect URLs for the first 4 clicks
  const redirectUrls = [
    'https://otieu.com/4/9550585',
    'https://otieu.com/4/9550586',
    'https://otieu.com/4/9545201',
    'https://otieu.com/4/9550584'
  ];

  // Download links for The Map That Leads to You
  const downloadLinks = {
    '480p x264-mega': 'https://hubdrive.space/file/2318383402',
    '480p x264-gdrive': 'https://hubdrive.space/file/2318383402',
    '480p x264-viking': 'https://hubdrive.space/file/2318383402',
    '720p x264-mega': 'https://hubdrive.space/file/2318383402',
    '720p x264-gdrive': 'https://hubdrive.space/file/2318383402',
    '720p x264-viking': 'https://hubdrive.space/file/2318383402',
    '1080p x264-mega': 'https://hubdrive.space/file/3198399493',
    '1080p x264-gdrive': 'https://hubdrive.space/file/3198399493',
    '1080p x264-viking': 'https://hubdrive.space/file/3198399493',
  };

  const handleDownloadClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount <= 4) {
      const urlIndex = (newCount - 1) % redirectUrls.length;
      window.open(redirectUrls[urlIndex], '_blank');
    }
  };

  const handleQualityClick = (quality) => {
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

  return (
    <div className="movie-post-page">
      <div className="movie-poster-container">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRJix5tp_t--OlEPLwAy7rdYzAwpbuBUeFZMMLJVHK0R3VKqc1" 
          alt="The Map That Leads to You" 
          className="movie-poster-image" 
        />
        <div className="movie-content">
          <h1 className="movie-title">The Map That Leads to You</h1>
          <div className="movie-rating">Rating: 7.8/10</div>
          <div className="download-section">
            <h2>Download Options</h2>
            <div className="trailer-section">
              <a 
                href="https://www.youtube.com/results?search_query=The+Map+That+Leads+to+You+2025+trailer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="trailer-btn"
              >
                🎬 Watch Trailer
              </a>
            </div>
            <div className="download-buttons">
              {clickCount < requiredClicks ? (
                <button 
                  onClick={handleDownloadClick}
                  className="main-download-btn"
                >
                  📥 Click to Download
                </button>
              ) : (
                <button 
                  onClick={() => setShowDownloadOptions(true)}
                  className="main-download-btn"
                >
                  📥 Show Download Options
                </button>
              )}
              <div className="download-info">
                {clickCount < requiredClicks ? (
                  <p>Click the download button {requiredClicks - clickCount} more time(s) to access download options</p>
                ) : (
                  <p>You can now access download options!</p>
                )}
                <p>Multiple quality options available: 480p, 720p, 1080p</p>
                <p>Format: x264</p>
                {clickCount >= requiredClicks && (
                  <p>Click the download button above to access all options</p>
                )}
              </div>
            </div>
            {showDownloadOptions && clickCount >= requiredClicks && (
              <div className="download-options">
                <h2>Select Quality & Format</h2>
                <div className="quality-section">
                  <h3>720p Downloads</h3>
                  <div className="quality-buttons">
                    <button className="quality-btn" onClick={() => handleQualityClick('720p x264')}>720p 10Bit WEB-DL</button>
                  </div>
                </div>
                <div className="quality-section">
                  <h3>1080p Downloads</h3>
                  <div className="quality-buttons">
                    <button className="quality-btn" onClick={() => handleQualityClick('1080p x264')}>1080p 10Bit WEB-DL</button>
                  </div>
                </div>
                <div className="instructions">
                  <p>🔴 Click any quality button to access download links</p>
                  <p>📱 Compatible with all devices</p>
                  <p>⚡ High-speed download servers</p>
                </div>
              </div>
            )}
          </div>
          <div className="movie-info">
            <h2>About the Movie</h2>
            <p>
              A sweeping romance and drama set in 2025. Two strangers meet by chance and embark on a journey across Europe, discovering love, heartbreak, and the meaning of destiny. Their story unfolds through a series of maps, letters, and unforgettable moments.
            </p>
            <div className="movie-details">
              <div className="detail-item">
                <span className="label">Release Date:</span>
                <span className="value">2025</span>
              </div>
              <div className="detail-item">
                <span className="label">Duration:</span>
                <span className="value">1h 36m</span>
              </div>
              <div className="detail-item">
                <span className="label">Genre:</span>
                <span className="value">Romance, Drama</span>
              </div>
              <div className="detail-item">
                <span className="label">Director:</span>
                <span className="value">TBA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <div className="popup-header">
              <h2>Select Download Server - {currentQuality}</h2>
              <button className="close-btn" onClick={closePopup}>×</button>
            </div>
            <div className="server-buttons">
              <button className="server-btn" onClick={() => handleDownload(downloadLinks[currentQuality + '-mega'])}>🚀 HubDrive Server 1</button>
              <button className="server-btn" onClick={() => handleDownload(downloadLinks[currentQuality + '-gdrive'])}>⚡ HubDrive Server 2</button>
              <button className="server-btn" onClick={() => handleDownload(downloadLinks[currentQuality + '-viking'])}>💎 HubDrive Server 3</button>
            </div>
            <div className="popup-info">
              <p>📥 HubDrive: Fast premium downloads with high-speed servers</p>
              <p>📥 The.Map.That.Leads.to.You.2025.720p.10Bit.WEB-DL</p>
              <p>📥 The.Map.That.Leads.to.You.2025.1080p.10Bit.WEB-DL</p>
              <p>🔒 All downloads are secure and virus-free</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TheMapThatLeadsToYouPost;
