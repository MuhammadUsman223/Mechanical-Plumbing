import "./Navbar.css";

import procorelogo from "../../assets/ProcoreLogo.png";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#service">Service</a>
    </p>
    <p>
      <a href="#about us">About us</a>
    </p>
    <p>
      <a href="#payment">Payment</a>
    </p>
    <p>
      <a href="#testimonials">Testimonials</a>
    </p>
    <p>
      <a href="#samples">Samples</a>
    </p>
    <p>
      <a href="#estimation fee">Estimation fee</a>
    </p>
    <p>
      <a href="#contact us">Contact us</a>
    </p>
  </>
);

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <img src={procorelogo} alt="procorelogo" />
        </div>
        <div className="navbar-links">
          <Menu />
        </div>
        <button className="navbar-btn">Get Estimate</button>
      </div>
    </>
  );
};
export default Navbar;
