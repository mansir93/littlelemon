import { render, screen } from '@testing-library/react';
import BookingForm, {
  validateDate,
  validateGuests,
  validateOccasion,
  validateTime,
} from '../components/BookingForm';
import { initializeTimes, updateTimes } from './BookingPage';
import { fetchAPI } from '../utils/api';

describe('Booking feature', () => {
  it('should render correctly', () => {
    render(<BookingForm availableTimes={availableTimes} />);

    const submitButtonElement = screen.getByText('Make Your reservation');
    expect(submitButtonElement).toBeInTheDocument();
  });

  it('should call onSubmit callback after click on submit button', () => {
    const onSubmit = jest.fn();
    render(<BookingForm availableTimes={availableTimes} onSubmit={onSubmit} />);

    const submitButtonElement = screen.getByText('Make Your reservation');
    submitButtonElement.click();
    expect(onSubmit).toHaveBeenCalled();
  });

  it('initializeTimes should return the correct array', () => {
    const result = initializeTimes();
    expect(result.map((opt) => opt.value)).toEqual(fetchAPI(new Date()));
  });

  it('updateTimes should return the correct array', () => {
    const result = updateTimes(testingDate);
    expect(result.map((opt) => opt.value)).toEqual(fetchAPI(testingDate));
  });

  it('should apply required validation to the date input', () => {
    render(<BookingForm availableTimes={availableTimes} />);

    const dateInputElement = screen.getByLabelText('Choose date');
    expect(dateInputElement).toBeRequired();
  });

  it('should apply required validation to the time input', () => {
    render(<BookingForm availableTimes={availableTimes} />);

    const dateInputElement = screen.getByLabelText('Choose time');
    expect(dateInputElement).toBeRequired();
  });

  it('should apply required validation to the occasion input', () => {
    render(<BookingForm availableTimes={availableTimes} />);

    const dateInputElement = screen.getByLabelText('Occasion');
    expect(dateInputElement).toBeRequired();
  });

  it('should apply min and max attributes to the guests input', () => {
    render(<BookingForm availableTimes={availableTimes} />);

    const guestsInput = screen.getByLabelText('Number of guests');
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
  });

  it('should validate date', () => {
    expect(validateDate()).toBe('Please select a date');
    expect(validateDate('2021-11-20')).toBe('Please select a future date');
    expect(validateDate('2023-02-26')).toBe('We are closed on Sundays');
    expect(validateDate('2023-02-27')).toBeNull();
  });

  it('should validate time', () => {
    expect(validateTime()).toBe('Please select a time');
    expect(validateTime('17:00')).toBeNull();
  });

  it('should validate guests', () => {
    expect(validateGuests()).toBe('Please enter a number');
    expect(validateGuests('abcd')).toBe('Please enter a number');
    expect(validateGuests('15')).toBe(
      'Number of guests must be between 1 and 10',
    );
    expect(validateGuests('-25')).toBe(
      'Number of guests must be between 1 and 10',
    );
    expect(validateGuests('3')).toBeNull();
  });

  it('should validate occasion', () => {
    expect(validateOccasion()).toBe('Please select an occasion');
    expect(validateOccasion('birthday')).toBeNull();
  });
});

const testingDate = new Date('2021-05-01');
const availableTimes = [
  { value: '17:00', label: '17:00' },
  { value: '18:00', label: '18:00' },
  { value: '19:00', label: '19:00' },
  { value: '20:00', label: '20:00' },
  { value: '21:00', label: '21:00' },
  { value: '22:00', label: '22:00' },
];
