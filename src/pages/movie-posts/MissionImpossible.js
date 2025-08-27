import React, { useState } from 'react';
import '../MoviePost.css';

const MissionImpossiblePost = () => {
  const [clickCount, setClickCount] = useState(0);
  const requiredClicks = 1; // Only need one click to show download options
  
  // DownloadPage functionality
  const [showPopup, setShowPopup] = useState(false);
  const [currentQuality, setCurrentQuality] = useState('');
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);

  // No longer need redirect URLs as we're using direct download links

  // Download links for Mission: Impossible – Dead Reckoning Part One
  const downloadLinks = {
    '480p x264-mega': 'https://mega.nz/file/SRMRyCJZ#fh2vBtL5vazEa_trF1daXpnZ57eDkcC3PC0j4lOMJgY',
    '480p x264-viking': 'https://viking.google.com/mission-impossible-480p-x264.mp4',
    '480p x264-gdrive': 'https://new10.gdflix.dad/file/4iuMYSNKQc',
    '480p x265-mega': 'https://mega.google.com/mission-impossible-480p-x265.mp4',
    '480p x265-viking': 'https://viking.google.com/mission-impossible-480p-x265.mp4',
    '480p x265-gdrive': 'https://drive.google.com/mission-impossible-480p-x265.mp4',

    '720p x264-mega': 'https://mega.google.com/mission-impossible-720p-x264.mp4',
    '720p x264-viking': 'https://viking.google.com/mission-impossible-720p-x264.mp4',
    '720p x264-gdrive': 'https://drive.google.com/mission-impossible-720p-x264.mp4',
    '720p x265-mega': 'https://mega.google.com/mission-impossible-720p-x265.mp4',
    '720p x265-viking': 'https://viking.google.com/mission-impossible-720p-x265.mp4',
    '720p x265-gdrive': 'https://drive.google.com/mission-impossible-720p-x265.mp4',

    '1080p x264-mega': 'https://mega.google.com/mission-impossible-1080p-x264.mp4',
    '1080p x264-viking': 'https://viking.google.com/mission-impossible-1080p-x264.mp4',
    '1080p x264-gdrive': 'https://drive.google.com/mission-impossible-1080p-x264.mp4',
    '1080p x265-mega': 'https://mega.google.com/mission-impossible-1080p-x265.mp4',
    '1080p x265-viking': 'https://viking.google.com/mission-impossible-1080p-x265.mp4',
    '1080p x265-gdrive': 'https://drive.google.com/mission-impossible-1080p-x265.mp4',
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
          src="https://m.media-amazon.com/images/M/MV5BZTIwZWNhOWYtNzNjMC00ZDEyLThjMDYtMGY0YzdiMjE1M2E1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg" 
          alt="Mission: Impossible – Dead Reckoning Part One" 
          className="movie-poster-image" 
        />
        
        <div className="movie-content">
          <h1 className="movie-title">Mission: Impossible – Dead Reckoning Part One</h1>
          <div className="movie-rating">Rating: 7.7/10</div>

          <div className="download-section">
            <h2>Download Options</h2>
            
            <div className="trailer-section">
              <a 
                href="https://www.youtube.com/watch?v=avz06PDqDbM" 
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
              Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands.
            </p>
            
            <div className="movie-details">
              <div className="detail-item">
                <span className="label">Release Date:</span>
                <span className="value">2023</span>
              </div>
              <div className="detail-item">
                <span className="label">Duration:</span>
                <span className="value">2h 43m</span>
              </div>
              <div className="detail-item">
                <span className="label">Genre:</span>
                <span className="value">Action, Adventure, Thriller</span>
              </div>
              <div className="detail-item">
                <span className="label">Director:</span>
                <span className="value">Christopher McQuarrie</span>
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
                🚀 Server 1 - Mega File
              </button>
              
              <button 
                className="server-btn"
                onClick={() => handleServerClick('Server 2')}
              >
                ⚡ Server 2 - Google Drive File
              </button>
              
              <button 
                className="server-btn"
                onClick={() => handleServerClick('Server 3')}
              >
                💎 Server 3 - Viking File
              </button>
            </div>
            
            <div className="popup-info">
              <p>🔴 Choose any server to download immediately</p>
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

export default MissionImpossiblePost;
