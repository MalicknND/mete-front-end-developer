import BookingForm from "../components/BookingForm";
import "../styles/BookingPage.css";

function BookingPage() {
  return (
    <main className="booking-page">
      <section className="booking-section">
        <div className="booking-content">
          <h1>Reserve a Table</h1>
          <BookingForm />
        </div>
      </section>
    </main>
  );
}

export default BookingPage;
