import i18n from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";

function geni18n() {
    i18n.use(initReactI18next).init({
        resources: {
            en: {
                translation: {
                    "Home": "Home",
                    "About": "About",
                    "Skills": "Skills",
                    "Experience": "Experience",
                    "Projects": "Projects",
                    "Contact": "Contact",
                    "Hello": "Hello!",
                    "HeaderDescriptionOne": "I'm Daniel Nowak",
                    "HeaderDescriptionTwo": "specializing in Mobile & VR apps",
                    "AboutMe": "About Me",
                    "AboutMeDescriptionOne": "A passionate enthusiast of well-written code and new technologies. A person with a strong inclination towards learning and a desire for continuous development. In my work, I prioritize quality and attention to detail. I gain my knowledge by creating and improving numerous mobile applications using technologies such as Flutter, Kotlin, and Swift.",
                    "AboutMeDescriptionTwo": "On a daily basis, I work as a Mobile Developer, creating mobile applications for Android and iOS using the Flutter framework. I also work on VR applications for Apple's Vision Pro device.",
                    "AboutMeDescriptionThree": "You can find more information about me below:",
                    "GoodsoftJobDescription": "Building, styling, and maintaining clean code for high-quality mobile and VR applications. One of my major projects was the creation and release of the Erevie app, which is related to the real estate market.",
                    "IlaresoftJobDescription": "Developed and styled mobile applications for Vocale, a company in the music industry similar to Spotify, and created and maintained mobile applications for clients, including the Play&Plug app for finding electric chargers.",
                    "SafetyheadsJobDescription": "Expanding knowledge and actively developing an internal application for company employees using Clean Architecture and MVVM.",
                    "CurrencyAppDescription": "The application is divided into two screens. The first screen displays the current exchange rates for EUR and USD. Depending on the state returned from the Bloc architecture (Loading, Success, Failed), the following elements will appear accordingly: Shimmers during the loading state. A user interface populated with data fetched from the API during the success state. Shimmers with the \"Refresh\" button during the failure state.",
                    "KatyaOutfitDesc": "The Outfit App was developed for Katya RG Leotards, a small company specializing in creating gymnastics leotards. The aim of the application is to facilitate the registration process and gather information about the time required to create the leotards. Initially intended for Android, there is a possibility of expanding to iOS in the future. The app utilizes REST API data and synchronizes with a local Isar database. The application was created in Kotlin and then rewritten into Flutter.",
                    "KatyaOrdersDesc": "The project was created for the company Katya RG Leotards to assist in managing orders. This app is connected to a database and retrieves information about orders and customers from an API. It also receives notifications for every state change when the app is turned off, turned on, or running in the foreground. The application was created in Kotlin and then rewritten into Flutter.",
                    "BeautyPlacesDesc": "The application is created using FlutterMap and OpenStreet. With this app, you can search for beautiful places around the world. Additionally, you have the option to add your own places, complete with titles, descriptions, and pictures.",
                    "FlappyBirdDesc": "FlappyBird is a meticulously recreated version of the classic game, where the player controls a small bird flying to the right. The goal is to avoid green pipes, and pressing the spacebar makes the bird rise into the air. The game also features options such as pausing and viewing the TOP 10 high scores",
                    "ViewMore": "View More",
                    "Code": "Code",
                    "ThankYouMsg": 'Thank you for your message. I will get back to you as soon as possible',
                    "FailedMsg": 'Sorry, there was an error. Please try again later or write directly to me: danielnowax@gmail.com',
                    "Name": "Name",
                    "Message": "Message",
                    "Email": "Email",
                    "EnterName": "Enter Your Name",
                    "EnterEmail": "Enter Your Email",
                    "EnterMsg": "Enter Your Message",
                    "Submit": "Submit",
                    "KatyaJobDescription": "Developed and styled mobile applications for Katya RG Leotards, a company specializing in creating gymnastics leotards.",
                }
            }
        },
        lng: "en",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });
}

export default geni18n;