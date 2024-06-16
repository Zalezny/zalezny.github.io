import styles from './Projects.module.css';
import appStyles from '../App/App.module.css';
import ProjectCard from './ProjectCard';
import { t } from 'i18next';

function Projects() {
    return (
        <section id='projects' className={styles.projects}>
            <h1 className={[appStyles.heading, styles.heading].join(' ')}>{t('Projects')}</h1>
            <div className={styles.container_projects}>
                <ProjectCard srcCourrency={['currencyapp.webp', 'currencyapp1.webp', 'currencyapp2.webp']} title='Currency App' isNotebook={false} description={t('CurrencyAppDescription')}
                    links={[
                        { btnName: t('Code'), link: 'https://github.com/Zalezny/currency_app' },
                    ]}
                />
                <ProjectCard srcCourrency={['outfitflutter.webp', 'outfitflutter1.webp', 'outfitflutter2.webp']} title='Katya Outfit' isNotebook={false} description={t('KatyaOutfitDesc')}
                    links={[
                        { btnName: 'Flutter ' + t('Code'), link: 'https://github.com/Zalezny/outfit_flutter' },
                        { btnName: 'Kotlin ' + t('Code'), link: 'https://github.com/Zalezny/OutfitKatyas' },
                    ]}
                />
                <ProjectCard srcCourrency={['ordersflutter.webp', 'ordersflutter1.webp', 'ordersflutter2.webp']} title='Katya Orders' isNotebook={false} description={t('KatyaOrdersDesc')}
                    links={[
                        { btnName: 'Flutter ' + t('Code'), link: 'https://github.com/Zalezny/orders_flutter' },
                        { btnName: 'Kotlin ' + t('Code'), link: 'https://github.com/Zalezny/OrderKatyas' },
                    ]}
                />
                <ProjectCard srcCourrency={['beautyplaces.webp', 'beautyplaces1.webp', 'beautyplaces2.webp']} title='Beauty Places' isNotebook={false} description={t('BeautyPlacesDesc')}
                    links={[
                        { btnName: t('Code'), link: 'https://github.com/Zalezny/BeautyPlaces' },
                    ]}
                />
                <ProjectCard srcCourrency={['flappybird.webp']} title='FlappyBird' isNotebook={true} description={t('FlappyBirdDesc')}
                    links={[
                        { btnName: t('Code'), link: 'https://github.com/Zalezny/FlappyBird' },
                    ]}
                />
                <div className={styles.btn_more}>
                    <a href='https://github.com/Zalezny?tab=repositories' className={styles.btn_more_text}>{t('ViewMore')}</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0161ef" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><g fill="none" fill-rule="evenodd"><path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8" /></g></svg>
                </div>
            </div>

        </section>
    );

}

export default Projects;
