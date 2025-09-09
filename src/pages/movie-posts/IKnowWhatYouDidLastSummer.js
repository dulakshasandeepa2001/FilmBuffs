import React, { useState, useEffect } from 'react';
import '../MoviePost.css';

const IKnowWhatYouDidLastSummerPost = () => {
  const [clickCount, setClickCount] = useState(0);
  const requiredClicks = 1;

  useEffect(() => {
    document.title = "I Know What You Did Last Summer (2025) Full Movie Download & Watch Online | Film Buffs";
    // SEO meta tags setup
  }, []);

  const [showDownloadOptions, setShowDownloadOptions] = useState(false);
  const [showServerPopup, setShowServerPopup] = useState(false);
  const [selectedQuality, setSelectedQuality] = useState('');

  // No longer need redirect URLs as we're using direct download links

  // Download links for different quality options
  const downloadLinks = {
    '4K DV HDR': 'https://hubcloud.one/drive/vhphm4vvedmkiv0', // I.Know.What.You.Did.Last.Summer.2025.2160p.iT.WEB-DL.DDP5.1.Atmos.DV.HDR.H.265-BYNDR.mkv [19.33 GB]
    '4K SDR': 'https://hubcloud.one/drive/gnunvelttnvg33j', // I.Know.What.You.Did.Last.Summer.2025.2160p.iT.WEB-DL.DDP5.1.Atmos.SDR.H.265-Accomplished.mkv [9.82 GB]
    '1080p': 'https://hubcloud.one/drive/b36lejdw0tdr3gq', // I.Know.What.You.Did.Last.Summer.2025.1080p.MA.WEB-DL.DDP5.1.H.264-DONTTELLANYONE.mkv [6.59 GB]
    'Direct Link': 'https://hubcloud.one/drive/b36lejdw0tdr3gq', // 1080p direct link
  };

  const handleDownloadClick = () => {
    // Only need one click to show download options
    setClickCount(1);
  };

  const handleQualityClick = (quality) => {
    // Show the server selection popup immediately
    setSelectedQuality(quality);
    setShowServerPopup(true);
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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9-FkFMeOIyaH7KEDXFhc3p8itdq1EZGDKYmWhwC0iry-Ka3Pr" 
          alt="I Know What You Did Last Summer poster" 
          className="movie-poster-image" 
          title="I Know What You Did Last Summer (2025) - Official Movie Poster"
        />
        <div className="movie-content">
          <h1 className="movie-title">I Know What You Did Last Summer (2025) - Download Full Movie</h1>
          <div className="movie-rating">Rating: 7.5/10</div>
          <div className="download-section">
            <h2>Download Options</h2>
            <div className="trailer-section">
              <a 
                href="https://www.youtube.com/results?search_query=i+know+what+you+did+last+summer+2025+trailer" 
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
                <p>4K Dolby Vision HDR and SDR quality available</p>
                <p>DDP 5.1 Atmos surround sound audio</p>
                <p>File sizes: 6.59GB - 19.33GB</p>
                <p>All downloads available instantly - no waiting!</p>
              </div>
            </div>
            {showDownloadOptions && clickCount >= requiredClicks && (
              <div className="download-options">
                <h2>Select Quality & Format</h2>
                <div className="quality-section">
                  <h3>Premium Quality Options</h3>
                  <div className="quality-buttons">
                    <button className="quality-btn" onClick={() => handleQualityClick('4K DV HDR')}>
                      4K Dolby Vision HDR [19.33 GB] - BYNDR
                    </button>
                    <button className="quality-btn" onClick={() => handleQualityClick('4K SDR')}>
                      4K SDR [9.82 GB] - Accomplished
                    </button>
                  </div>
                </div>
                <div className="quality-section">
                  <h3>Standard Quality Options</h3>
                  <div className="quality-buttons">
                    <button className="quality-btn" onClick={() => handleQualityClick('1080p')}>
                      1080p Full HD [6.59 GB] - DONTTELLANYONE
                    </button>
                    <button className="quality-btn" onClick={() => handleQualityClick('Direct Link')}>
                      Direct Download Link
                    </button>
                  </div>
                </div>
                <div className="instructions">
                  <p>📱 Compatible with all devices</p>
                  <p>⚡ High-speed download servers</p>
                  <p>🔊 5.1 Atmos Surround Sound Audio</p>
                  <p>🎬 Original iTunes & MoviesAnywhere releases</p>
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
              <strong>I Know What You Did Last Summer (2025)</strong> is a modern reboot of the classic slasher film franchise. A group of friends are haunted by a shared secret from their past when they begin to receive threatening messages one year after a tragic accident. As they try to uncover who's behind the messages, they find themselves being hunted down one by one.
            </p>
            <p>
              This reinvention of the iconic horror franchise brings the chilling premise into the social media age, exploring themes of guilt, secrets, and the consequences of our actions in a world where nothing stays hidden forever. With elevated scares, intense suspense, and a killer twist ending, this reboot honors the original while delivering fresh thrills for a new generation of horror fans.
            </p>
            <div className="movie-details">
              <div className="detail-item">
                <span className="label">Release Date:</span>
                <span className="value">July 2025</span>
              </div>
              <div className="detail-item">
                <span className="label">Runtime:</span>
                <span className="value">108 minutes</span>
              </div>
              <div className="detail-item">
                <span className="label">Genre:</span>
                <span className="value">Horror, Thriller, Mystery</span>
              </div>
              <div className="detail-item">
                <span className="label">Director:</span>
                <span className="value">Jennifer Kent</span>
              </div>
              <div className="detail-item">
                <span className="label">Studio:</span>
                <span className="value">Columbia Pictures / iTunes / MoviesAnywhere</span>
              </div>
              <div className="detail-item">
                <span className="label">Audio:</span>
                <span className="value">DDP 5.1 Atmos</span>
              </div>
              <div className="detail-item">
                <span className="label">Rating:</span>
                <span className="value">R (Violence, Language, Brief Nudity)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IKnowWhatYouDidLastSummerPost;
