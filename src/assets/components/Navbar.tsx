import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
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
    <NavLink className="nav-link" to={to} onClick={() => scrollToTop()}>
      {text}
    </NavLink>
  </li>
);

interface NavItemWithIconProps {
  to: string;
}

const Navtems: React.FC<NavItemWithIconProps> = ({ to }) => (
  <li className="nav-item">
    <NavLink
      className="nav-link nav-item"
      to={to}
      onClick={() => scrollToTop()}
    >
      Favorites
    </NavLink>
  </li>
);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default Navbar;
