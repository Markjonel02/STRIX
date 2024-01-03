import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
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
            Favorites <i className="bi bi-bell"></i>
          </Link>
        </li>
        <li className="nav-item  d-none">
          <Link className="nav-link d-none d-lg-block" to="/nopage">
            NoPage
          </Link>
        </li>
        <li className="nav-item  ">
          <form className="d-flex " role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Navbar;
