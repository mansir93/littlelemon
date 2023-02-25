import Head from './components/Head';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from './pages/ConfirmedBooking';

function App() {
  return (
    <>
      <Head />

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/booking/confirmed" element={<ConfirmedBooking />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
