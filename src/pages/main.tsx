import { useState, useEffect } from "react";
import "./css-pages/main.css";
import PicOne from "../assets/pictures/hamburger.jpg";
import PicTwo from "../assets/pictures/fries.jpg";
import PicThree from "../assets/pictures/fish-and-chips.webp";
import Product from "../interfaces/Product";

export default function Main() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const products: Product[] = [
  { id: 1, title: "Hamburger", image: PicOne, description: "Best", price: 12 },
  { id: 2, title: "fries", image: PicTwo, description: "fries", price: 8},
  { id: 3, title: "fish", image: PicThree, description: "fish", price: 10}
  ];

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
		<div className={`main ${isDarkMode ? "dark-mode" : "light-mode"}`}>
			<button onClick={toggleTheme}>
				{isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
			</button>

			<h2>Here is the perfect menu!</h2>
			<section className="products-container">
				{products.map((product) => (
					<article
						key={product.id}
						className={`product-card ${
							isDarkMode ? "dark-card" : "light-card"
						}`}
					>
						<img src={product.image} alt={`product.title image`} />
            <p>{product.description}</p>
            <p>{product.price} $</p>
					</article>
				))};
			</section>
		</div>
	);
}