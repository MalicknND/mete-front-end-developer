import "./testimonials.css";
function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        <div className="testimonial">
          <img src="user1.jpg" alt="User 1" />
          <p>Rating: ★★★★★</p>
          <p>"The food was amazing!"</p>
        </div>
        <div className="testimonial">
          <img src="user2.jpg" alt="User 2" />
          <p>Rating: ★★★★☆</p>
          <p>"Great atmosphere and service."</p>
        </div>
        <div className="testimonial">
          <img src="user3.jpg" alt="User 3" />
          <p>Rating: ★★★★★</p>
          <p>"Best dining experience ever."</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
