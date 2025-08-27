import React, { useState, useEffect } from 'react';
import '../MoviePost.css';

const ThePickupPost = () => {
  const [clickCount, setClickCount] = useState(0);
  const requiredClicks = 5;
  
  // SEO and Meta data setup
  useEffect(() => {
    // Set document title
    document.title = "The Pickup (2025) Full Movie Download & Watch Online | Film Buffs";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Download and watch The Pickup (2025) full movie in HD. A hilarious comedy heist film about an unlikely crew pulling off the perfect crime. Available in 720p, 1080p, and 4K UHD.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Download and watch The Pickup (2025) full movie in HD. A hilarious comedy heist film about an unlikely crew pulling off the perfect crime. Available in 720p, 1080p, and 4K UHD.';
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
      metaKeywords.setAttribute('content', 'The Pickup 2025, comedy movie, heist film, action comedy, Amazon Prime Video, download movie, watch online, HD quality, 720p, 1080p, 4K UHD, comedy heist, crime comedy, 2025 movies');
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = 'The Pickup 2025, comedy movie, heist film, action comedy, Amazon Prime Video, download movie, watch online, HD quality, 720p, 1080p, 4K UHD, comedy heist, crime comedy, 2025 movies';
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

    setOrCreateOGMeta('og:title', 'The Pickup (2025) Full Movie Download & Watch Online');
    setOrCreateOGMeta('og:description', 'A hilarious comedy heist film about an unlikely crew pulling off the perfect crime. Watch as ordinary people attempt an extraordinary heist with unexpected results.');
    setOrCreateOGMeta('og:image', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSosgeC462Ds54wCyynZPrAlSillruysuUNUQO_py7dW-7D16KT');
    setOrCreateOGMeta('og:image:width', '1200');
    setOrCreateOGMeta('og:image:height', '630');
    setOrCreateOGMeta('og:image:alt', 'The Pickup 2025 movie poster');
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
    setOrCreateTwitterMeta('twitter:title', 'The Pickup (2025) Full Movie Download & Watch Online');
    setOrCreateTwitterMeta('twitter:description', 'A hilarious comedy heist film about an unlikely crew pulling off the perfect crime.');
    setOrCreateTwitterMeta('twitter:image', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSosgeC462Ds54wCyynZPrAlSillruysuUNUQO_py7dW-7D16KT');
    setOrCreateTwitterMeta('twitter:image:alt', 'The Pickup 2025 movie poster');

    // Add JSON-LD structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Movie",
      "name": "The Pickup",
      "alternateName": "The Pickup 2025",
      "description": "A hilarious comedy heist film about an unlikely crew pulling off the perfect crime. When a group of ordinary people decide to attempt an extraordinary heist, they discover that stealing isn't as easy as it looks in the movies. This action-packed comedy combines clever writing with unexpected twists.",
      "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSosgeC462Ds54wCyynZPrAlSillruysuUNUQO_py7dW-7D16KT",
      "genre": ["Comedy", "Heist", "Action", "Crime"],
      "contentRating": "R",
      "duration": "PT1H34M",
      "datePublished": "2025-01-15",
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
        "name": "Amazon Studios"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "7.2",
        "ratingCount": "15000"
      },
      "trailer": {
        "@type": "VideoObject",
        "name": "The Pickup Official Trailer",
        "description": "Watch the official trailer for The Pickup (2025)",
        "thumbnailUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSosgeC462Ds54wCyynZPrAlSillruysuUNUQO_py7dW-7D16KT",
        "uploadDate": "2025-01-01"
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
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);

  // Redirect URLs for the first 4 clicks
  const redirectUrls = [
    'https://otieu.com/4/9550585',
    'https://otieu.com/4/9550586',
    'https://otieu.com/4/9545201',
    'https://otieu.com/4/9550584'
  ];

  // Download links for The Pickup
  const downloadLinks = {
    '720p AMZN WEB-DL': 'https://hubcloud.one/drive/iyzchwzoukzpwpp',
    '1080p AMZN WEB-DL H.265': 'https://hubcloud.one/drive/hsxhiie14hrhg5k',
    '1080p AMZN WEB-DL H.264': 'https://hubcloud.one/drive/mlhpa81ha52zdf1',
    '4K UHD AMZN WEB-DL': 'https://hubcloud.one/drive/nhmat1thllasaat',
    '4K UHD HDR AMZN WEB-DL': 'https://hubcloud.one/drive/54tzkuzdt3bt3ud'
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
    } else if (newCount >= 5) {
      // On the 5th click and beyond, provide the actual download link
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
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSosgeC462Ds54wCyynZPrAlSillruysuUNUQO_py7dW-7D16KT" 
          alt="The Pickup 2025 movie poster" 
          className="movie-poster-image" 
          title="The Pickup (2025) - Official Movie Poster"
        />
        
        <div className="movie-content">
          <h1 className="movie-title" itemProp="name" itemScope itemType="https://schema.org/Movie">
            The Pickup (2025) - Download Full Movie
          </h1>
          <div className="movie-rating" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
            Rating: <span itemProp="ratingValue">7.2</span>/<span itemProp="bestRating">10</span> 
            (<span itemProp="ratingCount">15,000</span> reviews)
          </div>

          <div className="download-section">
            <h2>Download Options</h2>
            
            <div className="trailer-section">
              <a 
                href="https://www.youtube.com/watch?v=the-pickup-trailer" 
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
                <p>Runtime: 1h 34m | Comedy/Heist | 2025</p>
                <p>Multiple quality options: 720p, 1080p, 4K UHD</p>
                <p>File sizes: 886 MB - 10.74 GB</p>
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
                  <h3>Standard Definition</h3>
                  <div className="quality-buttons" style={{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center'}}>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('720p AMZN WEB-DL')}
                      style={{minWidth: '350px'}}
                    >
                      720p AMZN WEB-DL H.265 [886.53 MB]
                    </button>
                  </div>
                </div>

                <div className="quality-section">
                  <h3>Full HD</h3>
                  <div className="quality-buttons" style={{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center'}}>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('1080p AMZN WEB-DL H.265')}
                      style={{minWidth: '350px'}}
                    >
                      1080p AMZN WEB-DL H.265 [2.74 GB]
                    </button>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('1080p AMZN WEB-DL H.264')}
                      style={{minWidth: '350px'}}
                    >
                      1080p AMZN WEB-DL H.264 [5.93 GB]
                    </button>
                  </div>
                </div>

                <div className="quality-section">
                  <h3>4K Ultra HD</h3>
                  <div className="quality-buttons" style={{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center'}}>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('4K UHD AMZN WEB-DL')}
                      style={{minWidth: '350px'}}
                    >
                      4K UHD AMZN WEB-DL H.265 [10.74 GB]
                    </button>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('4K UHD HDR AMZN WEB-DL')}
                      style={{minWidth: '350px'}}
                    >
                      4K UHD HDR AMZN WEB-DL H.265 [10.73 GB]
                    </button>
                  </div>
                </div>

                <div className="instructions">
                  <p>🔴 Click any quality button 5 times to access download links</p>
                  <p>📱 Compatible with all devices</p>
                  <p>⚡ High-speed download servers</p>
                  <p>🎯 Amazon Prime Video WEB-DL Quality</p>
                  <p>🔥 4K versions include HDR support</p>
                </div>
              </div>
            )}
          </div>

          <div className="movie-info" itemScope itemType="https://schema.org/Movie">
            <h2>About the Movie</h2>
            <p itemProp="description">
              <strong>The Pickup</strong> is a hilarious 2025 comedy heist film that combines clever writing with unexpected 
              twists. The story follows an <strong>unlikely crew of ordinary people</strong> who decide to attempt an extraordinary 
              heist, only to discover that stealing isn't as easy as it looks in the movies. This action-packed comedy delivers 
              non-stop laughs while exploring themes of friendship, ambition, and the consequences of our choices. With a runtime 
              of <strong>1 hour and 34 minutes</strong>, the film perfectly balances comedy with thrilling heist elements, creating 
              a unique viewing experience that keeps audiences engaged from start to finish. The movie showcases brilliant 
              performances, witty dialogue, and cleverly choreographed heist sequences that will have you laughing and on the 
              edge of your seat simultaneously. <strong>The Pickup</strong> proves that sometimes the best crimes are the ones 
              that go hilariously wrong, making it a must-watch comedy for fans of the heist genre.
            </p>
            
            <div className="movie-details">
              <div className="detail-item">
                <span className="label">Release Date:</span>
                <span className="value" itemProp="datePublished">January 15, 2025</span>
              </div>
              <div className="detail-item">
                <span className="label">Runtime:</span>
                <span className="value" itemProp="duration">1h 34m</span>
              </div>
              <div className="detail-item">
                <span className="label">Genre:</span>
                <span className="value">
                  <span itemProp="genre">Comedy</span>, 
                  <span itemProp="genre">Heist</span>, 
                  <span itemProp="genre">Action</span>, 
                  <span itemProp="genre">Crime</span>
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
                    <span itemProp="name">Amazon Studios</span>
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
                <span className="value" itemProp="contentRating">R</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThePickupPost;
