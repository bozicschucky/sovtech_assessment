import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
};

const slice = createSlice({
  name: "pagination",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase("SET_CURRENT_PAGE", (state, action) => {
      // @ts-ignore
      state.currentPage = action?.payload;
    });
  },
});

export default slice.reducer;
