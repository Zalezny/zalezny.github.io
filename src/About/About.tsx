import styles from './About.module.css'
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function About() {
    const aboutRef = useRef(null);
    const containerAboutImageRef = useRef(null);
    const containerAboutDescRef = useRef(null);
    const githubRef = useRef(null);
    const linkedinRef = useRef(null);
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top center",
            },
        }
        );
        tl.from(containerAboutDescRef.current, { x: 400, opacity: 0, duration: 1 })
        tl.from(containerAboutImageRef.current, { scale: 0.1, opacity: 0, duration: 1 })
        tl.from([githubRef.current, linkedinRef.current], { scale: 0.1, opacity: 0, duration: 1 })
    }, {});
    return (
        <section ref={aboutRef} id={styles.about}>
            <div style={{ display: "flex", padding: '2px' }}>
                <div ref={containerAboutImageRef} className={styles.container_about_image}>
                    <img className={styles.about_image} style={{ flex: "0" }} src="/src/assets/avatar.png" />
                </div>

                <div ref={containerAboutDescRef} className={styles.container_about} style={{ flex: "1", whiteSpace: '1px' }}>
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
                        Więcej informacji o mnie znajdziesz poniżej:
                    </p>
                    <div
                        style={{ display: 'flex', justifyContent: 'space-around', width: '15rem', paddingTop: '1rem' }}>
                        <a ref={githubRef} href='https://github.com/Zalezny'>
                            <svg >
                                <use xlinkHref="src/assets/sprite.svg#icon-github"></use>
                            </svg>

                        </a>
                        <a ref={linkedinRef} href='linkedin.com/in/zalezny/'>
                            <svg>
                                <use xlinkHref="src/assets/sprite.svg#icon-linkedin"></use>
                            </svg>
                        </a >
                    </div>

                </div>
            </div>
        </section >
    )
}

export default About