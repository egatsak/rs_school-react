import React, { Component, createRef, MutableRefObject } from "react";
import Button from "../../shared/ui/Button/Button";
import Input from "../../shared/ui/Input/Input";
import Select from "../../shared/ui/Select/Select";
import Switcher from "../../shared/ui/Switcher/Switcher";

import type { Card } from "../../pages/FormPage/FormPage";
import { Countries } from "../../../constants";

import styles from "./Form.module.css";
import { capitalize } from "../../shared/lib/capitalize/capitalize";

type InputRef = MutableRefObject<(HTMLInputElement & { current: { isInvalid: boolean } }) | null>;

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
      this.image.current!.dataset.invalid = "true";
    }

    if (!this.country.current?.value || this.country.current?.value === "default") {
      invalidInputIds.push("country");
      this.country.current!.dataset.invalid = "true";
    }

    if (!this.price.current?.value || Number(this.price.current?.value) <= 0) {
      invalidInputIds.push("price");
    }

    inputRefs.forEach((ref) => {
      if (!ref.current?.value || ref.current?.value?.length < 1) {
        invalidInputIds.push(ref.current!.id);
        ref.current!.dataset.invalid = "true";
      }
    });

    this.invalidInputsRef.current!.invalidInputIds = [...invalidInputIds];
    console.log(invalidInputIds);
    return invalidInputIds.length === 0;
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const isValid = this.validate();
    console.log(this.invalidInputsRef.current?.invalidInputIds);

    if (!isValid) {
      this.forceUpdate();
      return;
    }

    this.invalidInputsRef.current!.invalidInputIds = [];

    const formData = new FormData(e.currentTarget);
    const output = {} as Record<keyof Card, File | string | number | boolean>;

    for (const [key, value] of formData.entries()) {
      if (value !== undefined && key !== "bookType") {
        output[key as keyof Card] = value;
      }
    }

    if (this.isAdult.current) {
      output.isAdult = this.isAdult.current.checked;
    }

    if (this.isPaperVersion.current) {
      output.isPaperVersion = this.isPaperVersion.current.checked;
    }

    output.id = Math.random().toFixed(10);
    output.author = capitalize(output.author as string);
    output.price = Number(output.price);
    console.log(output);
    this.props.addCard(output as Card);
    this.clearInputs();
  }

  componentDidUpdate() {
    console.log(this.invalidInputsRef.current);
  }

  render() {
    console.log(this.invalidInputsRef.current);
    console.log(today);
    return (
      <form onSubmit={this.handleSubmit} ref={this.invalidInputsRef}>
        <Input
          id="author"
          label="author"
          data-testid="author"
          ref={this.author}
          name="author"
          invalidMsg={this.invalidInputsRef.current?.invalidInputIds.includes("author") ? "Invalid value!" : null}
        />
        <Input
          id="title"
          label="title"
          data-testid="title"
          ref={this.title}
          name="title"
          invalidMsg={this.invalidInputsRef.current?.invalidInputIds.includes("title") ? "Invalid value!" : null}
        />
        <Input
          id="description"
          label="description"
          data-testid="description"
          ref={this.description}
          name="description"
        />
        <Input
          id="price"
          type="number"
          label="price"
          data-testid="price"
          ref={this.price}
          name="price"
          invalidMsg={this.invalidInputsRef.current?.invalidInputIds.includes("price") ? "Invalid value!" : null}
        />
        <Input
          id="deliveryDate"
          type="date"
          label="Delivery Date"
          data-testid="deliveryDate"
          ref={this.deliveryDate}
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
            type="radio"
            id="bookTypeChoice1"
            name="bookType"
            value="paper"
            defaultChecked
            ref={this.isPaperVersion}
          />
          <label htmlFor="bookTypeChoice1">Paper</label>
          <input type="radio" id="bookTypeChoice2" name="bookType" value="e-book" ref={this.isEbook} />
          <label htmlFor="bookTypeChoice2">E-book</label>
        </div>
        <Switcher name="isAdult" labelText="18+" ref={this.isAdult} className={styles.mbottom} />
        <Button type="submit" className={styles.singleBtn}>
          Submit
        </Button>
      </form>
    );
  }
}
