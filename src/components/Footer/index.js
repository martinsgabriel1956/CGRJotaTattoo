import { Link } from 'react-router-dom';
import '../../styles/components/Footer.css';

import WhatsLogo from '../../assets/whatsapp.svg';
import Instagram from '../../assets/instagram.svg';
import Facebook from '../../assets/facebook.svg';

function Footer() {
  return (
    <footer>
      <div className="creators">
        <h3>Desenvolvido por:</h3>
        <p>&copy;<a href="https://www.instagram.com/martinsgabriel99">Gabriel Martins</a> &amp; <a href="https://www.instagram.com/rafaelbertolano/">Rafael Bertolano</a></p>
      </div>
      <section className="link-contacts">
          <h4>Fique ligado em nossa redes sociais abaixo:</h4>
          <Link to="#" title="Whatsapp"><img src={WhatsLogo} alt="Whatsapp"/></Link>
          <Link to="#" title="Instagram"><img src={Instagram} alt="Instagram"/></Link>
          <Link to="#" title="Facebook"><img src={Facebook} alt="Facebook"/></Link>
      </section>
    </footer>
  );
}

export default Footer;
