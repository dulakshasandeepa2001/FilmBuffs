import React from 'react';
import MoviePostTemplate from '../../components/MoviePostTemplate';

const AHouseOfDynamitePost = () => {
  const movieData = {
    // Basic Information
    title: "A House of Dynamite",
    pageTitle: "A House of Dynamite (2025) Download | Film Buffs",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNjAzMjQ4YTUtOGI1Yy00YTFkLTlkMDQtMDEwOWNjYmE3MTU1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: "7.8",
    year: "2025",
    genres: ["Action", "Drama", "Thriller"],

    // Movie Information
    info: {
      "Type": "Movie",
      "Released": "2025",
      "Language": "Multi Audio [Hindi + Tamil + Telugu + English]",
      "Quality": "2160p / 1080p",
      "Format": "WEB-DL",
      "Source": "Netflix"
    },

    // Synopsis
    synopsisTitle: "Movie Synopsis",
    synopsis: "A House of Dynamite is an explosive action-thriller that follows a group of individuals caught in a dangerous web of crime, corruption, and explosive revelations. When secrets from the past resurface, they must navigate through treacherous circumstances where trust is scarce and danger lurks at every corner. With high-stakes confrontations and heart-pounding sequences, this Netflix original delivers a gripping tale of survival, loyalty, and redemption. Set against a backdrop of intense drama, the film explores the consequences of choices made and the power of determination in the face of overwhelming odds.",

    // Highlights
    highlightsTitle: "Movie Highlights:",
    highlights: [
      "✨ Netflix Original Film - Premium production quality",
      "💥 High-octane action sequences and intense thriller elements",
      "🎭 Gripping storyline with unexpected twists and turns",
      "🔊 Multi Audio tracks [Hindi + Tamil + Telugu + English]",
      "🎚️ Dolby Digital Plus 5.1 & Atmos audio for immersive experience",
      "📺 Available in multiple qualities: 4K DoVi HDR, 4K SDR, and 1080p",
      "🌟 High-quality Netflix WEB-DL source",
      "🎬 Complete movie available in premium formats"
    ],

    // Download Links
    downloadLinks: {
      "2160p DoVi HDR HEVC (NOGRP)": "https://hubcloud.fit/drive/asoimmanlg1alo6",
      "2160p SDR HEVC (HHWEB)": "https://hubcloud.fit/drive/szgww5gk1r5bbtw",
      "1080p x265 (3GB)": "https://new5.gdflix.net/file/7zUObYxz5c9Nedd",
      "1080p x265 (1.46GB)": "https://new5.gdflix.net/file/hsOKlbJyQWvkRUs"
    },

    // Quality Information
    qualityInfo: {
      "2160p DoVi HDR HEVC (NOGRP)": {
        size: "17.82 GB",
        description: "4K UHD • Dolby Vision • HDR • H.265 • Multi Audio • DDP Atmos 5.1 • Best Visual Quality"
      },
      "2160p SDR HEVC (HHWEB)": {
        size: "11.08 GB",
        description: "4K UHD • SDR • H.265 • Multi Audio • DDP Atmos 5.1 • Premium Quality"
      },
      "1080p x265 (3GB)": {
        size: "3.00 GB",
        description: "Full HD • H.265 • Multi Audio • DDP 5.1 • Balanced Quality"
      },
      "1080p x265 (1.46GB)": {
        size: "1.46 GB",
        description: "Full HD • H.265 • Multi Audio • DDP 5.1 • Compact Size"
      }
    },

    // Download Section Customization
    downloadTitle: "Download A House of Dynamite",
    downloadButtonText: "Download Now",
    downloadNotice: "Complete movie available in multiple qualities including 4K with Dolby Vision, Multi Audio, and premium sound",

    // Technical Specifications
    technicalSpecs: {
      "Video": [
        "Codec: H.265 (HEVC)",
        "Resolution: 3840x2160 (4K) / 1920x1080 (Full HD)",
        "Source: Netflix WEB-DL",
        "HDR: Dolby Vision & HDR10 (4K DoVi version)",
        "Quality: Premium Netflix Original"
      ],
      "Audio": [
        "Codec: Dolby Digital Plus 5.1 / Atmos",
        "Languages: Hindi + Tamil + Telugu + English",
        "Channels: 5.1 Surround Sound",
        "Atmos: Available on select versions",
        "Bitrate: High Quality"
      ],
      "File Info": [
        "Container: MKV",
        "Release: NOGRP-Ionicboy / HHWEB-Ionicboy",
        "Type: Complete Movie",
        "Size: 1.46 GB - 17.82 GB (varies by quality)",
        "Subtitles: Included"
      ]
    },

    // Additional Information
    additionalInfoTitle: "About A House of Dynamite",
    additionalInfo: [
      "A House of Dynamite marks another compelling addition to Netflix's original film lineup, delivering a potent mix of action, drama, and thriller elements. The film showcases exceptional production values with stunning cinematography, intense action choreography, and a narrative that keeps viewers on the edge of their seats throughout its runtime.",
      
      "With multi-language audio support including Hindi, Tamil, Telugu, and English, the film caters to a wide audience across different regions. The story weaves together multiple plot threads, creating a complex tapestry of crime, betrayal, and ultimate justice. Each character brings depth to the narrative, making every scene purposeful and engaging.",
      
      "Available in premium formats including 4K with Dolby Vision and HDR, as well as various 1080p options, viewers can choose their preferred quality based on their needs. The Dolby Atmos audio enhancement on premium versions creates an immersive soundscape that brings the explosive action sequences to life. Whether you're a fan of action thrillers or compelling dramas, A House of Dynamite delivers an unforgettable cinematic experience."
    ],

    // Related Content
    relatedTitle: "More Action Thriller Movies",
    relatedContent: "🎬 Explore more action-packed thrillers and drama content on Film Buffs! Check out other Netflix originals and crime thrillers in our collection."
  };

  return <MoviePostTemplate movieData={movieData} />;
};

export default AHouseOfDynamitePost;
