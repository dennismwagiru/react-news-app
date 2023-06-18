import Logo from "./Logo.jsx";
import {Link} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import ProfileDropdown from "./Profile.jsx";

const NavbarTop = () => {
    return (
        <Navbar expand="lg" className='bg-light' >
            <div className='container'>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Navbar.Brand as={Link} to="/">
                        <Logo />
                    </Navbar.Brand>
                    <Nav navbar>
                        <Nav.Item as='li' className="active">
                            <Link className="nav-link" to="/">Home</Link>
                        </Nav.Item>
                        <Nav.Item as='li'>
                            <Link className="nav-link" to="/sources">Sources </Link>
                        </Nav.Item>
                        <Nav.Item as='li'>
                            <Link className="nav-link" to="/categories">Categories </Link>
                        </Nav.Item>
                        <Nav.Item as='li'>
                            <Link className="nav-link" to="/authors">Authors </Link>
                        </Nav.Item>
                    </Nav>

                </Navbar.Collapse>

                <ProfileDropdown />
            </div>
        </Navbar>
    );
}

export default NavbarTop