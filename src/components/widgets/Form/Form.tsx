import React, { FC, MutableRefObject, useReducer, useRef } from "react";
import Button from "../../shared/ui/Button/Button";
import Input from "../../shared/ui/Input/Input";
import Select from "../../shared/ui/Select/Select";
import Switcher from "../../shared/ui/Switcher/Switcher";

import { Countries } from "../../../constants";

import styles from "./Form.module.css";
import { capitalize } from "../../../shared/lib/capitalize/capitalize";
import { BookCard } from "../../store/slices/bookSlice/types";

type InputRef = MutableRefObject<HTMLInputElement | null>;

interface FormProps {
  addCard: (card: BookCard) => void;
}

const today = new Date().toISOString().split("T")[0];

const Form: FC<FormProps> = (props) => {
  const forceUpdate = useReducer((x: number) => x + 1, 0)[1];
  const { addCard } = props;

  const author: InputRef = useRef(null);
  const title: InputRef = useRef(null);
  const description: InputRef = useRef(null);
  const price: InputRef = useRef(null);
  const country: MutableRefObject<HTMLSelectElement | null> = useRef(null);
  const isAdult: InputRef = useRef(null);
  const isPaperVersion: InputRef = useRef(null);
  const isEbook: InputRef = useRef(null);
  const deliveryDate: InputRef = useRef(null);
  const image: InputRef = useRef(null);
  const invalidInputsRef: MutableRefObject<HTMLFormElement | null> = useRef(null);

  const clearInputs = () => {
    author.current!.value = "";
    title.current!.value = "";
    description.current!.value = "";
    price.current!.value = "";
    deliveryDate.current!.value = "";
    country.current!.value = "default";
    isAdult.current!.checked = false;
    isEbook.current!.checked = false;
    isPaperVersion.current!.checked = true;
    image.current!.value = "";
  };

  const validate = () => {
    const invalidInputIds: string[] = [];
    const inputRefs = [author, title, deliveryDate];

    if (!image.current?.files || image.current?.files.length < 1) {
      invalidInputIds.push("file");
    }

    if (!country.current?.value || country.current?.value === "default") {
      invalidInputIds.push("country");
    }

    if (!price.current?.value || Number(price.current?.value) <= 0) {
      invalidInputIds.push("price");
    }

    inputRefs.forEach((ref) => {
      if (!ref.current?.value || ref.current?.value?.length < 1) {
        invalidInputIds.push(ref.current!.id);
      }
    });

    invalidInputsRef.current!.invalidInputIds = [...invalidInputIds];
    return invalidInputIds.length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validate();

    if (!isValid) {
      forceUpdate();
      return;
    }

    const formData = new FormData(e.currentTarget);
    const card = {} as Record<keyof BookCard, File | string | number | boolean>;

    for (const [key, value] of formData.entries()) {
      if (value !== undefined && key !== "bookType") {
        card[key as keyof BookCard] = value;
      }
    }

    card.isAdult = isAdult.current!.checked;

    card.isPaperVersion = isPaperVersion.current!.checked;

    card.id = Math.random().toFixed(10);
    card.author = capitalize(card.author as string);
    card.price = Number(card.price);

    addCard(card as BookCard);

    invalidInputsRef.current!.invalidInputIds = [];
    clearInputs();
  };

  return (
    <form onSubmit={handleSubmit} ref={invalidInputsRef} data-testid="form">
      <Input
        id="author"
        label="author"
        name="author"
        ref={author}
        data-testid="author"
        invalidMsg={invalidInputsRef.current?.invalidInputIds.includes("author") ? "Invalid value!" : null}
      />
      <Input
        id="title"
        label="title"
        name="title"
        ref={title}
        data-testid="title"
        invalidMsg={invalidInputsRef.current?.invalidInputIds.includes("title") ? "Invalid value!" : null}
      />
      <Input id="description" label="description" ref={description} name="description" data-testid="description" />
      <Input
        id="price"
        type="number"
        name="price"
        label="price"
        ref={price}
        data-testid="price"
        invalidMsg={invalidInputsRef.current?.invalidInputIds.includes("price") ? "Invalid value!" : null}
      />
      <Input
        id="deliveryDate"
        type="date"
        label="Delivery Date"
        ref={deliveryDate}
        data-testid="deliveryDate"
        name="deliveryDate"
        min={today}
        invalidMsg={invalidInputsRef.current?.invalidInputIds.includes("deliveryDate") ? "Invalid value!" : null}
      />
      <Select
        options={Object.entries(Countries).map((item) => ({ optionValue: item[0], optionLabel: item[1] }))}
        label="Country"
        ref={country}
        name="country"
        data-testid="country"
        invalidMsg={invalidInputsRef.current?.invalidInputIds.includes("country") ? "Invalid value!" : null}
      />
      <Input
        id="file"
        type="file"
        label="Book cover"
        data-testid="imageInput"
        ref={image}
        accept="image/*"
        name="image"
        invalidMsg={invalidInputsRef.current?.invalidInputIds.includes("file") ? "Invalid value!" : null}
      />
      <div className={styles.checkboxWrapper}>
        <input
          id="bookTypeChoice1"
          type="radio"
          name="bookType"
          value="paper"
          data-testid="radio-paper"
          defaultChecked
          ref={isPaperVersion}
        />
        <label htmlFor="bookTypeChoice1">Paper</label>
        <input
          id="bookTypeChoice2"
          type="radio"
          name="bookType"
          value="e-book"
          data-testid="radio-ebook"
          ref={isEbook}
        />
        <label htmlFor="bookTypeChoice2">E-book</label>
      </div>
      <Switcher name="isAdult" labelText="18+" className={styles.mbottom} data-testid="adult-switcher" ref={isAdult} />
      <Button type="submit" className={styles.singleBtn} data-testid="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
