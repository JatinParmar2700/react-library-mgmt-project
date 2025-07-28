import React from 'react'
import "./style.css"

export default function Book(props) {
  return (
    <>
    
    <div className="book-card">
            <div className="book-cover">
        <img src={props.bookDetails.coverUrl}
        className="" alt=""
         /> </div>
       
        <div className="book-details">
            <h1 className="book-title">{props.bookDetails.title}</h1>
             {/* <h4 className='book-author'>Category :{props.bookDetails.category}</h4> */}
            <h2 className="book-author">Author : {props.bookDetails.author}</h2>
            <h5 className="book-rating">Rating : {props.bookDetails.rating}</h5>
        </div>
       
        </div>
  </>
  )
}
