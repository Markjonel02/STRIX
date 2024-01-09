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
            Favorites
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="red"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
              />
            </svg>
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
