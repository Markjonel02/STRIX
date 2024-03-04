import React from "react";
import { Outlet, NavLink } from "react-router-dom";
/* import { useFavorites } from "../Context/FavoriteContext"; */
const Navbar: React.FC = () => {
  /* nst { favorites } = useFavorites(); */

  return (
    <>
      <ul className="navbar-nav me-4 ">
        <NavItem to="/" text="Home" />
        <NavItem to="/movies" text="Movies" />
        <NavItem to="/about" text="About" />
        <Navtems to="/favorites"></Navtems>
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
}

const Navtems: React.FC<NavItemWithIconProps> = ({ to }) => (
  <li className="nav-item">
    <NavLink className="nav-link nav-item" to={to}>
      Favorites
    </NavLink>
  </li>
);

export default Navbar;
