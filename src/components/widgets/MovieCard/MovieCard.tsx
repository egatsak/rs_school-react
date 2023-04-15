import { FC } from "react";

import styles from "./MovieCard.module.css";
import { MovieMapped } from "../../../shared/types/movies";
import { classNames } from "../../../shared/lib/classNames/classNames";

export interface MovieCardProps extends MovieMapped {
  imageLink: string;
  isConcise?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

const MovieCard: FC<MovieCardProps> = (props) => {
  const {
    isConcise,
    imageLink,
    name,
    id,
    rottenTomatoesScore,
    runtimeInMinutes,
    academyAwardWins,
    budgetInMillions,
    onClick,
  } = props;
  return (
    <article
      data-testid="card-card"
      data-movie-id={id}
      className={classNames(styles.card, { [styles.clickable]: isConcise })}
      onClick={onClick}
    >
      <img
        src={imageLink}
        alt={`Photo-${id}`}
        data-testid="card-image"
        style={{ maxWidth: isConcise ? "100px" : "300px" }}
      />

      {isConcise ? (
        <div className={styles.container}>
          <h3 data-testid="card-heading">{name}</h3>
        </div>
      ) : (
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
            <span data-testid="card-budget">Budget: {`${budgetInMillions} mln $`}</span>
          </h4>
        </div>
      )}
    </article>
  );
};

export default MovieCard;
