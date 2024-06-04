import styles from './Experience.module.css';

function ExperienceCard({ title, dateWork, description, skillsUsed }: { title: string, dateWork: string, description: string, skillsUsed: string[] }) {
    return (
        <div className={styles.container_row}>
            <h2 className={styles.date_work}>{dateWork}</h2>
            <div>
                <h3>{title}</h3>
                <p className={styles.description}> {description}</p>
                <ul className={styles.container_skills}>
                    {skillsUsed.map((skill) =>

                        <li className={styles.skill_item}>
                            {skill}
                        </li>)}
                </ul>
            </div>
        </div>
    );
}

export default ExperienceCard;