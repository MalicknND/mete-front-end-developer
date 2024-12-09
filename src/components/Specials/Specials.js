import "./specials.css";
import lemonDessert from "../../assets/lemon dessert.jpg";
import greekSalad from "../../assets/greek salad.jpg";
import bruchetta from "../../assets/bruchetta.svg";

function Specials() {
  const specialItems = [
    {
      id: 1,
      name: "Greek salad",
      price: "12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: greekSalad,
    },
    {
      id: 2,
      name: "Bruchetta",
      price: "5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      image: bruchetta,
    },
    {
      id: 3,
      name: "Lemon Dessert",
      price: "5.00",
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: lemonDessert,
    },
  ];

  return (
    <section className="specials">
      <div className="specials-header">
        <h1>This weeks specials!</h1>
        <button className="menu-button">Online Menu</button>
      </div>
      <div className="specials-grid">
        {specialItems.map((item) => (
          <div key={item.id} className="special-card">
            <img src={item.image} alt={item.name} className="card-image" />
            <div className="card-content">
              <div className="card-header">
                <h3>{item.name}</h3>
                <span className="price">${item.price}</span>
              </div>
              <p className="description">{item.description}</p>
              <button className="order-button">
                Order a delivery
                <span className="delivery-icon">🚗</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Specials;
