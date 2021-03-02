import { Link } from 'react-router-dom';
import '../../styles/components/Header.css';

function Header() {
  return (
    <header>
      <div id="logo">
        <Link to="/">CGRJOTATTOO</Link>
      </div>
      <div className="header-link">
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
      </div>
    </header>
  );
}

export default Header;

