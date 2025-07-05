import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetailsPage.css';

const MovieDetailsPage = ({ movies }) => {
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const { id } = useParams();

  // Find the movie from all categories
  const movie = Object.values(movies)
    .flat()
    .find(m => m.id === parseInt(id));

  if (!movie) {
    return <div className="container">Movie not found</div>;
  }

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: Date.now(),
          text: newComment,
          user: 'Anonymous User',
          date: new Date().toLocaleDateString()
        }
      ]);
      setNewComment('');
    }
  };

  const downloadQualities = [
    { label: '480p x264', link: `${movie.title.toLowerCase().replace(/\s+/g, '-')}-480p-x264.mp4` },
    { label: '480p x265', link: `${movie.title.toLowerCase().replace(/\s+/g, '-')}-480p-x265.mp4` },
    { label: '720p x264', link: `${movie.title.toLowerCase().replace(/\s+/g, '-')}-720p-x264.mp4` },
    { label: '720p x265', link: `${movie.title.toLowerCase().replace(/\s+/g, '-')}-720p-x265.mp4` },
    { label: '1080p x264', link: `${movie.title.toLowerCase().replace(/\s+/g, '-')}-1080p-x264.mp4` },
    { label: '1080p x265', link: `${movie.title.toLowerCase().replace(/\s+/g, '-')}-1080p-x265.mp4` },
  ];

  return (
    <div className="movie-details-page">
      <div className="movie-details-container">
        <div className="movie-hero">
          <img src={movie.imageUrl} alt={movie.title} className="movie-banner" />
        </div>

        <div className="movie-info-section">
          <h2 className="movie-title">{movie.title}</h2>
          
          <div className="movie-metadata">
            <span className="year">{movie.year}</span>
            <span className="rating">Rating: {movie.rating}/10</span>
          </div>

          <div className="download-section">
            <h3>Download Options</h3>
            <div className="download-buttons">
              {downloadQualities.map((quality, index) => (
                <a 
                  key={index}
                  href={quality.link}
                  className="download-quality-button"
                  download
                >
                  {quality.label}
                </a>
              ))}
            </div>
          </div>

          <div className="movie-description">
            <h3>About the Movie</h3>
            <p>{movie.description || "No description available."}</p>
          </div>

          <div className="interaction-section">
            <button 
              className={`like-button ${liked ? 'liked' : ''}`}
              onClick={handleLike}
            >
              {liked ? '❤️ Liked' : '🤍 Like'}
            </button>
          </div>

          <div className="comments-section">
            <h3>Comments</h3>
            
            <form onSubmit={handleCommentSubmit} className="comment-form">
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                rows="2"
              />
              <button type="submit">Post</button>
            </form>

            <div className="comments-list">
              {comments.map(comment => (
                <div key={comment.id} className="comment">
                  <div className="comment-header">
                    <span className="comment-user">{comment.user}</span>
                    <span className="comment-date">{comment.date}</span>
                  </div>
                  <p className="comment-text">{comment.text}</p>
                </div>
              ))}
              {comments.length === 0 && (
                <p className="no-comments">No comments yet. Be the first to comment!</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage; 