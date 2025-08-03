import React, { useState, useEffect } from 'react';
import '../MoviePost.css';

const EyesOfWakandaS1Post = () => {
  const [clickCount, setClickCount] = useState(0);
  const requiredClicks = 5;
  
  // SEO and Meta data setup
  useEffect(() => {
    // Set document title
    document.title = "Eyes of Wakanda Season 1 (2025) Full Series Download & Watch Online | Film Buffs";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Download and watch Eyes of Wakanda Season 1 (2025) full series in HD. Marvel Animation\'s action-adventure series follows brave Wakandan warriors on dangerous missions to retrieve Vibranium artifacts. Meet the Hatut Zaraze and their story on Film Buffs.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Download and watch Eyes of Wakanda Season 1 (2025) full series in HD. Marvel Animation\'s action-adventure series follows brave Wakandan warriors on dangerous missions to retrieve Vibranium artifacts. Meet the Hatut Zaraze and their story on Film Buffs.';
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
      metaKeywords.setAttribute('content', 'Eyes of Wakanda Season 1, Marvel Animation, Hatut Zaraze, Wakandan warriors, Vibranium artifacts, action-adventure series, Disney Plus, Ryan Coogler, Todd Harris, Winnie Harlow, Cress Williams, download series, watch online, HD quality, Marvel Studios');
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = 'Eyes of Wakanda Season 1, Marvel Animation, Hatut Zaraze, Wakandan warriors, Vibranium artifacts, action-adventure series, Disney Plus, Ryan Coogler, Todd Harris, Winnie Harlow, Cress Williams, download series, watch online, HD quality, Marvel Studios';
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

    setOrCreateOGMeta('og:title', 'Eyes of Wakanda Season 1 (2025) Full Series Download & Watch Online');
    setOrCreateOGMeta('og:description', 'Marvel Animation\'s action-adventure series follows brave Wakandan warriors throughout history. Watch the Hatut Zaraze on dangerous missions to retrieve Vibranium artifacts from enemies of Wakanda.');
    setOrCreateOGMeta('og:image', 'https://res.cloudinary.com/dib0fble7/image/upload/v1754124989/images_4_li0lmi.jpg');
    setOrCreateOGMeta('og:image:width', '1200');
    setOrCreateOGMeta('og:image:height', '630');
    setOrCreateOGMeta('og:image:alt', 'Eyes of Wakanda Season 1 poster featuring Marvel animated series and Wakandan heroes');
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
    setOrCreateTwitterMeta('twitter:title', 'Eyes of Wakanda Season 1 (2025) Full Series Download & Watch Online');
    setOrCreateTwitterMeta('twitter:description', 'Marvel Animation\'s action-adventure series follows brave Wakandan warriors throughout history. Watch the Hatut Zaraze on dangerous missions to retrieve Vibranium artifacts from enemies of Wakanda.');
    setOrCreateTwitterMeta('twitter:image', 'https://res.cloudinary.com/dib0fble7/image/upload/v1754124989/images_4_li0lmi.jpg');
    setOrCreateTwitterMeta('twitter:image:alt', 'Eyes of Wakanda Season 1 poster featuring Marvel animated series and Wakandan heroes');
    setOrCreateTwitterMeta('twitter:site', '@FilmBuffs');
    setOrCreateTwitterMeta('twitter:creator', '@FilmBuffs');

    // Add structured data (JSON-LD)
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      document.head.removeChild(existingScript);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "TVSeries",
      "name": "Eyes of Wakanda",
      "alternateName": "Marvel Animation's Eyes of Wakanda",
      "image": {
        "@type": "ImageObject",
        "url": "https://res.cloudinary.com/dib0fble7/image/upload/v1754124989/images_4_li0lmi.jpg",
        "width": 1200,
        "height": 630
      },
      "description": "Marvel Animation's new action-adventure series follows the adventures of brave Wakandan warriors throughout history. In this globe-trotting adventure, the heroes must carry-out dangerous missions to retrieve Vibranium artifacts from the enemies of Wakanda. They are the Hatut Zaraze and this is their story.",
      "datePublished": "2025-08-01",
      "numberOfSeasons": 1,
      "numberOfEpisodes": 4,
      "genre": ["Animation", "Action", "Adventure", "Fantasy", "Superhero"],
      "contentRating": "TV-PG",
      "inLanguage": "en-US",
      "countryOfOrigin": {
        "@type": "Country",
        "name": "United States"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "8.5",
        "ratingCount": "8500",
        "bestRating": "10",
        "worstRating": "1"
      },
      "creator": [
        { "@type": "Person", "name": "Todd Harris" }
      ],
      "director": [
        { "@type": "Person", "name": "Todd Harris" }
      ],
      "producer": [
        { "@type": "Person", "name": "Ryan Coogler" },
        { "@type": "Person", "name": "Brad Winderbaum" },
        { "@type": "Person", "name": "Kevin Feige" },
        { "@type": "Person", "name": "Louis D'Esposito" },
        { "@type": "Person", "name": "Zinzi Coogler" },
        { "@type": "Person", "name": "Sev Ohanian" },
        { "@type": "Person", "name": "Kalia King" },
        { "@type": "Person", "name": "Dana Vasquez-Eberhardt" }
      ],
      "actor": [
        { "@type": "Person", "name": "Winnie Harlow" },
        { "@type": "Person", "name": "Cress Williams" },
        { "@type": "Person", "name": "Patricia Belcher" },
        { "@type": "Person", "name": "Larry Herron" },
        { "@type": "Person", "name": "Adam Gold" },
        { "@type": "Person", "name": "Lynn Whitfield" },
        { "@type": "Person", "name": "Jacques Colimon" },
        { "@type": "Person", "name": "Jona Xiao" },
        { "@type": "Person", "name": "Isaac Robinson-Smith" },
        { "@type": "Person", "name": "Gary Anthony Williams" },
        { "@type": "Person", "name": "Zeke Alton" },
        { "@type": "Person", "name": "Steve Toussaint" },
        { "@type": "Person", "name": "Anika Noni Rose" }
      ],
      "productionCompany": {
        "@type": "Organization",
        "name": "Marvel Studios Animation"
      },
      "trailer": {
        "@type": "VideoObject",
        "name": "Eyes of Wakanda Official Trailer",
        "description": "Watch the official trailer for Eyes of Wakanda Season 1 (2025)",
        "thumbnailUrl": "https://res.cloudinary.com/dib0fble7/image/upload/v1754124989/images_4_li0lmi.jpg",
        "embedUrl": "https://www.youtube.com/embed/eyes-of-wakanda-trailer"
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

  // Download links for Eyes of Wakanda Season 1
  const downloadLinks = {
    '720p WEB-DL H.264': 'https://hubcloud.one/drive/irwzzomz0nmw8rz',
    '1080p WEB-DL H.265 HDR': 'https://hubcloud.one/drive/ddwc8ko16d6noxu',
    '1080p WEB-DL H.264': 'https://hubcloud.one/drive/5vzaljrmfdjammr',
    '2160p 4K WEB-DL H.265 HDR': 'https://hubcloud.one/drive/pfju1puydzpcnvj'
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
          src="https://res.cloudinary.com/dib0fble7/image/upload/v1754124989/images_4_li0lmi.jpg" 
          alt="Eyes of Wakanda Season 1 poster featuring Marvel animated series and Wakandan heroes" 
          className="movie-poster-image" 
          title="Eyes of Wakanda Season 1 (2025) - Official Series Poster"
        />
        
        <div className="movie-content">
          <h1 className="movie-title" itemProp="name" itemScope itemType="https://schema.org/TVSeries">
            Eyes of Wakanda Season 1 (2025) - Download Full Series
          </h1>
          <div className="movie-rating" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
            Rating: <span itemProp="ratingValue">8.5</span>/<span itemProp="bestRating">10</span> 
            (<span itemProp="ratingCount">8,500</span> reviews)
          </div>

          <div className="download-section">
            <h2>Download Options</h2>
            
            <div className="trailer-section">
              <a 
                href="https://www.youtube.com/watch?v=eyes-of-wakanda-trailer" 
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
                <p>Complete Season 1 - All 4 Episodes</p>
                <p>Multiple quality options: 720p, 1080p, 4K</p>
                <p>File sizes: 2.24GB - 10.52GB</p>
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
                  <h3>Complete Season 1 Downloads</h3>
                  <div className="quality-buttons" style={{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center'}}>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('720p WEB-DL H.264')}
                      style={{minWidth: '300px'}}
                    >
                      720p WEB-DL H.264 [2.24 GB]
                    </button>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('1080p WEB-DL H.265 HDR')}
                      style={{minWidth: '300px'}}
                    >
                      1080p WEB-DL H.265 HDR [4.15 GB]
                    </button>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('1080p WEB-DL H.264')}
                      style={{minWidth: '300px'}}
                    >
                      1080p WEB-DL H.264 [4.86 GB]
                    </button>
                    <button 
                      className="quality-btn"
                      onClick={() => handleQualityClick('2160p 4K WEB-DL H.265 HDR')}
                      style={{minWidth: '300px'}}
                    >
                      2160p 4K WEB-DL H.265 HDR [10.52 GB]
                    </button>
                  </div>
                </div>

                <div className="instructions">
                  <p>🔴 Click any quality button 5 times to access download links</p>
                  <p>📱 Compatible with all devices</p>
                  <p>⚡ High-speed download servers</p>
                  <p>🎯 Complete Season 1 - All Episodes in TAR archive</p>
                </div>
              </div>
            )}
          </div>

          <div className="movie-info" itemScope itemType="https://schema.org/TVSeries">
            <h2>About the Series</h2>
            <p itemProp="description">
              <strong>Marvel Animation's new action-adventure series 'Eyes of Wakanda'</strong> follows the adventures of brave 
              <strong>Wakandan warriors throughout history</strong>. In this globe-trotting adventure, the heroes must carry-out 
              dangerous missions to retrieve <strong>Vibranium artifacts</strong> from the enemies of Wakanda. They are the 
              <strong>Hatut Zaraze</strong> and this is their story. This thrilling animated series showcases the elite warriors 
              who have protected Wakanda's most precious resources across different time periods. From ancient battles to modern conflicts, 
              watch as these legendary protectors risk everything to safeguard the kingdom's most valuable treasures. With stunning animation 
              and heart-pounding action sequences, <strong>Eyes of Wakanda</strong> explores the untold stories of heroism, sacrifice, 
              and the eternal fight to protect Wakanda's legacy. Each mission reveals more about the rich history and advanced civilization 
              that makes Wakanda one of Marvel's most fascinating worlds.
            </p>
            
            <div className="movie-details">
              <div className="detail-item">
                <span className="label">Release Date:</span>
                <span className="value" itemProp="datePublished">August 1, 2025</span>
              </div>
              <div className="detail-item">
                <span className="label">Episodes:</span>
                <span className="value" itemProp="numberOfEpisodes">4 Episodes</span>
              </div>
              <div className="detail-item">
                <span className="label">Runtime:</span>
                <span className="value">~22 minutes per episode</span>
              </div>
              <div className="detail-item">
                <span className="label">Genre:</span>
                <span className="value">
                  <span itemProp="genre">Animation</span>, 
                  <span itemProp="genre">Action</span>, 
                  <span itemProp="genre">Adventure</span>, 
                  <span itemProp="genre">Fantasy</span>
                </span>
              </div>
              <div className="detail-item">
                <span className="label">Director:</span>
                <span className="value">
                  <span itemProp="director" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Todd Harris</span>
                  </span>
                </span>
              </div>
              <div className="detail-item">
                <span className="label">Executive Producers:</span>
                <span className="value">
                  <span itemProp="producer" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Ryan Coogler</span>
                  </span>, 
                  <span itemProp="producer" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Brad Winderbaum</span>
                  </span>, 
                  <span itemProp="producer" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Kevin Feige</span>
                  </span>, 
                  <span itemProp="producer" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Louis D'Esposito</span>
                  </span>, 
                  <span itemProp="producer" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Zinzi Coogler</span>
                  </span>, 
                  <span itemProp="producer" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Sev Ohanian</span>
                  </span>, 
                  <span itemProp="producer" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Kalia King</span>
                  </span>, 
                  <span itemProp="producer" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Dana Vasquez-Eberhardt</span>
                  </span>
                </span>
              </div>
              <div className="detail-item">
                <span className="label">Cast:</span>
                <span className="value">
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Winnie Harlow</span>
                  </span>, 
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Cress Williams</span>
                  </span>, 
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Patricia Belcher</span>
                  </span>, 
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Larry Herron</span>
                  </span>, 
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Adam Gold</span>
                  </span>, 
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Lynn Whitfield</span>
                  </span>, 
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Jacques Colimon</span>
                  </span>, 
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Jona Xiao</span>
                  </span>, 
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Isaac Robinson-Smith</span>
                  </span>, 
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Gary Anthony Williams</span>
                  </span>, 
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Zeke Alton</span>
                  </span>, 
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Steve Toussaint</span>
                  </span>, 
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Anika Noni Rose</span>
                  </span>
                </span>
              </div>
              <div className="detail-item">
                <span className="label">Studio:</span>
                <span className="value">
                  <span itemProp="productionCompany" itemScope itemType="https://schema.org/Organization">
                    <span itemProp="name">Marvel Studios Animation</span>
                  </span>
                </span>
              </div>
              <div className="detail-item">
                <span className="label">Network:</span>
                <span className="value">Disney+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EyesOfWakandaS1Post;
