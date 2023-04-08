import { FC } from "react";

import styles from "./MovieCard.module.css";
import { MovieMapped } from "../../../shared/types/movies";

export interface MovieCardProps extends MovieMapped {
  imageLink: string;
}

const MovieCard: FC<MovieCardProps> = (props) => {
  const { imageLink, name, id, rottenTomatoesScore, runtimeInMinutes, academyAwardWins, budgetInMillions } = props;
  return (
    <article className={styles.card}>
      <img src={imageLink} alt={`Photo-${id}`} style={{ width: "300px" }} />
      <div className={styles.container}>
        <h3 data-testid="card-heading">{name}</h3>
        <h4 data-testid="card-runtime">{runtimeInMinutes} min.</h4>
        <h5 className={styles.trivia}>
          <span>Rotten Tomatoes Score: {rottenTomatoesScore}</span>
        </h5>
        <h4 className={styles.trivia} data-testid="card-awards">
          {academyAwardWins} Academy Awards
        </h4>
        <h4>
          <span data-testid="card-bugdet">Budget: {`${budgetInMillions} mln $`}</span>
        </h4>
      </div>
    </article>
  );
};

export default MovieCard;
