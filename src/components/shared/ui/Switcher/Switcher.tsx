import { forwardRef } from "react";
import { classNames } from "../../../../shared/lib/classNames/classNames";

import styles from "./Switcher.module.css";

interface SwitcherProps {
  name?: string;
  labelText?: string;
  changeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default forwardRef<HTMLInputElement, SwitcherProps>((props, ref) => {
  const { name, labelText, className, changeHandler, ...otherProps } = props;
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
          data-testid="switcher"
          {...otherProps}
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
