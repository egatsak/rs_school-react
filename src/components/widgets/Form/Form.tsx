import React, { Component, ReactNode, createRef, FormHTMLAttributes, RefObject, MutableRefObject } from "react";
import Input from "../../shared/ui/Input/Input";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children?: ReactNode;
}

/* interface FormState {

} */

export default class Form extends Component<FormProps> {
  private author: MutableRefObject<HTMLInputElement | null>;
  private title: MutableRefObject<HTMLInputElement | null>;
  private description: MutableRefObject<HTMLInputElement | null>;
  private price: MutableRefObject<HTMLInputElement | null>;
  private country: MutableRefObject<HTMLInputElement | null>;
  private isAdult: MutableRefObject<HTMLInputElement | null>;
  private paperVersion: MutableRefObject<HTMLInputElement | null>;
  private deliveryDate: MutableRefObject<HTMLInputElement | null>;
  private image: MutableRefObject<HTMLInputElement | null>;

  constructor(props: FormProps) {
    super(props);
    this.author = createRef();
    this.title = createRef();
    this.description = createRef();
    this.price = createRef();
    this.country = createRef();
    this.isAdult = createRef();
    this.paperVersion = createRef();
    this.deliveryDate = createRef();
    this.image = createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  render() {
    console.log(this.author.current);
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          id="author"
          label="author"
          data-testid="author"
          ref={this.author}
          onChange={() => console.log(this.author.current?.value)}
        />
      </form>
    );
  }
}
