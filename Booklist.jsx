import React from 'react'
import "./style.css"
import Book from "./Book";
import { Link } from 'react-router-dom';


export default function Booklist(props) {

  return (
    <>
  
    <div className="booklist">
            {
                props.booksData.map((data)=>(
                  <Link to={`/book/${data.id}`}key={data.id} >
                <Book  bookDetails={data}/>
                </Link>
                ))
            }
      
            {/* <Search /> */}
    {/* <Book bookDetails={props.booksData[0]}/> */}
    
    </div>
  
  </>)
}


    
