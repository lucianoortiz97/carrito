/* eslint-disable react/prop-types */
import styles from "./styles.module.css";

export default function InputField(props) {
  const { name, value, type, onChange, labelContent = "", autoComplete = "off", args } = props;
  const inputFieldId = `input-form-${name}`;

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.inputField}
        id={inputFieldId}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        autoComplete={autoComplete}
        {...args}
      />
      <label className={styles.inputLabel} htmlFor={inputFieldId}>
        {labelContent}
      </label>
    </div>
  );
}
