import React, { useContext , useState } from 'react';
import { BookContext } from '../contexts/BookContext';


const NewBookForm = () => {
    const {addBook} = useContext(BookContext);
    const [title , setTitle] =  useState('');
    const [author , setAuthor] =  useState('');

    const handelSubmit = (e) =>{
     e.preventDefault();
     addBook(title, author);
     setTitle('');
     setAuthor('');
    }

    return (
        <form onSubmit={handelSubmit}>
            <input type="text" placeholder="Title" value= {title} required
            onChange={(e) => setTitle(e.target.value)} />
             <input type="text" placeholder="Author" value= {author} required
            onChange={(e) => setAuthor(e.target.value)} />
             <input type="submit" value ="add Book" />
        </form>
    )
}

export default NewBookForm
