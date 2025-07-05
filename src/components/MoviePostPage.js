import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MoviePostPage.css';

const MoviePostPage = ({ movie }) => {
  const navigate = useNavigate();
  const [uploading, setUploading] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(movie?.imageUrl || '');

  const handleContinue = () => {
    navigate(`/movie/${movie.id}/details`);
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ml_default'); // Replace with your upload preset
    formData.append('cloud_name', 'dib0fble7'); // Your cloud name

    try {
      const response = await fetch(
        'https://api.cloudinary.com/v1_1/dib0fble7/image/upload',
        {
          method: 'POST',
          body: formData,
        }
      );

      const data = await response.json();
      
      if (data.secure_url) {
        setUploadedImageUrl(data.secure_url);
        console.log('Image uploaded successfully:', data.secure_url);
        alert('Image uploaded successfully!');
      }
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="movie-post-page">
      <div className="movie-poster-container">
        <div className="poster-overlay"></div>
        <img 
          src={uploadedImageUrl || movie?.imageUrl || 'https://via.placeholder.com/500x750?text=No+Image'} 
          alt={movie?.title || 'Movie Poster'} 
          className="movie-poster-image" 
        />
        
        {/* Image Upload Section */}
        <div className="image-upload-section">
          <label htmlFor="image-upload" className="upload-btn">
            <i className="fas fa-camera"></i>
            {uploading ? 'Uploading...' : 'Upload Poster'}
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: 'none' }}
            disabled={uploading}
          />
        </div>
        
        <div className="movie-post-content">
          <h1 className="movie-post-title">{movie.title}</h1>
          
          <div className="movie-post-metadata">
            <span className="post-year">{movie.year}</span>
            <span className="post-rating">
              <i className="fas fa-star"></i> {movie.rating}
            </span>
          </div>

          <div className="movie-quick-info">
            <div className="info-item">
              <i className="fas fa-film"></i>
              <span>HD Quality</span>
            </div>
            <div className="info-item">
              <i className="fas fa-closed-captioning"></i>
              <span>Subtitles</span>
            </div>
            <div className="info-item">
              <i className="fas fa-clock"></i>
              <span>2h 35m</span>
            </div>
          </div>

          <p className="movie-post-description">
            {movie.description}
          </p>

          <div className="post-buttons">
            <button className="watch-now-btn">
              <i className="fas fa-play"></i> Watch Now
            </button>
            <button className="view-details-btn" onClick={handleContinue}>
              <i className="fas fa-info-circle"></i> View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePostPage; 