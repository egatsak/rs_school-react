import { FC } from "react";
import { Modal } from "../../shared/ui/Modal/Modal";
import MovieCard from "../MovieCard/MovieCard";
import { MovieMapped } from "../../../shared/types/movies";
import { classNames } from "../../../shared/lib/classNames/classNames";

import styles from "./MovieCardModal.module.css";
import Button from "../../shared/ui/Button/Button";

interface MovieCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: MovieMapped;
  className?: string;
}

export const MovieCardModal: FC<MovieCardModalProps> = (props) => {
  const { className, isOpen, onClose, data } = props;

  return (
    <Modal className={classNames("", {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
      <Button className={styles.cross} onClick={onClose}>
        x
      </Button>
      <MovieCard {...data} isConcise={false} />
    </Modal>
  );
};
