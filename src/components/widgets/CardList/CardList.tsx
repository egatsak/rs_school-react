import { Component } from "react";
import Card from "../Card/Card";

import { BOOKS } from "../../../constants";

import styles from "./CardList.module.css";

export default class CardList extends Component {
  render() {
    return (
      <ul className={styles.cardlist}>
        {BOOKS.map((book) => (
          <Card key={book.id} {...book} />
        ))}
      </ul>
    );
  }
}
