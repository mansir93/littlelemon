import styles from './Input.module.css';

function Input(props) {
  const handleChange = (event) => props.onChange(event.target.value);

  return (
    <>
      <label htmlFor={props.name} className={styles.label}>
        {props.label}
      </label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        min={props.min}
        max={props.max}
        id={props.name}
        name={props.name}
        required={props.required}
        onChange={handleChange}
        className={styles.input}
      />
      <div className={styles.errorMessageWrapper}>
        {props.error && <label htmlFor={props.name}>{props.error}</label>}
      </div>
    </>
  );
}

export default Input;
