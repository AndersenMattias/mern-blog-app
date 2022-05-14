import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

interface UserState {
  users: User[];
}

interface User {
  _id: string;
  username: string;
  email: string;
  categories: string[];
}

const initialState: UserState = {
  users: [],
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
  },
});

// Här exporterar vi varje reducer som vi vill använda
export const { addUser } = userSlice.actions;

// Här exporterar vi state för slicen så att vi kommer åt det från resten av appen
export const userReduxState = (state: RootState) => state.user;

// Här gör vi kopplingen till våran store
export default userSlice.reducer;
