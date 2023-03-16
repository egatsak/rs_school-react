import { Component, InputHTMLAttributes } from "react";
import { classNames } from "../../lib/classNames/classNames";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
}

export default class Input extends Component<InputProps> {
  constructor(props: InputProps) {
    super(props);
  }

  render() {
    const { value, ...otherProps } = this.props;
    return <input value={value} className={classNames(styles.input)} {...otherProps} />;
  }
}
