import React, { useState } from 'react';
import '../MoviePost.css';

const TheBatmanPost = () => {
  const [clickCount, setClickCount] = useState(0);
  const requiredClicks = 5;
  
  // DownloadPage functionality
  const [clickCounts, setClickCounts] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [currentQuality, setCurrentQuality] = useState('');
  const [serverClickCounts, setServerClickCounts] = useState({});
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);

  // Redirect URLs for the first 4 clicks
  const redirectUrls = [
    'https://incredibleenhancementslightning.com/mb44w5nrf?key=b81da213cd8d52d142d1bec92e3e014d',
    'https://incredibleenhancementslightning.com/d0jtntz4zi?key=b9a5ee9377f9a6709624ba8c106313f9',
    'https://incredibleenhancementslightning.com/dzzpxkz4?key=e9c5b50948edadcec659d3dc875f7542',
    'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b'
  ];

  // Download links for The Batman
  const downloadLinks = {
    '480p x264-mega': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',
    '480p x264-viking': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',
    '480p x264-gdrive': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',
    '480p x265-mega': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',
    '480p x265-viking': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',
    '480p x265-gdrive': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',

    '720p x264-mega': 'https://mega.nz/file/vLhiDBoa#J225nxSaj8Mr4xT10cwE4HCjvSUSDJ_UXMC510d6-_w',
    '720p x264-viking': 'https://vikingf1le.us.to/f/ZMPfj2RHyP',
    '720p x264-gdrive': 'https://new10.gdflix.dad/file/eGrhyB6zLIPUxld',
    '720p x265-mega': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',
    '720p x265-viking': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',
    '720p x265-gdrive': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',

    '1080p x264-mega': 'https://mega.nz/file/2TJ0Vb5J#Wkg9WlC9aiK3InsobxBYDr0katOobQUtBAE2vC1Mv1w',
    '1080p x264-gdrive': 'https://new10.gdflix.dad/file/l35xSbJfDzppD4X',
    '1080p x264-ficher': 'https://1fichier.com/?hhyox0erkwt0dufx9d3p',
    '1080p x265-mega': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',
    '1080p x265-viking': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',
    '1080p x265-gdrive': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',
  };

  const handleDownloadClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    if (newCount <= 4) {
      // For the first 4 clicks, redirect to the protection URLs
      const urlIndex = (newCount - 1) % redirectUrls.length;
      window.open(redirectUrls[urlIndex], '_blank');
    }
    // On the 5th click, just update the state to show download options
  };

  const handleQualityClick = (quality) => {
    const currentCount = clickCounts[quality] || 0;
    const newCount = currentCount + 1;

    setClickCounts(prev => ({
      ...prev,
      [quality]: newCount
    }));

    if (newCount <= 4) {
      // For the first 4 clicks, redirect to the URLs
      const urlIndex = (newCount - 1) % redirectUrls.length;
      window.open(redirectUrls[urlIndex], '_blank');
    } else if (newCount === 5) {
      // On the 5th click, show the popup with download links
      setCurrentQuality(quality);
      setShowPopup(true);
    } else {
      // After 5th click, directly show popup
      setCurrentQuality(quality);
      setShowPopup(true);
    }
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
    const serverKey = `${currentQuality}-${serverName}`;
    const currentCount = serverClickCounts[serverKey] || 0;
    const newCount = currentCount + 1;

    setServerClickCounts(prev => ({
      ...prev,
      [serverKey]: newCount
    }));

    if (newCount <= 4) {
      // For the first 4 clicks, redirect to random URLs
      const randomUrl = redirectUrls[Math.floor(Math.random() * redirectUrls.length)];
      window.open(randomUrl, '_blank');
    } else if (newCount >= 5) {
      // On the 5th click and beyond, provide the actual download link based on server
      let downloadKey;
      
      // All qualities now have server-specific links
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
    }
  };

  return (
    <div className="movie-post-page">
      <div className="movie-poster-container">
        <img 
          src="https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_.jpg" 
          alt="The Batman" 
          className="movie-poster-image" 
        />
        
        <div className="movie-content">
          <h1 className="movie-title">The Batman</h1>
          <div className="movie-rating">Rating: 8.3/10</div>

          <div className="download-section">
            <h2>Download Options</h2>
            
            <div className="trailer-section">
              <a 
                href="https://www.youtube.com/watch?v=mqqft2x_Aa4" 
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
                <p>Formats: x264, x265</p>
                {clickCount >= requiredClicks && (
                  <p>Click the download button above to access all options</p>
                )}
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
                  <p>🔴 Click any quality button 5 times to access download links</p>
                  <p>📱 Compatible with all devices</p>
                  <p>⚡ High-speed download servers</p>
                </div>
              </div>
            )}
          </div>

          <div className="movie-info">
            <h2>About the Movie</h2>
            <p>
              When the Riddler, a sadistic serial killer, begins murdering key political figures in Gotham, 
              Batman is forced to investigate the city's hidden corruption and question his family's involvement.
            </p>
            
            <div className="movie-details">
              <div className="detail-item">
                <span className="label">Release Date:</span>
                <span className="value">2022</span>
              </div>
              <div className="detail-item">
                <span className="label">Duration:</span>
                <span className="value">2h 56m</span>
              </div>
              <div className="detail-item">
                <span className="label">Genre:</span>
                <span className="value">Action, Crime, Drama</span>
              </div>
              <div className="detail-item">
                <span className="label">Director:</span>
                <span className="value">Matt Reeves</span>
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
                ⚡ Server 2 - GD File
              </button>
              
              <button 
                className="server-btn"
                onClick={() => handleServerClick('Server 3')}
              >
                💎 Server 3 - Viking File
              </button>
            </div>
            
            <div className="popup-info">
              <p>🔴 Click any server button 5 times to download</p>
              <p>📥 Each server provides the same high-quality file</p>
              <p>🔒 Secure and virus-free downloads</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TheBatmanPost;
