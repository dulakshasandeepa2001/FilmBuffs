import React, { useState, useEffect } from 'react';
import '../MoviePost.css';

const AlienEarthPost = () => {
  const [clickCount, setClickCount] = useState(0);
  const requiredClicks = 1;

  useEffect(() => {
    document.title = "Alien: Earth (2025) Full Series Download & Watch Online | Film Buffs";
    // ...meta tags and SEO setup similar to Wednesday...
  }, []);

  const [clickCounts, setClickCounts] = useState({});
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);

  const redirectUrls = [
    'https://otieu.com/4/9550585',
    'https://otieu.com/4/9550586',
    'https://otieu.com/4/9545201',
    'https://otieu.com/4/9550584'
  ];

  // Download links for different episodes and qualities
  const downloadLinks = {
    // 1080p H264
    '1080p H264 Episode 1': 'https://hubcloud.one/drive/7aic9tbkytcybtt',
    '1080p H264 Episode 2': 'https://hubcloud.one/drive/ai0umq0s3lma3sb',
    '1080p H264 Episode 3': 'https://hubcloud.one/drive/u7cagdarcny0y7a',
    
    // 1080p DV HDR
    '1080p DV HDR Episode 1': 'https://hubcloud.one/drive/1uupnca3k15cqkp',
    '1080p DV HDR Episode 2': 'https://hubcloud.one/drive/du4mi5mjs1qrsue',
    '1080p DV HDR Episode 3': 'https://hubcloud.one/drive/sm1gi7ysy57sm5y',
    
    // 4K SDR
    '4K SDR Episode 1': 'https://hubcloud.one/drive/o8in9im1gvrddg4',
    '4K SDR Episode 2': 'https://hubcloud.one/drive/yq4hzafiiyeyjop',
    '4K SDR Episode 3': 'https://hubcloud.one/drive/7wuwokxsccic0so',
    
    // 4K DV HDR
    '4K DV HDR Episode 1': 'https://hubcloud.one/drive/291mm6rixumrea9',
    '4K DV HDR Episode 2': 'https://hubcloud.one/drive/zgo11v97fo77szx',
    '4K DV HDR Episode 3': 'https://hubcloud.one/drive/r1z196sr1vrswv7'
  };

  const handleDownloadClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount <= 1) {
      const urlIndex = 0; // Always use the first redirect URL
      window.open(redirectUrls[urlIndex], '_blank');
    }
  };

  const handleQualityClick = (quality) => {
    const currentCount = clickCounts[quality] || 0;
    const newCount = currentCount + 1;
    setClickCounts(prev => ({ ...prev, [quality]: newCount }));
    if (newCount <= 1) {
      const urlIndex = 0; // Always use the first redirect URL
      window.open(redirectUrls[urlIndex], '_blank');
    } else if (newCount >= 2) {
      const downloadLink = downloadLinks[quality];
      if (downloadLink) window.open(downloadLink, '_blank');
    }
  };

  return (
    <div className="movie-post-page">
      <div className="movie-poster-container">
        <img 
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSKBTdQQVzT5EA37PubvEMvnPNJ2og0eDOvgoinUEGa9gJ4MtNk" 
          alt="Alien: Earth poster" 
          className="movie-poster-image" 
          title="Alien: Earth (2025) - Official Series Poster"
        />
        <div className="movie-content">
          <h1 className="movie-title">Alien: Earth (2025) - Download Full Series</h1>
          <div className="movie-rating">Rating: 8.5/10</div>
          <div className="download-section">
            <h2>Download Options</h2>
            <div className="trailer-section">
              <a 
                href="https://www.youtube.com/results?search_query=Alien+Earth+2025+trailer" 
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
                <p>Complete Season 1 - Episodes 1-3 Available</p>
                <p>Multiple quality options: 1080p H264, 1080p DV HDR, 4K SDR, 4K DV HDR</p>
                <p>File sizes: 1.93GB - 6.48GB per episode</p>
              </div>
            </div>
            {showDownloadOptions && clickCount >= requiredClicks && (
              <div className="download-options">
                <h2>Select Quality & Format</h2>
                
                <div className="quality-section">
                  <h3>1080p H264 Episodes</h3>
                  <div className="quality-buttons">
                    <button className="quality-btn" onClick={() => handleQualityClick('1080p H264 Episode 1')}>
                      Episode 1 - 1080p H264 [2.37 GB]
                    </button>
                    <button className="quality-btn" onClick={() => handleQualityClick('1080p H264 Episode 2')}>
                      Episode 2 - 1080p H264 [2.02 GB]
                    </button>
                    <button className="quality-btn" onClick={() => handleQualityClick('1080p H264 Episode 3')}>
                      Episode 3 - 1080p H264 [1.97 GB]
                    </button>
                  </div>
                </div>
                
                <div className="quality-section">
                  <h3>1080p DV HDR Episodes</h3>
                  <div className="quality-buttons">
                    <button className="quality-btn" onClick={() => handleQualityClick('1080p DV HDR Episode 1')}>
                      Episode 1 - 1080p DV HDR [2.28 GB]
                    </button>
                    <button className="quality-btn" onClick={() => handleQualityClick('1080p DV HDR Episode 2')}>
                      Episode 2 - 1080p DV HDR [1.97 GB]
                    </button>
                    <button className="quality-btn" onClick={() => handleQualityClick('1080p DV HDR Episode 3')}>
                      Episode 3 - 1080p DV HDR [1.93 GB]
                    </button>
                  </div>
                </div>
                
                <div className="quality-section">
                  <h3>4K SDR Episodes</h3>
                  <div className="quality-buttons">
                    <button className="quality-btn" onClick={() => handleQualityClick('4K SDR Episode 1')}>
                      Episode 1 - 4K SDR [5.35 GB]
                    </button>
                    <button className="quality-btn" onClick={() => handleQualityClick('4K SDR Episode 2')}>
                      Episode 2 - 4K SDR [4.57 GB]
                    </button>
                    <button className="quality-btn" onClick={() => handleQualityClick('4K SDR Episode 3')}>
                      Episode 3 - 4K SDR [4.54 GB]
                    </button>
                  </div>
                </div>
                
                <div className="quality-section">
                  <h3>4K DV HDR Episodes</h3>
                  <div className="quality-buttons">
                    <button className="quality-btn" onClick={() => handleQualityClick('4K DV HDR Episode 1')}>
                      Episode 1 - 4K DV HDR [6.48 GB]
                    </button>
                    <button className="quality-btn" onClick={() => handleQualityClick('4K DV HDR Episode 2')}>
                      Episode 2 - 4K DV HDR [5.54 GB]
                    </button>
                    <button className="quality-btn" onClick={() => handleQualityClick('4K DV HDR Episode 3')}>
                      Episode 3 - 4K DV HDR [5.49 GB]
                    </button>
                  </div>
                </div>
                
                <div className="instructions">
                  <p> Compatible with all devices</p>
                  <p>⚡ High-speed download servers</p>
                  <p>🎯 All file names include proper metadata</p>
                  <p>🔥 Multiple quality options available</p>
                </div>
              </div>
            )}
          </div>
          <div className="movie-info">
            <h2>About the Series</h2>
            <p>
              <strong>Alien: Earth</strong> is a thrilling new sci-fi drama series set in 2025. When mysterious extraterrestrial forces arrive on Earth, humanity must unite to face an unprecedented threat. Follow the journey of scientists, soldiers, and ordinary people as they struggle to survive, adapt, and uncover the secrets behind the alien invasion. Season 1 explores themes of survival, hope, and the unknown, with stunning visual effects and gripping storytelling.
            </p>
            <div className="movie-details">
              <div className="detail-item">
                <span className="label">Release Date:</span>
                <span className="value">2025</span>
              </div>
              <div className="detail-item">
                <span className="label">Episodes:</span>
                <span className="value">3 Episodes Available (Season 1)</span>
              </div>
              <div className="detail-item">
                <span className="label">Runtime:</span>
                <span className="value">~50 minutes per episode</span>
              </div>
              <div className="detail-item">
                <span className="label">Genre:</span>
                <span className="value">Sci-Fi, Drama, Thriller</span>
              </div>
              <div className="detail-item">
                <span className="label">Studio:</span>
                <span className="value">FX Productions</span>
              </div>
              <div className="detail-item">
                <span className="label">Network:</span>
                <span className="value">Disney+ / Hulu</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlienEarthPost;
