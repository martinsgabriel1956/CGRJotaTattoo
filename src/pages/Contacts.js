import { useState } from "react";
import { db } from "../firebase";

import { InputGroup } from "../components/Form/InputGroup";

import Footer from "../components/Footer";
import Button from "../components/Button";

import "../styles/pages/Contacts.css";

function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState(null);
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    db.collection("contacts")
      .add({
        name,
        email,
        telephone,
        message,
      })
      .then(() => {
        alert("Message has been submitted");
      })
      .catch((err) => {
        alert(err.message);
      });

    setName("");
    setEmail("");
    setTelephone(null);
    setMessage("");
  }
  return (
    <>
      <div className="appointment">
        <div className="appointment-form">
          <form onSubmit={handleSubmit}>
            <InputGroup
              htmlFor="name"
              type="text"
              id="name"
              title="Nome Completo: *"
              placeholder="Digite seu nome"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <InputGroup
              htmlFor="email"
              type="email"
              id="email"
              title="Email: *"
              placeholder="Digite seu email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <InputGroup
              htmlFor="tel"
              type="tel"
              id="tel"
              title="Telefone: *"
              placeholder="Digite seu telefone"
              required
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
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
              onChange={(e) => setMessage(e.target.value)}
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
