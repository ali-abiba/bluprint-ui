import styles from './navbar.module.css';

export default function Navbar() {
    return(
        <div className={styles.wrapper}>
        <div className={styles.topnav}>
            <a>HOME</a>
            <a>GALLERY</a>
            <a>EVENTS</a>
            <a>COMMISSION</a>
            <div className={styles.hamburger}><i className={`fas fa-bar`}></i></div>
        </div>
        </div>
    )
}
