import React, { useState } from 'react';
import '../MoviePost.css';

const BallisticPost = () => {
  // Download state
  const [showPopup, setShowPopup] = useState(false);
  const [currentQuality, setCurrentQuality] = useState('');
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);

  // Download links for Ballistic
  const downloadLinks = {
    '720p-server1': 'https://hubcloud.foo/drive/l6qlcfunw1ehcsg',
    '720p-server2': 'https://hubcloud.foo/drive/l6qlcfunw1ehcsg',
    '720p-server3': 'https://hubcloud.foo/drive/l6qlcfunw1ehcsg',
    
    '1080p-server1': 'https://hubcloud.foo/drive/hy14qjrj7o0a0ac',
    '1080p-server2': 'https://hubcloud.foo/drive/hy14qjrj7o0a0ac',
    '1080p-server3': 'https://hubcloud.foo/drive/hy14qjrj7o0a0ac',
  };

  const handleDownloadClick = () => {
    setShowDownloadOptions(true);
  };

  const handleQualityClick = (quality) => {
    setCurrentQuality(quality);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setCurrentQuality('');
  };

  const handleServerClick = (serverName) => {
    let downloadKey;
    
    if (serverName === 'Server 1') {
      downloadKey = currentQuality + '-server1';
    } else if (serverName === 'Server 2') {
      downloadKey = currentQuality + '-server2';
    } else if (serverName === 'Server 3') {
      downloadKey = currentQuality + '-server3';
    }
    
    const downloadLink = downloadLinks[downloadKey];
    if (downloadLink) {
      window.open(downloadLink, '_blank');
      closePopup();
    }
  };

  return (
    <div className="movie-post-page">
      <div className="movie-poster-container">
        <img 
          src="https://images.fandango.com/ImageRenderer/500/0/redesign/static/img/default_poster--dark-mode.png/0/images/masterrepository/Fandango/245426/ballistic.jpg" 
          alt="Ballistic" 
          className="movie-poster-image" 
        />
        
        <div className="movie-content">
          <h1 className="movie-title">Ballistic</h1>
          <div className="movie-rating">Rating: 7.8</div>

          <div className="download-section">
            <h2>Download Options</h2>
            
            <div className="download-buttons">
              <button 
                onClick={handleDownloadClick}
                className="main-download-btn"
              >
                📥 Show Download Options
              </button>
              
              <div className="download-info">
                <p>Click to download in your preferred quality!</p>
                <p>Multiple quality options available: 720p (1.88 GB), 1080p (5.1 GB)</p>
                <p>Audio: English E-AC-3 6ch 640kb/s</p>
              </div>
            </div>

            {/* Download Options Section */}
            {showDownloadOptions && (
              <div className="download-options">
                <h2>Select Quality</h2>
                
                <div className="quality-section">
                  <h3>720p - 1.88 GB</h3>
                  <div className="quality-buttons">
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('720p')}
                    >
                      720p AMZN WEB-DL
                    </button>
                  </div>
                </div>

                <div className="quality-section">
                  <h3>1080p - 5.1 GB</h3>
                  <div className="quality-buttons">
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('1080p')}
                    >
                      1080p AMZN WEB-DL
                    </button>
                  </div>
                </div>

                <div className="instructions">
                  <p>📱 Compatible with all devices</p>
                  <p>⚡ High-speed download servers</p>
                </div>
              </div>
            )}
          </div>

          <div className="movie-info">
            <h2>About the Movie</h2>
            <p>
              Ballistic is an intense action-thriller that combines high-octane sequences with compelling storytelling. 
              Experience the adrenaline-pumping adventure as our heroes navigate through dangerous missions and explosive confrontations. 
              Download Ballistic (2026) in stunning HD quality and immerse yourself in this thrilling cinematic experience.
            </p>
            
            <div className="movie-details">
              <div className="detail-item">
                <span className="label">Release Date:</span>
                <span className="value">2026</span>
              </div>
              <div className="detail-item">
                <span className="label">Genre:</span>
                <span className="value">Action, Thriller</span>
              </div>
              <div className="detail-item">
                <span className="label">Audio:</span>
                <span className="value">English E-AC-3 6ch 640kb/s</span>
              </div>
              <div className="detail-item">
                <span className="label">Source:</span>
                <span className="value">AMZN WEB-DL</span>
              </div>
            </div>

            <div className="tech-specs">
              <h3>Technical Specifications</h3>
              <ul>
                <li><strong>720p Version:</strong> 1.88 GB</li>
                <li><strong>1080p Version:</strong> 5.1 GB</li>
                <li><strong>Audio Track:</strong> English E-AC-3 6ch 640kb/s</li>
                <li><strong>Container:</strong> MKV</li>
                <li><strong>Release Group:</strong> KyoGo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Server Selection Popup */}
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
                🚀 Server 1 - Ultra Fast
              </button>
              
              <button 
                className="server-btn"
                onClick={() => handleServerClick('Server 2')}
              >
                ⚡ Server 2 - High Speed
              </button>
              
              <button 
                className="server-btn"
                onClick={() => handleServerClick('Server 3')}
              >
                💎 Server 3 - Premium
              </button>
            </div>
            
            <div className="popup-info">
              <p>📥 Click any server to download instantly</p>
              <p>🔒 Secure and virus-free downloads</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BallisticPost;
