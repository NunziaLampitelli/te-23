import { useState } from "react";
import "./css-pages/main.css";
import PicOne from "../assets/pictures/hamburger.jpg";
import PicTwo from "../assets/pictures/fries.jpg";
import PicThree from "../assets/pictures/fish-and-chips.webp";
import Product from "../interfaces/Product";

export default function Main() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const products: Product[] = [
    { id: 1, title: "Hamburger", image: PicOne, description: "Juicy beef burger", price: 12 },
    { id: 2, title: "Fries", image: PicTwo, description: "Crispy golden fries", price: 8 },
    { id: 3, title: "Fish & Chips", image: PicThree, description: "Classic British dish", price: 15 },
  ];

  return (
    <div className={`main ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <button onClick={toggleTheme}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>

      <h2>Welcome to our store!</h2>
      <p>Explore our amazing products.</p>

      <section className="products-container">
        {products.map((product) => (
          <article key={product.id} className={`product-card ${isDarkMode ? "dark-card" : "light-card"}`}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.price}€</p>
          </article>
        ))}
      </section>
    </div>
  );
}
