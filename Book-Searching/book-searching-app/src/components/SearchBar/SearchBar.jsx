import React, { useCallback, useEffect, useState } from 'react'
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../rtk-thunk/bookSlice';

export default function SearchBar() {

  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const bookStatus = useSelector(state => state.books.status);

  useEffect(() => {
    if(bookStatus === 'loading'){
      setLoading(true);
    }else{
      setLoading(false);
    }
  }, [bookStatus]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  // eslint-disable-next-line
  const debounceOnSubmit = useCallback(_.debounce(query => { 
    if(query.trim()) {
      setLoading(true); 
      dispatch(fetchBooks(query))
    }
  }, 1000), [dispatch]);

  useEffect(() => {
    if(inputValue.trim()) {
      debounceOnSubmit(inputValue); 
    } 
    // eslint-disable-next-line 
  }, [inputValue]); 

  return (
    <div style={{ marginLeft: '100px', width: '80%'}}> 
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={() => { debounceOnSubmit(inputValue) }}>Submit</button>
      {loading && <p>Loading...</p>}
    </div>
  )
}
