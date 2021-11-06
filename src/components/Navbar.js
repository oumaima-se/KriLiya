import React, {useState /*, useEffect */}  from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(!click);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(false);
        }
    };

/*useEffect(() => {
    showButton()
},[]); */

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                    <Link to="/" className="navbar-logo" onclick={closeMobileMenu}>
                        <img src="/images/logoetu.png" alt=''/>
                    </Link>
                <div className="navbar-container">
                    
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onclick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/ajouter-annonce' className='nav-links' onclick={closeMobileMenu}>Ajouter Annonce</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/sign-up' className='nav-links-mobile' onclick={closeMobileMenu}>Sign Up</Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
            
        </>
    )
}

export default Navbar;

//<img src="/public/logoetu.png" alt="rentEtu_logo" height="60" width="75"></img>

