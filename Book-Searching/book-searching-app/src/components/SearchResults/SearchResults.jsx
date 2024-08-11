import React from 'react'
import BookCard from './BookCard'
import { useSelector } from 'react-redux'

export default function SearchResults() {
    const books = useSelector(state => state.books.books || []);

    return (
        <ul style={{ marginLeft: '60px'}}>
            {books.map((book) => (
                <BookCard book={book} key={book.id} />
            ))}
        </ul>
    );
}
