// redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';
import users from './users';

const initialState = {
  currentUser: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        state.currentUser = user;
        state.isLoggedIn = true;
      }
    },
    logout: (state) => {
      state.currentUser = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;