import React, { useState, useEffect } from 'react';
import '../MoviePost.css';

const WeaponsPost = () => {
  const [clickCount, setClickCount] = useState(0);
  const requiredClicks = 1; // Only need one click to show download options
  
  useEffect(() => {
    document.title = "Weapons (2025) Full Movie Download & Watch Online | Film Buffs";
    // SEO meta tags setup
  }, []);
  
  // DownloadPage functionality
  const [showPopup, setShowPopup] = useState(false);
  const [currentQuality, setCurrentQuality] = useState('');
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);

  // No longer need redirect URLs as we're using direct download links

  // Download links for different quality options
  const downloadLinks = {
    // 4K/2160p options
    '2160p HDR-mega': 'https://mega.nz/file/WlJ3CB6b#HREQ1SPuzDFuzcDJl4BFy-wZVhva4PHeHpLPq1MoAZY',
    '2160p HDR-gdrive': 'https://new26.gdtot.dad/file/23926457487',
    '2160p HDR-hubdrive': 'https://hubdrive.space/file/3183881864',
    
    '2160p SDR-gdrive': 'https://new26.gdtot.dad/file/11898788152',
    '2160p SDR-rapidgator': 'https://rapidgator.net/file/fbdfb5210d6c3583089765c5c071f54a',
    '2160p SDR-ddownload': 'https://ddownload.com/7pvttg4hu1go',
    
    '2160p DV-gdrive': 'https://new26.gdtot.dad/file/14282848667',
    '2160p DV-fastdown': 'https://down.fast-down.com/download5184000',
    '2160p DV-usersdrive': 'https://usersdrive.com/2kagtb6igr05.html',
    
    // 1080p options
    '1080p-gdrive': 'https://new26.gdtot.dad/file/6752399253',
    '1080p-hubdrive': 'https://hubdrive.space/file/3183881864',
    '1080p-mega': 'https://mega.nz/file/WlJ3CB6b#HREQ1SPuzDFuzcDJl4BFy-wZVhva4PHeHpLPq1MoAZY',
    
    // 720p options
    '720p-hubdrive': 'https://hubdrive.space/file/2009575051',
    '720p-usersdrive': 'https://usersdrive.com/2kagtb6igr05.html',
    '720p-mega': 'https://mega.nz/file/WlJ3CB6b#HREQ1SPuzDFuzcDJl4BFy-wZVhva4PHeHpLPq1MoAZY',
    
    // Direct link for quick access
    'Direct Link': 'https://hubdrive.space/file/3183881864'
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
      if (currentQuality.includes('2160p HDR')) {
        downloadKey = currentQuality + '-hubdrive';
      } else if (currentQuality.includes('2160p SDR')) {
        downloadKey = currentQuality + '-ddownload';
      } else if (currentQuality.includes('2160p DV')) {
        downloadKey = currentQuality + '-usersdrive';
      } else if (currentQuality.includes('1080p')) {
        downloadKey = currentQuality + '-hubdrive';
      } else {
        downloadKey = currentQuality + '-usersdrive';
      }
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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9-FkFMeOIyaH7KEDXFhc3p8itdq1EZGDKYmWhwC0iry-Ka3Pr" 
          alt="Weapons 2025 movie poster" 
          className="movie-poster-image" 
          title="Weapons (2025) - Official Movie Poster"
        />
        <div className="movie-content">
          <h1 className="movie-title">Weapons (2025) - Download Full Movie</h1>
          <div className="movie-rating">Rating: 7.8/10</div>
          <div className="download-section">
            <h2>Download Options</h2>
            <div className="trailer-section">
              <a 
                href="https://www.youtube.com/watch?v=SbjcI5TPU1I" 
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
                <p>4K HDR, Dolby Vision, 1080p and 720p quality available</p>
                <p>Multiple server options for reliable downloads</p>
                <p>File sizes: 950MB - 22.5GB</p>
                <p>All downloads available instantly - no waiting!</p>
              </div>
            </div>
            {showDownloadOptions && clickCount >= requiredClicks && (
              <div className="download-options">
                <h2>Select Quality & Format</h2>
                <div className="quality-section">
                  <h3>4K / 2160p Downloads</h3>
                  <div className="quality-buttons">
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('2160p HDR')}
                    >
                      2160p HDR
                    </button>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('2160p SDR')}
                    >
                      2160p SDR
                    </button>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('2160p DV')}
                    >
                      2160p Dolby Vision
                    </button>
                  </div>
                </div>

                <div className="quality-section">
                  <h3>1080p Downloads</h3>
                  <div className="quality-buttons">
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('1080p')}
                    >
                      1080p (1.9GB)
                    </button>
                  </div>
                </div>

                <div className="quality-section">
                  <h3>720p Downloads</h3>
                  <div className="quality-buttons">
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('720p')}
                    >
                      720p (812MB)
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
                      🚀 Server 1 - Mega
                    </button>
                    
                    <button 
                      className="server-btn"
                      onClick={() => handleServerClick('Server 2')}
                    >
                      ⚡ Server 2 - GDrive
                    </button>
                    
                    <button 
                      className="server-btn"
                      onClick={() => handleServerClick('Server 3')}
                    >
                      💎 Server 3 - {currentQuality.includes('2160p HDR') ? 'HubDrive' : 
                                    currentQuality.includes('2160p SDR') ? 'DDownload' : 
                                    currentQuality.includes('2160p DV') ? 'UsersDrive' : 
                                    currentQuality.includes('1080p') ? 'HubDrive' : 'UsersDrive'}
                    </button>
                  </div>
                  
                  <div className="popup-info">
                    <p>🔴 Choose any server to download immediately</p>
                    <p>📥 Mega: Fast downloads with resume support</p>
                    <p>📥 GDrive: Reliable cloud storage downloads</p>
                    <p>📥 Third-party: High-speed premium servers</p>
                    <p>🔒 All servers provide secure and virus-free downloads</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="movie-info">
            <h2>About the Movie</h2>
            <p>
              <strong>Weapons (2025)</strong> is a suspenseful horror-mystery film directed by Zach Cregger. When all but one child from the same class mysteriously vanish on the same night at exactly the same time, a community is left questioning who or what is behind their disappearance.
            </p>
            <p>
              Following the success of his critically acclaimed film "Barbarian," director Zach Cregger delivers another chilling and thought-provoking horror experience that will keep you on the edge of your seat. As the mystery unfolds, the remaining child may hold the key to the terrifying truth about what happened to the others.
            </p>
            <div className="movie-details">
              <div className="detail-item">
                <span className="label">Release Date:</span>
                <span className="value">August 8, 2025</span>
              </div>
              <div className="detail-item">
                <span className="label">Duration:</span>
                <span className="value">2h 8m</span>
              </div>
              <div className="detail-item">
                <span className="label">Genre:</span>
                <span className="value">Horror, Mystery</span>
              </div>
              <div className="detail-item">
                <span className="label">Director:</span>
                <span className="value">Zach Cregger</span>
              </div>
              <div className="detail-item">
                <span className="label">Stars:</span>
                <span className="value">Julia Garner, Josh Brolin, Alden Ehrenreich</span>
              </div>
              <div className="detail-item">
                <span className="label">File Size:</span>
                <span className="value">812MB - 22.5GB (various qualities)</span>
              </div>
              <div className="detail-item">
                <span className="label">Video Quality:</span>
                <span className="value">4K HDR/DV, 1080p, 720p</span>
              </div>
              <div className="detail-item">
                <span className="label">Audio:</span>
                <span className="value">DDP5.1 (English)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeaponsPost;
