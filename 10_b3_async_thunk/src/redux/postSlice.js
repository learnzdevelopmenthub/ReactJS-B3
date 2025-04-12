import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return response.data
})

export const fetchPost = createAsyncThunk('posts/fetchPost', async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return response.data
})

const postSlice = createSlice({
    name: 'posts',
    initialState: { 
        posts: [],
        status: 'idle', //loading, succeeded, failed
        error: null,
        post: {},
        postStatus: 'idle',
        postError: null
    },
    reducers:{
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.posts = action.payload
            })
            .addCase(fetchPost.pending,  (state) => {
                state.postStatus = 'loading'
            })
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.postStatus = 'succeeded'
                state.post = action.payload
            })
    }
})

export default postSlice.reducer