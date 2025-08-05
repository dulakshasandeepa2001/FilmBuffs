import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import DunePartTwoPost from './pages/movie-posts/DunePartTwo';
import TheBatmanPost from './pages/movie-posts/TheBatman';
import MissionImpossiblePost from './pages/movie-posts/MissionImpossible';
import TalkToMePost from './pages/movie-posts/TalkToMe';
import M3GANPost from './pages/movie-posts/M3GAN';
import BarbiePost from './pages/movie-posts/Barbie';
import AnyoneButYouPost from './pages/movie-posts/AnyoneButYou';
import OppenheimerPost from './pages/movie-posts/Oppenheimer';
import TheIronClawPost from './pages/movie-posts/TheIronClaw';
import SaltburnPost from './pages/movie-posts/Saltburn';
import PoorThingsPost from './pages/movie-posts/PoorThings';
import SquidGameSeason1Post from './pages/movie-posts/SquidGameSeason1';
import SquidGameSeason2Post from './pages/movie-posts/SquidGameSeason2';
import SquidGameSeason3Post from './pages/movie-posts/SquidGameSeason3';
import BallerinPost from './pages/movie-posts/Ballerina';
import IndependenceDayPost from './pages/movie-posts/IndependenceDay';
import TangledPost from './pages/movie-posts/Tangled';
import HowToTrainYourDragonPost from './pages/movie-posts/HowToTrainYourDragon';
import KarateKidLegendsPost from './pages/movie-posts/KarateKidLegends';
import TwentyEightYearsLaterPost from './pages/movie-posts/TwentyEightYearsLater';

import EyesOfWakandaS1Post from './pages/movie-posts/EyesOfWakandaS1';
import JurassicWorldRebirthPost from './pages/movie-posts/JurassicWorldRebirth';

// Random redirect links for first-time button clicks
const randomRedirectLinks = [
  'https://incredibleenhancementslightning.com/mb44w5nrf?key=b81da213cd8d52d142d1bec92e3e014d',
  'https://incredibleenhancementslightning.com/d0jtntz4zi?key=b9a5ee9377f9a6709624ba8c106313f9',
  'https://incredibleenhancementslightning.com/dzzpxkz4?key=e9c5b50948edadcec659d3dc875f7542',
  'https://otieu.com/4/9545201'
];

// Global state for tracking individual button clicks
const clickedButtons = new Set();

// Function to handle first-time click redirect for individual buttons
const handleFirstTimeClick = (e, buttonId) => {
  if (!clickedButtons.has(buttonId)) {
    e.preventDefault();
    clickedButtons.add(buttonId);
    const randomLink = randomRedirectLinks[Math.floor(Math.random() * randomRedirectLinks.length)];
    window.open(randomLink, '_blank');
    return true; // Indicates this was a first-time click for this button
  }
  return false; // Indicates normal behavior should proceed
};

