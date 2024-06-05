
import styles from './Projects.module.css';

function ProjectCard({ srcCourrency, title, description, isNotebook }: { srcCourrency: string[], title: string, description: string, isNotebook: boolean }) {
    return (
        <div className={styles.project_item} >
            <div className={styles.container_img}>
                {srcCourrency.map((src) =>
                    <img src={'/src/assets/' + src} alt={title} style={{ maxWidth: isNotebook ? '42rem' : '14rem' }} />
                )}

            </div>
            <div className={styles.container_texts} >
                <h2 className={styles.title_project}>{title}</h2>
                <p className={styles.description_project}>{description}</p>
            </div>

        </div>
    );
}

export default ProjectCard;