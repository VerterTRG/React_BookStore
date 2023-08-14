import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.scss"

const Header = () => {
    return (
        <div className="header">
            <SearchBar />
            <NavBar />
        </div>
    )
}

export default Header;