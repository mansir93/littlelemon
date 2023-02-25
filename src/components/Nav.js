import { useState } from 'react';
import styles from './Nav.module.css';
import logo from '../assets/logo.svg';
import { ReactComponent as MenuIcon } from '../assets/icon-hamburger-menu.svg';
import { Link } from 'react-router-dom';

function Nav() {
  const [isOpened, setIsOpened] = useState(false);
  const toggleOpened = () => setIsOpened((prev) => !prev);

  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper} aria-hidden>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>

        <div className={styles.hamburger} onClick={toggleOpened}>
          <MenuIcon />
        </div>

        <menu className={isOpened ? styles.opened : null}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/booking">Reservations</Link>
          </li>
          <li>
            <Link to="/order-online">Order online</Link>
          </li>
          <li>
            <Link to="#">Login</Link>
          </li>
        </menu>
      </div>
    </nav>
  );
}

export default Nav;
