import { FC } from "react";

import { classNames } from "../../../../shared/lib/classNames/classNames";
import "./Loader.css";

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <div className={classNames("lds-ring", {}, [className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
