import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async(query) => {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=0&maxResults=20`);
        const data = await response.json();
        return data.items || [];
    }
);

const bookSlice = createSlice({
    name: 'books',
    initialState: {
        books: [],
        wishlist: [],
        status: 'idle'
    },
    reducers: {
        addToWishlist: (state, action) => {
            const book = action.payload;
            const exists = state.wishlist.find(item => item.id === book.id);
            if(!exists) state.wishlist.unshift(book);
        },
        deleteBookFromWishList: (state, action) => {
            const bookId = action.payload;
            state.wishlist = state.wishlist.filter(book => book.id !== bookId);
        }        
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchBooks.pending, (state, action) => {
            state.status = 'loading';
        })
        .addCase(fetchBooks.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.books = action.payload || [];
        })
        .addCase(fetchBooks.rejected, (state, action) => {
            state.status = 'failed';
        });
    }
})

export const { addToWishlist, deleteBookFromWishList } = bookSlice.actions;
export default bookSlice.reducer; 