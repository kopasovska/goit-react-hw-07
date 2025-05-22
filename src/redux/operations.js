import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://682ddf9d746f8ca4a47af50f.mockapi.io';

export const fetchDataThunk = createAsyncThunk('fetchContacts', async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const deleteDataThunk = createAsyncThunk('deleteContact', async(id, thunkAPI) => {
    try {
        await axios.delete(`/contacts/${id}`);
        return id;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const addDataThunk = createAsyncThunk('addContact', async(body, thunkAPI) => {
    try {
        const response = await axios.post(`/contacts/`, body);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const updateDataThunk = createAsyncThunk('updateContact', async(body, thunkAPI) => {
    try {
        const response = await axios.put(`/contacts/${body.id}`, body);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});