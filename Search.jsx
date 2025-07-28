import React, { useState, useEffect } from 'react'; 
import { useSelector } from 'react-redux'; 
import Booklist from './Booklist';
import "./style.css";

export default function Search() {
  
  const allBooks = useSelector((state) => state.books); 

  const [searchText, setSearchText] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(allBooks); 

  // Use useEffect to update filteredBooks when allBooks changes ( when a new book is added)
  useEffect(() => {
    setFilteredBooks(allBooks);
  }, [allBooks]); 

  function handleSearch() { 
    console.log("search text", searchText);
    const filterBooks = allBooks.filter((book) => 
      book.title.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log("Filtered books after search:", filterBooks); 
    setFilteredBooks(filterBooks);
  }


  return (
    <>
      <div className='search'>
        <h1 className=''>Book Management</h1> 
        <div className=''>
          <input
            type="text"
            placeholder='Search Book'
            onChange={(e) => setSearchText(e.target.value)}
            className='search-input'
            value={searchText} 
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      <Booklist booksData={filteredBooks} />
    </>
  );
}





