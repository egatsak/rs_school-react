import { Component } from "react";
import Card from "../Card/Card";

import styles from "./CardList.module.css";

interface CardProps<T extends { id: string }> {
  data: T[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default class CardList extends Component<CardProps<any>> {
  render() {
    return (
      <ul className={styles.cardlist} data-testid="cardlist-wrapper">
        {this.props.data.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </ul>
    );
  }
}
