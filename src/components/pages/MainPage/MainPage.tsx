import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store/store";
import Input from "../../shared/ui/Input/Input";
import CardList from "../../widgets/CardList/CardList";
import Button from "../../shared/ui/Button/Button";
import { PageLoader } from "../../widgets/PageLoader/PageLoader";
import { MovieCardModal } from "../../widgets/MovieCardModal/MovieCardModal";
import { fetchMovies } from "../../store/slices/movieSlice/services/fetchMovies";
import { StateSchema } from "../../store/StateSchema";
import { DynamicModuleLoader, ReducersList } from "../../shared/lib/DynamicModuleLoader/DynamicModuleLoader";
import { MovieMapped } from "../../../shared/types/movies";
import { moviesActions, moviesReducer } from "../../store/slices/movieSlice/moviesSlice";

import styles from "./MainPage.module.css";

const reducers: ReducersList = {
  movies: moviesReducer,
};

function MainPage() {
  const [isMovieModal, setIsMovieModal] = useState(false);
  const [cardModal, setCardModal] = useState<MovieMapped | null>(null);

  const dispatch = useAppDispatch();
  const movies = useSelector((state: StateSchema) => state.movies?.mappedMovies);
  const error = useSelector((state: StateSchema) => state.movies?.error);
  const isLoading = useSelector((state: StateSchema) => state.movies?.isLoading);
  const search = useSelector((state: StateSchema) => state.movies?.search);

  const onCloseModal = useCallback(() => {
    setIsMovieModal(false);
    setCardModal(null);
  }, []);

  const onShowModal = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const id = (e.currentTarget as HTMLElement).getAttribute("data-movie-id");
      const movie = movies?.find((mov) => mov.id === id);
      if (movie) {
        setCardModal(movie);
        setIsMovieModal(true);
      }
    },
    [movies]
  );

  useEffect(() => {
    if (search?.length) {
      const regex = new RegExp(`^` + search, "i");
      dispatch(fetchMovies(regex));
    } else {
      dispatch(fetchMovies());
    }
    // We deliberately leave deps array empty as we want the effect to be called only once
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(moviesActions.setSearch(e.target.value));
    },
    [dispatch]
  );

  const onSubmitHandler = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const regex = new RegExp(`^` + search, "i");
      dispatch(fetchMovies(regex));
    },
    [dispatch, search]
  );

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <div data-testid="testtesttest">
        <h2 className="page-heading">The Lord of The Rings Movies</h2>
        <form onSubmit={onSubmitHandler}>
          <Input value={search || ""} onChange={handleChange} />
          <Button type="submit" className={styles.btn}>
            Submit
          </Button>
        </form>
        {isLoading && <PageLoader />}
        {error && <div style={{ color: "red" }}>{error}</div>}
        {movies && movies.length ? <CardList data={movies} onShowCard={onShowModal}></CardList> : null}
        {isMovieModal && (
          <MovieCardModal isOpen={isMovieModal} onClose={onCloseModal} data={cardModal as MovieMapped} />
        )}
      </div>
    </DynamicModuleLoader>
  );
}

export default MainPage;