// Updated movie data with specific movies for each category
const movieData = {
  latest: [
    {
      id: 24,
      title: "Jurassic World Rebirth",
      imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSQ_mCeNLtPfEM8AbIDVZUyVyuu_JENshYBugD_JPNjI9vrBWRA",
      rating: "7.2",
      year: "2025",
      watchUrl: "https://streamovie.xyz/assets/v1/video/movie.mp4",
      description: "A profit-driven pharmaceutical company assembles a team to retrieve blood samples from the world's last prehistoric giants. Their mission leads them to a forbidden island overrun by engineered hybrids that can run, swim, glide, and soar."
    },
    {
      id: 23,
      title: "Eyes of Wakanda Season 1",
      imageUrl: "https://res.cloudinary.com/dib0fble7/image/upload/v1754124989/images_4_li0lmi.jpg",
      rating: "8.5",
      year: "2025",
      watchUrl: "https://stream.techinmind.space/tvlinks.php?tmdbid=eyes-of-wakanda&season=1#",
      description: "Marvel Animation's new action-adventure series follows the adventures of brave Wakandan warriors throughout history. In this globe-trotting adventure, the heroes must carry-out dangerous missions to retrieve Vibranium artifacts from the enemies of Wakanda. They are the Hatut Zaraze and this is their story."
    },
    {
      id: 21,
      title: "28 Years Later",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR52mCisDohLeTVzvyFcx_elHY3I4lzMhJLUfHsyoMnt3vIpjTs",
      rating: "8.2",
      year: "2025",
      watchUrl: "https://stream.techinmind.space/movlinks.php?tmdbid=28YearsLater2025#",
      description: "The highly anticipated third installment in the acclaimed zombie apocalypse franchise. Set 28 years after the original outbreak, a new generation faces the evolved infected in a world forever changed by the rage virus."
    },
    {
      id: 20,
      title: "Karate Kid: Legends",
      imageUrl: "https://image.tmdb.org/t/p/w500/karate-kid-legends-poster.jpg",
      rating: "7.5",
      year: "2025",
      watchUrl: "https://stream.techinmind.space/movlinks.php?tmdbid=karateKid2025#",
      description: "The latest installment in the beloved Karate Kid franchise brings together new and familiar faces in an epic martial arts adventure. A new generation learns the way of karate while honoring the legends who came before them."
    },
    {
      id: 18,
      title: "Tangled",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/a/a8/Tangled_poster.jpg",
      rating: "7.7",
      year: "2010",
      watchUrl: "https://stream.techinmind.space/movlinks.php?tmdbid=38757#",
      description: "When the kingdom's most wanted—and most charming—bandit Flynn Rider hides out in a mysterious tower, he's taken hostage by Rapunzel, a beautiful and feisty tower-bound teen with 70 feet of magical, golden hair."
    },
    {
      id: 19,
      title: "How to Train Your Dragon",
      imageUrl: "https://res.cloudinary.com/dib0fble7/image/upload/v1752688734/Untitled12222_fkn050.webp",
      rating: "8.1",
      year: "2025",
      watchUrl: "https://stream.techinmind.space/movlinks.php?tmdbid=10191#",
      description: "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed."
    },
    {
      id: 16,
      title: "Ballerina",
      imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRh56p8pGOiRsnHtc1SZi5g8lbs7cedWGNpPtk8PzFpgsKqCiVHk1qHSAjBUiRPgTnrRohOs3EPGEiR8lcy0WjZOhqs8upsRa6kQzh3dlhylg",
      rating: "6.2",
      year: "2025",
      watchUrl: "https://streamovie.xyz/en/movie/541671/ballerina",
      description: "Taking place during the events of John Wick: Chapter 3 – Parabellum, Eve Macarro begins her training in the assassin traditions of the Ruska Roma. Years later, she's forced to use her skills to seek revenge against the crime syndicate that killed her family."
    },
    {
      id: 17,
      title: "Independence Day",
      imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRgpf_kmbE2z20si8bOc1mY6_6uP-785cFHO4aihElaklDd-wVCwcnIQbJuJRD3Evu8CEQ8GJQetvjCqW8UASWKlVR3w0bfMCL1jBesFjhVSw",
      rating: "7.0",
      year: "1996",
      watchUrl: "https://embedder.net/e/movie?tmdb=602&season=&episode=",
      description: "Aliens attack Earth in this epic sci-fi blockbuster. On July 4th, humanity fights back against a massive alien invasion in this thrilling summer blockbuster."
    },
    {
       
      id: 15,
      title: "Squid Game Season 3",
      imageUrl: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
      rating: "8.5",
      year: "2025",
      description: "The final season brings the ultimate confrontation as Player 456 faces the masterminds behind the deadly games in an epic conclusion."
    }
      
    
  ],
  action: [
    {
      id: 24,
      title: "Jurassic World Rebirth",
      imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSQ_mCeNLtPfEM8AbIDVZUyVyuu_JENshYBugD_JPNjI9vrBWRA",
      rating: "7.2",
      year: "2025",
      watchUrl: "https://streamovie.xyz/assets/v1/video/movie.mp4",
      description: "A profit-driven pharmaceutical company assembles a team to retrieve blood samples from the world's last prehistoric giants. Their mission leads them to a forbidden island overrun by engineered hybrids that can run, swim, glide, and soar."
    },
    {
      id: 20,
      title: "Karate Kid: Legends",
      imageUrl: "https://image.tmdb.org/t/p/w500/karate-kid-legends-poster.jpg",
      rating: "7.5",
      year: "2025",
      watchUrl: "https://stream.techinmind.space/movlinks.php?tmdbid=karateKid2025#",
      description: "The latest installment in the beloved Karate Kid franchise brings together new and familiar faces in an epic martial arts adventure. A new generation learns the way of karate while honoring the legends who came before them."
    },
    {
      id: 16,
      title: "Ballerina",
      imageUrl: "https://m.media-amazon.com/images/M/MV5BNzE4ZjgxNjMtMmQ5ZS00NmU4LWE5ZDYtNGU5NzQzNzM1NzdjXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
      rating: "6.2",
      year: "2025",
      watchUrl: "https://streamovie.xyz/en/movie/541671/ballerina",
      description: "Taking place during the events of John Wick: Chapter 3 – Parabellum, Eve Macarro begins her training in the assassin traditions of the Ruska Roma. Years later, she's forced to use her skills to seek revenge against the crime syndicate that killed her family."
    },
    {
      id: 3,
      title: "The Batman",
      imageUrl: "https://image.tmdb.org/t/p/w500/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
      rating: "8.3",
      year: "2022"
    },
    {
      id: 4,
      title: "Mission: Impossible - Dead Reckoning",
      imageUrl: "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
      rating: "7.8",
      year: "2023"
    }
  ],
  horror: [
    {
      id: 21,
      title: "28 Years Later",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR52mCisDohLeTVzvyFcx_elHY3I4lzMhJLUfHsyoMnt3vIpjTs",
      rating: "8.2",
      year: "2025",
      watchUrl: "https://stream.techinmind.space/movlinks.php?tmdbid=28YearsLater2025#",
      description: "The highly anticipated third installment in the acclaimed zombie apocalypse franchise. Set 28 years after the original outbreak, a new generation faces the evolved infected in a world forever changed by the rage virus."
    },
    {
      id: 5,
      title: "Talk to Me",
      imageUrl: "https://image.tmdb.org/t/p/w500/kdPMUMJzyYAc4roD52qavX0nLIC.jpg",
      rating: "7.1",
      year: "2023"
    },
    {
      id: 6,
      title: "M3GAN",
      imageUrl: "https://image.tmdb.org/t/p/w500/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
      rating: "6.4",
      year: "2023"
    }
  ],
  comedy: [
    {
      id: 19,
      title: "How to Train Your Dragon",
      imageUrl: "https://res.cloudinary.com/dib0fble7/image/upload/v1752688734/Untitled12222_fkn050.webp",
      rating: "8.1",
      year: "2010",
      watchUrl: "https://stream.techinmind.space/movlinks.php?tmdbid=10191#",
      description: "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed."
    },
    {
      id: 18,
      title: "Tangled",
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/a/a8/Tangled_poster.jpg",
      rating: "7.7",
      year: "2010",
      watchUrl: "https://stream.techinmind.space/movlinks.php?tmdbid=38757#",
      description: "When the kingdom's most wanted—and most charming—bandit Flynn Rider hides out in a mysterious tower, he's taken hostage by Rapunzel, a beautiful and feisty tower-bound teen with 70 feet of magical, golden hair."
    },
    {
      id: 7,
      title: "Barbie",
      imageUrl: "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
      rating: "7.0",
      year: "2023"
    },
    {
      id: 8,
      title: "Anyone But You",
      imageUrl: "https://image.tmdb.org/t/p/w500/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg",
      rating: "6.8",
      year: "2023"
    }
  ],
  drama: [
    {
      id: 23,
      title: "Eyes of Wakanda Season 1",
      imageUrl: "https://res.cloudinary.com/dib0fble7/image/upload/v1754388793/WhatsApp_Image_2025-08-04_at_17.30.01_71185a8c_gxcrkc.jpg",
      rating: "8.5",
      year: "2025",
      watchUrl: "https://stream.techinmind.space/tvlinks.php?tmdbid=eyes-of-wakanda&season=1#",
      description: "Marvel Animation's new action-adventure series follows the adventures of brave Wakandan warriors throughout history. In this globe-trotting adventure, the heroes must carry-out dangerous missions to retrieve Vibranium artifacts from the enemies of Wakanda. They are the Hatut Zaraze and this is their story."
    },
    
    {
      id: 13,
      title: "Squid Game Season 1",
      imageUrl: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
      rating: "8.0",
      year: "2021",
      description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes."
    },
    {
      id: 14,
      title: "Squid Game Season 2",
      imageUrl: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
      rating: "8.2",
      year: "2024",
      description: "Three years after winning Squid Game, Player 456 remains determined to find the people behind the game and put an end to their vicious sport."
    },
    {
      id: 15,
      title: "Squid Game Season 3",
      imageUrl: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
      rating: "8.5",
      year: "2025",
      description: "The final season brings the ultimate confrontation as Player 456 faces the masterminds behind the deadly games in an epic conclusion."
    }
  ],
  thriller: [
    {
      id: 11,
      title: "Saltburn",
      imageUrl: "https://image.tmdb.org/t/p/w500/qjhahNLSZ705B5JP92YMEYPocPz.jpg",
      rating: "7.1",
      year: "2023"
    }
  ],
  scifi: [
    {
      id: 24,
      title: "Jurassic World Rebirth",
      imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSQ_mCeNLtPfEM8AbIDVZUyVyuu_JENshYBugD_JPNjI9vrBWRA",
      rating: "7.2",
      year: "2025",
      watchUrl: "https://streamovie.xyz/assets/v1/video/movie.mp4",
      description: "A profit-driven pharmaceutical company assembles a team to retrieve blood samples from the world's last prehistoric giants. Their mission leads them to a forbidden island overrun by engineered hybrids that can run, swim, glide, and soar."
    },
    {
      id: 17,
      title: "Independence Day",
      imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRgpf_kmbE2z20si8bOc1mY6_6uP-785cFHO4aihElaklDd-wVCwcnIQbJuJRD3Evu8CEQ8GJQetvjCqW8UASWKlVR3w0bfMCL1jBesFjhVSw",
      rating: "7.0",
      year: "1996",
      watchUrl: "https://embedder.net/e/movie?tmdb=602&season=&episode=",
      description: "Aliens attack Earth in this epic sci-fi blockbuster. On July 4th, humanity fights back against a massive alien invasion in this thrilling summer blockbuster."
    },
    {
      id: 12,
      title: "Poor Things",
      imageUrl: "https://image.tmdb.org/t/p/w500/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
      rating: "8.4",
      year: "2023"
    },
    {
      id: 9,
      title: "Oppenheimer",
      imageUrl: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      rating: "8.9",
      year: "2023"
    },
    {
      id: 10,
      title: "The Iron Claw",
      imageUrl: "https://image.tmdb.org/t/p/w500/nfs7DCYhgrEIgxKYbITHTzKsggf.jpg",
      rating: "7.8",
      year: "2023"
    },
    {
    id: 1,
      title: "Dune: Part Two",
      imageUrl: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
      rating: "8.9",
      year: "2024",
      watchUrl: "https://ww5.123moviesfree.net/movie/dune-part-two",
      description: "A top Marine sniper, Bob Lee Swagger, leaves the military after a mission goes horribly awry and disappears without a trace, living in seclusion. He is coaxed back into service after learning of a plot to kill the president."
    }
  ]
};

