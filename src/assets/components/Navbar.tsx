import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useFavorites } from "../Context/FavoriteContext";
const Navbar: React.FC = () => {
  const { favorites } = useFavorites();

  return (
    <>
      <ul className="navbar-nav ">
        <NavItem to="/" text="Home" />
        <NavItem to="/movies" text="Movies" />
        <NavItem to="/about" text="About" />
        <Navtems to="/favorites" count={favorites.length}></Navtems>
        <Outlet />
      </ul>
    </>
  );
};

interface NavItemProps {
  to: string;
  text: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, text }) => (
  <li className="nav-item d-flex ">
    <NavLink className="nav-link" to={to}>
      {text}
    </NavLink>
  </li>
);

interface NavItemWithIconProps {
  to: string;

  count: number;
}

const Navtems: React.FC<NavItemWithIconProps> = ({
  to,

  count,
}) => (
  <li className="nav-item">
    <NavLink className="nav-link nav-item" to={to}>
      {count !== 0 && <span className="me-2">{count} </span>} Favorites
    </NavLink>
  </li>
);

export default Navbar;
