import "./footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="column">
        <h3>Little Lemon</h3>
        <p>123 Main Street</p>
        <p>Chicago, IL 60601</p>
        <p>&copy; 2024 Little Lemon</p>
      </div>
      <div className="column">
        <h3>Contact</h3>
        <p>Phone: (123) 456-7890</p>
        <p>Email: contact@littlelemon.com</p>
      </div>
      <div className="column">
        <h3>Social Media Links</h3>
        <ul>
          <li>
            <a href="/facebook">Facebook</a>
          </li>
          <li>
            <a href="/instagram">Instagram</a>
          </li>
          <li>
            <a href="/twitter">Twitter</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
