import React from 'react';
import MoviePostTemplate from '../../components/MoviePostTemplate';

const NCISTonyAndZivaPost = () => {
  const movieData = {
    // Basic Information
    title: "NCIS: Tony and Ziva - Season 1",
    pageTitle: "NCIS Tony and Ziva Season 1 (2025) Download | Film Buffs",
    imageUrl: "https://www.tvguide.com/a/img/resize/b726ea18c0d1d2a6999d5e4e95d780b470f8b922/hub/2025/06/16/6f9da3f4-5e3a-4297-b228-c3e26354edc9/ncistonyziva.jpg?auto=webp",
    rating: "8.5",
    year: "2025",
    genres: ["Action", "Drama", "Crime"],

    // Series Information
    info: {
      "Season": "Season 1",
      "Episodes": "Complete Season",
      "Released": "2025",
      "Language": "Dual Audio [Hindi + English]",
      "Quality": "2160p / 1080p",
      "Format": "WEB-DL",
      "Source": "ATVP / AMZN"
    },

    // Synopsis
    synopsisTitle: "Series Synopsis",
    synopsis: "NCIS: Tony and Ziva brings back two of the most beloved characters from the NCIS franchise in an all-new thrilling adventure. Follow former NCIS Special Agents Tony DiNozzo and Ziva David as they reunite for a dangerous mission that takes them across Europe. With their undeniable chemistry and years of experience, they must navigate deadly conspiracies, international threats, and unresolved feelings while protecting their family. This spinoff series delivers the perfect blend of action, romance, and the witty banter fans have been waiting for.",

    // Highlights
    highlightsTitle: "Season Highlights:",
    highlights: [
      "✨ Complete Season 1 - All episodes in one download",
      "🎬 Long-awaited reunion of Tony and Ziva from NCIS",
      "💥 High-octane action sequences across international locations",
      "🎭 Perfect blend of drama, romance, and crime-solving",
      "🔊 Dual Audio [Hindi DDP 2.0 + English DDP 5.1]",
      "🎚️ Dolby Digital Plus audio for immersive experience",
      "📺 Available in multiple qualities: 4K, 1080p, and 720p",
      "🌟 Premium streaming quality from Apple TV+ and Amazon Prime"
    ],

    // Download Links
    downloadLinks: {
      "2160p DoVi HDR HEVC (WADU)": "https://hubcloud.fit/drive/packs/p3nxsn8jimkp7ac",
      "2160p SDR HEVC ATVP (WADU)": "https://hubcloud.fit/drive/packs/pff5y9r58jwbk9z",
      "2160p SDR HEVC AMZN (Kitsune)": "https://hubcloud.fit/drive/packs/pjwzg5lt8g2jahv",
      "1080p H.264 (Kitsune)": "https://hubcloud.fit/drive/packs/pb3s23ieimd2ubj",
      "1080p HEVC (PFix)": "https://hubcloud.fit/drive/packs/p1rp7dx6f16vwzj"
    },

    // Quality Information
    qualityInfo: {
      "2160p DoVi HDR HEVC (WADU)": {
        size: "~15-20 GB",
        description: "4K UHD • Dolby Vision • HDR • H.265 • Dual Audio • DDP 5.1 • Best Visual Quality"
      },
      "2160p SDR HEVC ATVP (WADU)": {
        size: "~12-15 GB",
        description: "4K UHD • SDR • H.265 • Dual Audio • DDP 5.1 • Apple TV+ Source"
      },
      "2160p SDR HEVC AMZN (Kitsune)": {
        size: "~12-15 GB",
        description: "4K UHD • SDR • H.265 • Dual Audio • DDP 5.1 • Amazon Source"
      },
      "1080p H.264 (Kitsune)": {
        size: "~8-10 GB",
        description: "Full HD • H.264 • Dual Audio • DDP 5.1 • Balanced Quality"
      },
      "1080p HEVC (PFix)": {
        size: "~4-6 GB",
        description: "Full HD • H.265 • Dual Audio • DDP 5.1 • Smaller Size"
      }
    },

    // Download Section Customization
    downloadTitle: "Download NCIS: Tony and Ziva Season 1",
    downloadButtonText: "Download Season 1",
    downloadNotice: "Complete Season 1 available in multiple qualities including 4K with Dolby Vision, Dual Audio, and premium sound",

    // Technical Specifications
    technicalSpecs: {
      "Video": [
        "Codec: H.264 / H.265 (HEVC)",
        "Resolution: 3840x2160 (4K) / 1920x1080 (Full HD)",
        "Source: Apple TV+ / Amazon Prime WEB-DL",
        "HDR: Dolby Vision & HDR10 (Select versions)",
        "Quality: Premium Streaming Original"
      ],
      "Audio": [
        "Codec: Dolby Digital Plus 5.1 / 2.0",
        "Languages: Hindi DDP 2.0 + English DDP 5.1",
        "Channels: 5.1 Surround Sound (English)",
        "Channels: 2.0 Stereo (Hindi)",
        "Bitrate: High Quality"
      ],
      "File Info": [
        "Container: MKV",
        "Release: WADU-Ionicboy / Kitsune-Ionicboy / PFix-Ionicboy",
        "Season: Complete Season 1",
        "Size: 4 GB - 20 GB (varies by quality)",
        "Subtitles: Included"
      ]
    },

    // Additional Information
    additionalInfoTitle: "About NCIS: Tony and Ziva",
    additionalInfo: [
      "NCIS: Tony and Ziva is the highly anticipated spinoff series that brings back fan-favorite characters Tony DiNozzo and Ziva David to the NCIS universe. After years of waiting, fans finally get to see what happens when these two legendary agents reunite for a dangerous international mission that will test their skills, their relationship, and their resolve.",
      
      "Season 1 delivers everything fans have been hoping for: pulse-pounding action sequences, international intrigue, heartfelt moments, and the signature chemistry between Tony and Ziva that made them beloved characters in the original NCIS series. Set against the backdrop of European cities, the season takes viewers on a thrilling journey filled with twists, turns, and the perfect balance of drama and humor that defines the NCIS franchise.",
      
      "Available in stunning 4K quality with Dolby Vision and HDR, as well as multiple other format options, this release ensures that every viewer can enjoy the series in their preferred quality. The dual audio tracks with Hindi and English options, along with premium Dolby Digital Plus 5.1 sound, create an immersive viewing experience. Whether you're a longtime NCIS fan or new to the franchise, this series is a must-watch that delivers on all fronts."
    ],

    // Related Content
    relatedTitle: "More Crime Drama Series",
    relatedContent: "🎬 Explore more crime drama series and action-packed content on Film Buffs! Check out other NCIS series and police procedurals in our collection."
  };

  return <MoviePostTemplate movieData={movieData} />;
};

export default NCISTonyAndZivaPost;
