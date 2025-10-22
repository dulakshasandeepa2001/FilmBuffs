import React, { useState, useEffect } from 'react';
import '../MoviePost.css';

const GenVS2E7Post = () => {
  const [clickCount, setClickCount] = useState(0);
  const requiredClicks = 1; // Changed to 1 click
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // DownloadPage functionality
  const [clickCounts, setClickCounts] = useState({});

  // Download links for Gen V Season 2 Episode 7
  const downloadLinks = {
    '4K HDR': 'https://hubcloud.fit/drive/svt0bg5nj2i4vnp',
    '1080p x264': 'https://gdflix.dev/file/dBFwnX63V3m1C8e',
    '1080p x265': 'https://gdflix.dev/file/4odk1jtMldIW8Km',
    '1080p 900MB': 'https://hubcloud.fit/drive/aaax9gsogusmuqp',
    '720p x264': 'https://gdflix.dev/file/gvcUi3o9ic4fQCn',
    '720p x265': 'https://gdflix.dev/file/LAq44bLYBPH2B9c',
  };

  const handleDownloadClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    
    // No redirects, just show download options after 1 click
  };

  const handleQualityClick = (quality) => {
    const currentCount = clickCounts[quality] || 0;
    const newCount = currentCount + 1;

    setClickCounts(prev => ({
      ...prev,
      [quality]: newCount
    }));

    // Open download link immediately on first click
    const link = downloadLinks[quality];
    if (link) {
      window.open(link, '_blank');
    }
  };

  const getButtonText = (quality) => {
    return `Download ${quality}`;
  };

  return (
    <div className="movie-post-page">
      <div className="movie-post-container">
        {/* Hero Section */}
        <div className="movie-hero-section">
          <img 
            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRzwSBfxxHGySUWXuRNH1MJ4-UX971SBEnF7dRVmtQ9WbwlOmYY" 
            alt="Gen V Season 2 Episode 7 - Hell Week" 
            className="movie-banner-image"
          />
          <div className="movie-hero-overlay">
            <div className="movie-hero-content">
              <h1 className="movie-title-hero">Gen V - Season 2 Episode 7: Hell Week</h1>
              <div className="movie-meta-hero">
                <span className="year-badge">2025</span>
                <span className="rating-badge">⭐ 8.3/10</span>
                <span className="genre-badge">Drama</span>
                <span className="genre-badge">Action</span>
                <span className="genre-badge">Superhero</span>
              </div>
            </div>
          </div>
        </div>

        {/* Movie Information */}
        <div className="movie-info-section">
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Episode:</span>
              <span className="info-value">S02E07</span>
            </div>
            <div className="info-item">
              <span className="info-label">Released:</span>
              <span className="info-value">2025</span>
            </div>
            <div className="info-item">
              <span className="info-label">Runtime:</span>
              <span className="info-value">~50 min</span>
            </div>
            <div className="info-item">
              <span className="info-label">Language:</span>
              <span className="info-value">English (Multi Audio)</span>
            </div>
            <div className="info-item">
              <span className="info-label">Quality:</span>
              <span className="info-value">4K HDR / 1080p / 720p</span>
            </div>
            <div className="info-item">
              <span className="info-label">Format:</span>
              <span className="info-value">MKV</span>
            </div>
          </div>
        </div>

        {/* Synopsis */}
        <div className="movie-description-section">
          <h2 className="section-title">Episode Synopsis</h2>
          <p className="movie-description">
            In "Hell Week," the seventh episode of Gen V's second season, the stakes reach new heights at Godolkin University. 
            As the pressure mounts during the intense Hell Week trials, our young heroes face their most challenging tests yet. 
            Relationships are tested, secrets are revealed, and the true nature of power becomes devastatingly clear. 
            This episode delivers explosive action sequences combined with deeply emotional character moments that will leave 
            fans breathless. The lines between hero and villain continue to blur as the students discover what they're truly 
            capable of when pushed to their limits.
          </p>
          
          <div className="highlights-section">
            <h3 className="subsection-title">Episode Highlights:</h3>
            <ul className="highlights-list">
              <li>✨ Intense Hell Week challenges push students to their breaking points</li>
              <li>🎭 Character-defining moments and major revelations</li>
              <li>💥 Spectacular action sequences with enhanced visual effects</li>
              <li>🔥 Emotional depth exploring themes of power and responsibility</li>
              <li>🎬 Available in stunning 4K HDR with Dolby Digital Plus 5.1 audio</li>
              <li>🌟 Multiple audio tracks and subtitle options</li>
            </ul>
          </div>
        </div>

        {/* Download Section */}
        <div className="download-section-main">
          <h2 className="section-title">Download Gen V S02E07 - Hell Week</h2>
          
          <div className="download-notice">
            <p>⚠️ Click the download button to access your selected quality.</p>
            <p>💡 Available in multiple qualities: 4K HDR (4.21GB), 1080p (900MB - 3.83GB), and 720p (1.44GB - 1.56GB)</p>
          </div>

          {clickCount >= requiredClicks ? (
            <div className="download-qualities-grid">
              <div className="quality-card premium">
                <div className="quality-header">
                  <h3>4K HDR</h3>
                  <span className="quality-size">4.21 GB</span>
                </div>
                <p className="quality-desc">Ultra HD • HDR10 • Best Quality</p>
                <button 
                  onClick={() => handleQualityClick('4K HDR')}
                  className="quality-download-btn premium-btn"
                >
                  {getButtonText('4K HDR')}
                </button>
              </div>

              <div className="quality-card">
                <div className="quality-header">
                  <h3>1080p x264</h3>
                  <span className="quality-size">3.83 GB</span>
                </div>
                <p className="quality-desc">Full HD • H.264 • Multi Audio • DDP 5.1</p>
                <button 
                  onClick={() => handleQualityClick('1080p x264')}
                  className="quality-download-btn"
                >
                  {getButtonText('1080p x264')}
                </button>
              </div>

              <div className="quality-card">
                <div className="quality-header">
                  <h3>1080p x265</h3>
                  <span className="quality-size">1.77 GB</span>
                </div>
                <p className="quality-desc">Full HD • H.265 • Multi Audio • DDP 5.1</p>
                <button 
                  onClick={() => handleQualityClick('1080p x265')}
                  className="quality-download-btn"
                >
                  {getButtonText('1080p x265')}
                </button>
              </div>

              <div className="quality-card">
                <div className="quality-header">
                  <h3>1080p Compressed</h3>
                  <span className="quality-size">900 MB</span>
                </div>
                <p className="quality-desc">Full HD • Compressed • Smaller Size</p>
                <button 
                  onClick={() => handleQualityClick('1080p 900MB')}
                  className="quality-download-btn"
                >
                  {getButtonText('1080p 900MB')}
                </button>
              </div>

              <div className="quality-card">
                <div className="quality-header">
                  <h3>720p x264</h3>
                  <span className="quality-size">1.56 GB</span>
                </div>
                <p className="quality-desc">HD • H.264 • Multi Audio • DDP 5.1</p>
                <button 
                  onClick={() => handleQualityClick('720p x264')}
                  className="quality-download-btn"
                >
                  {getButtonText('720p x264')}
                </button>
              </div>

              <div className="quality-card">
                <div className="quality-header">
                  <h3>720p x265</h3>
                  <span className="quality-size">1.44 GB</span>
                </div>
                <p className="quality-desc">HD • H.265 • Multi Audio • DDP 5.1</p>
                <button 
                  onClick={() => handleQualityClick('720p x265')}
                  className="quality-download-btn"
                >
                  {getButtonText('720p x265')}
                </button>
              </div>
            </div>
          ) : (
            <div className="initial-download-section">
              <button 
                onClick={handleDownloadClick}
                className="main-download-button"
              >
                ⬇️ Download Gen V S02E07
              </button>
            </div>
          )}
        </div>

        {/* Technical Specifications */}
        <div className="technical-specs-section">
          <h2 className="section-title">Technical Specifications</h2>
          <div className="specs-grid">
            <div className="spec-card">
              <h4>Video</h4>
              <ul>
                <li>Codec: H.264 / H.265 (HEVC)</li>
                <li>Resolution: 3840x2160 / 1920x1080 / 1280x720</li>
                <li>HDR: HDR10 (4K version)</li>
                <li>Source: Amazon WEB-DL</li>
              </ul>
            </div>
            <div className="spec-card">
              <h4>Audio</h4>
              <ul>
                <li>Codec: Dolby Digital Plus 5.1</li>
                <li>Languages: Multi Audio</li>
                <li>Bitrate: High Quality</li>
                <li>Channels: 5.1 Surround</li>
              </ul>
            </div>
            <div className="spec-card">
              <h4>File Info</h4>
              <ul>
                <li>Container: MKV (Matroska)</li>
                <li>Release: CHiKU</li>
                <li>Size: 900MB - 4.21GB</li>
                <li>Subtitles: Multiple Options</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Screenshots Section */}
        <div className="screenshots-section">
          <h2 className="section-title">Screenshots</h2>
          <div className="screenshots-note">
            <p>📸 High-quality screenshots showcase the stunning visual quality and dramatic moments from this episode.</p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="additional-info-section">
          <h2 className="section-title">About Gen V Season 2</h2>
          <p>
            Gen V continues to expand The Boys universe with its thrilling second season. Following the explosive events 
            of Season 1, the students of Godolkin University face new challenges as they navigate the complex world of 
            superhero politics, corporate manipulation, and their own evolving powers. Season 2 raises the stakes with 
            more intense action, deeper character development, and shocking revelations that connect directly to the 
            main series.
          </p>
          <p>
            "Hell Week" represents a pivotal moment in the season, delivering both spectacular entertainment and 
            thought-provoking commentary on power, ambition, and the price of heroism. This episode is a must-watch 
            for fans of The Boys universe and superhero drama in general.
          </p>
        </div>

        {/* Related Content */}
        <div className="related-section">
          <h2 className="section-title">More from Gen V</h2>
          <div className="related-notice">
            <p>🎬 Check out other episodes from Gen V Season 2 and explore more superhero drama series on Film Buffs!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenVS2E7Post;
