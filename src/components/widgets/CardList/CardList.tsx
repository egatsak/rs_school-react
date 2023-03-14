import React, { Component } from "react";
import { BOOKS } from "../../../constants";
import Card from "../Card/Card";
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
