import "./header.css";
import Logo from "../../assets/Logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="header-wrapper">
        <a href="/" className="logo-container">
          <img src={Logo} alt="Little Lemon logo" className="logo" />
        </a>
        <nav className="nav-menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/order">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
