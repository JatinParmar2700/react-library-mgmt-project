
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/booksSlice';
import './Addbook.css'; 

export default function Addbook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    summary: '',
    coverUrl: '', 
    rating: '', 
  });

  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      
      [name]: value,
    }));
    
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: null,
      }));
    }
  };

  
  const validateForm = () => {
    let newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = 'Book title is required.';
    }
    if (!formData.author.trim()) {
      newErrors.author = 'Author name is required.';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Category is required.';
    }
    if (!formData.summary.trim()) {
      newErrors.summary = 'Summary is required.';
    }
    
    if (!formData.rating || isNaN(formData.rating) || formData.rating < 1 || formData.rating > 5) {
        newErrors.rating = 'Rating must be a number between 1 and 5.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      
      const payload = {
        ...formData,
        rating: Number(formData.rating), 
      };
      dispatch(addBook(payload)); 

      
      setFormData({
        title: '',
        author: '',
        description: '',
        summary: '',
        coverUrl: '',
        rating: '', 
      });
      setErrors({});

      navigate('/');
    }
    setIsSubmitting(false);
  };

  return (
    <div className="add-book-container">
      <h2>Add New Book</h2>
      <form onSubmit={handleSubmit} className="add-book-form">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter book title"
          />
          {errors.title && <span className="error-message">{errors.title}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            placeholder="Enter author's name"
          />
          {errors.author && <span className="error-message">{errors.author}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Category:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="e.g., Fiction, Non-fiction, Self-help"
          />
          {errors.description && <span className="error-message">{errors.description}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="summary">Summary:</label>
          <textarea
            id="summary"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            placeholder="Provide a brief summary of the book"
            rows="5"
          ></textarea>
          {errors.summary && <span className="error-message">{errors.summary}</span>}
        </div>

        
        <div className="form-group">
          <label htmlFor="rating">Rating (1-5):</label>
          <input
            type="number" 
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            placeholder="Enter a rating (e.g., 4)"
            min="1" 
            max="5" 
          />
          {errors.rating && <span className="error-message">{errors.rating}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="coverUrl">Cover Image URL (Optional):</label>
          <input
            type="text"
            id="coverUrl"
            name="coverUrl"
            value={formData.coverUrl}
            onChange={handleChange}
            placeholder="e.g., https://example.com/cover.jpg"
          />
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Adding Book...' : 'Add Book'}
        </button>
      </form>
    </div>
  );
}


