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
                <svg id={styles.markups} width="523" height="523" viewBox="0 0 523 523" xmlns="http://www.w3.org/2000/svg">
                    <path id="slash" d="M284.102 193.852L277.9 192.152C277.102 191.886 276.315 191.969 275.551 192.402C274.784 192.836 274.266 193.486 273.999 194.353L236.699 323.454C236.433 324.321 236.516 325.139 236.949 325.905C237.382 326.672 238.032 327.188 238.899 327.454L245.099 329.155C245.899 329.424 246.683 329.34 247.45 328.906C248.217 328.471 248.734 327.822 249 326.957L286.301 197.853C286.567 196.987 286.484 196.169 286.05 195.402C285.617 194.635 284.969 194.118 284.102 193.852Z" />
                    <path id="left" d="M228.202 219.054C228.202 218.188 227.868 217.42 227.201 216.754L222.201 211.754C221.534 211.087 220.767 210.753 219.901 210.753C219.034 210.753 218.267 211.087 217.6 211.754L171 258.354C170.333 259.02 170 259.787 170 260.654C170 261.52 170.334 262.287 171 262.954L217.6 309.554C218.266 310.221 219.032 310.553 219.9 310.553C220.768 310.553 221.534 310.22 222.2 309.554L227.201 304.556C227.868 303.89 228.201 303.123 228.201 302.255C228.201 301.39 227.868 300.622 227.201 299.956L187.901 260.654L227.201 221.354C227.869 220.688 228.202 219.921 228.202 219.054Z" />
                    <path id="right" d="M352 258.353L305.399 211.753C304.733 211.086 303.966 210.752 303.1 210.752C302.233 210.752 301.468 211.086 300.799 211.753L295.801 216.753C295.135 217.419 294.802 218.185 294.802 219.053C294.802 219.92 295.134 220.687 295.801 221.353L335.102 260.654L295.801 299.956C295.135 300.623 294.802 301.39 294.802 302.255C294.802 303.123 295.134 303.89 295.801 304.556L300.799 309.554C301.468 310.221 302.233 310.553 303.1 310.553C303.966 310.553 304.733 310.22 305.399 309.554L352 262.954C352.667 262.288 353 261.519 353 260.653C353 259.786 352.667 259.019 352 258.353Z" />
                </svg>


            </div>

        </header>

    )
}

export default Header