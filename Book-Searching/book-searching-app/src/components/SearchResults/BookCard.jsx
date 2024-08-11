import React from 'react'
import { addToWishlist } from '../rtk-thunk/bookSlice';
import { useDispatch } from 'react-redux';
import './bookCard.css';

export default function BookCard({ book }) {
    const { imageLinks, title, authors, publisher, publishedDate, description } = book.volumeInfo;
    const dispatch = useDispatch();
    return (
        <div onClick={() => dispatch(addToWishlist(book))} className='BookCard'>
            <img src={imageLinks?.thumbnail} alt='nothing'/>
            <h3>{title}</h3>
            <p>Author: {authors}</p> 
            <p>Publisher: {publisher}</p>
            <p>Published Date: {publishedDate}</p>
            <p>Description: {description}</p>
        </div> 
    )
}
