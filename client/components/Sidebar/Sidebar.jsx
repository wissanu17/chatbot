import './Sidebar.css';
import sidebar from '../../src/image/sidebar.png'
import kku from '../../src/image/kku.png'

const Sidebar = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false);
      };
    return (
        <section id="sidebar">
            <div className={open ? "side-bar collapse" : "side-bar"}>
                <div className='-side-first'>
                    {open && (
                        <div className="close-icon" onClick={handleClose}>
                            <img src={sidebar} alt="close" style={{ filter: 'invert(1)' }}/>
                        </div>
                    )}
                    <div className='-search'>search</div>
                    <div className='-create'>create</div>
                </div>
                <div className='-side-second'>
                    <div className="-logo"><img src={kku} alt="" /></div>
                    <div className="-title">KKU Chatbot</div>
                </div>
            </div>
        </section>
    );
}

export default Sidebar;
