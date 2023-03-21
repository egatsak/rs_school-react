import { Component, ButtonHTMLAttributes } from "react";
import { classNames } from "../../lib/classNames/classNames";
import styles from "./Button.module.css";

export default class Button extends Component<ButtonHTMLAttributes<HTMLButtonElement>> {
  constructor(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    super(props);
  }

  render() {
    const { children, className, ...otherProps } = this.props;
    return (
      <button className={classNames(styles.button, {}, [className])} {...otherProps}>
        {children}
      </button>
    );
  }
}
