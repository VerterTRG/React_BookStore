import { Link } from "react-router-dom";
import ThemeToggler from "../ThemeToggler/ThemeToggler";
import "./NavBar.scss"

const NavBar = () => {
    return (
        <div className="nav">
            <Link to="/" title="Home">Home</Link>
            <Link to="/about" title="About">About us</Link>
            <Link to="/about" title="About">About us</Link>
            <ThemeToggler />
        </div>
    )
}

export default NavBar;