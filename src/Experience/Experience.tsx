import styles from './Experience.module.css';
import ExperienceCard from './ExperienceCard';
import appStyles from '../App/App.module.css';
import Lottie from "lottie-react";
import expAnimation from "../assets/exp.json";
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useRef } from 'react';
import { t } from 'i18next';


// https://lottiefiles.com/animations/user-experience-G6cCp0ZCAU?from=search

function Experience() {
    const skillsContainerRef = useRef(null);
    const experienceRef = useRef(null);
    const headingRef = useRef(null);
    const mobileDevRef = useRef(null);
    const flutterDevRef = useRef(null);
    const internDevRef = useRef(null);
    const katyaDevRef = useRef(null);
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: experienceRef.current,
                start: "top center",
            }
        });
        tl.from(headingRef.current, { y: 20, opacity: 0, duration: 0.4 })
        tl.fromTo(mobileDevRef.current, { x: 20, opacity: 0, pointerEvents: 'none' }, { x: 0, opacity: 1, pointerEvents: 'auto' }, "+=0.2")
        tl.fromTo(flutterDevRef.current, { x: 20, opacity: 0, pointerEvents: 'none' }, { x: 0, opacity: 1, pointerEvents: 'auto' }, "+=0.2")
        tl.fromTo(internDevRef.current, { x: 20, opacity: 0, pointerEvents: 'none' }, { x: 0, opacity: 1, pointerEvents: 'auto' }, "+=0.2")
        tl.fromTo(katyaDevRef.current, { x: 20, opacity: 0, pointerEvents: 'none' }, { x: 0, opacity: 1, pointerEvents: 'auto' }, "+=0.2")

    });

    return (
        <section ref={experienceRef} id='experience' className={styles.experience}>
            <h1 ref={headingRef} className={appStyles.heading}>{t('Experience')}</h1>
            <div className={styles.container}>

                <div className={styles.container_header}>
                    <Lottie className={styles.lottie_animation} animationData={expAnimation} initialSegment={[90, 270]} />
                </div>
                <div ref={skillsContainerRef} className={styles.container_experiences}>
                    <ul className={styles.bar}>
                        <li key='mobile dev'><ExperienceCard containerRowRef={mobileDevRef} link="https://goodsoft.pl/" title="Software Developer · Goodsoft" dateStart="10.2023" dateEnd="now" description={t('GoodsoftJobDescription')} skillsUsed={["Flutter", "Dart", "GetIt", "Bloc", "Firebase", "VisionOS", "ARKit", "RealityKit", "Swift", "AdMob", "Testing", "AutoRoute", "React", "Hooks", "React Query", "Redux", "shadcn", "Zustand", "pnpm", "Docker", "Kotlin", "Android SDK", "Hive", "CI/CD Github Actions", "Unity", "Jetpack Compose", "AI", "YOLO", "Tensorflow"]} /></li>
                        <li key='junior flutter'><ExperienceCard containerRowRef={flutterDevRef} link='https://ilaresoft.com/' title="Junior Flutter Developer · Ilaresoft" dateStart="01.2023" dateEnd="09.2023" description={t('IlaresoftJobDescription')} skillsUsed={["Flutter", "Dart", "Bloc", "Provider", "Firebase", "GraphQL", "Freezed"]} /></li>
                        <li key='intern android'><ExperienceCard containerRowRef={internDevRef} link='https://safetyheads.com/' title="Intern Android Developer · SafetyHeads" dateStart="01.2023" dateEnd="06.2023" description={t('SafetyheadsJobDescription')} skillsUsed={["Kotlin", "Clean Architecture", "MVVM", "Koin", "Coroutines", "Flow", "Firebase", "Lottie"]} /></li>
                        <li key='junior mobile'><ExperienceCard containerRowRef={katyaDevRef} link='https://katya-rg.eu/' title="Junior Mobile Developer · Katya RG Leotards" dateStart="01.2022" dateEnd="08.2022" description={t('KatyaJobDescription')} skillsUsed={["Kotlin", "Clean Architecture", "MVVM", "Dart", "Flutter", "Services", "Firebase FCM", "Android SDK"]} /></li>
                    </ul>


                </div>
            </div>

        </section>
    );
}



export default Experience;