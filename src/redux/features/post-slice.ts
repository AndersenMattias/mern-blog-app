import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import { RootState } from 'redux/store';

interface PostState {
  posts: Post[];
  status: string | null;
}

interface Post {
  _id: string;
  title: string;
  bodyText: string;
  image: string;
  createdBy: string;
  categories: string[];
}

const initialState: PostState = {
  posts: [],
  status: null,
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPosts: (state, action: any) => {
      state.posts.push(...action.payload);
    },
    loadPosts: (state, action: PayloadAction<Post>) => {},
  },
  extraReducers: (builder) => {},
});

// exports reducers i want to use
export const { addPosts } = postSlice.actions;

// Export slice to reach wherever in app
export const postReduxState = (state: RootState) => state.post;

// connection to our store
export default postSlice.reducer;
