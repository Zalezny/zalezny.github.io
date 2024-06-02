import styles from './About.module.css'

function About() {
    return (
        <section id={styles.about}>
            <div style={{ display: "flex", padding: '2px' }}>
                <img className={styles.about_image} style={{ flex: "0" }} src="/src/assets/avatar.jpeg" />
                <div className={styles.container_about} style={{ flex: "1", whiteSpace: '1px' }}>
                    <h1 style={{ color: '#000', fontSize: 35, margin: '0px 0px' }} >About Me

                    </h1>
                    <h2 className={styles.sub_title_about_me} style={{ color: '#000', margin: '10px 0px', fontSize: 25 }}>
                        Mobile Developer
                    </h2>
                    <p style={{ color: '#000' }}>
                        Pasjonat dobrze napisanego kodu i nowych technologii. Osoba z dużym zacięciem do nauki i chęcią ciągłego rozwoju. W swojej pracy stawiam na jakość i dbałość o detale. Swoją wiedzę zdobywam poprzez tworzenie i ulepszanie licznych aplikacji mobilnych z wykorzystaniem technologii takich jak Flutter, Kotlin, Swift.</p>
                    <p>
                        Na codzień pracuje jako Mobile Developer, zajmując się tworzeniem aplikacji mobilnych na systemy Android oraz iOS w framework'u Flutter. Takze zajmuje się aplikacjami VR na urządzenie Vision Pro od firmy Apple.
                    </p>
                    <p>
                        Moje portfolio i nie tylko znajdziesz poniżej:
                    </p>

                </div>
            </div>
        </section>
    )
}

export default About