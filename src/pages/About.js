import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

import FirstCard from '../assets/card1.jpg';
import SecondCard from '../assets/card2.jpeg';

import '../styles/pages/About.css';

function About() {
  return (
    <>
      <Header />
      <div>
        <section className="better-jobs">
          <h2>Siga abaixo com algum dos nossos trabalhos:</h2>
          <div className="cards">
            <Card src={FirstCard} alt="Angel Cry" />
            <Card  />
            <Card />
            <Card />
            <Card />
            <Card src={SecondCard} alt="Portrait" />
            </div>
          </section>
      </div>
      <Footer />
    </>
  );
}

export default About;