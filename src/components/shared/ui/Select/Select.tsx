import { forwardRef, SelectHTMLAttributes, useMemo } from "react";
import { capitalize } from "../../lib/capitalize/capitalize";

import styles from "./Select.module.css";

interface Option<T extends string> {
  optionLabel: string;
  optionValue: T;
}

interface SelectProps<T extends string> extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option<T>[];
  name: string;
  label?: string;
  invalidMsg?: string | null;
}

function Select<T extends string>(props: SelectProps<T>, ref: React.ForwardedRef<HTMLSelectElement>) {
  const { label, name, options, invalidMsg, ...otherProps } = props;

  const optionsList = useMemo(() => {
    return options.map((opt) => (
      <option className={styles.option} value={opt.optionValue} key={opt.optionValue} data-testid="select-option">
        {opt.optionLabel}
      </option>
    ));
  }, [options]);

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
        {optionsList}
      </select>
    </div>
  );
}

export default forwardRef(Select);
