// store/adminAuthSlice.ts

import { createSlice } from '@reduxjs/toolkit';
import { TUser } from '../../services/service';

export interface AdminAuthState {
  admin: TUser | null;
  isAuthenticated: boolean;
}

const initialState: AdminAuthState = {
  admin: null,
  isAuthenticated: false,
};

const adminAuthSlice = createSlice({
  name: 'adminAuth',
  initialState,
  reducers: {
    setAdmin: (state, action) => {
      state.admin = action.payload;
      state.isAuthenticated = true;
    },
    clearAdmin: (state) => {
      state.admin = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setAdmin, clearAdmin } = adminAuthSlice.actions;

export default adminAuthSlice.reducer;
