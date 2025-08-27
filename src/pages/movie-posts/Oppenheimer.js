import React, { useState } from 'react';
import '../MoviePost.css';

const OppenheimerPost = () => {
  const [clickCount, setClickCount] = useState(0);
  const requiredClicks = 1; // Only need one click to show download options
  
  // DownloadPage functionality
  const [showPopup, setShowPopup] = useState(false);
  const [currentQuality, setCurrentQuality] = useState('');
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);

  // No longer need redirect URLs as we're using direct download links

  // Download links for Oppenheimer
  const downloadLinks = {
    '480p x264-mega': 'https://mega.google.com/oppenheimer-480p-x264.mp4',
    '480p x264-viking': 'https://viking.google.com/oppenheimer-480p-x264.mp4',
    '480p x264-gdrive': 'https://drive.google.com/oppenheimer-480p-x264.mp4',
    '480p x265-mega': 'https://mega.google.com/oppenheimer-480p-x265.mp4',
    '480p x265-viking': 'https://viking.google.com/oppenheimer-480p-x265.mp4',
    '480p x265-gdrive': 'https://drive.google.com/oppenheimer-480p-x265.mp4',

    '720p x264-mega': 'https://mega.google.com/oppenheimer-720p-x264.mp4',
    '720p x264-viking': 'https://viking.google.com/oppenheimer-720p-x264.mp4',
    '720p x264-gdrive': 'https://drive.google.com/oppenheimer-720p-x264.mp4',
    '720p x265-mega': 'https://mega.google.com/oppenheimer-720p-x265.mp4',
    '720p x265-viking': 'https://viking.google.com/oppenheimer-720p-x265.mp4',
    '720p x265-gdrive': 'https://drive.google.com/oppenheimer-720p-x265.mp4',

    '1080p x264-mega': 'https://mega.google.com/oppenheimer-1080p-x264.mp4',
    '1080p x264-viking': 'https://viking.google.com/oppenheimer-1080p-x264.mp4',
    '1080p x264-gdrive': 'https://drive.google.com/oppenheimer-1080p-x264.mp4',
    '1080p x265-mega': 'https://mega.google.com/oppenheimer-1080p-x265.mp4',
    '1080p x265-viking': 'https://viking.google.com/oppenheimer-1080p-x265.mp4',
    '1080p x265-gdrive': 'https://drive.google.com/oppenheimer-1080p-x265.mp4',
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
    let downloadKey;
    
    // Determine the download key based on server selection
    if (serverName === 'Server 1') {
      downloadKey = currentQuality + '-mega';
    } else if (serverName === 'Server 2') {
      downloadKey = currentQuality + '-gdrive';
    } else if (serverName === 'Server 3') {
      downloadKey = currentQuality + '-viking';
    }
    
    const downloadLink = downloadLinks[downloadKey];
    if (downloadLink) {
      handleDownload(downloadLink);
    }
  };

  return (
    <div className="movie-post-page">
      <div className="movie-poster-container">
        <img 
          src="https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg" 
          alt="Oppenheimer" 
          className="movie-poster-image" 
        />
        
        <div className="movie-content">
          <h1 className="movie-title">Oppenheimer</h1>
          <div className="movie-rating">Rating: 8.4/10</div>

          <div className="download-section">
            <h2>Download Options</h2>
            
            <div className="trailer-section">
              <a 
                href="https://www.youtube.com/watch?v=uYPbbksJxIg" 
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
                <p>Click the download button to access download options!</p>
                <p>Multiple quality options available: 480p, 720p, 1080p</p>
                <p>Formats: x264, x265</p>
                <p>All downloads available instantly - no waiting!</p>
              </div>
            </div>

            {/* Download Options Section */}
            {showDownloadOptions && clickCount >= requiredClicks && (
              <div className="download-options">
                <h2>Select Quality & Format</h2>
                
                <div className="quality-section">
                  <h3>480p Downloads</h3>
                  <div className="quality-buttons">
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('480p x264')}
                    >
                      480p x264
                    </button>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('480p x265')}
                    >
                      480p x265
                    </button>
                  </div>
                </div>

                <div className="quality-section">
                  <h3>720p Downloads</h3>
                  <div className="quality-buttons">
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('720p x264')}
                    >
                      720p x264
                    </button>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('720p x265')}
                    >
                      720p x265
                    </button>
                  </div>
                </div>

                <div className="quality-section">
                  <h3>1080p Downloads</h3>
                  <div className="quality-buttons">
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('1080p x264')}
                    >
                      1080p x264
                    </button>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('1080p x265')}
                    >
                      1080p x265
                    </button>
                  </div>
                </div>

                <div className="instructions">
                  <p>🔴 Select any quality to continue to server selection</p>
                  <p>📱 Compatible with all devices</p>
                  <p>⚡ High-speed download servers</p>
                </div>
              </div>
            )}
          </div>

          <div className="movie-info">
            <h2>About the Movie</h2>
            <p>
              The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.
              A gripping portrayal of the man who led the Los Alamos Laboratory during World War II.
            </p>
            
            <div className="movie-details">
              <div className="detail-item">
                <span className="label">Release Date:</span>
                <span className="value">2023</span>
              </div>
              <div className="detail-item">
                <span className="label">Duration:</span>
                <span className="value">3h 0m</span>
              </div>
              <div className="detail-item">
                <span className="label">Genre:</span>
                <span className="value">Biography, Drama, History</span>
              </div>
              <div className="detail-item">
                <span className="label">Director:</span>
                <span className="value">Christopher Nolan</span>
              </div>
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
              <p>🔴 Choose any server to download immediately</p>
              <p>📥 Each server provides the same high-quality file</p>
              <p>🔒 Secure and virus-free downloads</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OppenheimerPost;
