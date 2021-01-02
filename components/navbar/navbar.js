import styles from './navbar.module.css';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Navigation() {
    return (
        <div>
        <Navbar expand="lg" variant="dark" className={styles.topnav}>
            <Navbar.Brand href="#home"><img
                src="/logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Bluprint Art"
            /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Link href="/">
                        <a>HOME</a>
                    </Link>
                    {/*<a>GALLERY</a>*/}
                    <Link href="/events">
                        <a>EVENTS</a>
                    </Link>
                    <Link href="/commission">
                        <a>COMMISSION</a>
                    </Link>
                    <Link href="/artist-signup">
                        <a>ARTIST SIGNUP</a>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    )
}
