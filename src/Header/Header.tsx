import { useEffect, useRef, useState } from 'react';
import styles from './Header.module.css'
import Markup from './Markup'

function Header() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setIsVisible(entry.isIntersecting);
            console.log(isVisible);
        },
            {
                threshold: 0.1
            }
        );
        if (sectionRef.current)
            observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current)
                observer.unobserve(sectionRef.current);
        }
    });


    return (
        <header id='header' ref={sectionRef}>
            <nav className={isVisible ? styles.navigation : [styles.navigation, styles.sticky].join(' ')}>
                <ul className={styles.navigation_list}>
                    <li key='header'><a className={styles.navigation_item} href='#'>Home</a></li>
                    <li key='about'><a className={styles.navigation_item} href='#about'>About</a></li>
                    <li key='skills'><a className={styles.navigation_item} href="#skills">Skills</a></li>
                    <li key='experience'><a className={styles.navigation_item} href="#experience">Experience</a></li>
                    <li key='projects'><a className={styles.navigation_item} href="#projects">Projects</a></li>
                    <li key='contact'><a className={styles.navigation_item} href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className={styles.header_row}>
                <div className={styles.header_column}>
                    <h1 className={styles.header_title}>Hello!
                        <h2 className={styles.header_description}>
                            I'm Daniel Nowak,
                            <span className={styles.header_description_primary}>
                                specializing in Mobile & VR apps
                            </span>
                        </h2>
                    </h1>

                </div>
                <Markup />


            </div>

        </header>

    )
}

export default Header