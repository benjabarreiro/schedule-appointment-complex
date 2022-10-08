import { createSlice } from "@reduxjs/toolkit";

const initialState = "default value";

export const formSlice = createSlice({
  name: "calendar",
  initialState: initialState,
  reducers: {
    captureData: (state, action) => {
	  const newState = action.payload.value;

      return state = newState;
    },
    resetData: (state) => {
		console.log('reset')
      return state = '';
    },
  },
});

export const { captureData, resetData } = formSlice.actions;

export default formSlice.reducer;
