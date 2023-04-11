import { useCallback, useState } from "react";
import { Book } from "../../../constants";
import CardList from "../../widgets/CardList/CardList";
import Form from "../../widgets/Form/Form";

export interface Card extends Book {
  deliveryDate: string;
  image: File;
}

export type CardKey = keyof Card;

function FormPage() {
  const [cards, setCards] = useState([] as Card[]);

  const addCard = useCallback((card: Card) => {
    setCards((prev) => [...prev, card]);
  }, []);

  return (
    <div>
      <h2 className="page-heading">FormPage</h2>
      <Form addCard={addCard} />
      <CardList data={cards} />
    </div>
  );
}

export default FormPage;
