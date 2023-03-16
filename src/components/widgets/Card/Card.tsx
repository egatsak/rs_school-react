import { Component } from "react";

import styles from "./Card.module.css";

interface CardProps {
  title: string;
  price: number;
  description: string;
  imageLink: string;
}

export default class Card extends Component<CardProps> {
  render() {
    const { title, price, description, imageLink } = this.props;
    return (
      <article className={styles.card}>
        <img src={imageLink} alt={`Photo-${title}`} style={{ width: "300px" }}></img>
        <div className={styles.container}>
          <h4>{title}</h4>
          <h4>{`${price} $`}</h4>
        </div>
        <p>{description}</p>
      </article>
    );
  }
}
