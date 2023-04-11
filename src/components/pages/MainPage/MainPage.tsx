import React, { useCallback, useEffect, useState } from "react";
import Input from "../../shared/ui/Input/Input";
import CardList from "../../widgets/CardList/CardList";
import Button from "../../shared/ui/Button/Button";
import { PageLoader } from "../../widgets/PageLoader/PageLoader";
import { $api } from "../../../shared/api/api";

import { MovieApi, MovieMapped } from "../../../shared/types/movies";
import { FAKE_IMAGE_URL, LOCAL_STORAGE_INPUT_KEY } from "../../../constants";

import styles from "./MainPage.module.css";
import { MovieCardModal } from "../../widgets/MovieCardModal/MovieCardModal";

function MainPage() {
  const [inputValue, setInputValue] = useState("");
  const [movies, setMovies] = useState<MovieMapped[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isMovieModal, setIsMovieModal] = useState(false);
  const [cardModal, setCardModal] = useState<MovieMapped | null>(null);

  const fetchData = useCallback(async (query?: string | RegExp) => {
    try {
      setIsLoading(true);
      const response = await $api.get<MovieApi>("/movie", { params: query ? { name: query } : null });
      const mappedData: MovieMapped[] = response.data.docs.map((movie) => ({
        ...movie,
        id: movie._id,
        imageLink: FAKE_IMAGE_URL,
      }));
      setMovies(mappedData);
    } catch (e) {
      setError(e instanceof Error && e.message ? e.message : "Network error");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const onCloseModal = useCallback(() => {
    setIsMovieModal(false);
    setCardModal(null);
  }, []);

  const onShowModal = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const id = (e.currentTarget as HTMLElement).getAttribute("data-movie-id");
      const movie = movies.find((mov) => mov.id === id);
      if (movie) {
        setCardModal(movie);
        setIsMovieModal(true);
      }
    },
    [movies]
  );

  useEffect(() => {
    const storageValue = localStorage.getItem(LOCAL_STORAGE_INPUT_KEY);
    if (storageValue !== null) {
      setInputValue(storageValue);
    }
  }, []);

  useEffect(() => {
    if (__PROJECT__ !== "jest") {
      const storageValue = localStorage.getItem(LOCAL_STORAGE_INPUT_KEY);
      storageValue ? fetchData(new RegExp(`^` + storageValue, "i")) : fetchData();
    }
  }, [fetchData]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      localStorage.setItem(LOCAL_STORAGE_INPUT_KEY, e.target.value);
    },
    [setInputValue]
  );

  const onSubmitHandler = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const regex = new RegExp(`^` + inputValue, "i");
      fetchData(regex);
    },
    [fetchData, inputValue]
  );

  return (
    <div data-testid="testtesttest">
      <h2 className="page-heading">The Lord of The Rings Movies</h2>
      <form onSubmit={onSubmitHandler}>
        <Input value={inputValue} onChange={handleChange} />
        <Button type="submit" className={styles.btn}>
          Submit
        </Button>
      </form>
      {isLoading && <PageLoader />}
      {error && <div style={{ color: "red" }}>{error}</div>}
      {movies.length ? <CardList data={movies} onShowCard={onShowModal}></CardList> : null}
      {isMovieModal && <MovieCardModal isOpen={isMovieModal} onClose={onCloseModal} data={cardModal as MovieMapped} />}
    </div>
  );
}

export default MainPage;
