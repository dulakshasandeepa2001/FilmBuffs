import React, { useState } from 'react';
import '../MoviePost.css';

const F1Post = () => {
  const [clickCount, setClickCount] = useState(0);
  const requiredClicks = 5;
  const [showPopup, setShowPopup] = useState(false);
  const [currentQuality, setCurrentQuality] = useState('');
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);

  // Redirect URLs for the first 4 clicks
  const redirectUrls = [
    'https://incredibleenhancementslightning.com/mb44w5nrf?key=b81da213cd8d52d142d1bec92e3e014d',
    'https://incredibleenhancementslightning.com/d0jtntz4zi?key=b9a5ee9377f9a6709624ba8c106313f9',
    'https://incredibleenhancementslightning.com/dzzpxkz4?key=e9c5b50948edadcec659d3dc875f7542',
    'https://otieu.com/4/9545201'
  ];

  // Download links for F1
  const downloadLinks = {
    '720p x264-mega': 'https://mega.nz/f1-720p-x264.mp4',
    '720p x264-gdrive': 'https://drive.google.com/f1-720p-x264.mp4',
    '720p x264-viking': 'https://viking.google.com/f1-720p-x264.mp4',
    '1080p x264-mega': 'https://mega.nz/f1-1080p-x264.mp4',
    '1080p x264-gdrive': 'https://drive.google.com/f1-1080p-x264.mp4',
    '1080p x264-viking': 'https://viking.google.com/f1-1080p-x264.mp4',
    '4K x264-mega': 'https://mega.nz/f1-4k-x264.mp4',
    '4K x264-gdrive': 'https://drive.google.com/f1-4k-x264.mp4',
    '4K x264-viking': 'https://viking.google.com/f1-4k-x264.mp4',
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
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT85TrSaHuKW1dis3_6g4acoHHaNvt1crmPF1MQKfn6QNjWXuiM" 
          alt="F1" 
          className="movie-poster-image" 
        />
        <div className="movie-content">
          <h1 className="movie-title">F1</h1>
          <div className="movie-rating">Rating: 8.5/10</div>
          <div className="download-section">
            <h2>Download Options</h2>
            <div className="trailer-section">
              <a 
                href="https://www.youtube.com/watch?v=8RInW7zWDn8" 
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
                <p>Multiple quality options available: 720p, 1080p, 4K</p>
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
                    <button className="quality-btn" onClick={() => handleQualityClick('720p x264')}>720p x264</button>
                  </div>
                </div>
                <div className="quality-section">
                  <h3>1080p Downloads</h3>
                  <div className="quality-buttons">
                    <button className="quality-btn" onClick={() => handleQualityClick('1080p x264')}>1080p x264</button>
                  </div>
                </div>
                <div className="quality-section">
                  <h3>4K Downloads</h3>
                  <div className="quality-buttons">
                    <button className="quality-btn" onClick={() => handleQualityClick('4K x264')}>4K x264</button>
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
              An action-packed sports drama chronicling the high-stakes world of Formula 1 racing. When a rookie driver gets the opportunity of a lifetime to join an elite racing team, he must navigate fierce rivalries, dangerous tracks, and his own personal demons to become a champion.
            </p>
            <div className="movie-details">
              <div className="detail-item">
                <span className="label">Release Date:</span>
                <span className="value">2025</span>
              </div>
              <div className="detail-item">
                <span className="label">Duration:</span>
                <span className="value">2h 12m</span>
              </div>
              <div className="detail-item">
                <span className="label">Genre:</span>
                <span className="value">Action, Sport, Drama</span>
              </div>
              <div className="detail-item">
                <span className="label">Director:</span>
                <span className="value">Joseph Kosinski</span>
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
              <button className="server-btn" onClick={() => handleDownload(downloadLinks[currentQuality + '-mega'])}>🚀 Server 1 - Mega File</button>
              <button className="server-btn" onClick={() => handleDownload(downloadLinks[currentQuality + '-gdrive'])}>⚡ Server 2 - Google Drive File</button>
              <button className="server-btn" onClick={() => handleDownload(downloadLinks[currentQuality + '-viking'])}>💎 Server 3 - Viking File</button>
            </div>
            <div className="popup-info">
              <p>📥 Mega: Fast downloads with resume support</p>
              <p>📥 Google Drive: Reliable cloud storage downloads</p>
              <p>📥 Viking: High-speed premium servers</p>
              <p>🔒 All servers provide secure and virus-free downloads</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default F1Post;
