import { useState } from 'react';

function useBookingForm() {
  const [date, setDate] = useState(null);
  const [dateError, setDateError] = useState(null);
  const [time, setTime] = useState(null);
  const [timeError, setTimeError] = useState(null);
  const [guests, setGuests] = useState(null);
  const [guestsError, setGuestsError] = useState(null);
  const [occasion, setOccasion] = useState(null);
  const [occasionError, setOccasionError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return {
    date,
    setDate,
    dateError,
    time,
    setTime,
    timeError,
    guests,
    setGuests,
    guestsError,
    occasion,
    setOccasion,
    occasionError,
    handleSubmit,
  };
}

export default useBookingForm;
