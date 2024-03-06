import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const predefinedStyles = {
  backgroundColor: "background-color: rgba(17, 25, 40, 0.15)",
  backdropFilter: "backdrop-filter: blur(1px) saturate(170%)",
  WebkitBackdropFilter: "-webkit-backdrop-filter: blur(1px) saturate(170%)",
};

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isScrolling = scrollPosition > 100;

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark fixed-top pt-3 ${
        isScrolling ? "bg-dark shadow" : {}
      }`}
      style={isScrolling ? {} : predefinedStyles}
    >
      <div className="container-fluid d-flex justify-content-between ">
        <div className="img-container ">
          {/* <h6 className="fw-bolder fs-2 text-light  ms-md-5  ">
            {" "}
            <i>STRIX</i>
          </h6> */}
          <svg
            width="150"
            viewBox="0 0 3984 1158"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=" ms-md-5 "
          >
            <path
              d="M288 935.2C248.733 935.2 211.05 932.35 174.95 926.65C138.85 920.95 105.917 913.033 76.15 902.9C47.0167 892.133 21.6833 880.417 0.149998 867.75L86.6 702.45C111.3 716.383 136 728.1 160.7 737.6C186.033 746.467 211.05 753.117 235.75 757.55C261.083 761.983 286.1 764.2 310.8 764.2C330.433 764.2 346.583 762.617 359.25 759.45C372.55 756.283 382.367 751.85 388.7 746.15C395.667 739.817 399.15 732.85 399.15 725.25C399.15 715.117 393.45 706.883 382.05 700.55C370.65 694.217 355.45 688.517 336.45 683.45C318.083 678.383 297.5 673.317 274.7 668.25C252.533 662.55 230.05 655.583 207.25 647.35C184.45 638.483 163.55 627.4 144.55 614.1C126.183 600.8 111.3 584.017 99.9 563.75C88.5 543.483 82.8 518.783 82.8 489.65C82.8 438.983 96.1 394.967 122.7 357.6C149.933 320.233 188.567 291.417 238.6 271.15C289.267 250.25 349.433 239.8 419.1 239.8C468.5 239.8 514.417 244.867 556.85 255C599.917 264.5 636.967 278.433 668 296.8L587.25 460.2C560.65 443.733 531.517 431.383 499.85 423.15C468.817 414.917 437.15 410.8 404.85 410.8C383.317 410.8 365.267 413.017 350.7 417.45C336.133 421.25 325.05 426.633 317.45 433.6C310.483 440.567 307 447.85 307 455.45C307 465.583 312.7 474.133 324.1 481.1C335.5 487.433 350.7 493.133 369.7 498.2C388.7 502.633 409.283 507.7 431.45 513.4C454.25 518.467 476.733 525.117 498.9 533.35C521.7 540.95 542.6 551.4 561.6 564.7C580.6 577.367 595.8 593.833 607.2 614.1C618.6 633.733 624.3 658.117 624.3 687.25C624.3 736.65 610.683 780.033 583.45 817.4C556.217 854.133 517.267 882.95 466.6 903.85C416.567 924.75 357.033 935.2 288 935.2ZM783.388 920L881.238 428.85H686.488L721.638 255H1335.34L1300.19 428.85H1105.44L1007.59 920H783.388ZM1260.57 920L1393.57 255H1691.87C1779.9 255 1847.99 274.317 1896.12 312.95C1944.25 350.95 1968.32 404.467 1968.32 473.5C1968.32 529.233 1954.39 578 1926.52 619.8C1899.29 661.6 1860.34 694.217 1809.67 717.65C1759.64 741.083 1700.42 752.8 1632.02 752.8H1417.32L1537.02 658.75L1484.77 920H1260.57ZM1667.17 920L1530.37 677.75H1761.22L1899.92 920H1667.17ZM1531.32 685.35L1452.47 583.7H1643.42C1674.45 583.7 1698.52 576.1 1715.62 560.9C1732.72 545.067 1741.27 523.217 1741.27 495.35C1741.27 471.283 1733.67 454.183 1718.47 444.05C1703.9 433.283 1683.64 427.9 1657.67 427.9H1483.82L1603.52 323.4L1531.32 685.35ZM1968.43 920L2101.43 255H2325.63L2192.63 920H1968.43ZM2237.86 920L2613.11 508.65L2583.66 638.8L2383.21 255H2622.61L2738.51 491.55L2641.61 493.45L2846.81 255H3099.51L2748.96 641.65L2756.56 515.3L2975.06 920H2732.81L2612.16 671.1L2713.81 673L2505.76 920H2237.86Z"
              fill="white"
            />
            <path
              d="M3035.39 377.169C2808.55 507.584 2566.15 917.134 2433.87 1126.01C2543.81 663.959 2581.95 458.482 2815.07 251.415C3193.92 -85.1035 3793.99 141.103 3903.48 291.263C3806.78 215.763 3446.23 140.961 3035.39 377.169Z"
              fill="#FF0000"
            />
          </svg>
        </div>

        <div className="button">
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
        </div>

        <div
          className="collapse navbar-collapse justify-content-end me-5"
          id="navbarNav"
        >
          <Navbar />
        </div>
      </div>
    </nav>
  );
};

export default Header;
