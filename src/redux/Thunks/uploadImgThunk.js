
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
    const response = await fetch('https://localhost:7092/api/Img/upload'); // שנה לכתובת ה-API שלך
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return await response.json();
});

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const selectData = (state) => state.data.items;
export const selectLoading = (state) => state.data.loading;
export const selectError = (state) => state.data.error;

export default dataSlice.reducer;
