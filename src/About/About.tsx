import styles from './About.module.css'
import appStyles from '../App/App.module.css'
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import avatar from '../assets/avatar.png'
import { useTranslation } from 'react-i18next';
gsap.registerPlugin(ScrollTrigger);

function About() {
    const aboutRef = useRef(null);
    const containerAboutImageRef = useRef(null);
    const containerAboutDescRef = useRef(null);
    const githubRef = useRef(null);
    const headingRef = useRef(null);
    const linkedinRef = useRef(null);
    const { t } = useTranslation();
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
                <h1 className={appStyles.heading} >{t('AboutMe')}</h1>

            </div>
            <div className={styles.container_row}>

                <div ref={containerAboutImageRef} className={styles.container_about_image}>
                    <img className={styles.about_image} src={avatar} />
                </div>

                <div ref={containerAboutDescRef} className={styles.container_about}>

                    <h2 className={styles.sub_title_about_me} >
                        Mobile Developer
                    </h2>
                    <p style={{ color: '#000' }}>
                        {t('AboutMeDescriptionOne')}
                    </p>
                    <p>
                        {t('AboutMeDescriptionTwo')}
                    </p>
                    <p>
                        {t('AboutMeDescriptionThree')}
                    </p>
                    <div
                        className={styles.container_items}>
                        <div className={styles.container_item_box}>
                            <a ref={githubRef} href='https://github.com/Zalezny'>
                                <svg >
                                    <use xlinkHref="assets/sprite.svg#icon-github"></use>
                                </svg>

                            </a>
                        </div>

                        <div className={styles.container_item_box}>
                            <a ref={linkedinRef} href='linkedin.com/in/zalezny/'>
                                <svg>
                                    <use xlinkHref="assets/sprite.svg#icon-linkedin"></use>
                                </svg>
                            </a >
                        </div>

                    </div>

                </div>
            </div>
        </section >
    )
}

export default About