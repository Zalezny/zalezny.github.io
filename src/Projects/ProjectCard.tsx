
import styles from './Projects.module.css';

function ProjectCard({ srcCourrency, title, description, isNotebook, links }: { srcCourrency: string[], title: string, description: string, isNotebook: boolean, links: { btnName: string, link: string }[] }) {
    return (
        <div className={styles.project_item} >
            <div className={styles.container_img}>
                {srcCourrency.map((src) =>
                    <div className={styles.image}> <img src={'/src/assets/' + src} alt={title} style={{ maxWidth: isNotebook ? '42rem' : '14rem' }} /></div>
                )}

            </div>
            <div className={styles.container_texts} >
                <h2 className={styles.title_project}>{title}</h2>
                <p className={styles.description_project}>{description}</p>
                <div className={styles.container_btns}>
                    {links.map((link) => <a href={link.link} className={styles.btn}>{link.btnName}</a>)}
                </div>

            </div>

        </div>
    );
}

export default ProjectCard;