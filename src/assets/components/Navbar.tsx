import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFavorites } from "../Context/FavoriteContext";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  const { favorites } = useFavorites();
  const heartIcon = <FontAwesomeIcon icon={faHeart} />;

  return (
    <ul className="navbar-nav">
      <NavItem to="/" text="Home" />
      <NavItem to="/movies" text="Movies" />
      <NavItem to="/series" text="Series" />
      <NavItem to="/about" text="About" />
      <NavItemWithIcon
        to="/favorites"
        icon={heartIcon}
        count={favorites.length}
      />
      <Outlet />
    </ul>
  );
};

interface NavItemProps {
  to: string;
  text: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, text }) => (
  <li className="nav-item">
    <NavLink className="nav-link" to={to}>
      {text}
    </NavLink>
  </li>
);

interface NavItemWithIconProps {
  to: string;
  icon: React.ReactNode;
  count: number;
}

const NavItemWithIcon: React.FC<NavItemWithIconProps> = ({
  to,
  icon,
  count,
}) => (
  <li className="nav-item">
    <NavLink className="nav-link nav-item" to={to}>
      <span>{icon}</span>
      {count !== 0 && <span>{count}</span>}
    </NavLink>
  </li>
);

export default Navbar;
