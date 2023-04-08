import React, { useCallback, useEffect, useState } from "react";
import Input from "../../shared/ui/Input/Input";
import CardList from "../../widgets/CardList/CardList";

import { FAKE_IMAGE_URL, LOCAL_STORAGE_INPUT_KEY } from "../../../constants";

import styles from "./MainPage.module.css";
import { $api } from "../../../shared/api/api";
import Button from "../../shared/ui/Button/Button";
import { MovieApi, MovieMapped } from "../../../shared/types/movies";

function MainPage() {
  const [inputValue, setInputValue] = useState("");
  const [movies, setMovies] = useState<MovieMapped[]>([]);

  const fetchData = useCallback(async (query?: string | RegExp) => {
    const response = await $api.get<MovieApi>("/movie", { params: query ? { name: query } : null });
    console.log(response.data);
    const mappedData: MovieMapped[] = response.data.docs.map((movie) => ({
      ...movie,
      id: movie._id,
      imageLink: FAKE_IMAGE_URL,
    }));
    setMovies(mappedData);
  }, []);

  useEffect(() => {
    const storageValue = localStorage.getItem(LOCAL_STORAGE_INPUT_KEY);
    if (storageValue !== null) {
      setInputValue(storageValue);
    }
  }, []);

  useEffect(() => {
    fetchData();
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
      const query = localStorage.getItem(LOCAL_STORAGE_INPUT_KEY);
      if (query) {
        const regex = new RegExp(`^` + query, "i");
        fetchData(regex);
      }
    },
    [fetchData]
  );

  return (
    <div>
      <h2 className="page-heading">MainPage</h2>
      <form onSubmit={onSubmitHandler}>
        <Input value={inputValue} onChange={handleChange} className={styles.input} data-testid="input" />
        <Button type="submit" disabled={inputValue.length === 0}>
          Submit
        </Button>
      </form>
      {movies.length && <CardList data={movies}></CardList>}
    </div>
  );
}

export default MainPage;
