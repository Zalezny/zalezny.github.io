import styles from './Experience.module.css';

function ExperienceCard({ title, dateStart, dateEnd, description, skillsUsed }: { title: string, dateStart: string, dateEnd: string, description: string, skillsUsed: string[] }) {
    return (
        <div className={styles.container_row}>
            <div className={styles.container_dates}>
            <h2 className={styles.date_work}>{dateStart}</h2>
            <h2 className={styles.date_work}>{dateEnd}</h2>
            </div>
            
            <div className={styles.container_text}>
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