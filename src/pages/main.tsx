import { useState, useEffect } from "react";
import "./css-pages/main.css";
import PicOne from "../assets/pictures/hamburger.jpg";
import PicTwo from "../assets/pictures/fries.jpg";
import PicThree from "../assets/pictures/fish-and-chips.webp";
import Product from "../interfaces/Product";

export default function Main() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [cart, setCart] = useState<Product[]>([]);

	useEffect(() => {
		const storedCart = localStorage.getItem("cart");
		if (storedCart) {
			setCart(JSON.parse(storedCart));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	const toggleTheme = () => {
		setIsDarkMode((prevMode) => !prevMode);
	};

	const products: Product[] = [
		{
			id: 1,
			title: "Hamburger",
			image: PicOne,
			description: "Juicy beef burger",
			price: 12,
		},
		{
			id: 2,
			title: "Fries",
			image: PicTwo,
			description: "Crispy golden fries",
			price: 8,
		},
		{
			id: 4,
			title: "Fish & Chips",
			image: PicThree,
			description: "Classic British dish",
			price: 15,
		},
		{
			id: 1,
			title: "Hamburger",
			image: PicOne,
			description: "Juicy beef burger",
			price: 12,
		},
		{
			id: 5,
			title: "Fries",
			image: PicTwo,
			description: "Crispy golden fries",
			price: 8,
		},
		{
			id: 6,
			title: "Fish & Chips",
			image: PicThree,
			description: "Classic British dish",
			price: 15,
		},
	];

	const addToCart = (product: Product) => {
		setCart((prevCart) => [...prevCart, product]);
	};

	const removeFromCart = (productId: number) => {
		setCart((prevCart) => {
			const indexToRemove = prevCart.findIndex((p) => p.id === productId);
			if (indexToRemove !== -1) {
				const updatedCart = [...prevCart];
				updatedCart.splice(indexToRemove, 1);
				return updatedCart;
			}
			return prevCart;
		});
	};

	const clearCart = () => {
		setCart([]);
	};

	return (
		<div className={`main ${isDarkMode ? "dark-mode" : "light-mode"}`}>
			<button onClick={toggleTheme}>
				{isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
			</button>

			<div className="main-container">
				<section className="products-container">
					{products.map((product) => (
						<article
							key={product.id}
							className={`product-card ${
								isDarkMode ? "dark-card" : "light-card"
							}`}
						>
							<img src={product.image} alt={product.title} />
							<h3>{product.title}</h3>
							<p>{product.description}</p>
							<p>{product.price}€</p>
							<button onClick={() => addToCart(product)}>Add to Cart</button>
						</article>
					))}
				</section>

				<div className="cart-container">
					<div className="cart-icon">
						🛒
						{cart.length > 0 && (
							<span className="cart-count">{cart.length}</span>
						)}
					</div>

					<section className="cart-section">
						<h3>Your Cart</h3>
						{cart.length === 0 ? (
							<p className="empty-cart-message">No products selected</p>
						) : (
							<ul>
								{cart.map((item, index) => (
									<li key={index}>
										{item.title} - {item.price}€
										<button onClick={() => removeFromCart(item.id)}>
											Remove
										</button>
									</li>
								))}
							</ul>
						)}
						{cart.length > 0 && (
							<button onClick={clearCart} className="clear-cart">
								Clear Cart
							</button>
						)}
					</section>
				</div>
			</div>
		</div>
	);
}
