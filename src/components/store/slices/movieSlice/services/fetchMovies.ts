import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../StateSchema";
import { MovieApi, MovieMapped } from "../../../../../shared/types/movies";
import { moviesActions } from "../moviesSlice";
import { FAKE_IMAGE_URL } from "../../../../../constants";

export const fetchMovies = createAsyncThunk<MovieApi, string | RegExp | undefined, ThunkConfig<string>>(
  "movies/fetchMovies",
  async (query, thunkApi) => {
    const { rejectWithValue, extra, dispatch } = thunkApi;
    try {
      const response = await extra.api.get<MovieApi>(`/movie`, { params: query ? { name: query } : null });

      if (!response.data) {
        throw new Error();
      }

      const moviesMapped: MovieMapped[] = response.data.docs.map((movie) => ({
        ...movie,
        id: movie._id,
        imageLink: FAKE_IMAGE_URL,
      }));
      dispatch(moviesActions.setMovies(moviesMapped));

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue("Error fetching movies!");
    }
  }
);
