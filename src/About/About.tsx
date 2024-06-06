import styles from './About.module.css'
import appStyles from '../App/App.module.css'
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
    const headingRef = useRef(null);
    const linkedinRef = useRef(null);
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: aboutRef.current,
                start: "top center",
            },
        }
        );
        tl.from(headingRef.current, { y: 10, opacity: 0, duration: 1 })
        tl.from(containerAboutDescRef.current, { x: 400, opacity: 0, duration: 1 })
        tl.from(containerAboutImageRef.current, { scale: 0.1, opacity: 0, duration: 1 })
        tl.from([githubRef.current, linkedinRef.current], { scale: 0.1, opacity: 0, duration: 1 })
    }, {});
    return (
        <section ref={aboutRef} id='about' className={styles.about}>
            <div ref={headingRef} className={styles.heading}>
                <h1 className={appStyles.heading} >About Me</h1>

            </div>
            <div style={{ display: "flex", padding: '2px' }}>

                <div ref={containerAboutImageRef} className={styles.container_about_image}>
                    <img className={styles.about_image} style={{ flex: "0" }} src="/src/assets/avatar.png" />
                </div>

                <div ref={containerAboutDescRef} className={styles.container_about} style={{ flex: "1", whiteSpace: '1px' }}>

                    <h2 className={styles.sub_title_about_me} style={{ color: '#000', margin: '10px 0px', fontSize: 25 }}>
                        Mobile Developer
                    </h2>
                    <p style={{ color: '#000' }}>
                        A passionate enthusiast of well-written code and new technologies. A person with a strong inclination towards learning and a desire for continuous development. In my work, I prioritize quality and attention to detail. I gain my knowledge by creating and improving numerous mobile applications using technologies such as Flutter, Kotlin, and Swift.
                    </p>
                    <p>
                        On a daily basis, I work as a Mobile Developer, creating mobile applications for Android and iOS using the Flutter framework. I also work on VR applications for Apple's Vision Pro device.
                    </p>
                    <p>
                        You can find more information about me below:
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