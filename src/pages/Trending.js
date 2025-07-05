import React from 'react';

const trendingMovies = [
  {
    id: 1,
    title: "Oppenheimer",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
    rating: 8.9,
    year: 2023
  },
  {
    id: 2,
    title: "Dune: Part Two",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BODdjMjM3NGQtZDA5OC00NGE4LWIyZDQtZjYxYWRiYjljZGM2XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    rating: 8.8,
    year: 2024
  },
  // Add more trending movies
];

function TrendingPage() {
  return (
    <div className="trending-page">
      <h2 className="section-title">Trending Movies</h2>
      <div className="movie-grid">
        {trendingMovies.map(movie => (
          <div key={movie.id} className="movie-card">
            <div className="movie-image" style={{ backgroundImage: `url(${movie.imageUrl})` }}>
              <div className="movie-overlay">
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <div className="movie-details">
                    <span className="rating">★ {movie.rating}</span>
                    <span className="year">{movie.year}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingPage; 