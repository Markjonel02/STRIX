import Img from "../../img/logo2.png";
import Navbar from "./Navbar";

//routes

//img object
const img = {
  size: 200,
  altname: "logo",
};
export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary d-flex justify-content-center  ">
        <div className="container-fluid">
          <img src={Img} alt={img.altname} style={{ width: img.size }} />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-4 " id="navbarNav">
            <Navbar />
          </div>
         
        </div>
      </nav>
    </>
  );
};
