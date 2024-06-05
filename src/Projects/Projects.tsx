import styles from './Projects.module.css';
import appStyles from '../App/App.module.css';
import ProjectCard from './ProjectCard';

function Projects() {
    return (
        <section id={styles.projects}>
            <h1 className={appStyles.heading}>Projects</h1>
            <div className={styles.container_projects}>
                <ProjectCard srcCourrency={['currencyapp.png', 'currencyapp1.png', 'currencyapp2.png']} title='Currency App' isNotebook={false} description='The application has been divided into two screens: the first one displaying the current exchange rates for EUR and USD currencies. Depending on the state returned from the Bloc architecture (Loading, Success, Failed), the following elements appear accordingly: Shimmers (without the "Refresh" button), UI consistent with the data fetched from the API, Shimmers with the "Refresh" button.'
                    links={[
                        { btnName: 'Code', link: 'https://github.com/Zalezny/currency_app' },
                    ]}
                />
                <ProjectCard srcCourrency={['ordersflutter.png', 'ordersflutter1.png', 'ordersflutter2.png']} title='Katya Orders' isNotebook={false} description='Project was created for company Katya RG Leotards for helps in management the orders. This app is connected with database and read from API informations about orders and informations about customers. Receive the notifications for every State, when app is turn off, turn on or in foreground.'
                    links={[
                        { btnName: 'Flutter code', link: 'https://github.com/Zalezny/orders_flutter' },
                        { btnName: 'Kotlin code', link: 'https://github.com/Zalezny/OrderKatyas' },
                    ]}
                />
                <ProjectCard srcCourrency={['outfitflutter.png', 'outfitflutter1.png', 'outfitflutter2.png']} title='Katya Outfit' isNotebook={false} description='Outfit App developed for Katya RG Leotards, a two-person company specializing in creating gymnastics leotards. The aim of the application is to facilitate registration and gather information about the time it takes to create the leotards. The application is initially intended for Android, with the possibility of later expanding to iOS. It utilizes REST API data and synchronizes with a local Isar database (the demo version only has a local database).'
                    links={[
                        { btnName: 'Flutter Code', link: 'https://github.com/Zalezny/outfit_flutter' },
                        { btnName: 'Kotlin Code', link: 'https://github.com/Zalezny/OutfitKatyas' },
                    ]}
                />
                <ProjectCard srcCourrency={['beautyplaces.png', 'beautyplaces1.png', 'beautyplaces2.png']} title='Beauty Places' isNotebook={false} description='The application is created by FlutterMap and OpenStreet. Using this you can looking for some beauty place on the Earth. If you want you can add own place with title descriptions and picture.'
                    links={[
                        { btnName: 'Code', link: 'https://github.com/Zalezny/BeautyPlaces' },
                    ]}
                />
                <ProjectCard srcCourrency={['flappybird.png']} title='FlappyBird' isNotebook={true} description='FlappyBird is a meticulously recreated version of the classic game, where the player controls a small bird flying to the right. The goal is to avoid green pipes, and pressing the spacebar makes the bird rise into the air. The game also features options such as pausing and viewing the TOP 10 high scores, allowing players to compete with others.'
                    links={[
                        { btnName: 'Code', link: 'https://github.com/Zalezny/FlappyBird' },
                    ]}
                />
            </div>

        </section>
    );

}

export default Projects;
