import React, { useState, useEffect } from 'react';
import '../MoviePost.css';

const TheGirlfriendPost = () => {
  const [clickCount, setClickCount] = useState(0);
  const requiredClicks = 1; // Only need one click to show download options
  
  useEffect(() => {
    document.title = "The Girlfriend (2025) Full TV Series Download & Watch Online | Film Buffs";
    // SEO meta tags setup
  }, []);
  
  // DownloadPage functionality
  const [showPopup, setShowPopup] = useState(false);
  const [currentQuality, setCurrentQuality] = useState('');
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);

  // No longer need redirect URLs as we're using direct download links

  // Download links for different quality options
  const downloadLinks = {
    '720p': 'https://hubcloud.one/drive/ri84mm5sso0ozqx', // 2GB
    '1080p': 'https://hubcloud.one/drive/aq6s01co0ofoyaw', // 6GB
    '1080p-high': 'https://hubcloud.one/drive/woafofwhousnmw6', // 20GB
    '4K HDR': 'https://hubdrive.space/file/18401437195', // 33GB
    'Direct Link': 'https://hubcloud.one/drive/aq6s01co0ofoyaw', // Default direct link to 1080p 6GB
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
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQSDKJJbrAlhez-_qFHsNabgqhmMcBd1FBxhBv3FMIh-kma8F8y" 
          alt="The Girlfriend 2025 TV series poster" 
          className="movie-poster-image" 
          title="The Girlfriend (2025) - Official TV Series Poster"
        />
        <div className="movie-content">
          <h1 className="movie-title">The Girlfriend (2025) - Download Full TV Series</h1>
          <div className="movie-rating">Rating: 8.2/10</div>
          <div className="download-section">
            <h2>Download Options</h2>
            <div className="trailer-section">
              <a 
                href="https://www.youtube.com/results?search_query=the+girlfriend+series+2025+trailer" 
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
                <p>4K HDR, 1080p and 720p quality available</p>
                <p>Full season available in multiple quality options</p>
                <p>File sizes: 2GB - 33GB</p>
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
                      onClick={() => handleQualityClick('4K HDR')}
                    >
                      4K HDR [33GB] - Complete Season
                    </button>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('1080p-high')}
                    >
                      1080p High Bitrate [20GB] - Complete Season
                    </button>
                  </div>
                </div>

                <div className="quality-section">
                  <h3>Standard Quality Options</h3>
                  <div className="quality-buttons">
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('1080p')}
                    >
                      1080p [6GB] - Complete Season
                    </button>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('720p')}
                    >
                      720p [2GB] - Complete Season
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
                    <p>🎬 Complete season with all episodes included</p>
                    <p>🔒 All servers provide secure and virus-free downloads</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="movie-info">
            <h2>About the TV Series</h2>
            <p>
              <strong>The Girlfriend (2025)</strong> is a gripping psychological drama series that explores the complex dynamics of modern relationships. When a charismatic but enigmatic woman enters the lives of an unsuspecting family, her presence begins to unravel long-held secrets and threatens to destroy everything they've built.
            </p>
            <p>
              With its intricate character development and suspenseful storytelling, this addictive series examines themes of trust, identity, and the lengths people will go to protect what they love. As the mysterious girlfriend becomes increasingly embedded in their lives, the boundaries between love and obsession blur with potentially deadly consequences.
            </p>
            <div className="movie-details">
              <div className="detail-item">
                <span className="label">Release Date:</span>
                <span className="value">June 2025</span>
              </div>
              <div className="detail-item">
                <span className="label">Seasons:</span>
                <span className="value">1 (8 episodes)</span>
              </div>
              <div className="detail-item">
                <span className="label">Episode Length:</span>
                <span className="value">45-55 minutes</span>
              </div>
              <div className="detail-item">
                <span className="label">Genre:</span>
                <span className="value">Drama, Psychological Thriller</span>
              </div>
              <div className="detail-item">
                <span className="label">Creator:</span>
                <span className="value">Alexandra Johnson</span>
              </div>
              <div className="detail-item">
                <span className="label">Stars:</span>
                <span className="value">Emma Stone, Nicholas Hoult, Kerry Washington</span>
              </div>
              <div className="detail-item">
                <span className="label">File Size:</span>
                <span className="value">2GB - 33GB (various qualities)</span>
              </div>
              <div className="detail-item">
                <span className="label">Video Quality:</span>
                <span className="value">4K HDR, 1080p, 720p</span>
              </div>
              <div className="detail-item">
                <span className="label">Audio:</span>
                <span className="value">DDP5.1 (English)</span>
              </div>
              <div className="detail-item">
                <span className="label">Subtitles:</span>
                <span className="value">English, Spanish, French</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheGirlfriendPost;
