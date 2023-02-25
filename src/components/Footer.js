import styles from './Footer.module.css';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper} aria-hidden>
        <img src={logo} alt="logo" />

        <nav>
          <h3>Navigation</h3>

          <menu>
            <li>
              <Link to="#">Homepage</Link>
            </li>
            <li>
              <Link to="/order-online">Order a delivery</Link>
            </li>
            <li>
              <Link to="/booking">Reserve a table</Link>
            </li>
            <li>
              <Link to="#">Our story</Link>
            </li>
            <li>
              <Link to="#">Career</Link>
            </li>
          </menu>
        </nav>

        <article>
          <h3>Contacts</h3>

          <p>1234 Main St</p>
          <p>+1 123 456 789</p>
          <p>info@littlelemon.exampledomain</p>
        </article>

        <article>
          <h3>Social media links</h3>

          <menu>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>

            <li>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>

            <li>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                Twitter
              </a>
            </li>
          </menu>
        </article>
      </div>
    </footer>
  );
}

export default Footer;
