import BookingForm from "../components/BookingForm";
import "../styles/BookingPage.css";
import { useReducer } from "react";
import { initializeTimes, updateTimes } from "../reducers/bookingReducer";

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  return (
    <main className="booking-page">
      <section className="booking-section">
        <div className="booking-content">
          <h1>Reserve a Table</h1>
          <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        </div>
      </section>
    </main>
  );
}

export default BookingPage;
