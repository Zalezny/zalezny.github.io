import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import styles from './Header.module.css'

function Header() {
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
            <div className={styles.header_row}>
                <div className={styles.header_column}>
                    <h1 className={styles.header_title}>Hello!</h1>
                    <h2 className={styles.header_description}>
                    I'm Daniel Nowak,
                    <span className={styles.header_description_primary}>
                    specializing in fullstack apps

                    </span>
                    </h2>
                </div>
                <DotLottieReact src="https://lottie.host/cb0c3577-952f-471d-8c0d-f3736ee868c0/0jtHxeD6mE.json" loop autoplay></DotLottieReact>


            </div>

        </header>

    )
}

export default Header