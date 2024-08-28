import React, { useState } from 'react';

const Filters = ({ categories, companies, onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [selectedRating, setSelectedRating] = useState(0);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onFilterChange({ category, company: selectedCompany, priceRange, rating: selectedRating });
  };

  const handleCompanyChange = (e) => {
    const company = e.target.value;
    setSelectedCompany(company);
    onFilterChange({ category: selectedCategory, company, priceRange, rating: selectedRating });
  };

  const handlePriceChange = (e) => {
    const [min, max] = e.target.value.split('-').map(Number);
    const newPriceRange = { min, max };
    setPriceRange(newPriceRange);
    onFilterChange({ category: selectedCategory, company: selectedCompany, priceRange: newPriceRange, rating: selectedRating });
  };

  const handleRatingChange = (e) => {
    const rating = e.target.value;
    setSelectedRating(rating);
    onFilterChange({ category: selectedCategory, company: selectedCompany, priceRange, rating });
  };

  return (
    <div className="filters">
      {/* Category Filter */}
      <div className="filter">
        <label>Category:</label>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Company Filter */}
      <div className="filter">
        <label>Company:</label>
        <select value={selectedCompany} onChange={handleCompanyChange}>
          <option value="">All Companies</option>
          {companies.map((company) => (
            <option key={company} value={company}>
              {company}
            </option>
          ))}
        </select>
      </div>

      {/* Price Filter */}
      <div className="filter">
        <label>Price Range:</label>
        <select onChange={handlePriceChange}>
          <option value="0-10000">All Prices</option>
          <option value="0-100">Under $100</option>
          <option value="100-500">$100 to $500</option>
          <option value="500-1000">$500 to $1000</option>
          <option value="1000-5000">$1000 to $5000</option>
          <option value="5000-10000">Above $5000</option>
        </select>
      </div>

      {/* Rating Filter */}
      <div className="filter">
        <label>Rating:</label>
        <select value={selectedRating} onChange={handleRatingChange}>
          <option value="0">All Ratings</option>
          <option value="1">1 Star & Up</option>
          <option value="2">2 Stars & Up</option>
          <option value="3">3 Stars & Up</option>
          <option value="4">4 Stars & Up</option>
          <option value="5">5 Stars Only</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
