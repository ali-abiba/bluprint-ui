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
                <Link href="/artist-signup">
                    <a>ARTIST SIGNUP</a>
                </Link>
                <div className={styles.hamburger}><i className={`fas fa-bar`}></i></div>
            </div>
        </div>
    )
}
