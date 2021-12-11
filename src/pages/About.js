import Footer from "../components/Footer";
import Card from "../components/Card";

import FirstCard from "../assets/card1.jpg";
import SecondCard from "../assets/card2.jpeg";
import ThirdCard from "../assets/card3.jpg";
import FourthCard from "../assets/card4.jpg";
import FifthCard from "../assets/card5.jpg";
import SixthCard from "../assets/card9.jpg";
import SeventhCard from "../assets/card7.jpg";
import EighthCard from "../assets/card8.jpg";

import "../styles/pages/About.css";

function About() {
  return (
    <>
      <div>
        <section className="better-jobs">
          <h2>Siga abaixo com algum dos nossos trabalhos:</h2>
          <div className="cards">
            <Card src={FirstCard} alt="Angel Cry" />
            <Card src={SecondCard} alt="Angel Cry" />
            <Card src={ThirdCard} alt="Angel Cry" />
            <Card src={FourthCard} alt="Angel Cry" />
            <Card src={FifthCard} alt="Angel Cry" />
            <Card src={SixthCard} alt="Angel Cry" />
            <Card src={SeventhCard} alt="Angel Cry" />
            <Card src={EighthCard} alt="Portrait" />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default About;
