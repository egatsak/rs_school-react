import React, { Component, createRef, MutableRefObject } from "react";
import Button from "../../shared/ui/Button/Button";
import Input from "../../shared/ui/Input/Input";
import Select from "../../shared/ui/Select/Select";
import Switcher from "../../shared/ui/Switcher/Switcher";

import type { Card } from "../../pages/FormPage/FormPage";
import { Countries } from "../../../constants";
import { capitalize } from "../../shared/lib/capitalize/capitalize";

import styles from "./Form.module.css";

type InputRef = MutableRefObject<HTMLInputElement | null>;

interface FormProps {
  addCard: (card: Card) => void;
}

const today = new Date().toISOString().split("T")[0];

export default class Form extends Component<FormProps> {
  private author: InputRef;
  private title: InputRef;
  private description: InputRef;
  private price: InputRef;
  private country: MutableRefObject<HTMLSelectElement | null>;
  private isAdult: InputRef;
  private isPaperVersion: InputRef;
  private isEbook: InputRef;
  private deliveryDate: InputRef;
  private image: InputRef;
  private invalidInputsRef: MutableRefObject<HTMLFormElement | null>;

  constructor(props: FormProps) {
    super(props);

    this.author = createRef();
    this.title = createRef();
    this.description = createRef();
    this.price = createRef();
    this.country = createRef();
    this.isAdult = createRef();
    this.isPaperVersion = createRef();
    this.isEbook = createRef();
    this.deliveryDate = createRef();
    this.image = createRef();
    this.invalidInputsRef = createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
  }

  clearInputs() {
    this.author.current!.value = "";
    this.title.current!.value = "";
    this.description.current!.value = "";
    this.price.current!.value = "";
    this.deliveryDate.current!.value = "";
    this.country.current!.value = "default";
    this.isAdult.current!.checked = false;
    this.isEbook.current!.checked = false;
    this.isPaperVersion.current!.checked = true;
    this.image.current!.value = "";
  }

  validate() {
    const invalidInputIds: string[] = [];
    const inputRefs = [this.author, this.title, this.deliveryDate];

    if (!this.image.current?.files || this.image.current?.files.length < 1) {
      invalidInputIds.push("file");
    }

    if (!this.country.current?.value || this.country.current?.value === "default") {
      invalidInputIds.push("country");
    }

    if (!this.price.current?.value || Number(this.price.current?.value) <= 0) {
      invalidInputIds.push("price");
    }

    inputRefs.forEach((ref) => {
      if (!ref.current?.value || ref.current?.value?.length < 1) {
        invalidInputIds.push(ref.current!.id);
      }
    });

    this.invalidInputsRef.current!.invalidInputIds = [...invalidInputIds];
    return invalidInputIds.length === 0;
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const isValid = this.validate();

    if (!isValid) {
      this.forceUpdate();
      return;
    }

    const formData = new FormData(e.currentTarget);
    const card = {} as Record<keyof Card, File | string | number | boolean>;

    for (const [key, value] of formData.entries()) {
      if (value !== undefined && key !== "bookType") {
        card[key as keyof Card] = value;
      }
    }

    card.isAdult = this.isAdult.current!.checked;

    card.isPaperVersion = this.isPaperVersion.current!.checked;

    card.id = Math.random().toFixed(10);
    card.author = capitalize(card.author as string);
    card.price = Number(card.price);

    this.props.addCard(card as Card);

    this.invalidInputsRef.current!.invalidInputIds = [];
    this.clearInputs();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} ref={this.invalidInputsRef} data-testid="form">
        <Input
          id="author"
          label="author"
          name="author"
          ref={this.author}
          data-testid="author"
          invalidMsg={this.invalidInputsRef.current?.invalidInputIds.includes("author") ? "Invalid value!" : null}
        />
        <Input
          id="title"
          label="title"
          name="title"
          ref={this.title}
          data-testid="title"
          invalidMsg={this.invalidInputsRef.current?.invalidInputIds.includes("title") ? "Invalid value!" : null}
        />
        <Input
          id="description"
          label="description"
          ref={this.description}
          name="description"
          data-testid="description"
        />
        <Input
          id="price"
          type="number"
          name="price"
          label="price"
          ref={this.price}
          data-testid="price"
          invalidMsg={this.invalidInputsRef.current?.invalidInputIds.includes("price") ? "Invalid value!" : null}
        />
        <Input
          id="deliveryDate"
          type="date"
          label="Delivery Date"
          ref={this.deliveryDate}
          data-testid="deliveryDate"
          name="deliveryDate"
          min={today}
          invalidMsg={this.invalidInputsRef.current?.invalidInputIds.includes("deliveryDate") ? "Invalid value!" : null}
        />
        <Select
          options={Object.entries(Countries).map((item) => ({ optionValue: item[0], optionLabel: item[1] }))}
          label="Country"
          ref={this.country}
          name="country"
          data-testid="country"
          invalidMsg={this.invalidInputsRef.current?.invalidInputIds.includes("country") ? "Invalid value!" : null}
        />
        <Input
          id="file"
          type="file"
          label="Book cover"
          data-testid="imageInput"
          ref={this.image}
          accept="image/*"
          name="image"
          invalidMsg={this.invalidInputsRef.current?.invalidInputIds.includes("file") ? "Invalid value!" : null}
        />
        <div className={styles.checkboxWrapper}>
          <input
            id="bookTypeChoice1"
            type="radio"
            name="bookType"
            value="paper"
            data-testid="radio-paper"
            defaultChecked
            ref={this.isPaperVersion}
          />
          <label htmlFor="bookTypeChoice1">Paper</label>
          <input
            id="bookTypeChoice2"
            type="radio"
            name="bookType"
            value="e-book"
            data-testid="radio-ebook"
            ref={this.isEbook}
          />
          <label htmlFor="bookTypeChoice2">E-book</label>
        </div>
        <Switcher
          name="isAdult"
          labelText="18+"
          className={styles.mbottom}
          data-testid="adult-switcher"
          ref={this.isAdult}
        />
        <Button type="submit" className={styles.singleBtn} data-testid="submit">
          Submit
        </Button>
      </form>
    );
  }
}
