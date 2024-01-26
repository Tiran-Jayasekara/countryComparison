import { configureStore } from "@reduxjs/toolkit";

import countryReducer from '../features/country/countrySlice'

const store = configureStore({
    reducer: {
        country: countryReducer
    }
})

export default store