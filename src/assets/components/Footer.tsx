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
    backgroundColor: "rgb(40, 45, 50)",
    color: "#6b757dff",
    paddingBottom: "40px",
  };

  return (
    <>
      <footer style={footerStyle} className="bg-black text-secondary ">
        <div className="container text-secondary">
          <div className="row">
            <div className="col-md-6 item text" style={{ marginBottom: "0px" }}>
              <img src={img.imgURL} alt="sample" style={img.size} />
              <p>
                “To make MovieFlix the biggest local and international hits.”
                <br />
                All here from MovieFlix
              </p>
            </div>
            <div className="col-sm-6 col-md-3 item fw-light list-unstyled  ">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#" style={{ color: "#6b757dff" }}>
                    Company
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "#6b757dff" }}>
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "#6b757dff" }}>
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item fw-light ">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#" style={{ color: "#6b757dff" }}>
                    Monitoring
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "#6b757dff" }}>
                    Development
                  </a>
                </li>
                <li>
                  <a href="#" style={{ color: "#6b757dff" }}>
                    Reporting
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div></div>
          <strong className="d-flex justify-content-center align-content-end mt-4 ">
            <p className="copyright" style={{ color: "#6b757dff" }}>
              MovieFlix © 2024
            </p>
          </strong>
        </div>
      </footer>
    </>
  );
};

export default Footer;
