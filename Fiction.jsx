import React from 'react'
import {Books}from "../utils/mockData"
import "./style.css"

export default function Fiction() {
  
  const fiction=Books.filter((book)=>book.category.toLowerCase() ==="fiction")
  console.log(fiction)
  
  return (
    <>

    <div className="book-list-container">
        <h1 style={{color:" rgb(255,191,0)"}}>Fiction Books</h1>

    {
      fiction.length===0 ?(
        <p>No fiction book found</p>
      ):(
        <div className="booklist"> 
{fiction.map((book)=>(

  <div className="book-card">
            <div className="book-cover">
        <img src={book.coverUrl}
        className="" alt=""
         /> </div>
<div className="book-details">
            <h1 className="book-title">{book.title}</h1>
             <h4 className='book-author'>Category :{book.category}</h4>
            <h2 className="book-author">Author : {book.author}</h2>
            <h5 className="book-rating">Rating : {book.rating}</h5>
        </div>
       
        </div>
      ))}
</div>
      )
    }
</div>
 </>
     )
}
