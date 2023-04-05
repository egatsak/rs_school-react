import { FC, MutableRefObject, useRef } from "react";
import Button from "../../shared/ui/Button/Button";
import Input from "../../shared/ui/Input/Input";
import Select from "../../shared/ui/Select/Select";
import Switcher from "../../shared/ui/Switcher/Switcher";

import type { Card } from "../../pages/FormPage/FormPage";
import { COUNTRY, Countries } from "../../../constants";

import styles from "./Form.module.css";
import { useForm } from "react-hook-form";

type InputRef = MutableRefObject<HTMLInputElement | null>;

interface FormProps {
  addCard: (card: Card) => void;
}

export interface FormInputs {
  author: string;
  title: string;
  description: string;
  price: number;
  country: COUNTRY;
  isAdult: boolean;
  isPaperVersion: boolean;
  isEbook: boolean;
  deliveryDate: string;
  image: FileList;
}

const today = new Date().toISOString().split("T")[0];

const Form: FC<FormProps> = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    /*     formState: { errors }, */
  } = useForm<FormInputs>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

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

  return (
    <form
      onSubmit={handleSubmit((data) => {
        addCard({
          ...data,
          id: Math.random().toFixed(10),
          price: Number(data.price),
          image: data.image?.[0],
        });
        reset();
      })}
      data-testid="form"
    >
      <Input
        id="author"
        label="author"
        name="author"
        ref={author}
        data-testid="author"
        validate={(value) => (value as string).length > 0}
        register={register}
      />
      <Input
        id="title"
        label="title"
        name="title"
        ref={title}
        validate={(value) => (value as string).length > 0}
        register={register}
        data-testid="title"
      />
      <Input
        id="description"
        label="description"
        ref={description}
        register={register}
        validate={() => true}
        name="description"
        data-testid="description"
      />
      <Input
        id="price"
        type="number"
        name="price"
        label="price"
        ref={price}
        data-testid="price"
        validate={(value) => !!value || Number(value) > 0}
        register={register}
      />
      <Input
        id="deliveryDate"
        type="date"
        label="Delivery Date"
        ref={deliveryDate}
        data-testid="deliveryDate"
        name="deliveryDate"
        min={today}
        validate={(value) => (value as string).length > 0}
        register={register}
      />
      <Select
        options={Object.entries(Countries).map((item) => ({ optionValue: item[0], optionLabel: item[1] }))}
        label="Country"
        ref={country}
        name="country"
        data-testid="country"
        register={register}
      />
      <Input
        id="file"
        type="file"
        label="Book cover"
        data-testid="imageInput"
        ref={image}
        accept="image/*"
        name="image"
        register={register}
      />
      <div className={styles.checkboxWrapper}>
        <input
          id="bookTypeChoice1"
          type="radio"
          value="paper"
          data-testid="radio-paper"
          {...register("isPaperVersion")}
          defaultChecked
          ref={isPaperVersion}
        />
        <label htmlFor="bookTypeChoice1">Paper</label>
        <input
          id="bookTypeChoice2"
          type="radio"
          value="e-book"
          {...register("isPaperVersion")}
          data-testid="radio-ebook"
          ref={isEbook}
        />
        <label htmlFor="bookTypeChoice2">E-book</label>
      </div>
      <Switcher
        name="isAdult"
        labelText="18+"
        register={register}
        className={styles.mbottom}
        data-testid="adult-switcher"
        ref={isAdult}
      />
      <Button type="submit" className={styles.singleBtn} data-testid="submit">
        Submit
      </Button>
    </form>
  );
};

export default Form;
