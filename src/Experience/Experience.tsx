import styles from './Experience.module.css';
import ExperienceCard from './ExperienceCard';
import appStyles from '../App/App.module.css';
import Lottie from "lottie-react";
import expAnimation from "../assets/exp.json";
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useRef } from 'react';


// https://lottiefiles.com/animations/user-experience-G6cCp0ZCAU?from=search

function Experience() {
    const skillsContainerRef = useRef(null);
    const experienceRef = useRef(null);
    const headingRef = useRef(null);
    const mobileDevRef = useRef(null);
    const flutterDevRef = useRef(null);
    const internDevRef = useRef(null);
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: experienceRef.current,
                start: "top top",
            }
        });
        tl.from(headingRef.current, { y: 20, opacity: 0, duration: 1 })
        tl.from(internDevRef.current, { x: 20, opacity: 0, duration: 1 })
        tl.from(flutterDevRef.current, { x: 20, opacity: 0, duration: 1 })
        tl.from(mobileDevRef.current, { x: 20, opacity: 0, duration: 1 })

    });

    return (
        <section ref={experienceRef} id='experience' className={styles.experience}>
            <h1 ref={headingRef} className={appStyles.heading}>Experience</h1>
            <div className={styles.container}>

                <div className={styles.container_header}>
                    <Lottie className={styles.lottie_animation} animationData={expAnimation} initialSegment={[90, 270]} />
                </div>
                <div ref={skillsContainerRef} className={styles.container_experiences}>
                    <ul className={styles.bar}>
                        <li key='mobile dev'><ExperienceCard containerRowRef={mobileDevRef} link="https://goodsoft.pl/" title="Mobile Developer · Goodsoft" dateStart="10.2023" dateEnd="now" description="Building, styling, and maintaining clean code for high-quality mobile and VR applications. One of my major projects was the creation and release of the Erevie app, which is related to the real estate market." skillsUsed={["Flutter", "Dart", "GetIt", "Bloc", "Firebase", "VisionOS", "ARKit", "RealityKit", "Swift", "AdMob", "Testing", "AutoRoute"]} /></li>
                        <li key='junior flutter'><ExperienceCard containerRowRef={flutterDevRef} link='https://ilaresoft.com/' title="Junior Flutter Developer · Ilaresoft" dateStart="08.2022" dateEnd="09.2023" description="Developed and styled mobile applications for Vocale, a company in the music industry similar to Spotify, and created and maintained mobile applications for clients, including the Play&Plug app for finding electric chargers." skillsUsed={["Flutter", "Dart", "Bloc", "Provider", "Firebase", "GraphQL", "Freezed"]} /></li>
                        <li key='intern android'><ExperienceCard containerRowRef={internDevRef} link='https://safetyheads.com/' title="Intern Android Developer · SafetyHeads" dateStart="01.2023" dateEnd="06.2023" description="Expanding knowledge and actively developing an internal application for company employees using Clean Architecture and MVVM." skillsUsed={["Kotlin", "Clean Architecture", "MVVM", "Koin", "Coroutines", "Flow", "Firebase", "Lottie"]} /></li>
                    </ul>


                </div>
            </div>

        </section>
    );
}



export default Experience;