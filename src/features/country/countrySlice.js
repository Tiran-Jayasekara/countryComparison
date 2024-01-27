import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    loading: false,
    countries: [],
    error: ''
}

// Featching Countries Data
export const fetchCountry = createAsyncThunk('country/fetchCountry', () => {
    return axios.get('https://restcountries.com/v2/all').then(res => res.data)
})

const countrySlice = createSlice({
    name: 'country',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchCountry.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchCountry.fulfilled, (state, action) => {
            state.loading = false,
                state.countries = action.payload,
                state.error = ''
        })
        builder.addCase(fetchCountry.rejected, (state, action) => {
            state.loading = false,
                state.countries = [],
                state.error = action.error.message
        })
    }
})

export default countrySlice.reducer