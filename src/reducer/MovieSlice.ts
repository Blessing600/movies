import {createSlice} from "@reduxjs/toolkit";

export const movieSlice = createSlice({
    name: "movie",
    initialState: {
        movies: [],
        videos:[]
    },
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload
        },
        setVideos: (state, action: any) => {
            const x: any = [...state.videos, action.payload]
            state.videos = x
        }
    }
});
export const {setMovies, setVideos} = movieSlice.actions;
export default movieSlice.reducer;
