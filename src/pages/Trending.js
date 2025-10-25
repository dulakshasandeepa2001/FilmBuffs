import React from 'react';

const trendingMovies = [
  {
    id: 1,
    title: "Good Boy",
    imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT-nBijFTKz_-XkJCTNXVo-bA7Qj7vFiU7NIcbC2ygYeEn47IA6",
    rating: 7.6,
    year: 2025
  },
  {
    id: 2,
    title: "Bone Lake",
    imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTPCge07msT0TbZ_-d5FhcN7ozQsd4WKdX0Ka2NTOdoMLiEjqXo",
    rating: 7.5,
    year: 2025
  },
  {
    id: 3,
    title: "A House of Dynamite",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BNjAzMjQ4YTUtOGI1Yy00YTFkLTlkMDQtMDEwOWNjYmE3MTU1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    rating: 7.8,
    year: 2025
  },
  {
    id: 4,
    title: "NCIS: Tony and Ziva",
    imageUrl: "https://www.tvguide.com/a/img/resize/b726ea18c0d1d2a6999d5e4e95d780b470f8b922/hub/2025/06/16/6f9da3f4-5e3a-4297-b228-c3e26354edc9/ncistonyziva.jpg?auto=webp",
    rating: 8.5,
    year: 2025
  },
  {
    id: 5,
    title: "Oppenheimer",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
    rating: 8.9,
    year: 2023
  },
  {
    id: 4,
    title: "Oppenheimer",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
    rating: 8.9,
    year: 2023
  },
  {
    id: 5,
    title: "Oppenheimer",
    imageUrl: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
    rating: 8.9,
    year: 2023
  },
  {
    id: 6,
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