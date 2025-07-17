import React, { useState, useEffect } from 'react';
import '../MoviePost.css';

const HowToTrainYourDragonPost = () => {
  const [clickCount, setClickCount] = useState(0);
  const requiredClicks = 5;
  
  // SEO and Meta data setup
  useEffect(() => {
    // Set document title
    document.title = "How to Train Your Dragon (2010) Full Movie Download & Watch Online | Film Buffs";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Download and watch How to Train Your Dragon (2010) full movie in HD. Jay Baruchel and Gerard Butler star in this DreamWorks animated adventure. Explore trailer, cast, duration, and available quality formats only on Film Buffs.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Download and watch How to Train Your Dragon (2010) full movie in HD. Jay Baruchel and Gerard Butler star in this DreamWorks animated adventure. Explore trailer, cast, duration, and available quality formats only on Film Buffs.';
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
      metaKeywords.setAttribute('content', 'How to Train Your Dragon 2010, Hiccup, Toothless, Jay Baruchel, Gerard Butler, DreamWorks, animated movie, dragons, family film, download, watch online, HD quality, Dean DeBlois, Chris Sanders, adventure, comedy, Viking');
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = 'How to Train Your Dragon 2010, Hiccup, Toothless, Jay Baruchel, Gerard Butler, DreamWorks, animated movie, dragons, family film, download, watch online, HD quality, Dean DeBlois, Chris Sanders, adventure, comedy, Viking';
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

    setOrCreateOGMeta('og:title', 'How to Train Your Dragon (2010) Full Movie Download & Watch Online');
    setOrCreateOGMeta('og:description', 'A young Viking befriends a dragon in this heartwarming DreamWorks adventure. Download and watch How to Train Your Dragon starring Jay Baruchel and Gerard Butler in HD quality.');
    setOrCreateOGMeta('og:image', 'https://res.cloudinary.com/dib0fble7/image/upload/v1752688734/Untitled12222_fkn050.webp');
    setOrCreateOGMeta('og:image:width', '1200');
    setOrCreateOGMeta('og:image:height', '630');
    setOrCreateOGMeta('og:image:alt', 'How to Train Your Dragon 2010 movie poster featuring Hiccup and Toothless');
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
    setOrCreateTwitterMeta('twitter:title', 'How to Train Your Dragon (2010) Full Movie Download & Watch Online');
    setOrCreateTwitterMeta('twitter:description', 'A young Viking befriends a dragon in this heartwarming DreamWorks adventure. Download and watch How to Train Your Dragon starring Jay Baruchel and Gerard Butler in HD quality.');
    setOrCreateTwitterMeta('twitter:image', 'https://res.cloudinary.com/dib0fble7/image/upload/v1752688734/Untitled12222_fkn050.webp');
    setOrCreateTwitterMeta('twitter:image:alt', 'How to Train Your Dragon 2010 movie poster featuring Hiccup and Toothless');
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
      "name": "How to Train Your Dragon",
      "alternateName": "HTTYD",
      "image": {
        "@type": "ImageObject",
        "url": "https://res.cloudinary.com/dib0fble7/image/upload/v1752688734/Untitled12222_fkn050.webp",
        "width": 1200,
        "height": 630
      },
      "description": "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed. Set in the mythical world of burly Vikings and wild dragons, the action comedy tells the story of Hiccup, a Viking teenager who doesn't exactly fit in with his tribe's longstanding tradition of heroic dragon slayers.",
      "datePublished": "2010-03-26",
      "duration": "PT1H38M",
      "genre": ["Animation", "Family", "Adventure", "Comedy", "Fantasy"],
      "contentRating": "PG",
      "inLanguage": "en-US",
      "countryOfOrigin": {
        "@type": "Country",
        "name": "United States"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "8.1",
        "ratingCount": "15000",
        "bestRating": "10",
        "worstRating": "1"
      },
      "director": [
        { "@type": "Person", "name": "Dean DeBlois" },
        { "@type": "Person", "name": "Chris Sanders" }
      ],
      "actor": [
        { "@type": "Person", "name": "Jay Baruchel" },
        { "@type": "Person", "name": "Gerard Butler" },
        { "@type": "Person", "name": "Craig Ferguson" }
      ],
      "productionCompany": {
        "@type": "Organization",
        "name": "DreamWorks Animation"
      },
      "trailer": {
        "@type": "VideoObject",
        "name": "How to Train Your Dragon Official Trailer",
        "description": "Watch the official trailer for How to Train Your Dragon (2010)",
        "thumbnailUrl": "https://res.cloudinary.com/dib0fble7/image/upload/v1752688734/Untitled12222_fkn050.webp",
        "embedUrl": "https://www.youtube.com/embed/oKiYuIsPxYk"
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
    'https://incredibleenhancementslightning.com/mb44w5nrf?key=b81da213cd8d52d142d1bec92e3e014d',
    'https://incredibleenhancementslightning.com/d0jtntz4zi?key=b9a5ee9377f9a6709624ba8c106313f9',
    'https://incredibleenhancementslightning.com/dzzpxkz4?key=e9c5b50948edadcec659d3dc875f7542',
    'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b'
  ];

  // Download links for How to Train Your Dragon
  const downloadLinks = {
    '480p x264-mega': 'https://usersdrive.com/hqnpiprtunxv.html',
    '480p x264-viking': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',
    '480p x264-gdrive': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',
    '480p x265-mega': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',
    '480p x265-viking': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',
    '480p x265-gdrive': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',

    '720p x264-mega': 'https://usersdrive.com/5ie1ad6s57gm.html',
    '720p x264-viking': 'https://ssn.techinmind.space/files/httyd2010720p',
    '720p x264-gdrive': 'https://ssn.techinmind.space/files/httyd2010720p',
    '720p x265-mega': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',
    '720p x265-viking': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',
    '720p x265-gdrive': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',

    '1080p x264-mega': 'https://usersdrive.com/qgacr7fqmar0.html',
    '1080p x264-viking': 'https://ssn.techinmind.space/files/httyd20101080p',
    '1080p x264-gdrive': 'https://ssn.techinmind.space/files/httyd20101080p',
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
          src="https://res.cloudinary.com/dib0fble7/image/upload/v1752688734/Untitled12222_fkn050.webp" 
          alt="How to Train Your Dragon 2010 movie poster featuring Hiccup and Toothless DreamWorks animated film" 
          className="movie-poster-image" 
          title="How to Train Your Dragon (2010) - DreamWorks Animated Movie Poster"
        />
        
        <div className="movie-content">
          <h1 className="movie-title" itemProp="name" itemScope itemType="https://schema.org/Movie">
            How to Train Your Dragon (2010) - Download Full Movie
          </h1>
          <div className="movie-rating" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
            Rating: <span itemProp="ratingValue">8.1</span>/<span itemProp="bestRating">10</span> 
            (<span itemProp="ratingCount">15,000</span> reviews)
          </div>

          <div className="download-section">
            <h2>Download Options</h2>
            
            <div className="trailer-section">
              <a 
                href="https://www.youtube.com/watch?v=oKiYuIsPxYk" 
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
              A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, 
              and learns there may be more to the creatures than he assumed. Set in the mythical world of burly Vikings and wild dragons, 
              the action comedy tells the story of <span itemProp="character">Hiccup</span>, a Viking teenager who doesn't exactly fit in 
              with his tribe's longstanding tradition of heroic dragon slayers. When <span itemProp="character">Hiccup</span> finally 
              encounters his first dragon, he discovers that he no longer wants to destroy it and instead befriends the beast—which 
              he names <span itemProp="character">Toothless</span>—and discovers that he no longer wants to be a dragon slayer.
            </p>
            
            <div className="movie-details">
              <div className="detail-item">
                <span className="label">Release Date:</span>
                <span className="value" itemProp="datePublished">March 26, 2010</span>
              </div>
              <div className="detail-item">
                <span className="label">Duration:</span>
                <span className="value" itemProp="duration" content="PT1H38M">1h 38m</span>
              </div>
              <div className="detail-item">
                <span className="label">Genre:</span>
                <span className="value">
                  <span itemProp="genre">Animation</span>, 
                  <span itemProp="genre">Family</span>, 
                  <span itemProp="genre">Adventure</span>, 
                  <span itemProp="genre">Comedy</span>
                </span>
              </div>
              <div className="detail-item">
                <span className="label">Directors:</span>
                <span className="value">
                  <span itemProp="director" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Dean DeBlois</span>
                  </span>, 
                  <span itemProp="director" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Chris Sanders</span>
                  </span>
                </span>
              </div>
              <div className="detail-item">
                <span className="label">Voice Cast:</span>
                <span className="value">
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Jay Baruchel</span>
                  </span>, 
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Gerard Butler</span>
                  </span>, 
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Craig Ferguson</span>
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

export default HowToTrainYourDragonPost;
