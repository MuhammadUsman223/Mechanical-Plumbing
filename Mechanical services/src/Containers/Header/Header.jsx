import "./header.css";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Navbar from "../../Components/Navbar/Navbar";
import headerimg from "../../assets/Headerimg.png";

const Header = () => {
  return (
    <>
      <AboutUs />
      <Navbar />
      <div
        className="header-text-bgimg"
        style={{
          backgroundImage: `linear-gradient(90deg, #FF7518 0%, rgba(210, 210, 210, 0) 65%),
          url(${headerimg})`,
          backgroundSize: "cover",
        }}
      >
        <p className="header-text">Mechanical/Plumbing</p>
      </div>
      <p className="header-mainparagraph">
        At
        <span style={{ color: "#ff7518", fontWeight: "bold" }}>
          Procore Estimators
        </span>
        Procore Estimators, our area of expertise lies in delivering precise and
        dependable mechanical and plumbing estimates. Our seasoned team of
        estimators grasps the complexities of mechanical and plumbing systems,
        offering all-encompassing and thorough estimates for your projects.
        Catering to both residential and commercial constructions, we factor in
        equipment, materials, labor, and project-specific requirements. Our
        unwavering commitment to providing vital information enables our clients
        to make well-informed decisions to ensure the success of their projects.
        Our mechanical and plumbing estimates form the bedrock of a triumphant
        construction project.
      </p>
    </>
  );
};
export default Header;
