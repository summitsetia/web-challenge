import './Nav.css';
import logo from './desktop/logo.svg';

export default function Nav() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-navigation"> 
          <img src={logo} alt='hi'/>
          <ul className="nav-elements">
            <li className="list-items">About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </nav>
        <div className="sub-heading-container">
          <p className="sub-heading">IMMERSIVE EXPERIENCES THAT DELIVER</p>
        </div>
      </header>
    </div>
  );
}
