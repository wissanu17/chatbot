import React from 'react';
import { Link } from 'react-router-dom';
import './NavStyle.css';
import { Menu, MessageCircle, Home, Info, Phone } from 'lucide-react';
import kkuLogo from '../../src/image/kku.png';

function Nav() {
    return (
        <nav className="navbar">
    <div className="navbar-container">
        <div className="navbar-left">
            {/*<button className="menu-button" onClick={click}>
                <Menu size={24} />
            </button>*/}
            <Link to="/" className="brand">
                <img src={kkuLogo} alt="KKU Logo" className="brand-logo" />
                <span className="brand-name">KKU Chatbot</span>
            </Link>
        </div>

        <div className="navbar-group-right">
            <div className="navbar-center">
                <div className="nav-links">
                    <Link to="/" className="nav-link">
                        <Home size={18} />
                        <span>Home</span>
                    </Link>
                    {/*<Link to="/features" className="nav-link">
                        <MessageCircle size={18} />
                        <span>Features</span>
                    </Link>*/}
                    <Link to="/about" className="nav-link">
                        <Info size={18} />
                        <span>About</span>
                    </Link>
                    <Link to="/contact" className="nav-link">
                        <Phone size={18} />
                        <span>Contact</span>
                    </Link>
                </div>
            </div>

            <div className="navbar-right">
                <div className="status-indicator">
                    <span className="status-dot online"></span>
                    <span className="status-text">Online</span>
                </div>
            </div>
        </div>
    </div>
</nav>
    );
}

export default Nav;
