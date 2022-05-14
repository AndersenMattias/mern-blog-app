import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/user-slice';
import postSlice from './features/post-slice';

export const store = configureStore({
  reducer: { user: userSlice, post: postSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
