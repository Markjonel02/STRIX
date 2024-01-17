import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useFavorites } from "../Context/FavoriteContext";
const Navbar = () => {
  const { favorites } = useFavorites();
  const i = <FontAwesomeIcon icon={faBell} />;
  return (
    <>
      <ul className="navbar-nav ml-auto ">
        <li className="nav-item ">
          <Link className="nav-link " to="/">
            Home
          </Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="/movies">
            Movies
          </Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link" to="/series">
            Series
          </Link>
        </li>
        <li className="nav-item  ">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>

        <li className="nav-item  ">
          <Link className="nav-link" to="/favorites">
            <span> Favorites {i}</span>
            {favorites.length == null ? (
              "d-none"
            ) : (
              <span>{favorites.length}</span>
            )}
          </Link>
        </li>
        <li className="nav-item  d-none">
          <Link className="nav-link d-none d-lg-block" to="/nopage">
            NoPage
          </Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Navbar;
