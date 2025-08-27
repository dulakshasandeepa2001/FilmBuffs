import React, { useState, useEffect } from 'react';
import '../MoviePost.css';

const WednesdaySeason2Post = () => {
  const [clickCount, setClickCount] = useState(0);
  const requiredClicks = 5;
  
  // SEO and Meta data setup
  useEffect(() => {
    // Set document title
    document.title = "Wednesday Season 2 (2025) Full Series Download & Watch Online | Film Buffs";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Download and watch Wednesday Season 2 (2025) full series in HD. Wednesday Addams returns for her sophomore year at Nevermore Academy with new mysteries, supernatural threats, and psychic abilities. Available in 4K, 1080p, and 720p.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Download and watch Wednesday Season 2 (2025) full series in HD. Wednesday Addams returns for her sophomore year at Nevermore Academy with new mysteries, supernatural threats, and psychic abilities. Available in 4K, 1080p, and 720p.';
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
      metaKeywords.setAttribute('content', 'Wednesday Season 2, Wednesday Addams, Nevermore Academy, Jenna Ortega, supernatural thriller, Netflix series, dark comedy, gothic horror, psychic abilities, Addams Family, download series, watch online, HD quality, 2025 series');
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = 'Wednesday Season 2, Wednesday Addams, Nevermore Academy, Jenna Ortega, supernatural thriller, Netflix series, dark comedy, gothic horror, psychic abilities, Addams Family, download series, watch online, HD quality, 2025 series';
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

    setOrCreateOGMeta('og:title', 'Wednesday Season 2 (2025) Full Series Download & Watch Online');
    setOrCreateOGMeta('og:description', 'Wednesday Addams returns for her sophomore year at Nevermore Academy. As she navigates new mysteries, supernatural threats, and complex relationships, the iconic goth teenager must master her emerging psychic abilities.');
    setOrCreateOGMeta('og:image', 'https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg');
    setOrCreateOGMeta('og:image:width', '1200');
    setOrCreateOGMeta('og:image:height', '630');
    setOrCreateOGMeta('og:image:alt', 'Wednesday Season 2 poster featuring Jenna Ortega as Wednesday Addams');
    setOrCreateOGMeta('og:type', 'video.tv_show');
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
    setOrCreateTwitterMeta('twitter:title', 'Wednesday Season 2 (2025) Full Series Download & Watch Online');
    setOrCreateTwitterMeta('twitter:description', 'Wednesday Addams returns for her sophomore year at Nevermore Academy with new mysteries, supernatural threats, and psychic abilities.');
    setOrCreateTwitterMeta('twitter:image', 'https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg');
    setOrCreateTwitterMeta('twitter:image:alt', 'Wednesday Season 2 poster featuring Jenna Ortega as Wednesday Addams');

    // Add JSON-LD structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "TVSeries",
      "name": "Wednesday",
      "alternateName": "Wednesday Addams",
      "description": "Wednesday Addams returns for her sophomore year at Nevermore Academy. As she navigates new mysteries, supernatural threats, and complex relationships, the iconic goth teenager must master her emerging psychic abilities while uncovering dark secrets that threaten both the school and her family legacy.",
      "image": "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
      "genre": ["Supernatural", "Comedy", "Horror", "Mystery", "Drama"],
      "contentRating": "TV-14",
      "numberOfSeasons": 2,
      "numberOfEpisodes": 16,
      "datePublished": "2025-01-08",
      "creator": {
        "@type": "Person",
        "name": "Alfred Gough"
      },
      "actor": [
        {
          "@type": "Person",
          "name": "Jenna Ortega"
        },
        {
          "@type": "Person", 
          "name": "Emma Myers"
        },
        {
          "@type": "Person",
          "name": "Joy Sunday"
        }
      ],
      "productionCompany": {
        "@type": "Organization",
        "name": "Netflix"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "8.7",
        "ratingCount": "150000"
      },
      "trailer": {
        "@type": "VideoObject",
        "name": "Wednesday Season 2 Official Trailer",
        "description": "Watch the official trailer for Wednesday Season 2 (2025)",
        "thumbnailUrl": "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
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

  // Download links for Wednesday Season 2
  const downloadLinks = {
    '720p Full Season Pack': 'https://hubcloud.one/drive/hd1snod0sdsuchj-720p',
    '1080p Full Season Pack': 'https://hubcloud.one/drive/bj1oo11onemjgmz',
    '4K Episode 1 DoVi HDR': 'https://hubcloud.one/drive/wlshglloopsf0pj',
    '4K Episode 2 DoVi HDR': 'https://hubcloud.one/drive/igmbgqsxwfi9iar',
    '4K Episode 3 DoVi HDR': 'https://hubcloud.one/drive/8uuvxx8mlik731c',
    '1080p Episode 1': 'https://gdlink.dev/file/F0ZmLRedg3nBoE7',
    '1080p Episode 2': 'https://gdlink.dev/file/Y9vJNqjLoPaL6UI',
    '1080p Episode 3': 'https://gdlink.dev/file/6Qzo85FGCwTEyrs',
    '1080p Episode 4': 'https://gdlink.dev/file/KfeuCm5hSExuqU3'
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
          src="https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg" 
          alt="Wednesday Season 2 poster featuring Jenna Ortega as Wednesday Addams" 
          className="movie-poster-image" 
          title="Wednesday Season 2 (2025) - Official Series Poster"
        />
        
        <div className="movie-content">
          <h1 className="movie-title" itemProp="name" itemScope itemType="https://schema.org/TVSeries">
            Wednesday Season 2 (2025) - Download Full Series
          </h1>
          <div className="movie-rating" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
            Rating: <span itemProp="ratingValue">8.7</span>/<span itemProp="bestRating">10</span> 
            (<span itemProp="ratingCount">150,000</span> reviews)
          </div>

          <div className="download-section">
            <h2>Download Options</h2>
            
            <div className="trailer-section">
              <a 
                href="https://www.youtube.com/watch?v=wednesday-season-2-trailer" 
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
                <p>Complete Season 2 - All 8 Episodes</p>
                <p>Multiple quality options: 720p, 1080p, 4K UHD</p>
                <p>File sizes: 1.15GB - 10.26GB</p>
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
                  <h3>Complete Season Packs</h3>
                  <div className="quality-buttons" style={{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center'}}>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('720p Full Season Pack')}
                      style={{minWidth: '300px'}}
                    >
                      720p Full Season Pack [~3 GB]
                    </button>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('1080p Full Season Pack')}
                      style={{minWidth: '300px'}}
                    >
                      1080p Full Season Pack [~10 GB]
                    </button>
                  </div>
                </div>

                <div className="quality-section">
                  <h3>4K Individual Episodes</h3>
                  <div className="quality-buttons" style={{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center'}}>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('4K Episode 1 DoVi HDR')}
                      style={{minWidth: '300px'}}
                    >
                      Episode 1 - 4K DoVi HDR [8.64 GB]
                    </button>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('4K Episode 2 DoVi HDR')}
                      style={{minWidth: '300px'}}
                    >
                      Episode 2 - 4K DoVi HDR [9.36 GB]
                    </button>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('4K Episode 3 DoVi HDR')}
                      style={{minWidth: '300px'}}
                    >
                      Episode 3 - 4K DoVi HDR [9.1 GB]
                    </button>
                  </div>
                </div>

                <div className="quality-section">
                  <h3>1080p Individual Episodes</h3>
                  <div className="quality-buttons" style={{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center'}}>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('1080p Episode 1')}
                      style={{minWidth: '300px'}}
                    >
                      Episode 1 - 1080p [2.45 GB]
                    </button>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('1080p Episode 2')}
                      style={{minWidth: '300px'}}
                    >
                      Episode 2 - 1080p [1.69 GB]
                    </button>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('1080p Episode 3')}
                      style={{minWidth: '300px'}}
                    >
                      Episode 3 - 1080p [2.06 GB]
                    </button>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('1080p Episode 4')}
                      style={{minWidth: '300px'}}
                    >
                      Episode 4 - 1080p [2.42 GB]
                    </button>
                  </div>
                </div>

                <div className="instructions">
                  <p>🔴 Click any quality button 5 times to access download links</p>
                  <p>📱 Compatible with all devices</p>
                  <p>⚡ High-speed download servers</p>
                  <p>🎯 Complete Season 2 - Netflix WEB-DL Quality</p>
                  <p>🔥 4K Episodes include Dolby Vision HDR</p>
                </div>
              </div>
            )}
          </div>

          <div className="movie-info" itemScope itemType="https://schema.org/TVSeries">
            <h2>About the Series</h2>
            <p itemProp="description">
              <strong>Wednesday Addams returns for her sophomore year at Nevermore Academy</strong> in this highly anticipated 
              second season. As she navigates new mysteries, supernatural threats, and complex relationships, the iconic goth 
              teenager must master her emerging <strong>psychic abilities</strong> while uncovering dark secrets that threaten 
              both the school and her family legacy. Season 2 delves deeper into Wednesday's psychic visions and her mysterious 
              connection to the supernatural forces that plague Nevermore Academy. With new students, returning threats, and 
              <strong>Wednesday's evolving relationships</strong>, this season promises more thrills, dark humor, and supernatural 
              intrigue than ever before. Featuring stellar performances by <strong>Jenna Ortega</strong> as the titular character, 
              Wednesday Season 2 continues to blend gothic horror with coming-of-age themes, creating a unique viewing experience 
              that has captivated audiences worldwide.
            </p>
            
            <div className="movie-details">
              <div className="detail-item">
                <span className="label">Release Date:</span>
                <span className="value" itemProp="datePublished">January 8, 2025</span>
              </div>
              <div className="detail-item">
                <span className="label">Episodes:</span>
                <span className="value" itemProp="numberOfEpisodes">8 Episodes</span>
              </div>
              <div className="detail-item">
                <span className="label">Runtime:</span>
                <span className="value">~45-50 minutes per episode</span>
              </div>
              <div className="detail-item">
                <span className="label">Genre:</span>
                <span className="value">
                  <span itemProp="genre">Supernatural</span>, 
                  <span itemProp="genre">Comedy</span>, 
                  <span itemProp="genre">Horror</span>, 
                  <span itemProp="genre">Mystery</span>, 
                  <span itemProp="genre">Drama</span>
                </span>
              </div>
              <div className="detail-item">
                <span className="label">Creators:</span>
                <span className="value">
                  <span itemProp="creator" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Alfred Gough</span>
                  </span>, 
                  <span itemProp="creator" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Miles Millar</span>
                  </span>
                </span>
              </div>
              <div className="detail-item">
                <span className="label">Executive Producers:</span>
                <span className="value">
                  <span itemProp="producer" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Tim Burton</span>
                  </span>, 
                  <span itemProp="producer" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Alfred Gough</span>
                  </span>, 
                  <span itemProp="producer" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Miles Millar</span>
                  </span>, 
                  <span itemProp="producer" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Steve Stark</span>
                  </span>
                </span>
              </div>
              <div className="detail-item">
                <span className="label">Cast:</span>
                <span className="value">
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Jenna Ortega</span>
                  </span>, 
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Emma Myers</span>
                  </span>, 
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Joy Sunday</span>
                  </span>, 
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Percy Hynes White</span>
                  </span>, 
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Hunter Doohan</span>
                  </span>, 
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Georgie Farmer</span>
                  </span>, 
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Naomi J. Ogawa</span>
                  </span>, 
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Moosa Mostafa</span>
                  </span>
                </span>
              </div>
              <div className="detail-item">
                <span className="label">Studio:</span>
                <span className="value">
                  <span itemProp="productionCompany" itemScope itemType="https://schema.org/Organization">
                    <span itemProp="name">MGM Television</span>
                  </span>
                </span>
              </div>
              <div className="detail-item">
                <span className="label">Network:</span>
                <span className="value">Netflix</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WednesdaySeason2Post;
