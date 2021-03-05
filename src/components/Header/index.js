import { Link } from 'react-router-dom';
import '../../styles/components/Header.css';

import Instagram from '../../assets/instagram.svg';
import Facebook from '../../assets/facebook.svg';

function Header() {
  return (
    <header>
      <div id="logo">
        <Link to="/">CGRJOTATTOO</Link>
      </div>
      <div className="social-links">
          <Link to="#" title="Instagram"><img src={Instagram} alt="Instagram"/></Link>
          <Link to="#" title="Facebook"><img src={Facebook} alt="Facebook"/></Link>
      </div>
    </header>
  );
}

export default Header;

