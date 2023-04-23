import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookCard, BookSchema } from "./types";

const initialState: BookSchema = {
  data: [],
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<BookCard>) => {
      state.data?.push(action.payload);
    },
  },
});

export const { actions: bookActions } = bookSlice;
export const { reducer: bookReducer } = bookSlice;
