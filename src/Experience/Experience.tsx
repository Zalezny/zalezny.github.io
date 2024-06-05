import styles from './Experience.module.css';
import ExperienceCard from './ExperienceCard';
import appStyles from '../App/App.module.css';
import Lottie from "lottie-react";
import expAnimation from "../assets/exp.json";


// https://lottiefiles.com/animations/user-experience-G6cCp0ZCAU?from=search

function Experience() {

    return (
        <section id={styles.experience}>
            <h1 className={appStyles.heading}>Experience</h1>
            <div className={styles.container}>

                <div className={styles.container_header}>
                    <Lottie className={styles.lottie_animation} animationData={expAnimation} initialSegment={[90, 270]} />
                </div>
                <div className={styles.container_experiences}>
                    <ul className={styles.bar}>
                        <li><ExperienceCard title="Mobile Developer · Goodsoft" dateStart="10.2023" dateEnd="now" description="Budowanie, stylowanie i utrzymanie czystego kodu wysoko jakościowych aplikacji mobilnych oraz aplikacji VR. Jednym z większych projektów było utworzenie i wydanie aplikacji Erevie związanej z rynkiem nieruchomości." skillsUsed={["Flutter", "Dart", "GetIt", "Bloc", "Firebase", "VisionOS", "ARKit", "RealityKit", "Swift", "AdMob", "Testing", "AutoRoute"]} /></li>
                        <li><ExperienceCard title="Junior Flutter Developer · Ilaresoft" dateStart="08.2022" dateEnd="09.2023" description="Developed and stylowanie aplikacji mobilnych firmy Vocale związanej z branzą muzyczną, analogiczna do Spotify, oraz tworzenie i utrzymywanie aplikacji mobilnych tworzonych dla klientów, m.in. aplikacji do wyszukiwania elektrycznych ładowarek Play&Plug" skillsUsed={["Flutter", "Dart", "Bloc", "Provider", "Firebase", "GraphQL", "Freezed"]} /></li>
                        <li><ExperienceCard title="Intern Android Developer · SafetyHeads" dateStart="01.2023" dateEnd="06.2023" description="Poszerzanie wiedzy oraz aktywne tworzenie aplikacji wewnętrznej dla pracowników firmy z wykorzystaniem Clean Architecture + MVVM." skillsUsed={["Kotlin", "Clean Architecture", "MVVM", "Koin", "Coroutines", "Flow", "Firebase", "Lottie"]} /></li>
                    </ul>


                </div>
            </div>

        </section>
    );
}



export default Experience;