import styles from './Experience.module.css';
import ExperienceCard from './ExperienceCard';
import appStyles from '../App/App.module.css';


function Experience() {
    return (
        <section id={styles.experience}>
            <h1 className={appStyles.heading}>Experience</h1>
            <div className={styles.container}>
                <div className={styles.container_header}>
                    <div className={styles.typewriter}>
                        <h1>Miejsce na typewriter</h1>
                    </div>
                </div>
                <div className={styles.container_experiences}>
                    <ul className={styles.bar}>
                        <li><ExperienceCard title="Mobile Developer · Goodsoft" dateWork="2024 — Present" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa deleniti illum quas aspernatur eos omnis, rerum iure? Optio enim" skillsUsed={["Flutter", "Dart"]} /></li>
                        <li><ExperienceCard title="Junior Flutter Developer · Ilaresoft" dateWork="08.2022 — 08.2023" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa deleniti illum quas aspernatur eos omnis, rerum iure? Optio enim" skillsUsed={["Flutter", "Dart"]} /></li>
                        <li><ExperienceCard title="Intern Android Developer · SafetyHeads" dateWork="02.2023 — 06.2023" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa deleniti illum quas aspernatur eos omnis, rerum iure? Optio enim" skillsUsed={["Flutter", "Dart"]} /></li>
                    </ul>


                </div>
            </div>

        </section>
    );
}

export default Experience;