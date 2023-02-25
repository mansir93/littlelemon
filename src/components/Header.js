import styles from './Header.module.css';
import restaurantFood from '../assets/restauranfood.jpg';
import ButtonLink from './ButtonLink';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper} aria-hidden>
        <article>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>

          <p>We are family owned Mediterranean restaurant focused on traditional recipes served with o modern twist.</p>

          <ButtonLink href="/booking">Reserve a table</ButtonLink>
        </article>
        <aside>
          <img src={restaurantFood} alt="Bruchetta" />
        </aside>
      </div>
    </header>
  );
}

export default Header;
