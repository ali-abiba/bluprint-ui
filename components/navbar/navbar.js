import styles from './navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.topnav}>
                <Link href="/">
                    <a>HOME</a>
                </Link>
                <a>GALLERY</a>
                <Link href="/events">
                    <a>EVENTS</a>
                </Link>
                <a>COMMISSION</a>
                <a href="https://www.jotform.com/form/203076801714046" target="_blank">ARTIST SIGNUP</a>
                <div className={styles.hamburger}><i className={`fas fa-bar`}></i></div>
            </div>
        </div>
    )
}
