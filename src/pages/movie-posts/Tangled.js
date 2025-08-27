import React, { useState, useEffect } from 'react';
import '../MoviePost.css';

const TangledPost = () => {
  const [clickCount, setClickCount] = useState(0);
  const requiredClicks = 5;
  
  // SEO and Meta data setup
  useEffect(() => {
    // Set document title
    document.title = "Tangled (2010) Full Movie Download & Watch Online | Film Buffs";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Download and watch Tangled (2010) full movie in HD. Mandy Moore and Zachary Levi star in this Disney animated musical adventure. Explore trailer, cast, duration, and available quality formats only on Film Buffs.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Download and watch Tangled (2010) full movie in HD. Mandy Moore and Zachary Levi star in this Disney animated musical adventure. Explore trailer, cast, duration, and available quality formats only on Film Buffs.';
      document.head.appendChild(newMetaDescription);
    }

    // Add canonical URL
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.setAttribute('href', window.location.href);
    } else {
      const canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = window.location.href;
      document.head.appendChild(canonical);
    }

    // Add robots meta tag
    const existingRobots = document.querySelector('meta[name="robots"]');
    if (existingRobots) {
      existingRobots.setAttribute('content', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    } else {
      const robots = document.createElement('meta');
      robots.name = 'robots';
      robots.content = 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
      document.head.appendChild(robots);
    }

    // Add author meta tag
    const existingAuthor = document.querySelector('meta[name="author"]');
    if (existingAuthor) {
      existingAuthor.setAttribute('content', 'Film Buffs');
    } else {
      const author = document.createElement('meta');
      author.name = 'author';
      author.content = 'Film Buffs';
      document.head.appendChild(author);
    }

    // Set meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'Tangled 2010, Rapunzel, Mandy Moore, Zachary Levi, Disney, animated movie, musical, family film, download, watch online, HD quality, Nathan Greno, Byron Howard, adventure, comedy, Walt Disney Pictures');
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = 'Tangled 2010, Rapunzel, Mandy Moore, Zachary Levi, Disney, animated movie, musical, family film, download, watch online, HD quality, Nathan Greno, Byron Howard, adventure, comedy, Walt Disney Pictures';
      document.head.appendChild(newMetaKeywords);
    }

    // Add language meta tag
    const existingLanguage = document.querySelector('meta[http-equiv="content-language"]');
    if (existingLanguage) {
      existingLanguage.setAttribute('content', 'en-US');
    } else {
      const language = document.createElement('meta');
      language.setAttribute('http-equiv', 'content-language');
      language.content = 'en-US';
      document.head.appendChild(language);
    }

    // Add Open Graph meta tags
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

    setOrCreateOGMeta('og:title', 'Tangled (2010) Full Movie Download & Watch Online');
    setOrCreateOGMeta('og:description', 'A magical Disney adventure about Rapunzel and her 70 feet of golden hair. Download and watch Tangled starring Mandy Moore and Zachary Levi in HD quality.');
    setOrCreateOGMeta('og:image', 'https://upload.wikimedia.org/wikipedia/en/a/a8/Tangled_poster.jpg');
    setOrCreateOGMeta('og:image:width', '1200');
    setOrCreateOGMeta('og:image:height', '630');
    setOrCreateOGMeta('og:image:alt', 'Tangled 2010 movie poster featuring Rapunzel and Flynn Rider');
    setOrCreateOGMeta('og:type', 'video.movie');
    setOrCreateOGMeta('og:url', window.location.href);
    setOrCreateOGMeta('og:site_name', 'Film Buffs');
    setOrCreateOGMeta('og:locale', 'en_US');

    // Add Twitter Card meta tags
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
    setOrCreateTwitterMeta('twitter:title', 'Tangled (2010) Full Movie Download & Watch Online');
    setOrCreateTwitterMeta('twitter:description', 'A magical Disney adventure about Rapunzel and her 70 feet of golden hair. Download and watch Tangled starring Mandy Moore and Zachary Levi in HD quality.');
    setOrCreateTwitterMeta('twitter:image', 'https://upload.wikimedia.org/wikipedia/en/a/a8/Tangled_poster.jpg');
    setOrCreateTwitterMeta('twitter:image:alt', 'Tangled 2010 movie poster featuring Rapunzel and Flynn Rider');
    setOrCreateTwitterMeta('twitter:site', '@FilmBuffs');
    setOrCreateTwitterMeta('twitter:creator', '@FilmBuffs');

    // Add structured data (JSON-LD)
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      document.head.removeChild(existingScript);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Movie",
      "name": "Tangled",
      "alternateName": "Rapunzel",
      "image": {
        "@type": "ImageObject",
        "url": "https://upload.wikimedia.org/wikipedia/en/a/a8/Tangled_poster.jpg",
        "width": 1200,
        "height": 630
      },
      "description": "When the kingdom's most wanted—and most charming—bandit Flynn Rider hides out in a mysterious tower, he's taken hostage by Rapunzel, a beautiful and feisty tower-bound teen with 70 feet of magical, golden hair. A spirited Disney adventure with unforgettable songs and stunning animation.",
      "datePublished": "2010-11-24",
      "duration": "PT1H40M",
      "genre": ["Animation", "Family", "Comedy", "Adventure", "Musical"],
      "contentRating": "PG",
      "inLanguage": "en-US",
      "countryOfOrigin": {
        "@type": "Country",
        "name": "United States"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "7.7",
        "ratingCount": "10000",
        "bestRating": "10",
        "worstRating": "1"
      },
      "director": [
        { "@type": "Person", "name": "Nathan Greno" },
        { "@type": "Person", "name": "Byron Howard" }
      ],
      "actor": [
        { "@type": "Person", "name": "Mandy Moore" },
        { "@type": "Person", "name": "Zachary Levi" },
        { "@type": "Person", "name": "Donna Murphy" }
      ],
      "productionCompany": {
        "@type": "Organization",
        "name": "Walt Disney Pictures"
      },
      "trailer": {
        "@type": "VideoObject",
        "name": "Tangled Official Trailer",
        "description": "Watch the official trailer for Tangled (2010)",
        "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/en/a/a8/Tangled_poster.jpg",
        "embedUrl": "https://www.youtube.com/embed/hmMNGWQ6Qrg"
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

    // Cleanup function
    return () => {
      // Reset title when component unmounts
      document.title = "Film Buffs";
    };
  }, []);
  
  // DownloadPage functionality
  const [clickCounts, setClickCounts] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [currentQuality, setCurrentQuality] = useState('');
  const [serverClickCounts, setServerClickCounts] = useState({});
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);

  // Redirect URLs for the first 4 clicks
  const redirectUrls = [
    'https://otieu.com/4/9550585',
    'https://otieu.com/4/9550586',
    'https://otieu.com/4/9545201',
    'https://otieu.com/4/9550584'
  ];

  // Download links for Tangled
  const downloadLinks = {
    '480p x264-mega': 'https://ssn.techinmind.space/files/caf3cc9c2c2e375dfd27',
    '480p x264-viking': 'https://mediaset.sdasofia.org/animacii%20deca/65.Disney.Animation.With.BG.Audio/2010%20Tangled/Tangled.2010.BRRip.BGAUDiO.XviD-ArenaBG.avi',
    '480p x264-gdrive': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',
    '480p x265-mega': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',
    '480p x265-viking': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',
    '480p x265-gdrive': 'https://otieu.com/4/9550585',

    '720p x264-mega': 'https://ssn.techinmind.space/files/caf3cc9c2c2e375dfd27',
    '720p x264-viking': 'https://mediaset.sdasofia.org/animacii%20deca/65.Disney.Animation.With.BG.Audio/2010%20Tangled/Tangled.2010.BRRip.BGAUDiO.XviD-ArenaBG.avi',
    '720p x264-gdrive': 'https://ssn.techinmind.space/files/tangled2010720p',
    '720p x265-mega': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',
    '720p x265-viking': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',
    '720p x265-gdrive': 'https://otieu.com/4/9550585',

    '1080p x264-mega': 'https://ssn.techinmind.space/files/caf3cc9c2c2e375dfd27',
    '1080p x264-viking': 'https://mediaset.sdasofia.org/animacii%20deca/65.Disney.Animation.With.BG.Audio/2010%20Tangled/Tangled.2010.BRRip.BGAUDiO.XviD-ArenaBG.avi',
    '1080p x264-gdrive': 'https://ssn.techinmind.space/files/tangled20101080p',
    '1080p x265-mega': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',
    '1080p x265-viking': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',
    '1080p x265-gdrive': 'https://otieu.com/4/9550585',
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
          src="https://upload.wikimedia.org/wikipedia/en/a/a8/Tangled_poster.jpg" 
          alt="Tangled 2010 movie poster featuring Rapunzel and Flynn Rider Disney animated film" 
          className="movie-poster-image" 
          title="Tangled (2010) - Disney Rapunzel Animated Movie Poster"
        />
        
        <div className="movie-content">
          <h1 className="movie-title" itemProp="name" itemScope itemType="https://schema.org/Movie">
            Tangled (2010) - Download Full Movie
          </h1>
          <div className="movie-rating" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
            Rating: <span itemProp="ratingValue">7.7</span>/<span itemProp="bestRating">10</span> 
            (<span itemProp="ratingCount">10,000</span> reviews)
          </div>

          <div className="download-section">
            <h2>Download Options</h2>
            
            <div className="trailer-section">
              <a 
                href="https://www.youtube.com/watch?v=hmMNGWQ6Qrg" 
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

          <div className="movie-info" itemScope itemType="https://schema.org/Movie">
            <h2>About the Movie</h2>
            <p itemProp="description">
              When the kingdom's most wanted—and most charming—bandit <span itemProp="character">Flynn Rider</span> hides out in a mysterious tower, 
              he's taken hostage by <span itemProp="character">Rapunzel</span>, a beautiful and feisty tower-bound teen with 70 feet of magical, golden hair. 
              The spirited teen's biggest dream is to see the floating lanterns gleam on her birthday. With the help of Flynn, 
              she leaves her tower for the first time and sets off on an incredible journey. A magical Disney adventure filled with 
              heart, humor, and hair—lots of hair.
            </p>
            
            <div className="movie-details">
              <div className="detail-item">
                <span className="label">Release Date:</span>
                <span className="value" itemProp="datePublished">November 24, 2010</span>
              </div>
              <div className="detail-item">
                <span className="label">Duration:</span>
                <span className="value" itemProp="duration" content="PT1H40M">1h 40m</span>
              </div>
              <div className="detail-item">
                <span className="label">Genre:</span>
                <span className="value">
                  <span itemProp="genre">Animation</span>, 
                  <span itemProp="genre">Family</span>, 
                  <span itemProp="genre">Comedy</span>, 
                  <span itemProp="genre">Adventure</span>
                </span>
              </div>
              <div className="detail-item">
                <span className="label">Directors:</span>
                <span className="value">
                  <span itemProp="director" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Nathan Greno</span>
                  </span>, 
                  <span itemProp="director" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Byron Howard</span>
                  </span>
                </span>
              </div>
              <div className="detail-item">
                <span className="label">Voice Cast:</span>
                <span className="value">
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Mandy Moore</span>
                  </span>, 
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Zachary Levi</span>
                  </span>, 
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Donna Murphy</span>
                  </span>
                </span>
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
                🚀 Server 1 - Ultra Fast
              </button>
              
              <button 
                className="server-btn"
                onClick={() => handleServerClick('Server 2')}
              >
                ⚡ Server 2 - High Speed
              </button>
              
              <button 
                className="server-btn"
                onClick={() => handleServerClick('Server 3')}
              >
                💎 Server 3 - Premium
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

export default TangledPost;
