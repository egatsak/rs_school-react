import { useCallback, useState } from "react";
import { useAppDispatch } from "../../store/store";
import { BookCard } from "../../store/slices/bookSlice/types";
import CardList from "../../widgets/CardList/CardList";
import Form from "../../widgets/Form/Form";
import { bookActions } from "../../store/slices/bookSlice/bookSlice";
import { useSelector } from "react-redux";
import { StateSchema } from "../../store/StateSchema";

export type CardKey = keyof BookCard;

function FormPage() {
  const dispatch = useAppDispatch();

  const addCard = useCallback(
    (card: BookCard) => {
      dispatch(bookActions.addBook(card));
    },
    [dispatch]
  );

  const cards = useSelector((state: StateSchema) => state.book.data);

  return (
    <div>
      <h2 className="page-heading">FormPage</h2>
      <Form addCard={addCard} />
      <CardList data={cards} />
    </div>
  );
}

export default FormPage;
