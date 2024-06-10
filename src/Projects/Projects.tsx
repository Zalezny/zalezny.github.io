import styles from './Projects.module.css';
import appStyles from '../App/App.module.css';
import ProjectCard from './ProjectCard';

function Projects() {
    return (
        <section id='projects' className={styles.projects}>
            <h1 className={[appStyles.heading, styles.heading].join(' ')}>Projects</h1>
            <div className={styles.container_projects}>
                <ProjectCard srcCourrency={['currencyapp.png', 'currencyapp1.png', 'currencyapp2.png']} title='Currency App' isNotebook={false} description='The application is divided into two screens. The first screen displays the current exchange rates for EUR and USD. Depending on the state returned from the Bloc architecture (Loading, Success, Failed), the following elements will appear accordingly: Shimmers during the loading state. A user interface populated with data fetched from the API during the success state. Shimmers with the "Refresh" button during the failure state.'
                    links={[
                        { btnName: 'Code', link: 'https://github.com/Zalezny/currency_app' },
                    ]}
                />
                <ProjectCard srcCourrency={['outfitflutter.png', 'outfitflutter1.png', 'outfitflutter2.png']} title='Katya Outfit' isNotebook={false} description='The Outfit App was developed for Katya RG Leotards, a small company specializing in creating gymnastics leotards. The aim of the application is to facilitate the registration process and gather information about the time required to create the leotards. Initially intended for Android, there is a possibility of expanding to iOS in the future. The app utilizes REST API data and synchronizes with a local Isar database. The demo version only supports a local database.'
                    links={[
                        { btnName: 'Flutter Code', link: 'https://github.com/Zalezny/outfit_flutter' },
                        { btnName: 'Kotlin Code', link: 'https://github.com/Zalezny/OutfitKatyas' },
                    ]}
                />
                <ProjectCard srcCourrency={['ordersflutter.png', 'ordersflutter1.png', 'ordersflutter2.png']} title='Katya Orders' isNotebook={false} description='The project was created for the company Katya RG Leotards to assist in managing orders. This app is connected to a database and retrieves information about orders and customers from an API. It also receives notifications for every state change when the app is turned off, turned on, or running in the foreground.'
                    links={[
                        { btnName: 'Flutter code', link: 'https://github.com/Zalezny/orders_flutter' },
                        { btnName: 'Kotlin code', link: 'https://github.com/Zalezny/OrderKatyas' },
                    ]}
                />
                <ProjectCard srcCourrency={['beautyplaces.png', 'beautyplaces1.png', 'beautyplaces2.png']} title='Beauty Places' isNotebook={false} description='The application is created using FlutterMap and OpenStreet. With this app, you can search for beautiful places around the world. Additionally, you have the option to add your own places, complete with titles, descriptions, and pictures.'
                    links={[
                        { btnName: 'Code', link: 'https://github.com/Zalezny/BeautyPlaces' },
                    ]}
                />
                <ProjectCard srcCourrency={['flappybird.png']} title='FlappyBird' isNotebook={true} description='FlappyBird is a meticulously recreated version of the classic game, where the player controls a small bird flying to the right. The goal is to avoid green pipes, and pressing the spacebar makes the bird rise into the air. The game also features options such as pausing and viewing the TOP 10 high scores, allowing players to compete with others.'
                    links={[
                        { btnName: 'Code', link: 'https://github.com/Zalezny/FlappyBird' },
                    ]}
                />
                <div className={styles.btn_more}>
                    <a href='https://github.com/Zalezny?tab=repositories' className={styles.btn_more_text}>More projects</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0161ef" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><g fill="none" fill-rule="evenodd"><path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8" /></g></svg>
                </div>
            </div>

        </section>
    );

}

export default Projects;
