import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteBookFromWishList } from '../rtk-thunk/bookSlice';
import './wishlist.css';

export default function Wishlist() {
  const wishlist = useSelector(state => state.books.wishlist);
  const dispatch = useDispatch();

  return (
    <div className='Wishlist'>
      <h3>Wishlist</h3>
      <ul> 
        {wishlist.map((book) =>
          <div key={book.id}>
            <span>{book.volumeInfo.title}</span>
            <button onClick={() => dispatch(deleteBookFromWishList(book.id))}>delete</button>
          </div>)
        }
      </ul>
    </div>
  )
}


