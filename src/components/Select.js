import styles from './Select.module.css';

function Select(props) {
  const handleChange = (event) => props.onChange(event.target.value);

  return (
    <>
      <label htmlFor={props.name} className={styles.label}>
        {props.label}
      </label>
      <select
        id={props.name}
        name={props.name}
        onChange={handleChange}
        className={styles.select}
        required={props.required}
      >
        {props.options.map((option) => (
          <option key={`${props.name}-${option.value}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className={styles.errorMessageWrapper}>
        {props.error && <label htmlFor={props.name}>{props.error}</label>}
      </div>
    </>
  );
}

export default Select;
