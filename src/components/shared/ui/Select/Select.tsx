import { forwardRef, SelectHTMLAttributes } from "react";
import { capitalize } from "../../lib/capitalize/capitalize";

import styles from "./Select.module.css";

interface Option<Value, Label> {
  optionLabel: Label;
  optionValue: Value;
}

interface SelectProps<T> extends SelectHTMLAttributes<HTMLSelectElement> {
  options: T[];
  label: string;
  name: string;
  invalidMsg?: string | null;
}

export default forwardRef<HTMLSelectElement, SelectProps<Option<unknown, unknown>>>((props, ref) => {
  const { label, name, options, invalidMsg } = props;
  return (
    <div className={styles.selectWrapper}>
      <label htmlFor={name} className={styles.label}>
        <span>{capitalize(label)}</span>
        {invalidMsg && <span>{invalidMsg}</span>}
      </label>
      <select id={name} name={name} ref={ref} className={styles.select} defaultValue="default">
        <option value="default" disabled>
          Choose an option
        </option>
        {options.map((option) => (
          <option key={option.optionValue as string} value={option.optionValue as string | number}>
            {option.optionLabel as string}
          </option>
        ))}
      </select>
    </div>
  );
});
