import { Link } from 'react-router-dom';
import '../../styles/components/Footer.css';

import WhatsLogo from '../../assets/whatsapp.svg';
import Instagram from '../../assets/instagram.svg';
import Facebook from '../../assets/facebook.svg';

function Footer() {
  return (
    <footer>
      <section className="footer-link">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
      </section>
      <section className="link-contacts">
        <p>
          <Link to="#" title="Whatsapp"><img src={WhatsLogo} alt="Whatsapp"/></Link>
        </p>
        <p>
          <Link to="#" title="Instagram"><img src={Instagram} alt="Instagram"/></Link>
        </p>
        <p>
          <Link to="#" title="Facebook"><img src={Facebook} alt="Facebook"/></Link>
        </p>
      </section>

      <div className="creators">
        <p>Criado por Gabriel Martins e Rafael Bertolano</p>
      </div>
    </footer>
  );
}

export default Footer;
