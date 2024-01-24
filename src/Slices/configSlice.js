import { createSlice } from '@reduxjs/toolkit'


export const configSlice = createSlice({
    name: "config",
    initialState: {
        url: {},
        genres:{},
    },
    reducers: {
        getApiConfiguration: (state, action) => {
            state.url = action.payload;
        },
        getGenres: (state, action) => {
            state.genres = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { getApiConfigurationt , getGenres} = configSlice.actions

export default configSlice.reducer