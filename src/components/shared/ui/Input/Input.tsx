import { forwardRef, InputHTMLAttributes } from "react";
import { classNames } from "../../../../shared/lib/classNames/classNames";
import styles from "./Input.module.css";
import { capitalize } from "../../../../shared/lib/capitalize/capitalize";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalidMsg?: string | null;
  value?: string;
  label?: string;
  id?: string;
  isInline?: boolean;
}

export default forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { value, id, placeholder, label, isInline, invalidMsg, ...otherProps } = props;
  return (
    <div className={classNames(styles.inputWrapper, { [styles.inline]: isInline })}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          <span>{capitalize(label)}</span>
          {invalidMsg && <span>{invalidMsg}</span>}
        </label>
      )}
      <input
        id={id}
        ref={ref}
        placeholder={placeholder}
        value={value}
        className={classNames(styles.input, {}, [styles["checkbox"]])}
        data-testid="input"
        {...otherProps}
      />
    </div>
  );
});
