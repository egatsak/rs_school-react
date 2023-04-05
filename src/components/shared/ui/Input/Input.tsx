import { forwardRef, InputHTMLAttributes } from "react";
import { capitalize } from "../../lib/capitalize/capitalize";
import { classNames } from "../../lib/classNames/classNames";
import styles from "./Input.module.css";
import { UseFormRegister } from "react-hook-form/dist/types/form";
import { FormInputs } from "../../../widgets/Form/Form";
import { Validate } from "react-hook-form";

type MyHTMLInputElement = Omit<HTMLInputElement, "name">;

interface InputProps extends InputHTMLAttributes<MyHTMLInputElement> {
  invalidMsg?: string | null;
  value?: string;
  label?: string;
  id?: string;
  isInline?: boolean;
  name?: string;
  register?: UseFormRegister<FormInputs>;
  validate?: Validate<string | number | boolean | File | FileList, FormInputs>;
}

export default forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { value, id, placeholder, label, isInline, invalidMsg, register, validate, name, ...otherProps } = props;
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
        name={name}
        {...register?.(name as keyof FormInputs, { validate })}
        {...otherProps}
      />
    </div>
  );
});
