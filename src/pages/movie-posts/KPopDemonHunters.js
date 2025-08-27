import React, { useState, useEffect } from 'react';
import '../MoviePost.css';

const KPopDemonHuntersPost = () => {
  const [clickCount, setClickCount] = useState(0);
  const requiredClicks = 5;

  useEffect(() => {
    document.title = "KPop Demon Hunters Sing-Along (2025) Full Movie Download & Watch Online | Film Buffs";
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

  // Download links with real links and file information
  const downloadLinks = {
    // 720p Options
    '720p AV1': 'https://hubcloud.one/drive/s7nm1iimt2qti4o',
    '720p H264': 'https://hubcloud.one/drive/mlwjwpm5kgeelg5',
    
    // 1080p Options
    '1080p AV1': 'https://hubcloud.one/drive/v0vrnqqqq5tqeqz',
    '1080p H265': 'https://hubcloud.one/drive/py735ycdl3elyt5',
    '1080p DV HDR': 'https://hubcloud.one/drive/3kqrzvjahff5u1r',
    '1080p Atmos DV HDR': 'https://hubcloud.one/drive/tckymcep8l85p3j',
    '1080p Atmos H264': 'https://hubcloud.one/drive/qxbc5sqfsncndqe',
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
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRiQPAU0vExAsL_LLn1IejwD-e4TNAGB-952JTZ000HZ-lfNKOh" 
          alt="KPop Demon Hunters Sing-Along poster" 
          className="movie-poster-image" 
          title="KPop Demon Hunters Sing-Along (2025) - Official Movie Poster"
        />
        <div className="movie-content">
          <h1 className="movie-title">KPop Demon Hunters Sing-Along (2025) - Download Full Movie</h1>
          <div className="movie-rating">Rating: 7.8/10</div>
          <div className="download-section">
            <h2>Download Options</h2>
            <div className="trailer-section">
              <a 
                href="https://www.youtube.com/results?search_query=kpop+demon+hunters+2025+trailer" 
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
                <p>Full HD 1080p with DV HDR and Atmos audio options</p>
                <p>Multiple formats: H.264, H.265, AV1 codecs available</p>
                <p>File sizes: 683.05 MB - 4.87 GB</p>
                {clickCount >= requiredClicks && (
                  <p>Click the download button above to access all options</p>
                )}
              </div>
            </div>
            {showDownloadOptions && clickCount >= requiredClicks && (
              <div className="download-options">
                <h2>Select Quality & Format</h2>
                <div className="quality-section">
                  <h3>1080p Quality Options</h3>
                  <div className="quality-buttons">
                    <button className="quality-btn" onClick={() => handleQualityClick('1080p Atmos H264')}>
                      1080p Atmos H.264 [4.87 GB]
                    </button>
                    <button className="quality-btn" onClick={() => handleQualityClick('1080p Atmos DV HDR')}>
                      1080p Atmos DV HDR [4.6 GB]
                    </button>
                    <button className="quality-btn" onClick={() => handleQualityClick('1080p DV HDR')}>
                      1080p DV HDR H.265 [3.44 GB]
                    </button>
                  </div>
                  <div className="quality-buttons">
                    <button className="quality-btn" onClick={() => handleQualityClick('1080p H265')}>
                      1080p H.265 [1.41 GB]
                    </button>
                    <button className="quality-btn" onClick={() => handleQualityClick('1080p AV1')}>
                      1080p AV1 [1.22 GB]
                    </button>
                  </div>
                </div>
                <div className="quality-section">
                  <h3>720p Quality Options</h3>
                  <div className="quality-buttons">
                    <button className="quality-btn" onClick={() => handleQualityClick('720p H264')}>
                      720p H.264 [1.19 GB]
                    </button>
                    <button className="quality-btn" onClick={() => handleQualityClick('720p AV1')}>
                      720p AV1 [683.05 MB]
                    </button>
                  </div>
                </div>
                <div className="instructions">
                  <p>🔴 Click any quality button 5 times to access download links</p>
                  <p>📱 Compatible with all devices</p>
                  <p>⚡ High-speed download servers</p>
                  <p>🎵 Includes sing-along lyrics and karaoke version</p>
                  <p>🌟 English & Korean audio tracks</p>
                  <p>🎬 Official Netflix release</p>
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
              <strong>KPop Demon Hunters Sing-Along</strong> is a high-energy action musical featuring a talented K-pop girl group who discover they're the latest in a long line of demon hunters. By day, they're chart-topping sensations; by night, they battle supernatural forces threatening the world. 
            </p>
            <p>
              This special sing-along version includes on-screen lyrics for all original songs, allowing fans to join in on the action-packed musical numbers. With stunning choreography that doubles as martial arts, catchy songs that serve as powerful spells, and dazzling special effects, this film brings together the worlds of K-pop and supernatural action in a groundbreaking entertainment experience.
            </p>
            <div className="movie-details">
              <div className="detail-item">
                <span className="label">Release Date:</span>
                <span className="value">August 2025</span>
              </div>
              <div className="detail-item">
                <span className="label">Runtime:</span>
                <span className="value">115 minutes</span>
              </div>
              <div className="detail-item">
                <span className="label">Genre:</span>
                <span className="value">Action, Musical, Fantasy</span>
              </div>
              <div className="detail-item">
                <span className="label">Director:</span>
                <span className="value">Kim Min-hee</span>
              </div>
              <div className="detail-item">
                <span className="label">Studio:</span>
                <span className="value">Netflix Original</span>
              </div>
              <div className="detail-item">
                <span className="label">Network:</span>
                <span className="value">Netflix</span>
              </div>
              <div className="detail-item">
                <span className="label">Language:</span>
                <span className="value">Korean, English</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KPopDemonHuntersPost;
