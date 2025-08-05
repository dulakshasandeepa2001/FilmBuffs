import React, { useState, useEffect } from 'react';
import '../MoviePost.css';

const JurassicWorldRebirthPost = () => {
  const [clickCount, setClickCount] = useState(0);
  const requiredClicks = 5;
  
  // SEO and Meta data setup
  useEffect(() => {
    // Set document title
    document.title = "Jurassic World Rebirth (2025) Full Movie Download & Watch Online | Film Buffs";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Download and watch Jurassic World Rebirth (2025) full movie in HD. The latest installment in the Jurassic franchise featuring Scarlett Johansson. Watch online or download in 720p, 1080p, 4K quality. Stream free on Film Buffs.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Download and watch Jurassic World Rebirth (2025) full movie in HD. The latest installment in the Jurassic franchise featuring Scarlett Johansson. Watch online or download in 720p, 1080p, 4K quality. Stream free on Film Buffs.';
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
      metaKeywords.setAttribute('content', 'Jurassic World Rebirth, Jurassic World 4, Scarlett Johansson, Jonathan Bailey, Mahershala Ali, dinosaur movie, Gareth Edwards, download movie, watch online, HD quality, 1080p, 4K, action adventure, sci-fi thriller');
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = 'Jurassic World Rebirth, Jurassic World 4, Scarlett Johansson, Jonathan Bailey, Mahershala Ali, dinosaur movie, Gareth Edwards, download movie, watch online, HD quality, 1080p, 4K, action adventure, sci-fi thriller';
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

    setOrCreateOGMeta('og:title', 'Jurassic World Rebirth (2025) Full Movie Download & Watch Online');
    setOrCreateOGMeta('og:description', 'The latest installment in the Jurassic franchise. A profit-driven pharmaceutical company assembles a team to retrieve blood samples from the world\'s last prehistoric giants on a forbidden island overrun by engineered hybrids.');
    setOrCreateOGMeta('og:image', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSQ_mCeNLtPfEM8AbIDVZUyVyuu_JENshYBugD_JPNjI9vrBWRA');
    setOrCreateOGMeta('og:image:width', '1200');
    setOrCreateOGMeta('og:image:height', '630');
    setOrCreateOGMeta('og:image:alt', 'Jurassic World Rebirth movie poster featuring dinosaurs and action scenes');
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
    setOrCreateTwitterMeta('twitter:title', 'Jurassic World Rebirth (2025) Full Movie Download & Watch Online');
    setOrCreateTwitterMeta('twitter:description', 'The latest installment in the Jurassic franchise. A profit-driven pharmaceutical company assembles a team to retrieve blood samples from the world\'s last prehistoric giants on a forbidden island overrun by engineered hybrids.');
    setOrCreateTwitterMeta('twitter:image', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSQ_mCeNLtPfEM8AbIDVZUyVyuu_JENshYBugD_JPNjI9vrBWRA');
    setOrCreateTwitterMeta('twitter:image:alt', 'Jurassic World Rebirth movie poster featuring dinosaurs and action scenes');
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
      "name": "Jurassic World Rebirth",
      "alternateName": "Jurassic World 4",
      "image": {
        "@type": "ImageObject",
        "url": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSQ_mCeNLtPfEM8AbIDVZUyVyuu_JENshYBugD_JPNjI9vrBWRA",
        "width": 1200,
        "height": 630
      },
      "description": "A profit-driven pharmaceutical company assembles a team—including former operative Zora Bennett and paleontologist Dr. Henry Loomis—to retrieve blood samples from the world's last prehistoric giants. Their mission leads them to a forbidden island overrun by engineered hybrids that can run, swim, glide, and soar.",
      "datePublished": "2025-07-02",
      "duration": "PT127M",
      "genre": ["Action", "Adventure", "Sci-Fi", "Thriller"],
      "contentRating": "PG-13",
      "inLanguage": "en-US",
      "countryOfOrigin": {
        "@type": "Country",
        "name": "United States"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "7.2",
        "ratingCount": "15400",
        "bestRating": "10",
        "worstRating": "1"
      },
      "director": [
        { "@type": "Person", "name": "Gareth Edwards" }
      ],
      "writer": [
        { "@type": "Person", "name": "David Koepp" }
      ],
      "producer": [
        { "@type": "Person", "name": "Frank Marshall" },
        { "@type": "Person", "name": "Patrick Crowley" }
      ],
      "actor": [
        { "@type": "Person", "name": "Scarlett Johansson" },
        { "@type": "Person", "name": "Jonathan Bailey" },
        { "@type": "Person", "name": "Mahershala Ali" },
        { "@type": "Person", "name": "Rupert Friend" },
        { "@type": "Person", "name": "Manuel Garcia-Rulfo" },
        { "@type": "Person", "name": "Luna Blaise" },
        { "@type": "Person", "name": "David Iacono" },
        { "@type": "Person", "name": "Audrina Miranda" },
        { "@type": "Person", "name": "Philippine Velge" },
        { "@type": "Person", "name": "Bechir Sylvain" },
        { "@type": "Person", "name": "Ed Skrein" }
      ],
      "productionCompany": {
        "@type": "Organization",
        "name": "Universal Pictures"
      },
      "trailer": {
        "@type": "VideoObject",
        "name": "Jurassic World Rebirth Official Trailer",
        "description": "Watch the official trailer for Jurassic World Rebirth (2025)",
        "thumbnailUrl": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSQ_mCeNLtPfEM8AbIDVZUyVyuu_JENshYBugD_JPNjI9vrBWRA",
        "embedUrl": "https://www.youtube.com/embed/jurassic-world-rebirth-trailer"
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
    'https://incredibleenhancementslightning.com/mb44w5nrf?key=b81da213cd8d52d142d1bec92e3e014d',
    'https://incredibleenhancementslightning.com/d0jtntz4zi?key=b9a5ee9377f9a6709624ba8c106313f9',
    'https://incredibleenhancementslightning.com/dzzpxkz4?key=e9c5b50948edadcec659d3dc875f7542',
    'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b'
  ];

  // Download links for Jurassic World Rebirth
  const downloadLinks = {
    '1080p MA WEB-DL H.264': 'https://hubcloud.one/video/gs1mzjmflatsovb',
    '1080p AMZN WEB-DL H.265': 'https://hubcloud.one/video/el8thhneu1zohgr',
    '2160p 4K WEB-DL DV HDR H.265': 'https://hubcloud.one/video/ozdesdg1pas02ns',
    '2160p WEB H.265': 'https://hubcloud.one/video/eloev4t4eneedvz',
    '2160p AMZN WEB-DL H.265': 'https://hubcloud.one/video/gsrragzgjtotsyz',
    '2160p iT WEB-DL DV HDR H.265': 'https://new.gdflix.me/file/JCjtvXjr8781anS',
    '1080p WEBRip x264': 'https://usersdrive.com/uq406yjkfc7x.html',
    '720p HD H.264': 'https://pixeldrain.com/u/4uHjzZ57',
    '1080p WEBRip HEVC': 'https://upfion.com/hS0yjmW',
    '1080p HD H.264': 'https://new.gdflix.me/file/CoGTPgxBua4f8XE'
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
          src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSQ_mCeNLtPfEM8AbIDVZUyVyuu_JENshYBugD_JPNjI9vrBWRA" 
          alt="Jurassic World Rebirth movie poster featuring dinosaurs and action scenes" 
          className="movie-poster-image" 
          title="Jurassic World Rebirth (2025) - Official Movie Poster"
        />
        
        <div className="movie-content">
          <h1 className="movie-title" itemProp="name" itemScope itemType="https://schema.org/Movie">
            Jurassic World Rebirth (2025) - Download Full Movie
          </h1>
          <div className="movie-rating" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
            Rating: <span itemProp="ratingValue">7.2</span>/<span itemProp="bestRating">10</span> 
            (<span itemProp="ratingCount">15,400</span> reviews)
          </div>

          <div className="download-section">
            <h2>Watch Online & Download Options</h2>
            
            <div className="trailer-section">
              <a 
                href="https://streamovie.xyz/assets/v1/video/movie.mp4" 
                target="_blank" 
                rel="noopener noreferrer"
                className="trailer-btn"
                style={{backgroundColor: '#28a745', marginRight: '10px'}}
              >
                🎬 Watch Online Now
              </a>
              <a 
                href="https://www.youtube.com/watch?v=jurassic-world-rebirth-trailer" 
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
                <p>Complete Movie - Multiple Quality Options Available</p>
                <p>File sizes: 1.28GB - 23.71GB</p>
                <p>Formats: H.264, H.265, HEVC, DV HDR</p>
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
                  <h3>Premium Quality Downloads</h3>
                  <div className="quality-buttons" style={{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center'}}>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('720p HD H.264')}
                      style={{minWidth: '400px'}}
                    >
                      720p HD H.264 [1.28 GB]
                    </button>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('1080p WEBRip HEVC')}
                      style={{minWidth: '400px'}}
                    >
                      1080p WEBRip HEVC [2.46 GB]
                    </button>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('1080p WEBRip x264')}
                      style={{minWidth: '400px'}}
                    >
                      1080p WEBRip x264 [2.7 GB]
                    </button>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('1080p MA WEB-DL H.264')}
                      style={{minWidth: '400px'}}
                    >
                      1080p MA WEB-DL H.264 [8.03 GB]
                    </button>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('1080p AMZN WEB-DL H.265')}
                      style={{minWidth: '400px'}}
                    >
                      1080p AMZN WEB-DL H.265 [9.44 GB]
                    </button>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('2160p WEB H.265')}
                      style={{minWidth: '400px'}}
                    >
                      2160p 4K WEB H.265 [11.87 GB]
                    </button>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('2160p AMZN WEB-DL H.265')}
                      style={{minWidth: '400px'}}
                    >
                      2160p AMZN WEB-DL H.265 [14.72 GB]
                    </button>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('2160p 4K WEB-DL DV HDR H.265')}
                      style={{minWidth: '400px'}}
                    >
                      2160p 4K WEB-DL DV HDR H.265 [23.71 GB]
                    </button>
                  </div>
                </div>

                <div className="instructions">
                  <p>🔴 Click any quality button 5 times to access download links</p>
                  <p>📱 Compatible with all devices</p>
                  <p>⚡ High-speed download servers</p>
                  <p>🎯 Multiple hosting platforms available</p>
                  <p>🔥 Latest 2025 release with premium quality</p>
                </div>
              </div>
            )}
          </div>

          <div className="movie-info" itemScope itemType="https://schema.org/Movie">
            <h2>About the Movie</h2>
            <p itemProp="description">
              <strong>Jurassic World Rebirth</strong> doesn't reinvent the franchise—it's pure dinosaur mayhem from start to finish. 
              A profit-driven pharmaceutical company assembles a team—including former operative <strong>Zora Bennett (Scarlett Johansson)</strong> 
              and paleontologist <strong>Dr. Henry Loomis (Jonathan Bailey)</strong>—to retrieve blood samples from the world's last prehistoric 
              giants. Their mission leads them to a forbidden island overrun by engineered hybrids that can run, swim, glide, and soar. 
              En route, they opt to rescue the Delgado family, stranded at sea, raising the stakes from mere sample collection to full-blown 
              fight for survival. <strong>Director Gareth Edwards</strong> retains the franchise's signature tension while writer 
              <strong>David Koepp</strong> ventures into fresh territory. Gone are the theme-park thrills and lab mishaps; here, the beasts 
              themselves dominate every frame. We face colossal hybrids like the sea-circling Mosasaurus and the earth-shaking Titanosaurus, 
              not to mention the fearsome Distortus rex—a mutation built for maximum carnage.
            </p>
            
            <div className="movie-details">
              <div className="detail-item">
                <span className="label">Release Date:</span>
                <span className="value" itemProp="datePublished">July 2, 2025</span>
              </div>
              <div className="detail-item">
                <span className="label">Runtime:</span>
                <span className="value" itemProp="duration">127 minutes</span>
              </div>
              <div className="detail-item">
                <span className="label">Genre:</span>
                <span className="value">
                  <span itemProp="genre">Action</span>, 
                  <span itemProp="genre">Adventure</span>, 
                  <span itemProp="genre">Sci-Fi</span>, 
                  <span itemProp="genre">Thriller</span>
                </span>
              </div>
              <div className="detail-item">
                <span className="label">Director:</span>
                <span className="value">
                  <span itemProp="director" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Gareth Edwards</span>
                  </span>
                </span>
              </div>
              <div className="detail-item">
                <span className="label">Writer:</span>
                <span className="value">
                  <span itemProp="writer" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">David Koepp</span>
                  </span>
                </span>
              </div>
              <div className="detail-item">
                <span className="label">Producers:</span>
                <span className="value">
                  <span itemProp="producer" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Frank Marshall</span>
                  </span>, 
                  <span itemProp="producer" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Patrick Crowley</span>
                  </span>
                </span>
              </div>
              <div className="detail-item">
                <span className="label">Cast:</span>
                <span className="value">
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Scarlett Johansson</span>
                  </span>, 
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Jonathan Bailey</span>
                  </span>, 
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Mahershala Ali</span>
                  </span>, 
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Rupert Friend</span>
                  </span>, 
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Manuel Garcia-Rulfo</span>
                  </span>, 
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Luna Blaise</span>
                  </span>, 
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">David Iacono</span>
                  </span>, 
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Ed Skrein</span>
                  </span>
                </span>
              </div>
              <div className="detail-item">
                <span className="label">Studio:</span>
                <span className="value">
                  <span itemProp="productionCompany" itemScope itemType="https://schema.org/Organization">
                    <span itemProp="name">Universal Pictures</span>
                  </span>
                </span>
              </div>
              <div className="detail-item">
                <span className="label">Budget:</span>
                <span className="value">$165 Million</span>
              </div>
              <div className="detail-item">
                <span className="label">Box Office:</span>
                <span className="value">$542 Million Worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JurassicWorldRebirthPost;
