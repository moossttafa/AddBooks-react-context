import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetalis from './BookDetalis';

function BookList() {
    const {books} = useContext(BookContext);
    return books.length ? (
       <div className="book-list">
           <ul>
               {books.map(book => {
                   return ( <BookDetalis book={book} key={book.id} /> );
               })}
           </ul>
       </div>
    ) : (
        <div className="empty"> No Books To Read , Hello Free Time  </div>
    )
}

export default BookList
