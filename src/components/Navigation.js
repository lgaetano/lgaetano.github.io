import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './stylesheets/Navigation.css';

const Navigation = () => {
    const navigate = useNavigate()
    
    const location = useLocation();
    const path = location.pathname;

    return (
        <Navbar className="navigation justify-content-between">
            {/* Title: Left-aligned nav content */}
            {/* <Nav id="navbar-title" className="justify-content-start">
              
                <NavItem id="logo">
                  <img src="wh-logo.png" alt="logo: person climbing mountain" style={ img_size }></img>
                </NavItem>

                <NavItem className="title-bar">
                  <h1 id="page-title">Lia Gaetano</h1>
                </NavItem>

            </Nav> */}

            {/* Links: Right-aligned nav content */}
            {/* <Nav id="navbar-links" className="justify-content-end"> */}
            <Nav id="navbar-links">

                {/* {(path !== '/') &&
                <NavItem className="item" eventkey={3} href="/">
                  <Nav.Link id="home-nav-link" as={Link} to="/" >Home</Nav.Link>
                </NavItem>
                } */}

                <NavItem className="item" eventkey={1} href="/">
                  <Nav.Link id="home-nav-link" as={Link} to="/about">About</Nav.Link>
                </NavItem>

                <NavItem className="item" eventkey={2} href="/">
                  <Nav.Link id="home-nav-link" as={Link} to="/portfolio">Portfolio</Nav.Link>
                </NavItem>

            </Nav>
        </Navbar>
    )
};

export default Navigation;
