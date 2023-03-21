import { Component } from "react";

import styles from "./Card.module.css";

interface CardProps {
  title: string;
  price: number;
  description: string;
  isAdult: boolean;
  isPaperVersion: boolean;
  author: string;
  deliveryDate?: string;
  imageLink?: string;
  image?: File;
}

export default class Card extends Component<CardProps> {
  render() {
    const { title, price, description, imageLink, image, isPaperVersion, isAdult, deliveryDate, author } = this.props;
    let imageUrl = "";
    if (image) {
      imageUrl = URL.createObjectURL(image);
    }
    return (
      <article className={styles.card}>
        {imageLink && (
          <img src={imageLink} alt={`Photo-${title}`} style={{ width: "300px" }} data-testid="card-image" />
        )}
        {image && (
          <img
            src={imageUrl}
            alt={`Photo-${title}`}
            style={{ width: "300px" }}
            onLoad={() => URL.revokeObjectURL(imageUrl)}
          />
        )}

        <div className={styles.container}>
          <h3 data-testid="card-heading">{title}</h3>
          <h4 data-testid="card-subheading">{author}</h4>
          <h5 className={styles.trivia}>
            <span>{isPaperVersion ? `Paper` : `E-book`}</span>
            {isAdult && <span>18+</span>}
          </h5>
          <h4 className={styles.trivia}>{deliveryDate && <span>{`Delivery date: ${deliveryDate}`}</span>}</h4>
          <h4>
            <span data-testid="card-price">{`${price} $`}</span>
          </h4>
        </div>
        <p data-testid="card-description">{description}</p>
      </article>
    );
  }
}
