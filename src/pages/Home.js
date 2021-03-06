import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';

import '../styles/pages/Home.css';

export default function Home() {
  return (
    <>
        <Header />
        <main>
          <section className="resume-me">
            <h1>Bem Vindo ao CGRJOTATTOO</h1>
            <p>O Melhor estúdio de tatuagem da região centro-oeste do Rio de janeiro</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quas atque ea quod tenetur, veritatis asperiores cum pariatur, iusto in perspiciatis ullam nostrum eveniet modi a necessitatibus fugit vitae architecto..Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quas atque ea quod tenetur, veritatis asperiores cum pariatur, iusto in perspiciatis ullam nostrum eveniet modi a necessitatibus fugit vitae architecto..Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quas atque ea quod tenetur, veritatis asperiores cum pariatur, iusto in perspiciatis ullam nostrum eveniet modi a necessitatibus fugit vitae architecto..</p>
            
            <div className='buttons'>
              <Link to="/about"><Button title="Sobre nós"></Button></Link>
              <Link to="/contacts"><Button title="Faça seu orçamento"></Button></Link>
            </div>
          </section>
        </main>
        <Footer />
    </>
  );
}
