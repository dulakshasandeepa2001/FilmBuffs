import React, { useState, useEffect } from 'react';
import '../MoviePost.css';

const TogetherPost = () => {
  const [clickCount, setClickCount] = useState(0);
  const requiredClicks = 5;

  useEffect(() => {
    document.title = "Together (2025) Full Movie Download & Watch Online | Film Buffs";
    // SEO meta tags setup
  }, []);

  const [clickCounts, setClickCounts] = useState({});
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);
  const [showServerPopup, setShowServerPopup] = useState(false);
  const [selectedQuality, setSelectedQuality] = useState('');

  const redirectUrls = [
    'https://incredibleenhancementslightning.com/mb44w5nrf?key=b81da213cd8d52d142d1bec92e3e014d',
    'https://incredibleenhancementslightning.com/d0jtntz4zi?key=b9a5ee9377f9a6709624ba8c106313f9',
    'https://incredibleenhancementslightning.com/dzzpxkz4?key=e9c5b50948edadcec659d3dc875f7542',
    'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b'
  ];

  // Download links for different quality options
  const downloadLinks = {
    '4K UHD': 'https://example.com/together-4k',
    '1080p HDR': 'https://example.com/together-1080p-hdr',
    '1080p': 'https://example.com/together-1080p',
    '720p': 'https://example.com/together-720p',
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
    setSelectedQuality(quality);
    const currentCount = clickCounts[quality] || 0;
    const newCount = currentCount + 1;
    setClickCounts(prev => ({ ...prev, [quality]: newCount }));
    
    if (newCount <= 4) {
      const urlIndex = (newCount - 1) % redirectUrls.length;
      window.open(redirectUrls[urlIndex], '_blank');
    } else if (newCount >= 5) {
      setShowServerPopup(true);
    }
  };

  const handleServerSelect = (server) => {
    // This would handle server selection and redirect to the appropriate download URL
    setShowServerPopup(false);
    const downloadLink = downloadLinks[selectedQuality];
    if (downloadLink) window.open(downloadLink, '_blank');
  };

  return (
    <div className="movie-post-page">
      <div className="movie-poster-container">
        <img 
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSW1FzzjgYeF_ARyk2gInJMc9Q0rAkYSGST7VLI48J48Xn6j67M" 
          alt="Together (2025) poster" 
          className="movie-poster-image" 
          title="Together (2025) - Official Movie Poster"
        />
        <div className="movie-content">
          <h1 className="movie-title">Together (2025) - Download Full Movie</h1>
          <div className="movie-rating">Rating: 7.8/10</div>
          <div className="download-section">
            <h2>Download Options</h2>
            <div className="trailer-section">
              <a 
                href="https://www.youtube.com/results?search_query=together+2025+horror+trailer" 
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
                {clickCount < requiredClicks ? (
                  <p>Click the download button {requiredClicks - clickCount} more time(s) to access download options</p>
                ) : (
                  <p>You can now access download options!</p>
                )}
                <p>4K UHD and Full HD 1080p quality available</p>
                <p>Immersive DTS-HD Master Audio 5.1</p>
                <p>File sizes: 2GB - 15GB</p>
                {clickCount >= requiredClicks && (
                  <p>Click the download button above to access all options</p>
                )}
              </div>
            </div>
            {showDownloadOptions && clickCount >= requiredClicks && (
              <div className="download-options">
                <h2>Select Quality & Format</h2>
                <div className="quality-section">
                  <h3>High Quality Options</h3>
                  <div className="quality-buttons">
                    <button className="quality-btn" onClick={() => handleQualityClick('4K UHD')}>
                      4K UHD [15GB]
                    </button>
                    <button className="quality-btn" onClick={() => handleQualityClick('1080p HDR')}>
                      1080p HDR [8GB]
                    </button>
                  </div>
                </div>
                <div className="quality-section">
                  <h3>Standard Quality Options</h3>
                  <div className="quality-buttons">
                    <button className="quality-btn" onClick={() => handleQualityClick('1080p')}>
                      1080p Full HD [5GB]
                    </button>
                    <button className="quality-btn" onClick={() => handleQualityClick('720p')}>
                      720p HD [2GB]
                    </button>
                  </div>
                </div>
                <div className="instructions">
                  <p>🔴 Click any quality button 5 times to access download links</p>
                  <p>📱 Compatible with all devices</p>
                  <p>⚡ High-speed download servers</p>
                  <p>🔊 DTS-HD Master Audio 5.1</p>
                  <p>🎬 Official theatrical release with bonus features</p>
                </div>
              </div>
            )}
            {showServerPopup && (
              <div className="server-popup">
                <div className="server-popup-content">
                  <h3>Select Download Server</h3>
                  <button onClick={() => handleServerSelect('server1')} className="server-btn">Server 1 (Fast)</button>
                  <button onClick={() => handleServerSelect('server2')} className="server-btn">Server 2 (Reliable)</button>
                  <button onClick={() => handleServerSelect('server3')} className="server-btn">Server 3 (Mirror)</button>
                  <button onClick={() => setShowServerPopup(false)} className="close-btn">Close</button>
                </div>
              </div>
            )}
          </div>
          <div className="movie-info">
            <h2>About the Movie</h2>
            <p>
              <strong>Together (2025)</strong> is a psychological horror film that explores the terrifying consequences of collective trauma and isolation. When six friends gather at a remote cabin for a reunion weekend, what starts as a joyful get-together quickly descends into horror as they discover they're unable to physically separate from each other.
            </p>
            <p>
              As their forced proximity continues, paranoia and long-buried resentments begin to surface, revealing that their connection might be more than just a supernatural occurrence—it could be a manifestation of their shared past. With tension mounting and no way to escape each other, the friends must confront the dark secret that binds them before it consumes them entirely.
            </p>
            <div className="movie-details">
              <div className="detail-item">
                <span className="label">Release Date:</span>
                <span className="value">March 2025</span>
              </div>
              <div className="detail-item">
                <span className="label">Runtime:</span>
                <span className="value">1 hour 42 minutes</span>
              </div>
              <div className="detail-item">
                <span className="label">Genre:</span>
                <span className="value">Horror, Psychological Thriller</span>
              </div>
              <div className="detail-item">
                <span className="label">Director:</span>
                <span className="value">Rose Glass</span>
              </div>
              <div className="detail-item">
                <span className="label">Studio:</span>
                <span className="value">A24</span>
              </div>
              <div className="detail-item">
                <span className="label">Rating:</span>
                <span className="value">R (Disturbing Content, Violence, Language)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TogetherPost;
