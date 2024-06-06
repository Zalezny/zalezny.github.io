import styles from './Experience.module.css';

function ExperienceCard({ title, dateStart, dateEnd, description, skillsUsed, containerRowRef, link }: { title: string, dateStart: string, dateEnd: string, description: string, skillsUsed: string[], containerRowRef: React.RefObject<HTMLDivElement>, link : string }) {
    return (
        <a href={link}>


            <div ref={containerRowRef} className={styles.container_row}>
                <div className={styles.container_dates}>
                    <h2 className={styles.date_work}>{dateStart}</h2>
                    <h2 className={styles.date_work}>{dateEnd}</h2>
                </div>

                <div className={styles.container_text}>
                    <div className={styles.container_title}>
                        <h3>{title}</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                    </div>
                    <p className={styles.description}> {description}</p>
                    <ul className={styles.container_skills}>
                        {skillsUsed.map((skill) =>
                            <li key={skill} className={styles.skill_item}>
                                {skill}
                            </li>)}
                    </ul>
                </div>
            </div>
        </a>
    );
}

export default ExperienceCard;