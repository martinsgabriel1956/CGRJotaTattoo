
import { useState } from 'react';
import { db } from '../firebase';

import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";

import "../styles/pages/Contacts.css";

function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState();
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    db.collection('contacts').add ({
      name,
      email,
      telephone,
      message,
    }).then(() => {
      alert('Message has been submitted')
    }).catch(err => {
      alert(err.message)
    })

    setName('')
    setEmail('')
    setTelephone()
    setMessage('')
  }
  return (
    <>
      <Header />
      <div className="appointment">
        <div className="appointment-form">
          <form onSubmit={handleSubmit} >
            <label htmlFor="name">Nome Completo: *</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Digite seu nome" 
              required 
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <label htmlFor="email">Email: *</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Digite seu email" 
              required 
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <label htmlFor="tel">Telefone: *</label>
            <input 
              type="tel" 
              id="tel" 
              placeholder="Digital seu Telefone" 
              required 
              value={telephone}
              onChange={e => setTelephone(e.target.value)}
              maxLength='11'
            />
            <label htmlFor="message">Deixe sua mensagem: *</label>
            <textarea
              name="message"
              cols="30"
              rows="10"
              maxLength="300"
              minLength="3"
              placeholder="Faça o seu orçamento"
              required
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            ></textarea>
            <Button type="submit" title="Enviar" />
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contacts;
