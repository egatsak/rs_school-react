import { FC } from "react";
import Card from "../Card/Card";

import styles from "./CardList.module.css";
import MovieCard from "../MovieCard/MovieCard";
import { MovieMapped } from "../../../shared/types/movies";
import { Book } from "../../../constants";

interface WithId {
  id: string;
}

type TProps = MovieMapped | Book;

interface CardPropsWithId<T extends WithId> {
  data: T[];
  onShowCard?: (e: React.MouseEvent<HTMLElement>) => void;
}

function isMovie(arg: MovieMapped | Book): arg is MovieMapped {
  return (arg as MovieMapped).runtimeInMinutes !== undefined;
}

const CardList: FC<CardPropsWithId<TProps & WithId>> = (props) => {
  return (
    <ul className={styles.cardlist} data-testid="cardlist-wrapper">
      {props.data.map((item) =>
        isMovie(item) ? (
          <MovieCard key={item.id} onClick={props.onShowCard} isConcise={true} {...item} />
        ) : (
          <Card key={item.id} {...item} />
        )
      )}
    </ul>
  );
};

export default CardList;
