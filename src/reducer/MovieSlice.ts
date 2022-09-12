import {createSlice} from "@reduxjs/toolkit";

export const movieSlice = createSlice({
    name: "movie",
    initialState: {
        currentPage: "Home",
        posts : [],
        postIndex: ""
    },
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload
        },
        setPosts: (state, action: any) => {
            if(state.posts.length < 3) {
                const x: any = [...state.posts, action.payload]
                state.posts = x
            }else{
                alert ("post not saved, maximum upload is 3")
            }

        },
        setPostIndex: (state, action) => {
            state.postIndex = action.payload
        }
    }
});
export const {setCurrentPage, setPosts, setPostIndex} = movieSlice.actions;
export default movieSlice.reducer;
