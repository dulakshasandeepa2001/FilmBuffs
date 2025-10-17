/**
 * EXAMPLE: How to Create a New Movie Post Using MoviePostTemplate
 * 
 * Copy this file structure for any new movie post
 * Just change the movieData object with your movie's information
 */

import React from 'react';
import MoviePostTemplate from '../components/MoviePostTemplate';

const ExampleMoviePost = () => {
  // Define all your movie data in this object
  const movieData = {
    // Basic Information
    title: "Movie Title - Season X Episode Y",
    pageTitle: "Movie Title (2025) Download | Film Buffs",
    imageUrl: "https://example.com/poster.jpg",
    rating: "8.5",
    year: "2025",
    genres: ["Drama", "Action", "Thriller"],

    // Movie/Episode Information (displayed in grid)
    info: {
      "Episode": "S01E01",
      "Released": "2025",
      "Runtime": "~45 min",
      "Language": "English",
      "Quality": "4K HDR / 1080p / 720p",
      "Format": "MKV"
    },

    // Synopsis Section
    synopsisTitle: "Episode Synopsis", // Optional, defaults to "Synopsis"
    synopsis: "Main description of your movie or episode goes here. Write a compelling summary that describes the plot, characters, and what makes this content special.",
    
    // Highlights Section (optional)
    highlightsTitle: "Episode Highlights:", // Optional
    highlights: [
      "✨ Amazing visual effects and cinematography",
      "🎭 Outstanding performances from the cast",
      "💥 Action-packed sequences",
      "🔥 Emotional depth and character development",
      "🎬 Available in multiple qualities with great audio"
    ],

    // Download Links
    downloadLinks: {
      "4K HDR": "https://hubcloud.fit/drive/example1",
      "1080p x264": "https://gdflix.dev/file/example2",
      "1080p x265": "https://gdflix.dev/file/example3",
      "720p x264": "https://gdflix.dev/file/example4",
      "720p x265": "https://gdflix.dev/file/example5"
    },

    // Quality Information (optional but recommended)
    qualityInfo: {
      "4K HDR": {
        size: "4.21 GB",
        description: "Ultra HD • HDR10 • Best Quality"
      },
      "1080p x264": {
        size: "3.83 GB",
        description: "Full HD • H.264 • Multi Audio • DDP 5.1"
      },
      "1080p x265": {
        size: "1.77 GB",
        description: "Full HD • H.265 • Multi Audio • DDP 5.1"
      },
      "720p x264": {
        size: "1.56 GB",
        description: "HD • H.264 • Multi Audio • DDP 5.1"
      },
      "720p x265": {
        size: "1.44 GB",
        description: "HD • H.265 • Multi Audio • DDP 5.1"
      }
    },

    // Download Section Customization
    downloadTitle: "Download Movie Title", // Optional
    downloadButtonText: "Download Now", // Optional
    downloadNotice: "Available in multiple qualities with excellent picture and sound", // Optional

    // Technical Specifications (optional)
    technicalSpecs: {
      "Video": [
        "Codec: H.264 / H.265 (HEVC)",
        "Resolution: 3840x2160 / 1920x1080 / 1280x720",
        "HDR: HDR10 (4K version)",
        "Source: WEB-DL"
      ],
      "Audio": [
        "Codec: Dolby Digital Plus 5.1",
        "Languages: Multi Audio",
        "Bitrate: High Quality",
        "Channels: 5.1 Surround"
      ],
      "File Info": [
        "Container: MKV (Matroska)",
        "Release: CHiKU",
        "Size: 900MB - 4.21GB",
        "Subtitles: Multiple Options"
      ]
    },

    // Additional Information Section (optional)
    additionalInfoTitle: "About the Movie", // Optional
    additionalInfo: [
      "First paragraph about the movie, series background, or additional context.",
      "Second paragraph with more details about the production, cast, or storyline.",
      "Third paragraph about what makes this content special and worth watching."
    ],

    // Related Content Section (optional)
    relatedTitle: "More Episodes", // Optional
    relatedContent: "🎬 Check out other episodes and explore more content on Film Buffs!"
  };

  // Simply pass the movieData to the template
  return <MoviePostTemplate movieData={movieData} />;
};

export default ExampleMoviePost;


/**
 * QUICK START GUIDE:
 * 
 * 1. Copy this entire file
 * 2. Rename it to your movie (e.g., MovieName.js)
 * 3. Update the movieData object with your movie's details
 * 4. Import it in App.js
 * 5. Add a route in App.js:
 *    <Route path="/movies/your-movie-name" element={<YourMoviePost />} />
 * 6. Add movie to movieData array in App.js
 * 7. Add URL mapping in handleDownloadClick function
 * 
 * MINIMUM REQUIRED FIELDS:
 * - title
 * - imageUrl
 * - rating
 * - year
 * - synopsis
 * - downloadLinks
 * 
 * OPTIONAL FIELDS (can be omitted):
 * - genres
 * - info
 * - highlights
 * - qualityInfo
 * - technicalSpecs
 * - additionalInfo
 * - relatedContent
 * - All title customization fields
 */
