import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function SNavbar() {
  return (
    <nav>
      <div className="container-fluid">
        <div className="row navbar">
          <div className="col-md-3 logo">
            <Link to="/GuestHome" className="navbar-brand"><img className='logo' src={logo} alt='Logo' /></Link>
          </div>
          <div className="col-md-9 nav_items">
            <ul className="nav justify-content-center align align-items-center">
              <li className="nav-item">
                <Link to="/GuestHome" className="nav-link active">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">Join With Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">Grab Your Gears</Link>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link">About Us</Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link">Contact Us</Link>
              </li>
              <li className="nav-item">
                <button type="button" class="signin "><Link to="/login" className="nav-btn">Sign In</Link></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default SNavbar;
