import React, { useCallback, useEffect, useState } from "react";
import Input from "../../shared/ui/Input/Input";
import CardList from "../../widgets/CardList/CardList";

import { LOCAL_STORAGE_INPUT_KEY } from "../../../constants";

import { BOOKS } from "../../../constants";

import styles from "./MainPage.module.css";

function MainPage() {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const storageValue = localStorage.getItem(LOCAL_STORAGE_INPUT_KEY);
    if (storageValue !== null) {
      setInputValue(storageValue);
    }
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      localStorage.setItem(LOCAL_STORAGE_INPUT_KEY, e.target.value);
    },
    [setInputValue]
  );

  return (
    <div>
      <h2 className="page-heading">MainPage</h2>
      <Input value={inputValue} onChange={handleChange} className={styles.input} data-testid="input" />
      <CardList data={BOOKS}></CardList>
    </div>
  );
}

export default MainPage;
