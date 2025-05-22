import { createSlice } from "@reduxjs/toolkit";
import { addDataThunk, deleteDataThunk, fetchDataThunk, updateDataThunk } from "./operations";
import { isAnyOf } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    isLoading: false,
    error: null,
}

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.items.push(action.payload);
        },
        deleteContact: (state, action) => {
            state.items = state.items.filter((contact) => contact.id !== action.payload);
        }, 
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDataThunk.fulfilled, (state, action) => {
            state.items = action.payload;
        })
        .addCase(deleteDataThunk.fulfilled, (state, action) => {
            state.items = state.items.filter((contact) => contact.id !== action.payload);
        })
        .addCase(addDataThunk.fulfilled, (state, action) => {
            state.items.push(action.payload);
        })
        .addCase(updateDataThunk.fulfilled, (state, action) => {
            state.items = state.items.map(item => item.id === action.payload.id ? action.payload : item);
        })
        .addMatcher(isAnyOf(fetchDataThunk.rejected, deleteDataThunk.rejected, addDataThunk.rejected, updateDataThunk.rejected), (state, action) => {
            state.error = action.payload;
        })
        .addMatcher(isAnyOf(fetchDataThunk.pending, deleteDataThunk.pending, addDataThunk.pending, updateDataThunk.pending), (state, action) => {
            state.error = null;
            state.isLoading = true;
        })
        .addMatcher(isAnyOf(fetchDataThunk.fulfilled, deleteDataThunk.fulfilled, addDataThunk.fulfilled, updateDataThunk.fulfilled), (state, action) => {
            state.isLoading = false;
        })
    }
});

export const {addContact, deleteContact, } = contactSlice.actions;

export const contactsReducer = contactSlice.reducer;