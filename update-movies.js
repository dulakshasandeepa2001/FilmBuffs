// Helper script to update all movie pages with popup functionality
const fs = require('fs');
const path = require('path');

const moviePostsDir = 'c:/Users/Asus/Desktop/Film_Buffs/frontend/src/pages/movie-posts';

// List of movie files to update
const movieFiles = [
  'AnyoneButYou.js',
  'Barbie.js',
  'DunePartTwo.js', 
  'GodzillaXKong.js',
  'M3GAN.js',
  'MissionImpossible.js',
  'Oppenheimer.js',
  'PoorThings.js',
  'Saltburn.js',
  'SquidGameSeason1.js',
  'SquidGameSeason2.js',
  'TalkToMe.js',
  'TheBatman.js',
  'TheIronClaw.js'
];

function getMovieName(filename) {
  return filename.replace('.js', '').replace(/([A-Z])/g, ' $1').trim();
}

function updateMovieFile(filepath, movieName) {
  const content = fs.readFileSync(filepath, 'utf8');
  
  // Add useState import
  const updatedImports = content.replace(
    "import React from 'react';",
    "import React, { useState } from 'react';"
  );
  
  // Add state and handlers
  const stateCode = `
  const [showPopup, setShowPopup] = useState(false);
  const [selectedFormat, setSelectedFormat] = useState('');
  const [selectedQuality, setSelectedQuality] = useState('');

  const handleDownloadClick = (quality, format) => {
    setSelectedQuality(quality);
    setSelectedFormat(format);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };`;
  
  // Insert state after the component declaration
  const withState = updatedImports.replace(
    /const \w+Post = \(\) => \{/,
    (match) => match + stateCode
  );
  
  // Replace anchor tags with buttons
  const withButtons = withState
    .replace(/<a href="#" className="download-btn x264">x264<\/a>/g, 
      `<button className="download-btn x264" onClick={() => handleDownloadClick('480p', 'x264')}>x264</button>`)
    .replace(/<a href="#" className="download-btn x265">x265<\/a>/g,
      `<button className="download-btn x265" onClick={() => handleDownloadClick('480p', 'x265')}>x265</button>`);
  
  console.log(`Updated ${movieName}`);
  return withButtons;
}

// Update each movie file
movieFiles.forEach(filename => {
  const filepath = path.join(moviePostsDir, filename);
  const movieName = getMovieName(filename);
  
  try {
    const updatedContent = updateMovieFile(filepath, movieName);
    fs.writeFileSync(filepath, updatedContent);
    console.log(`✅ Successfully updated ${filename}`);
  } catch (error) {
    console.log(`❌ Error updating ${filename}:`, error.message);
  }
});

console.log('Movie files update complete!');
