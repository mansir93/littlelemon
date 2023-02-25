import styles from './Button.module.css';
import { Link } from 'react-router-dom';

function ButtonLink(props) {
  return (
    <Link
      to={props.href}
      role="button"
      className={styles.button}
      aria-label="On Click"
    >
      {props.children}
    </Link>
  );
}

export default ButtonLink;
