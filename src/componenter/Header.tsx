import "./css-components/header.css"
import CatPic from "../assets/pictures/pet.png";
import { Link } from "react-router-dom";


function Header() {

    return (
        <div className="header">
            <img src={CatPic} alt="logo" />
        <h1>The Purrfect restaurant</h1>
        <nav>
            <Link to="/menu">Menu</Link>
            <Link to="/checkout">Shopping cart</Link>
            <a href="">Contacts</a>
        </nav>
        </div>
    )
}

export default Header;