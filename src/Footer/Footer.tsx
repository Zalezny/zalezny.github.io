import styles from './Footer.module.css'

function Footer() {
    return (
        <footer id={styles.footer}>
            <div className={styles.about_container_icons}>
                <div className={styles.about_container_icons_box}>
                    <a href="https://github.com/Zalezny">
                        <svg>
                            <use xlinkHref="src/assets/sprite.svg#icon-github"></use>
                        </svg>
                    </a>
                </div>
                <div className={styles.about_container_icons_box}>
                    <a href="mailto:danielnowax@gmail.com">
                        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </a>
                </div>
                <div className={styles.about_container_icons_box}>
                    <a href='https://www.linkedin.com/in/zalezny/'>
                        <svg>
                            <use xlinkHref="src/assets/sprite.svg#icon-linkedin"></use>
                        </svg>
                    </a>
                </div>

            </div>
            <span className={styles.copyright}>Daniel Nowak
                <span className={styles.copyright_date}> ©2024</span>

            </span>

        </footer>
    )

}

export default Footer;