# 📚 Movie Post Template Guide

## Quick Start - Creating a New Movie Post

### Method 1: Using the Reusable Template (Recommended)

1. **Create a new file** in `src/pages/movie-posts/YourMovieName.js`

2. **Copy this starter code:**

```javascript
import React from 'react';
import MoviePostTemplate from '../../components/MoviePostTemplate';

const YourMovieNamePost = () => {
  const movieData = {
    title: "Your Movie Title",
    pageTitle: "Your Movie (2025) Download | Film Buffs",
    imageUrl: "https://your-image-url.com/poster.jpg",
    rating: "8.5",
    year: "2025",
    genres: ["Drama", "Action"],
    
    synopsis: "Your movie description goes here...",
    
    downloadLinks: {
      "1080p": "https://download-link-1",
      "720p": "https://download-link-2"
    }
  };

  return <MoviePostTemplate movieData={movieData} />;
};

export default YourMovieNamePost;
```

3. **Update App.js:**

```javascript
// Import your new post
import YourMovieNamePost from './pages/movie-posts/YourMovieName';

// Add to movieData array
const movieData = {
  latest: [
    {
      id: 39,
      title: "Your Movie Title",
      imageUrl: "https://your-image-url.com/poster.jpg",
      rating: "8.5",
      year: "2025",
      description: "Short description for the card"
    },
    // ... other movies
  ]
};

// Add route
<Route path="/movies/your-movie-name" element={<YourMovieNamePost />} />

// Add URL mapping in handleDownloadClick
} else if (urlTitle.includes('your movie title')) {
  urlTitle = 'your-movie-name';
```

---

## 🎨 MovieData Object Reference

### Required Fields

```javascript
{
  title: "Movie Title",          // Main title displayed
  imageUrl: "https://...",        // Poster/banner image URL
  rating: "8.5",                  // Rating out of 10
  year: "2025",                   // Release year
  synopsis: "Description...",     // Main description
  downloadLinks: {                // Download URLs by quality
    "1080p": "https://...",
    "720p": "https://..."
  }
}
```

### Optional Fields

```javascript
{
  // Page metadata
  pageTitle: "Custom Page Title",
  
  // Genre badges
  genres: ["Drama", "Action", "Thriller"],
  
  // Info grid (key-value pairs)
  info: {
    "Episode": "S01E01",
    "Runtime": "45 min",
    "Language": "English"
  },
  
  // Highlights section
  highlights: [
    "✨ Amazing visual effects",
    "🎭 Great performances"
  ],
  
  // Quality information
  qualityInfo: {
    "1080p": {
      size: "2.5 GB",
      description: "Full HD • H.264"
    }
  },
  
  // Technical specs
  technicalSpecs: {
    "Video": ["Codec: H.264", "Resolution: 1920x1080"],
    "Audio": ["5.1 Surround", "Multi Audio"]
  },
  
  // Additional information
  additionalInfo: [
    "Paragraph 1...",
    "Paragraph 2..."
  ],
  
  // Related content
  relatedContent: "Check out more episodes!"
}
```

---

## 🎯 Adding Movie to Cards

### 1. Add to movieData in App.js

```javascript
const movieData = {
  latest: [  // or drama, action, horror, etc.
    {
      id: 39,  // Increment from last ID
      title: "Your Movie Title",
      imageUrl: "https://poster-url.jpg",
      rating: "8.5",
      year: "2025",
      description: "Brief description for movie card (1-2 sentences)",
      watchUrl: "https://watch-online-url" // Optional
    }
  ]
};
```

### 2. Add URL Mapping

In the `handleDownloadClick` function in App.js, add:

```javascript
} else if (urlTitle.includes('your movie title')) {
  urlTitle = 'your-movie-name';
```

### 3. Add Route

```javascript
<Route path="/movies/your-movie-name" element={<YourMovieNamePost />} />
```

---

## 🎨 Image Centering

The template automatically centers images! Just provide the image URL:

```javascript
imageUrl: "https://your-image-url.com/poster.jpg"
```

**CSS handles:**
- Automatic centering (horizontal & vertical)
- Max width: 800px
- Responsive on all devices
- Maintains aspect ratio
- Clean borders and shadows

---

## 📝 Complete Example

See `src/pages/movie-posts/EXAMPLE_MoviePostUsage.js` for a fully documented example with all available options.

See `src/pages/movie-posts/GenVS2E7.js` for a real implementation.

---

## 🎨 Design Features Included

✅ **Centered hero image** with overlay
✅ **Beautiful gradient buttons** with hover effects
✅ **Quality cards** with size badges
✅ **Responsive grid layout**
✅ **Premium 4K badge** styling
✅ **Technical specs cards**
✅ **Info grid** display
✅ **Highlights list** with icons
✅ **Section titles** with animated underlines
✅ **Mobile-optimized** for all screen sizes

---

## 🚀 Quick Checklist

- [ ] Create new file in `movie-posts/`
- [ ] Import MoviePostTemplate
- [ ] Fill movieData object
- [ ] Import in App.js
- [ ] Add to movieData array
- [ ] Add URL mapping
- [ ] Add route
- [ ] Test on all screen sizes

---

## 💡 Tips

1. **Image Size**: Use high-quality posters (at least 600px wide)
2. **File Size**: Include file sizes in qualityInfo for transparency
3. **Description**: Keep synopsis engaging but concise
4. **Highlights**: Use emojis to make highlights more appealing
5. **Quality Names**: Use clear names like "1080p x264" not just "1080p"
6. **Links**: Always test download links before publishing

---

## 🔧 Troubleshooting

**Image not centered?**
- Check if imageUrl is valid
- Ensure image loads in browser
- Clear cache and refresh

**Buttons not working?**
- Verify downloadLinks object has correct URLs
- Check browser console for errors

**Route not working?**
- Check URL mapping in handleDownloadClick
- Verify route path matches URL
- Ensure component is imported

---

## 📞 Need Help?

Check existing posts like:
- `GenVS2E7.js` - Full featured example
- `EXAMPLE_MoviePostUsage.js` - Documented template
- `MoviePostTemplate.js` - Component source

The template handles all styling, animations, and responsive design automatically!
