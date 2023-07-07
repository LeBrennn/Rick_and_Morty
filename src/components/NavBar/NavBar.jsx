import SearchBar from "../SearchBar/SearchBar";
import style from './NavBar.module.css';
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ onSearch }) => {
  return (
    <div className={style.nav}>     

      <Link to="/home">
        <button className={style.homeButton}>Home</button>
      </Link>

      <NavLink to="/about">
        <button className={style.aboutButton}>About</button>
      </NavLink>

      <NavLink to='/favorites'>
        <button className={style.FavoritesButton}>Favorites</button>
      </NavLink>

      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default NavBar;
