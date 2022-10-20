import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedin: false,
};

const sliceState = createSlice({
  name: "state",
  initialState: initialState,
  reducers: {
    handleAuth: (state, action) => {
      state.isLoggedin = action.payload;
    },
    handleUser: (state, action) => {
      state.Users = action.payload;
    },
    setStatus: (state, action) => {
      state.dataStatus = action.payload;
    },
    setComment: (state, action) => {
      state.dataComment = action.payload;
    },
  },
});

const reducer = {
  state: sliceState.reducer,
};

export const { handleAuth, handleUser, setStatus } = sliceState.actions;
export default reducer;
