import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MoviesSchema } from "./types";
import { MovieApi, MovieMapped } from "../../../../shared/types/movies";
import { fetchMovies } from "./services/fetchMovies";

const initialState: MoviesSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
  mappedMovies: [],
  search: "",
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setMovies: (state, action: PayloadAction<MovieMapped[]>) => {
      state.mappedMovies = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action: PayloadAction<MovieApi>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: moviesActions } = moviesSlice;
export const { reducer: moviesReducer } = moviesSlice;
