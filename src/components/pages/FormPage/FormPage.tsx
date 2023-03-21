import { Component } from "react";
import { Book } from "../../../constants";
import CardList from "../../widgets/CardList/CardList";
import Form from "../../widgets/Form/Form";

export interface Card extends Book {
  deliveryDate: string;
  image: File;
}

export type CardKey = keyof Card;

interface FormPageState {
  cards: Card[];
}

export default class FormPage extends Component<object, FormPageState> {
  constructor(props: object) {
    super(props);

    this.state = { cards: [] };

    this.addCard = this.addCard.bind(this);
  }

  addCard(card: Card) {
    this.setState((prev) => ({ cards: [...prev.cards, card] }));
  }

  render() {
    return (
      <div>
        <h2 className="page-heading">FormPage</h2>
        <Form addCard={this.addCard} />
        <CardList data={this.state.cards} />
      </div>
    );
  }
}
