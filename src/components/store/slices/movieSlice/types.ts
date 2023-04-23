import { MovieApi, MovieMapped } from "../../../../shared/types/movies";

export interface MoviesSchema {
  isLoading: boolean;
  error?: string;
  data?: MovieApi;
  search?: string;
  mappedMovies: MovieMapped[];
}
