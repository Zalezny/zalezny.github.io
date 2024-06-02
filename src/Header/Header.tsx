import { useRef } from 'react';
import styles from './Header.module.css'
import Markup from './Markup'

function Header() {
    const headerRef = useRef(null);
    return (
        <header>
            <nav>
                <ul className={styles.navigation_list}>
                    <li><a className={styles.navigation_item} href="#header">Home</a></li>
                    <li><a className={styles.navigation_item} href="#about">About</a></li>
                    <li><a className={styles.navigation_item} href="#skills">Skills</a></li>
                    <li><a className={styles.navigation_item} href="#portfolio">Portfolio</a></li>
                    <li><a className={styles.navigation_item} href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div ref={headerRef} className={styles.header_row}>
                <div className={styles.header_column}>
                    <h1 className={styles.header_title}>Hello!</h1>
                    <h2 className={styles.header_description}>
                        I'm Daniel Nowak,
                        <span className={styles.header_description_primary}>
                            specializing in fullstack apps
                        </span>
                    </h2>
                </div>
                <Markup headerRef={headerRef} />


            </div>

        </header>

    )
}

export default Header