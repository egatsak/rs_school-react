import { forwardRef, SelectHTMLAttributes } from "react";
import { capitalize } from "../../lib/capitalize/capitalize";

import styles from "./Select.module.css";

interface Option<Value, Label> {
  optionLabel: Label;
  optionValue: Value;
}

interface SelectProps<T> extends SelectHTMLAttributes<HTMLSelectElement> {
  options: T[];
  name: string;
  label?: string;
  invalidMsg?: string | null;
}

export default forwardRef<HTMLSelectElement, SelectProps<Option<unknown, unknown>>>((props, ref) => {
  const { label, name, options, invalidMsg, ...otherProps } = props;
  return (
    <div className={styles.selectWrapper}>
      <label htmlFor={name} className={styles.label}>
        {label && <span>{capitalize(label)}</span>}
        {invalidMsg && <span>{invalidMsg}</span>}
      </label>
      <select
        id={name}
        name={name}
        ref={ref}
        className={styles.select}
        defaultValue="default"
        data-testid="select"
        {...otherProps}
      >
        <option value="default" disabled>
          Choose an option
        </option>
        {options.map((option) => (
          <option
            key={option.optionValue as string}
            value={option.optionValue as string | number}
            data-testid="select-option"
          >
            {option.optionLabel as string}
          </option>
        ))}
      </select>
    </div>
  );
});
