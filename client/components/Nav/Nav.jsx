import './NavStyle.css'
import sidebar from '../../src/image/sidebar.png'
import kku from '../../src/image/kku.png'
import { Link } from "react-router-dom";

const Nav = ({ click }) => {
  return (
    <section id="nav">
        <div className="-brand">
            <div className="-menu"><img src={sidebar} alt="-menu-side-bar" onClick={click} style={{ filter: 'invert(1)' }}/></div>
            <div className="-logo"><img src={kku} alt="-logo-side" /></div>
            <div className="-title">KKU Chatbot</div>
        </div>
        <div className="-end">
            <Link to="/">Home</Link>
            <Link to="/features">Features</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </section>
  );
};

export default Nav