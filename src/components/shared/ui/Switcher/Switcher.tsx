import { Component, forwardRef } from "react";
import { classNames } from "../../lib/classNames/classNames";

import styles from "./Switcher.module.css";

interface SwitcherProps {
  name?: string;
  labelText?: string;
  changeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

/* export class Switcher extends Component<SwitcherProps> {
  render() {
    const { name, labelText, className, changeHandler } = this.props;
    return (
      <label htmlFor={name} className={classNames(styles["outer-label"], {}, [className])}>
        <div className={styles["toggle-switch"]}>
          <input
            type="checkbox"
            className={styles["toggle-switch-checkbox"]}
            name={name}
            id={name}
            onChange={changeHandler}
          />
          <label className={styles["toggle-switch-label"]} htmlFor={name}>
            <span className={styles["toggle-switch-inner"]} />
            <span className={styles["toggle-switch-switch"]} />
          </label>
        </div>
        {labelText}
      </label>
    );
  }
} */

/* export default Switcher; */

export default forwardRef<HTMLInputElement, SwitcherProps>((props, ref) => {
  const { name, labelText, className, changeHandler } = props;
  return (
    <label htmlFor={name} className={classNames(styles["outer-label"], {}, [className])}>
      <div className={styles["toggle-switch"]}>
        <input
          id={name}
          type="checkbox"
          name={name}
          className={styles["toggle-switch-checkbox"]}
          ref={ref}
          onChange={changeHandler}
        />
        <label className={styles["toggle-switch-label"]} htmlFor={name}>
          <span className={styles["toggle-switch-inner"]} />
          <span className={styles["toggle-switch-switch"]} />
        </label>
      </div>
      {labelText}
    </label>
  );
});
