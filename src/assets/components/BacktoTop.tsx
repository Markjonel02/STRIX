import { useEffect, useState } from "react";

const BacktoTop = () => {
  const [isVisible, setisVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setisVisible(!isVisible);
      } else {
        setisVisible(isVisible);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  const ScrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={`back-to-top ${isVisible ? "visible" : ""}`}>
        <button onClick={ScrolltoTop} id="top">
          Back to Top
        </button>
      </div>
    </>
  );
};

export default BacktoTop;
