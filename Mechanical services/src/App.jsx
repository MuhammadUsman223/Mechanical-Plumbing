import "./App.css";
import Header from "./Containers/Header/Header";
import MechanicalEdata from "./Containers/MechanicalEdata/MechanicalEdata";
import PlumbingEdata from "./Containers/PlumbingEdata/PlumbingEdata";
import BenefitsServices from "./Containers/BenefitsServices/BenefitsServices";
import GetStarted from "./Containers/GetStarted/GetStarted";
import Trades from "./Containers/Trades/Trades";
import ContactUs from "./Containers/ContactUs/ContactUs";
import Footer from "./Containers/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <MechanicalEdata />
      <PlumbingEdata />
      <BenefitsServices />
      <GetStarted />
      <Trades />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;
