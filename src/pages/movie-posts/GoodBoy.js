import React from 'react';
import MoviePostTemplate from '../../components/MoviePostTemplate';

const GoodBoyPost = () => {
  const movieData = {
    // Basic Information
    title: "Good Boy",
    pageTitle: "Good Boy (2025) Download | Film Buffs",
    imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT-nBijFTKz_-XkJCTNXVo-bA7Qj7vFiU7NIcbC2ygYeEn47IA6",
    rating: "7.6",
    year: "2025",
    genres: ["Comedy", "Drama", "Family"],

    // Movie Information
    info: {
      "Type": "Movie",
      "Released": "2025",
      "Language": "English",
      "Quality": "1080p / 720p",
      "Format": "WEB-DL",
      "Source": "Premium"
    },

    // Synopsis
    synopsisTitle: "Movie Synopsis",
    synopsis: "Good Boy is a heartwarming and hilarious comedy-drama that explores the unique bond between humans and their four-legged companions. When a lovable but mischievous dog enters the life of an uptight professional, chaos and comedy ensue, teaching valuable lessons about loyalty, unconditional love, and what truly matters in life. Through a series of laugh-out-loud moments and touching scenes, the film shows how sometimes the best therapy comes with a wagging tail and wet nose. As the unlikely duo navigates their journey together, they discover that being a 'good boy' isn't just about following commands—it's about following your heart. This feel-good film perfectly balances humor with heartfelt moments, making it a must-watch for animal lovers and families alike.",

    // Highlights
    highlightsTitle: "Movie Highlights:",
    highlights: [
      "✨ Heartwarming story about friendship and unconditional love",
      "🐕 Adorable canine performance that steals every scene",
      "😄 Perfect blend of comedy and emotional moments",
      "🎭 Engaging storyline with relatable characters",
      "👨‍👩‍👧‍👦 Family-friendly content suitable for all ages",
      "🎬 High-quality production with great cinematography",
      "📺 Available in multiple qualities: 1080p and 720p",
      "🌟 Premium WEB-DL source for best viewing experience"
    ],

    // Download Links
    downloadLinks: {
      "1080p (3.15GB)": "https://new27.gdtot.dad/file/3377842883",
      "1080p (1.27GB)": "https://new27.gdtot.dad/file/1364560852",
      "720p (360MB)": "https://new27.gdtot.dad/file/375754323"
    },

    // Quality Information
    qualityInfo: {
      "1080p (3.15GB)": {
        size: "3.15 GB",
        description: "Full HD • Best Quality • Premium Audio • Crystal Clear Picture"
      },
      "1080p (1.27GB)": {
        size: "1.27 GB",
        description: "Full HD • Balanced Quality • Good Audio • Smaller Size"
      },
      "720p (360MB)": {
        size: "360 MB",
        description: "HD • Compact Size • Good Quality • Easy Download"
      }
    },

    // Download Section Customization
    downloadTitle: "Download Good Boy",
    downloadButtonText: "Download Now",
    downloadNotice: "Complete movie available in multiple qualities with premium audio for the best viewing experience",

    // Technical Specifications
    technicalSpecs: {
      "Video": [
        "Codec: H.264 / H.265 (HEVC)",
        "Resolution: 1920x1080 (Full HD) / 1280x720 (HD)",
        "Source: Premium WEB-DL",
        "Bitrate: High Quality",
        "Quality: Excellent Picture Quality"
      ],
      "Audio": [
        "Codec: AAC / AC3",
        "Languages: English",
        "Channels: Stereo / 5.1 Surround",
        "Bitrate: High Quality",
        "Clear Dialogue and Sound"
      ],
      "File Info": [
        "Container: MKV / MP4",
        "Type: Complete Movie",
        "Size: 360 MB - 3.15 GB (varies by quality)",
        "Subtitles: English (where available)"
      ]
    },

    // Additional Information
    additionalInfoTitle: "About Good Boy",
    additionalInfo: [
      "Good Boy is a delightful cinematic experience that captures the magic of the human-animal bond in all its messy, beautiful glory. The film expertly weaves together comedy and drama, creating moments that will have you laughing one minute and reaching for tissues the next. With a talented cast that brings authenticity to their roles and a scene-stealing canine performance, the movie resonates with anyone who's ever loved a pet.",
      
      "The story goes beyond simple pet ownership, exploring themes of responsibility, personal growth, and the transformative power of unconditional love. Through clever writing and genuine emotional moments, Good Boy delivers a narrative that appeals to both children and adults. The comedic timing is spot-on, with physical comedy and witty dialogue that keeps the energy high throughout the film's runtime.",
      
      "Available in multiple quality options ranging from a compact 720p version ideal for mobile viewing to a premium 1080p release that showcases the beautiful cinematography and adorable canine close-ups, Good Boy is accessible to all viewers. The film's uplifting message about companionship, loyalty, and finding joy in the simple things makes it perfect for family movie nights or anyone looking for a feel-good watch. Whether you're a dog lover or simply appreciate a well-crafted comedy-drama, Good Boy delivers tail-wagging entertainment from start to finish."
    ],

    // Related Content
    relatedTitle: "More Family & Comedy Movies",
    relatedContent: "🎬 Explore more heartwarming family movies and comedies on Film Buffs! Check out other feel-good films and animal stories in our collection."
  };

  return <MoviePostTemplate movieData={movieData} />;
};

export default GoodBoyPost;
