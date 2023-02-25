import Nav from '../components/Nav';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';
import styles from './BookingPage.module.css';
import { useReducer } from 'react';
import { fetchAPI, submitAPI } from '../utils/api';
import { useNavigate } from 'react-router-dom';

function BookingPage() {
  const navigate = useNavigate();
  const [availableTimes, dispatchAvailableTimes] = useReducer(
    (state, newDate) => updateTimes(newDate),
    [],
    initializeTimes,
  );

  const handleSubmit = (formData) => {
    if (submitAPI(formData)) {
      navigate('/booking/confirmed');
    }
  };

  return (
    <>
      <Nav />
      <main className={styles.main}>
        <h3>Reserve a table</h3>
        <BookingForm
          availableTimes={availableTimes}
          dispatchAvailableTimes={dispatchAvailableTimes}
          onSubmit={handleSubmit}
        />
      </main>
      <Footer />
    </>
  );
}

export const updateTimes = (newDate) =>
  timesListToSelectOptions(fetchAPI(new Date(newDate)));

export const initializeTimes = () =>
  timesListToSelectOptions(fetchAPI(new Date()));
const timesListToSelectOptions = (times) =>
  times.map((time) => ({ value: time, label: time }));

export default BookingPage;
