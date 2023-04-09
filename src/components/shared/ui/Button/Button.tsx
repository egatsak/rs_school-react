import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "../../../../shared/lib/classNames/classNames";

import styles from "./Button.module.css";

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const { children, className, ...otherProps } = props;
  return (
    <button className={classNames(styles.button, {}, [className])} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
