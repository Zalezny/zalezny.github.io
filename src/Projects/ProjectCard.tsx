
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import styles from './Projects.module.css';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

function ProjectCard({ srcCourrency, title, description, isNotebook, links }: { srcCourrency: string[], title: string, description: string, isNotebook: boolean, links: { btnName: string, link: string }[] }) {
    const projectItemRef = useRef(null);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: projectItemRef.current,
                start: "top center",
            }
        });
        tl.from(projectItemRef.current, { x: 20, opacity: 0, duration: 1 })
    });

    var imgs = srcCourrency.map((src) =>
        <div key={src} className={styles.image}> <img src={'assets/' + src} alt={title} style={{ maxWidth: isNotebook ? '42rem' : '14rem' }} /></div>
    );

    isMobile && imgs.length > 1 ? imgs.pop() : null;

    return (
        <div ref={projectItemRef} className={styles.project_item} >
            <div className={styles.container_img}>{imgs}</div>
            <div className={styles.container_texts} >
                <h2 className={styles.title_project}>{title}</h2>
                <p className={styles.description_project}>{description}</p>
                <div className={styles.container_btns}>
                    {links.map((link) => <a key={link.link} href={link.link} className={styles.btn}>{link.btnName}</a>)}
                </div>

            </div>

        </div>
    );
}

export default ProjectCard;