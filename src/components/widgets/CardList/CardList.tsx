import { Component } from "react";
import Card, { CardProps } from "../Card/Card";

import styles from "./CardList.module.css";

interface WithId {
  id: string;
}

interface CardPropsWithId<T extends WithId> {
  data: T[];
}

export default class CardList extends Component<CardPropsWithId<CardProps & WithId>> {
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
