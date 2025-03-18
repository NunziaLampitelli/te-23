import "./css-components/header.css"
import CatPic from "../assets/pictures/pet.png"

function Header() {

    return (
        <div className="header">
            <img src={CatPic} alt="logo" />
        <h1>The Purrfect restaurant</h1>
        <nav>
            <a href="">Menu</a>
            <a href="">Shopping cart</a>
            <a href="">Contacts</a>
        </nav>
        </div>
    )
}

export default Header;