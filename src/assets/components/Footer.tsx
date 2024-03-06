/* import logo from "../img/logo2.png"; */
const Footer = () => {
  /*   const img = {
    imgURL: logo,
    size: {
      height: "auto",
      width: 200,
    },
  };
 */
  const footerStyle: React.CSSProperties = {
    color: "#fff",
    paddingBottom: "40px",
  };

  return (
    <>
      <footer
        style={footerStyle}
        className="container-fluid bg-black d-flex d-block mt-2 p-5"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 item text" style={{ marginBottom: "0px" }}>
              <h1 className=" fw-bold mb-3 ">
                Movie<span className="text-danger">Strix</span>
              </h1>
              <p>
                “To make MovieStrix the biggest local and international hits.”
                <br />
                All here from MovieStrix
              </p>
            </div>
            <div className=" about-links col-sm-6 col-md-3 item fw-medium  list-unstyled  ">
              <h3 className=" fw-semibold">About</h3>
              <ul>
                <li>
                  <a href="#" className="">
                    Company
                  </a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item fw-medium  ">
              <h3 className="fw-semibold">Services</h3>
              <ul>
                <li>
                  <a href="#">Monitoring</a>
                </li>
                <li>
                  <a href="#">Development</a>
                </li>
                <li>
                  <a href="#">Reporting</a>
                </li>
              </ul>
            </div>
          </div>

          <div></div>
        </div>
      </footer>
      <div className="Credits   text-light d-flex bg-dark">
        <p className="container copyright d-flex mt-4 fs-5 fw-light ms-5 mx-5 ps-5 ">
          MovieStrix © 2024
        </p>
      </div>
    </>
  );
};

export default Footer;
