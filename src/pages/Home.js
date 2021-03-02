import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';

import '../styles/pages/Home.css';
import FirstCard from '../assets/card1.jpg';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="resume-me">
          <h1>Bem Vindo ao CGRJOTATTOO</h1>
          <p>O Melhor estúdio de tatuagem da região centro-oeste do Rio de janeiro</p>
          <div className="buttons">
            <Button title="Saiba mais" />
            <Button title="Faça seu orçamento" />
          </div>
        </section>
        <section className="better-jobs">
          <h2>Siga abaixo com algum dos nossos trabalhos:</h2>
         <div className="cards">
            <Card src={FirstCard} alt="Angel Cry" />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
         </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
