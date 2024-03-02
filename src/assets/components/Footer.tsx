import logo from "../img/logo2.png";
const Footer = () => {
  const img = {
    imgURL: logo,
    size: {
      height: "auto",
      width: 200,
    },
  };

  const footerStyle: React.CSSProperties = {
    color: "#fff",
    paddingBottom: "40px",
  };

  return (
    <>
      <footer style={footerStyle} className="bg-black  mt-2 py-5">
        <div className="container p-5">
          <div className="row">
            <div className="col-md-6 item text" style={{ marginBottom: "0px" }}>
              <img src={img.imgURL} alt="sample" style={img.size} />
              <p>
                “To make MovieFlix the biggest local and international hits.”
                <br />
                All here from MovieFlix
              </p>
            </div>
            <div className=" about-links col-sm-6 col-md-3 item fw-light list-unstyled  ">
              <h3>About</h3>
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
            <div className="col-sm-6 col-md-3 item fw-light ">
              <h3>Services</h3>
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

          <p className="copyright d-flex mt-4 fs-5 fw-light ">
            MovieFlix © 2024
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
