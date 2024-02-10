import deadpool from "../img/About-img/deadpool-removebg-preview.png";
const About = () => {
  return (
    <>
      <div className="about-container about mt-5 py-5 d-flex  justify-content-center ">
        <h1 className="mt-2 text-light">About Developer</h1>

        <div className="img-container">
          <img src={deadpool} alt="" />
        </div>
      </div>
    </>
  );
};

export default About;
