import { createSlice } from "@reduxjs/toolkit";
const initialUser = {};

const userRTK = createSlice({
  name: "userRTK",
  initialState: initialUser,
  reducers: {
    saveUser(state, action) {
      state = action.payload;
    },
  },
});

export const { saveUser } = userRTK.actions;
export const selectUser = (state) => state.userRTK;

export default userRTK.reducer;
