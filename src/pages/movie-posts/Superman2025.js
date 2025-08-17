import React, { useState, useEffect } from 'react';
import '../MoviePost.css';

const Superman2025Post = () => {
  const [clickCount, setClickCount] = useState(0);
  const requiredClicks = 5;

  useEffect(() => {
    document.title = "Superman (2025) Full Movie Download & Watch Online | Film Buffs";
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Download and watch Superman (2025) full movie in HD. The legendary superhero returns in an epic action/sci-fi adventure. Available in 4K, 1080p, and 720p.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Download and watch Superman (2025) full movie in HD. The legendary superhero returns in an epic action/sci-fi adventure. Available in 4K, 1080p, and 720p.';
      document.head.appendChild(newMetaDescription);
    }
    // Canonical URL
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.setAttribute('href', window.location.href);
    } else {
      const canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = window.location.href;
      document.head.appendChild(canonical);
    }
    // Robots meta tag
    const existingRobots = document.querySelector('meta[name="robots"]');
    if (existingRobots) {
      existingRobots.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    } else {
      const robots = document.createElement('meta');
      robots.name = 'robots';
      robots.content = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
      document.head.appendChild(robots);
    }
    // Author meta tag
    const existingAuthor = document.querySelector('meta[name="author"]');
    if (existingAuthor) {
      existingAuthor.setAttribute('content', 'Film Buffs');
    } else {
      const author = document.createElement('meta');
      author.name = 'author';
      author.content = 'Film Buffs';
      document.head.appendChild(author);
    }
    // Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Superman 2025, superhero movie, action, sci-fi, DC Comics, download movie, watch online, HD quality, 4K, 1080p, 720p, new Superman film');
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = 'Superman 2025, superhero movie, action, sci-fi, DC Comics, download movie, watch online, HD quality, 4K, 1080p, 720p, new Superman film';
      document.head.appendChild(newMetaKeywords);
    }
    // Language
    const existingLanguage = document.querySelector('meta[http-equiv="content-language"]');
    if (existingLanguage) {
      existingLanguage.setAttribute('content', 'en-US');
    } else {
      const language = document.createElement('meta');
      language.setAttribute('http-equiv', 'content-language');
      language.content = 'en-US';
      document.head.appendChild(language);
    }
    // Open Graph
    const setOrCreateOGMeta = (property, content) => {
      let ogMeta = document.querySelector(`meta[property="${property}"]`);
      if (ogMeta) {
        ogMeta.setAttribute('content', content);
      } else {
        ogMeta = document.createElement('meta');
        ogMeta.setAttribute('property', property);
        ogMeta.setAttribute('content', content);
        document.head.appendChild(ogMeta);
      }
    };
    setOrCreateOGMeta('og:title', 'Superman (2025) Full Movie Download & Watch Online');
    setOrCreateOGMeta('og:description', 'The legendary superhero returns in an epic action/sci-fi adventure.');
    setOrCreateOGMeta('og:image', 'https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png');
    setOrCreateOGMeta('og:image:width', '1200');
    setOrCreateOGMeta('og:image:height', '630');
    setOrCreateOGMeta('og:image:alt', 'Superman 2025 movie poster');
    setOrCreateOGMeta('og:type', 'video.movie');
    setOrCreateOGMeta('og:url', window.location.href);
    setOrCreateOGMeta('og:site_name', 'Film Buffs');
    setOrCreateOGMeta('og:locale', 'en_US');
    // Twitter Card
    const setOrCreateTwitterMeta = (name, content) => {
      let twitterMeta = document.querySelector(`meta[name="${name}"]`);
      if (twitterMeta) {
        twitterMeta.setAttribute('content', content);
      } else {
        twitterMeta = document.createElement('meta');
        twitterMeta.setAttribute('name', name);
        twitterMeta.setAttribute('content', content);
        document.head.appendChild(twitterMeta);
      }
    };
    setOrCreateTwitterMeta('twitter:card', 'summary_large_image');
    setOrCreateTwitterMeta('twitter:title', 'Superman (2025) Full Movie Download & Watch Online');
    setOrCreateTwitterMeta('twitter:description', 'The legendary superhero returns in an epic action/sci-fi adventure.');
    setOrCreateTwitterMeta('twitter:image', 'https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png');
    setOrCreateTwitterMeta('twitter:image:alt', 'Superman 2025 movie poster');
    // JSON-LD structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Movie",
      "name": "Superman",
      "alternateName": "Superman 2025",
      "description": "The legendary superhero returns in an epic action/sci-fi adventure. Superman faces new threats to Earth and must balance his human identity with his superhuman responsibilities.",
      "image": "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png",
      "genre": ["Action", "Sci-fi", "Superhero"],
      "contentRating": "PG-13",
      "duration": "PT2H10M",
      "datePublished": "2025-07-10",
      "director": {
        "@type": "Person",
        "name": "TBA"
      },
      "actor": [
        {
          "@type": "Person",
          "name": "TBA"
        }
      ],
      "productionCompany": {
        "@type": "Organization",
        "name": "Warner Bros."
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "8.4",
        "ratingCount": "50000"
      },
      "trailer": {
        "@type": "VideoObject",
        "name": "Superman 2025 Official Trailer",
        "description": "Watch the official trailer for Superman (2025)",
        "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/en/3/35/Supermanflying.png",
        "uploadDate": "2025-06-01"
      },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "price": "0",
        "priceCurrency": "USD",
        "category": "Free"
      },
      "url": window.location.href,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": window.location.href
      }
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
    return () => {
      document.title = "Film Buffs";
    };
  }, []);

  const [clickCounts, setClickCounts] = useState({});
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);
  const redirectUrls = [
    'https://incredibleenhancementslightning.com/mb44w5nrf?key=b81da213cd8d52d142d1bec92e3e014d',
    'https://incredibleenhancementslightning.com/d0jtntz4zi?key=b9a5ee9377f9a6709624ba8c106313f9',
    'https://incredibleenhancementslightning.com/dzzpxkz4?key=e9c5b50948edadcec659d3dc875f7542',
    'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b'
  ];
  // Download links (placeholder)
  const downloadLinks = {
    '720p WEB-DL': '#',
    '1080p WEB-DL': '#',
    '4K UHD WEB-DL': '#'
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
    const currentCount = clickCounts[quality] || 0;
    const newCount = currentCount + 1;
    setClickCounts(prev => ({ ...prev, [quality]: newCount }));
    if (newCount <= 4) {
      const urlIndex = (newCount - 1) % redirectUrls.length;
      window.open(redirectUrls[urlIndex], '_blank');
    } else if (newCount >= 5) {
      const downloadLink = downloadLinks[quality];
      if (downloadLink) {
        window.open(downloadLink, '_blank');
      }
    }
  };
  return (
    <div className="movie-post-page">
      <div className="movie-poster-container">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqZn20BgESHQl4KVxTNRT0E444uyU35NpnQBUHUlEvW-j4WNqE" 
          alt="Superman 2025 movie poster" 
          className="movie-poster-image" 
          title="Superman (2025) - Official Movie Poster"
        />
        <div className="movie-content">
          <h1 className="movie-title" itemProp="name" itemScope itemType="https://schema.org/Movie">
            Superman (2025) - Download Full Movie
          </h1>
          <div className="movie-rating" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
            Rating: <span itemProp="ratingValue">8.4</span>/<span itemProp="bestRating">10</span> 
            (<span itemProp="ratingCount">50,000</span> reviews)
          </div>
          <div className="download-section">
            <h2>Download Options</h2>
            <div className="trailer-section">
              <a 
                href="https://www.youtube.com/results?search_query=superman+2025+trailer" 
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
                <p>Runtime: 2h 10m | Action/Sci-fi | 2025</p>
                <p>Multiple quality options: 720p, 1080p, 4K UHD</p>
                <p>File sizes: Coming soon</p>
                {clickCount >= requiredClicks && (
                  <p>Click the download button above to access all options</p>
                )}
              </div>
            </div>
            {showDownloadOptions && clickCount >= requiredClicks && (
              <div className="download-options">
                <h2>Select Quality & Format</h2>
                <div className="quality-section">
                  <h3>Standard Definition</h3>
                  <div className="quality-buttons" style={{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center'}}>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('720p WEB-DL')}
                      style={{minWidth: '350px'}}
                    >
                      720p WEB-DL [Coming soon]
                    </button>
                  </div>
                </div>
                <div className="quality-section">
                  <h3>Full HD</h3>
                  <div className="quality-buttons" style={{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center'}}>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('1080p WEB-DL')}
                      style={{minWidth: '350px'}}
                    >
                      1080p WEB-DL [Coming soon]
                    </button>
                  </div>
                </div>
                <div className="quality-section">
                  <h3>4K Ultra HD</h3>
                  <div className="quality-buttons" style={{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center'}}>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('4K UHD WEB-DL')}
                      style={{minWidth: '350px'}}
                    >
                      4K UHD WEB-DL [Coming soon]
                    </button>
                  </div>
                </div>
                <div className="instructions">
                  <p>🔴 Click any quality button 5 times to access download links</p>
                  <p>📱 Compatible with all devices</p>
                  <p>⚡ High-speed download servers</p>
                  <p>🎯 Warner Bros. WEB-DL Quality</p>
                  <p>🔥 4K version coming soon</p>
                </div>
              </div>
            )}
          </div>
          <div className="movie-info" itemScope itemType="https://schema.org/Movie">
            <h2>About the Movie</h2>
            <p itemProp="description">
              <strong>Superman</strong> returns in 2025 for an epic action/sci-fi adventure. The legendary superhero faces new threats to Earth and must balance his human identity with his superhuman responsibilities. With stunning visual effects, thrilling action sequences, and a powerful story, this film redefines the Superman legacy for a new generation.
            </p>
            <div className="movie-details">
              <div className="detail-item">
                <span className="label">Release Date:</span>
                <span className="value" itemProp="datePublished">July 10, 2025</span>
              </div>
              <div className="detail-item">
                <span className="label">Runtime:</span>
                <span className="value" itemProp="duration">2h 10m</span>
              </div>
              <div className="detail-item">
                <span className="label">Genre:</span>
                <span className="value">
                  <span itemProp="genre">Action</span>, 
                  <span itemProp="genre">Sci-fi</span>, 
                  <span itemProp="genre">Superhero</span>
                </span>
              </div>
              <div className="detail-item">
                <span className="label">Director:</span>
                <span className="value">
                  <span itemProp="director" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">TBA</span>
                  </span>
                </span>
              </div>
              <div className="detail-item">
                <span className="label">Writer:</span>
                <span className="value">TBA</span>
              </div>
              <div className="detail-item">
                <span className="label">Cast:</span>
                <span className="value">
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">TBA</span>
                  </span>
                </span>
              </div>
              <div className="detail-item">
                <span className="label">Studio:</span>
                <span className="value">
                  <span itemProp="productionCompany" itemScope itemType="https://schema.org/Organization">
                    <span itemProp="name">Warner Bros.</span>
                  </span>
                </span>
              </div>
              <div className="detail-item">
                <span className="label">Language:</span>
                <span className="value" itemProp="inLanguage">English</span>
              </div>
              <div className="detail-item">
                <span className="label">Country:</span>
                <span className="value">United States</span>
              </div>
              <div className="detail-item">
                <span className="label">Rating:</span>
                <span className="value" itemProp="contentRating">PG-13</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Superman2025Post;
