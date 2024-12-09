import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Testimonials from "./components/Testimonials/Testimonials";
import Specials from "./components/Specials/Specials";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Main />
        <Specials />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
}

export default App;
