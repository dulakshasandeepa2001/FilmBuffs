import React, { useState } from 'react';

const categories = [
  { id: 1, name: "Action", count: 250 },
  { id: 2, name: "Comedy", count: 180 },
  { id: 3, name: "Drama", count: 320 },
  { id: 4, name: "Horror", count: 150 },
  { id: 5, name: "Sci-Fi", count: 200 },
  { id: 6, name: "Romance", count: 160 },
  { id: 7, name: "Thriller", count: 190 },
  { id: 8, name: "Animation", count: 140 },
  { id: 9, name: "Documentary", count: 110 },
  { id: 10, name: "Adventure", count: 170 }
];

function Categories() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="categories-container">
      <button 
        className="categories-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        Categories
      </button>

      {isOpen && (
        <div className="categories-dropdown">
          {categories.map(category => (
            <div key={category.id} className="category-item">
              <span className="category-name">{category.name}</span>
              <span className="category-count">{category.count}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Categories; 