// Search functionality component
const SearchResults = ({ searchQuery, allMovies }) => {
  if (!searchQuery) return null;

  const filteredMovies = Object.values(allMovies)
    .flat()
    .filter(movie => 
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.year.toString().includes(searchQuery)
    );

  return filteredMovies.length > 0 ? (
    <div className="search-results">
      <h2 className="section-title">Search Results</h2>
      <div className="movies-grid">
        {filteredMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  ) : (
    <div className="no-results">
      <h2 className="section-title">No movies found matching "{searchQuery}"</h2>
    </div>
  );
};

// MovieCard Component
const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleDownload = (e) => {
    const buttonId = `download-${movie.id}`;
    if (handleFirstTimeClick(e, buttonId)) {
      return;
    }

    // Original download functionality
    let urlTitle = movie.title.toLowerCase();
    
    // Handle specific movie title mappings
    if (urlTitle.includes('mission: impossible')) {
      urlTitle = 'mission-impossible';
    } else if (urlTitle.includes('dune: part two')) {
      urlTitle = 'dune-part-two';
    } else if (urlTitle.includes('the batman')) {
      urlTitle = 'the-batman';
    } else if (urlTitle.includes('talk to me')) {
      urlTitle = 'talk-to-me';
    } else if (urlTitle.includes('m3gan')) {
      urlTitle = 'm3gan';
    } else if (urlTitle.includes('barbie')) {
      urlTitle = 'barbie';
    } else if (urlTitle.includes('anyone but you')) {
      urlTitle = 'anyone-but-you';
    } else if (urlTitle.includes('oppenheimer')) {
      urlTitle = 'oppenheimer';
    } else if (urlTitle.includes('the iron claw')) {
      urlTitle = 'the-iron-claw';
    } else if (urlTitle.includes('saltburn')) {
      urlTitle = 'saltburn';
    } else if (urlTitle.includes('poor things')) {
      urlTitle = 'poor-things';
    } else if (urlTitle.includes('squid game season 1')) {
      urlTitle = 'squid-game-season-1';
    } else if (urlTitle.includes('squid game season 2')) {
      urlTitle = 'squid-game-season-2';
    } else if (urlTitle.includes('squid game season 3')) {
      urlTitle = 'squid-game-season-3';
    } else if (urlTitle.includes('ballerina')) {
      urlTitle = 'ballerina';
    } else if (urlTitle.includes('independence day')) {
      urlTitle = 'independence-day';
    } else if (urlTitle.includes('tangled')) {
      urlTitle = 'tangled';
    } else if (urlTitle.includes('how to train your dragon')) {
      urlTitle = 'how-to-train-your-dragon';
    } else if (urlTitle.includes('karate kid: legends')) {
      urlTitle = 'karate-kid-legends';
    } else if (urlTitle.includes('28 years later')) {
      urlTitle = '28-years-later';
    } else if (urlTitle.includes('game of thrones season 1')) {
      urlTitle = 'game-of-thrones-season-1';
    } else if (urlTitle.includes('eyes of wakanda season 1')) {
      urlTitle = 'eyes-of-wakanda-season-1';
    } else if (urlTitle.includes('jurassic world rebirth')) {
      urlTitle = 'jurassic-world-rebirth';
    } else {
      // Fallback: general URL-friendly conversion
      urlTitle = urlTitle.replace(/[:\s]+/g, '-').replace(/[^a-z0-9-]/g, '').replace(/-+/g, '-');
    }
    
    navigate(`/movies/${urlTitle}`);
  };

  const handleWatchOnline = (e) => {
    const buttonId = `watch-${movie.id}`;
    if (handleFirstTimeClick(e, buttonId)) {
      return;
    }
    // Open the watch URL if available
    if (movie.watchUrl) {
      window.open(movie.watchUrl, '_blank');
    }
  };

  const handleMovieCardClick = (e) => {
    // Only handle clicks on the poster area, not on buttons
    if (e.target.closest('.button-group')) {
      return;
    }
    
    const buttonId = `poster-${movie.id}`;
    if (handleFirstTimeClick(e, buttonId)) {
      return;
    }
    
    // Navigate to movie details page
    handleDownload(e);
  };

  return (
    <div 
      className="movie-card-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="movie-card">
        <div className="movie-poster" 
             style={{ backgroundImage: `url(${movie.imageUrl})`, cursor: 'pointer' }}
             onClick={handleMovieCardClick}>
          {isHovered && (
            <div className="movie-overlay">
              <div className="button-group">
                {movie.watchUrl && (
                  <a 
                    href={movie.watchUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="watch-button"
                    onClick={handleWatchOnline}
                  >
                    Watch Online
                  </a>
                )}
                <button className="download-button" onClick={handleDownload}>Download</button>
              </div>
            </div>
          )}
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
        </div>
      </div>
      
      {isHovered && (
        <div className="movie-details-popup">
          <h2>{movie.title}</h2>
          <div className="rating-box">
            <div className="rating-score">{movie.rating}</div>
            <div className="rating-text">Rating</div>
          </div>
          <div className="movie-plot">
            {movie.description || "A thrilling movie experience that will keep you on the edge of your seat."}
          </div>
        </div>
      )}
    </div>
  );
};

// Page Component
const Page = ({ title, movies }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setIsSearching(query.length > 0);
  };

  const handleSearchFocus = (e) => {
    const buttonId = 'search-input';
    if (handleFirstTimeClick(e, buttonId)) {
      return;
    }
  };

  return (
    <>
      <div className="search-section">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for movies..."
            value={searchQuery}
            onChange={handleSearch}
            onFocus={handleSearchFocus}
            className="search-input"
          />
          <i className="fas fa-search search-icon"></i>
        </div>
      </div>
      
      {isSearching ? (
        <SearchResults searchQuery={searchQuery} allMovies={movieData} />
      ) : (
        <div className="movies-section">
          <h2 className="section-title">{title}</h2>
          <div className="movies-grid">
            {movies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

// Add Footer Component
const Footer = () => {
  const handleFooterClick = (e) => {
    const linkText = e.target.textContent || e.target.getAttribute('href') || 'unknown';
    const buttonId = `footer-${linkText.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
    if (handleFirstTimeClick(e, buttonId)) {
      return false;
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Film Buffs</h3>
          <p>Your ultimate destination for watching and downloading the latest movies and TV shows in high quality.</p>
          <div className="social-links">
            <a href="https://facebook.com/filmbuffs" target="_blank" rel="noreferrer" className="social-link" onClick={handleFooterClick}><i className="fab fa-facebook"></i></a>
            <a href="https://twitter.com/filmbuffs" target="_blank" rel="noreferrer" className="social-link" onClick={handleFooterClick}><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com/filmbuffs" target="_blank" rel="noreferrer" className="social-link" onClick={handleFooterClick}><i className="fab fa-instagram"></i></a>
            <a href="https://youtube.com/filmbuffs" target="_blank" rel="noreferrer" className="social-link" onClick={handleFooterClick}><i className="fab fa-youtube"></i></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/" onClick={handleFooterClick}>Home</Link></li>
            <li><Link to="/action" onClick={handleFooterClick}>Action</Link></li>
            <li><Link to="/thriller" onClick={handleFooterClick}>Thriller</Link></li>
            <li><Link to="/horror" onClick={handleFooterClick}>Horror</Link></li>
            <li><Link to="/comedy" onClick={handleFooterClick}>Comedy</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Categories</h4>
          <ul>
            <li><Link to="/movies" onClick={handleFooterClick}>Movies</Link></li>
            <li><Link to="/tv-series" onClick={handleFooterClick}>TV Series</Link></li>
            <li><Link to="/trending" onClick={handleFooterClick}>Trending</Link></li>
            <li><Link to="/upcoming" onClick={handleFooterClick}>Coming Soon</Link></li>
            <li><Link to="/top-rated" onClick={handleFooterClick}>Top Rated</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><Link to="/privacy" onClick={handleFooterClick}>Privacy Policy</Link></li>
            <li><Link to="/terms" onClick={handleFooterClick}>Terms of Service</Link></li>
            <li><Link to="/disclaimer" onClick={handleFooterClick}>Disclaimer</Link></li>
            <li><Link to="/dmca" onClick={handleFooterClick}>DMCA</Link></li>
            <li><Link to="/contact" onClick={handleFooterClick}>Contact Us</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-info">
          <p>© 2024 Film Buffs. All rights reserved.</p>
          <p className="disclaimer-text">Disclaimer: This site does not store any files on its server. All contents are provided by non-affiliated third parties.</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  const location = useLocation();

  const handleNavClick = (e) => {
    const buttonId = `nav-${e.target.textContent.toLowerCase().replace(/\s+/g, '-')}`;
    if (handleFirstTimeClick(e, buttonId)) {
      return false;
    }
  };

  const handleLogoClick = (e) => {
    const buttonId = 'nav-logo';
    if (handleFirstTimeClick(e, buttonId)) {
      return false;
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <Link to="/" className="logo" onClick={handleLogoClick}>Film Buffs</Link>
        <div className="nav-links">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={handleNavClick}>Home</Link>
          <Link to="/action" className={`nav-link ${location.pathname === '/action' ? 'active' : ''}`} onClick={handleNavClick}>Action</Link>
          <Link to="/thriller" className={`nav-link ${location.pathname === '/thriller' ? 'active' : ''}`} onClick={handleNavClick}>Thriller</Link>
          <Link to="/scifi" className={`nav-link ${location.pathname === '/scifi' ? 'active' : ''}`} onClick={handleNavClick}>Sci-Fi</Link>
          <Link to="/horror" className={`nav-link ${location.pathname === '/horror' ? 'active' : ''}`} onClick={handleNavClick}>Horror</Link>
          <Link to="/comedy" className={`nav-link ${location.pathname === '/comedy' ? 'active' : ''}`} onClick={handleNavClick}>Comedy</Link>
          <Link to="/drama" className={`nav-link ${location.pathname === '/drama' ? 'active' : ''}`} onClick={handleNavClick}>Drama</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Page title="Latest Releases" movies={movieData.latest} />} />
        <Route path="/action" element={<Page title="Action Movies" movies={movieData.action} />} />
        <Route path="/horror" element={<Page title="Horror Movies" movies={movieData.horror} />} />
        <Route path="/comedy" element={<Page title="Comedy Movies" movies={movieData.comedy} />} />
        <Route path="/drama" element={<Page title="Drama Movies" movies={movieData.drama} />} />
        <Route path="/thriller" element={<Page title="Thriller Movies" movies={movieData.thriller} />} />
        <Route path="/scifi" element={<Page title="Sci-Fi Movies" movies={movieData.scifi} />} />
        
        {/* Movie Post Pages */}
        <Route path="/movies/dune-part-two" element={<DunePartTwoPost />} />
        <Route path="/movies/the-batman" element={<TheBatmanPost />} />
        <Route path="/movies/mission-impossible" element={<MissionImpossiblePost />} />
        <Route path="/movies/talk-to-me" element={<TalkToMePost />} />
        <Route path="/movies/m3gan" element={<M3GANPost />} />
        <Route path="/movies/barbie" element={<BarbiePost />} />
        <Route path="/movies/anyone-but-you" element={<AnyoneButYouPost />} />
        <Route path="/movies/oppenheimer" element={<OppenheimerPost />} />
        <Route path="/movies/the-iron-claw" element={<TheIronClawPost />} />
        <Route path="/movies/saltburn" element={<SaltburnPost />} />
        <Route path="/movies/poor-things" element={<PoorThingsPost />} />
        <Route path="/movies/squid-game-season-1" element={<SquidGameSeason1Post />} />
        <Route path="/movies/squid-game-season-2" element={<SquidGameSeason2Post />} />
        <Route path="/movies/squid-game-season-3" element={<SquidGameSeason3Post />} />
        <Route path="/movies/ballerina" element={<BallerinPost />} />
        <Route path="/movies/independence-day" element={<IndependenceDayPost />} />
        <Route path="/movies/tangled" element={<TangledPost />} />
        <Route path="/movies/how-to-train-your-dragon" element={<HowToTrainYourDragonPost />} />
        <Route path="/movies/karate-kid-legends" element={<KarateKidLegendsPost />} />
        <Route path="/movies/28-years-later" element={<TwentyEightYearsLaterPost />} />
        <Route path="/movies/eyes-of-wakanda-season-1" element={<EyesOfWakandaS1Post />} />
        <Route path="/movies/jurassic-world-rebirth" element={<JurassicWorldRebirthPost />} />
      </Routes>

      <Footer />
    </div>
  );
}

// Wrapper component to provide Router context
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
