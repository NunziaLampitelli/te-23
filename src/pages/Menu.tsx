import { useState, useEffect } from "react";
import "./css-pages/main.css";
import PicOne from "../assets/pictures/hamburger.jpg";
import PicTwo from "../assets/pictures/fries.jpg";
import PicThree from "../assets/pictures/fish-and-chips.webp";
import Product from "../interfaces/Product";
import { Link } from "react-router-dom";

export default function Menu() {
	const [isDarkMode, setIsDarkMode] = useState(false); // variable to manage the theme of the page and the function that updates it's value. It starts with a boolean value that is false (so we start always we light mode)
	const [cart, setCart] = useState<Product[]>([]); // variable to manage the shopping cart, it should start with an array of objects that follows the Product interface and it should be empty

	// here is the function to get the saved data (linked to the word cart) in local Storage, to display in our shopping cart
	useEffect(() => {
		const storedCart = localStorage.getItem("cart");
		if (storedCart) {
			try {
				const parsedCart = JSON.parse(storedCart); //parse converts json data into a js object
				if (
					Array.isArray(parsedCart) &&
					parsedCart.every(
						(item) => item && item.id && item.title && item.price
					)
				) {
					//It verifies that the data saved in the array are objects that follow the Product arrey attributes
					console.log("Loaded cart from localStorage:", parsedCart); // log to check if the fetching went well
					setCart(parsedCart);
				} else {
					console.warn("Stored cart data is not valid, resetting cart.");
					setCart([]);
				}
			} catch (error) {
				console.error("Error parsing cart data from localStorage", error);
				setCart([]);
			}
		}
	}, []);

	// function to save an item in localStorage, with logs to check that it functioned properly and associating every item with the word cart
	useEffect(() => {
		console.log("Saving cart to localStorage:", cart);
		if (cart.length > 0) {
			localStorage.setItem("cart", JSON.stringify(cart));
		} else {
			localStorage.removeItem("cart"); // if it is empty then removes the "cart" from the local Storage
		}
	}, [cart]); // this useEffect function has to happen every time the cart value is updated

	const toggleTheme = () => {
		// function to change theme from the previous one (if dark -> light, if light -> dark)
		setIsDarkMode((prevMode) => !prevMode);
	};

	const products: Product[] = [
		//arrey of objects that follow the Product interfaces attributes
		{
			id: 1,
			title: "Hamburger",
			image: PicOne,
			description: "Best hamburger ever",
			price: 12,
		},
		{
			id: 2,
			title: "Fries",
			image: PicTwo,
			description: "Pommes frites but not from France",
			price: 8,
		},
		{
			id: 4,
			title: "Fish & Chips",
			image: PicThree,
			description: "Just like the ones in UK",
			price: 15,
		},
	];

	const addToCart = (product: Product) => {
		// function to add an item in the cart, it uses product as parameter and it has to be an object that follows the Product interface attributes
		setCart((prevCart) => [...prevCart, product]); // "..." is used to have a modifiable copy of the already existing cart and after the comma there is the parameter that has to be added in the new cart
	};

	const removeFromCart = (productId: number) => {
		// function to remove an item from the cart, productId becomes our parameter and it should be a number
		setCart((prevCart) => {
			// here we update the cart value, starting from the existing one
			const indexToRemove = prevCart.findIndex((p) => p.id === productId); //define a function that through the method "findIndex" iterates through every item in the cart with the parameter productId. If there is one matching the parameter p that gets iterated then
			if (indexToRemove !== -1) {
				// if the index found is not -1 (so it exists and has a value) then
				const updatedCart = [...prevCart]; // we create the function to update the cart when we have "removeFromCart" goes and we get a copy (...) of the existing cart
				updatedCart.splice(indexToRemove, 1); // we use the splice method to remove the item (the index found, and the number of objects to delete [1])
				return updatedCart; // updates the cart after removing the item
			}
			return prevCart; //else show the already existing cart as it was before the calling of the function
		});
	};

	const clearCart = () => {
		// localStorage function to remove all the saved data and show an empty arrey of the cart
		setCart([]);
	};

	return (
		<div className={`main ${isDarkMode ? "dark-mode" : "light-mode"}`}>
			<button onClick={toggleTheme}>
				{isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
			</button>

			<h2>Order take away</h2>

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
										{item.title} - {item.price} kr
										<button onClick={() => removeFromCart(item.id)}>
											Remove
										</button>
									</li>
								))}
							</ul>
						)}
						{cart.length > 0 && (
							<>
							<button onClick={clearCart} className="clear-cart">
								Clear Cart
							</button>
							<Link to="/checkout">
								<button className="pay-button">Pay</button>
							</Link>
							</>
						)}
					</section>
				</div>
			</div>
		</div>
	);
}
