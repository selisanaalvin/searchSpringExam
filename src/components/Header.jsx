import '../styling/header-style.css';
import SearchBar from "./SearchBar";
import Logo from '../assets/img/searchSpringlogo.png'
const Header = () => {

    return (
        <header className="header">
        <div className="logo">
          <img src={Logo} alt="SearchSpring Logo" />
        </div>
        <div className="search-bar">
          <SearchBar/>
        </div>
      </header>
    )

}
export default Header;