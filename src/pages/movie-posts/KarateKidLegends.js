import React, { useState, useEffect } from 'react';
import '../MoviePost.css';

const KarateKidLegendsPost = () => {
  const [clickCount, setClickCount] = useState(0);
  const requiredClicks = 5;
  
  // SEO and Meta data setup
  useEffect(() => {
    // Set document title
    document.title = "Karate Kid: Legends (2025) Full Movie Download & Watch Online | Film Buffs";
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Download and watch Karate Kid: Legends (2025) full movie in HD. The latest installment in the Karate Kid franchise brings new legends and martial arts action. Explore trailer, cast, duration, and available quality formats only on Film Buffs.');
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = 'Download and watch Karate Kid: Legends (2025) full movie in HD. The latest installment in the Karate Kid franchise brings new legends and martial arts action. Explore trailer, cast, duration, and available quality formats only on Film Buffs.';
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
      metaKeywords.setAttribute('content', 'Karate Kid Legends 2025, karate, martial arts, family movie, action film, sequel, download, watch online, HD quality, Jackie Chan, Ralph Macchio, Cobra Kai, family adventure, sports drama');
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.name = 'keywords';
      newMetaKeywords.content = 'Karate Kid Legends 2025, karate, martial arts, family movie, action film, sequel, download, watch online, HD quality, Jackie Chan, Ralph Macchio, Cobra Kai, family adventure, sports drama';
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

    setOrCreateOGMeta('og:title', 'Karate Kid: Legends (2025) Full Movie Download & Watch Online');
    setOrCreateOGMeta('og:description', 'The latest installment in the beloved Karate Kid franchise brings new legends and martial arts action. Download and watch Karate Kid: Legends in HD quality.');
    setOrCreateOGMeta('og:image', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTmJdEbCp9aHzDuCNKNz8A-qQCMrv96Min6sXESoNOx1TAp3mKi&psig=AOvVaw1YG_c_uTJoPK8-SW00VTc7&ust=1753515234793000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPCsj7e_144DFQAAAAAdAAAAABAE');
    setOrCreateOGMeta('og:image:width', '1200');
    setOrCreateOGMeta('og:image:height', '630');
    setOrCreateOGMeta('og:image:alt', 'Karate Kid Legends 2025 movie poster featuring martial arts action');
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
    setOrCreateTwitterMeta('twitter:title', 'Karate Kid: Legends (2025) Full Movie Download & Watch Online');
    setOrCreateTwitterMeta('twitter:description', 'The latest installment in the beloved Karate Kid franchise brings new legends and martial arts action. Download and watch Karate Kid: Legends in HD quality.');
    setOrCreateTwitterMeta('twitter:image', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTmJdEbCp9aHzDuCNKNz8A-qQCMrv96Min6sXESoNOx1TAp3mKi&psig=AOvVaw1YG_c_uTJoPK8-SW00VTc7&ust=1753515234793000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPCsj7e_144DFQAAAAAdAAAAABAE');
    setOrCreateTwitterMeta('twitter:image:alt', 'Karate Kid Legends 2025 movie poster featuring martial arts action');
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
      "name": "Karate Kid: Legends",
      "alternateName": "The Karate Kid: Legends",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTmJdEbCp9aHzDuCNKNz8A-qQCMrv96Min6sXESoNOx1TAp3mKi&psig=AOvVaw1YG_c_uTJoPK8-SW00VTc7&ust=1753515234793000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPCsj7e_144DFQAAAAAdAAAAABAE",
        "width": 1200,
        "height": 630
      },
      "description": "The latest installment in the beloved Karate Kid franchise brings together new and familiar faces in an epic martial arts adventure. A new generation learns the way of karate while honoring the legends who came before them.",
      "datePublished": "2025-05-30",
      "duration": "PT1H34M",
      "genre": ["Action", "Family", "Drama", "Sport"],
      "contentRating": "PG",
      "inLanguage": "en-US",
      "countryOfOrigin": {
        "@type": "Country",
        "name": "United States"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "7.5",
        "ratingCount": "8500",
        "bestRating": "10",
        "worstRating": "1"
      },
      "director": [
        { "@type": "Person", "name": "Jonathan Entwistle" }
      ],
      "actor": [
        { "@type": "Person", "name": "Jackie Chan" },
        { "@type": "Person", "name": "Ralph Macchio" },
        { "@type": "Person", "name": "Ben Wang" }
      ],
      "productionCompany": {
        "@type": "Organization",
        "name": "Columbia Pictures"
      },
      "trailer": {
        "@type": "VideoObject",
        "name": "Karate Kid: Legends Official Trailer",
        "description": "Watch the official trailer for Karate Kid: Legends (2025)",
        "thumbnailUrl": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTmJdEbCp9aHzDuCNKNz8A-qQCMrv96Min6sXESoNOx1TAp3mKi&psig=AOvVaw1YG_c_uTJoPK8-SW00VTc7&ust=1753515234793000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPCsj7e_144DFQAAAAAdAAAAABAE",
        "embedUrl": "https://www.youtube.com/embed/karate-kid-legends-trailer"
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

  // Download links for Karate Kid: Legends
  const downloadLinks = {
    '480p x264-mega': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',
    '480p x264-viking': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',
    '480p x264-gdrive': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',
    '480p x265-mega': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',
    '480p x265-viking': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',
    '480p x265-gdrive': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',

    '720p x264-mega': 'https://mega.nz/file/QYgQCQDI#tA2GgiPbSJAgr1HlXvo_oUhPy6qGriixHaMVrkT9yyQ',
    '720p x264-viking': 'https://r4eeg9mngv6q.acek-cdn.com/vp/01/05566/nk8wd0icz26g_n/MkvKing_Karate.Kid.Legends.2025.720p.WEBRip.x264.AAC-.mkv.mp4?t=q57kx_xjQIqUP0n_n927uY1CgOfD-dF92P9CM8z03JU&s=1753435702&e=129600&f=27830963&sp=400&i=43.252&srv=dE6RfWvJyQf2',
    '720p x264-gdrive': 'https://gofile.io/d/EaMEGy',
    '720p x265-mega': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',
    '720p x265-viking': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',
    '720p x265-gdrive': 'https://incredibleenhancementslightning.com/c536r0iv?key=def603400fdfbe36eeeb9209b5e1148b',

    '1080p x264-mega': 'https://mega.nz/file/hI4GBAAC#aKFXuX9VOPg1yPVdeiJo8_S7JwtVDUoGNrUV5Wzj4Zk',
    '1080p x264-viking': 'https://gofile.io/d/BWoOne',
    '1080p x264-gdrive': 'https://13nt2qnqm72d.acek-cdn.com/vp/01/05566/143mjwg5ljzh_n/MkvKing_Karate.Kid.Legends.2025.1080p.WEBRip.x264.AAC5.1-.mkv.mp4?t=PXQmpCLI15wx695kb_X3oDaJUZJEPU4f2z5aGLaGlRg&s=1753435539&e=129600&f=27831007&sp=400&i=43.252&srv=Hp2hjeW6LONm',
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
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcTmJdEbCp9aHzDuCNKNz8A-qQCMrv96Min6sXESoNOx1TAp3mKi&psig=AOvVaw1YG_c_uTJoPK8-SW00VTc7&ust=1753515234793000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPCsj7e_144DFQAAAAAdAAAAABAE" 
          alt="Karate Kid Legends 2025 movie poster featuring martial arts action and family adventure" 
          className="movie-poster-image" 
          title="Karate Kid: Legends (2025) - Official Movie Poster"
        />
        
        <div className="movie-content">
          <h1 className="movie-title" itemProp="name" itemScope itemType="https://schema.org/Movie">
            Karate Kid: Legends (2025) - Download Full Movie
          </h1>
          <div className="movie-rating" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
            Rating: <span itemProp="ratingValue">7.5</span>/<span itemProp="bestRating">10</span> 
            (<span itemProp="ratingCount">8,500</span> reviews)
          </div>

          <div className="download-section">
            <h2>Download Options</h2>
            
            <div className="trailer-section">
              <a 
                href="https://www.youtube.com/watch?v=karate-kid-legends-trailer" 
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
              The latest installment in the beloved <strong>Karate Kid</strong> franchise brings together new and familiar faces 
              in an epic martial arts adventure. A new generation learns the way of karate while honoring the legends who came before them. 
              With the wisdom of <span itemProp="character">Mr. Han</span> and the legacy of <span itemProp="character">Daniel LaRusso</span>, 
              young warriors discover that true strength comes from within. This family-friendly action film combines spectacular martial arts 
              sequences with heartfelt lessons about courage, discipline, and the importance of mentorship.
            </p>
            
            <div className="movie-details">
              <div className="detail-item">
                <span className="label">Release Date:</span>
                <span className="value" itemProp="datePublished">May 30, 2025</span>
              </div>
              <div className="detail-item">
                <span className="label">Duration:</span>
                <span className="value" itemProp="duration" content="PT1H34M">1h 34m</span>
              </div>
              <div className="detail-item">
                <span className="label">Genre:</span>
                <span className="value">
                  <span itemProp="genre">Action</span>, 
                  <span itemProp="genre">Family</span>, 
                  <span itemProp="genre">Drama</span>, 
                  <span itemProp="genre">Sport</span>
                </span>
              </div>
              <div className="detail-item">
                <span className="label">Director:</span>
                <span className="value">
                  <span itemProp="director" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Jonathan Entwistle</span>
                  </span>
                </span>
              </div>
              <div className="detail-item">
                <span className="label">Cast:</span>
                <span className="value">
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Jackie Chan</span>
                  </span>, 
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Ralph Macchio</span>
                  </span>, 
                  <span itemProp="actor" itemScope itemType="https://schema.org/Person">
                    <span itemProp="name">Ben Wang</span>
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

export default KarateKidLegendsPost;
