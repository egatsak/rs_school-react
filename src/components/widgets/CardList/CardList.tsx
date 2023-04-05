import { FC } from "react";
import Card, { CardProps } from "../Card/Card";

import styles from "./CardList.module.css";

interface WithId {
  id: string;
}

interface CardPropsWithId<T extends WithId> {
  data: T[];
}

const CardList: FC<CardPropsWithId<CardProps & WithId>> = (props) => {
  return (
    <ul className={styles.cardlist} data-testid="cardlist-wrapper">
      {props.data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default CardList;
