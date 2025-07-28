import React from 'react'
import { useParams } from 'react-router-dom'
import { Books } from '../utils/mockData'
import "./Bookdetail.css"

export default function Bookdetails() {
    const params = useParams(); 
    const book = Books.find((bookItem) => bookItem.id == params.id); 


    if (!book) {
        return (
            <div className="book-details-container">
                <h1>Book Not Found</h1>
                <p>The book with ID "{params.id}" could not be found.</p>
            </div>
        );
    }

    // If a book is found, render its details
    return (
        <div className="book-details-container">
            {/* <h1>{`Details for Book With ID: ${params.id}`}</h1> */}

            <div className='book-template'>
                <div className="Book-cover">
                    <img src={book.coverUrl} alt={`Cover of ${book.title}`} />
                </div>
                <div className="book-content">
                    <h2>{book.title}</h2>
                    <h3>Category: {book.category}</h3>
                    <h3>Description : {book.description}</h3>
                    <h3>Author : {book.author}</h3>
                    <h3>Rating : {book.rating}</h3>
                    <h4>Summary : </h4>
                    <p>{book.summary}</p>
                </div>
            </div>
        </div>
    );
}
    
  




 