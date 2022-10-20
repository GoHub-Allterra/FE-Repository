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
  },
});

const reducer = {
  state: sliceState.reducer,
};

export const { handleAuth } = sliceState.actions;
export default reducer;
