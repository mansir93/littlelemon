import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ButtonLink from '../components/ButtonLink';
import styles from './ConfirmedBooking.module.css';

function ConfirmedBooking() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <h3>Thank you for your booking!</h3>
        <p>
          We look forward to seeing you when you arrive. If you have any
          questions or concerns, please contact us at 555-555-5555.
        </p>
        <ButtonLink href="/">Return to home page</ButtonLink>
      </main>
      <Footer />
    </>
  );
}

export default ConfirmedBooking;
