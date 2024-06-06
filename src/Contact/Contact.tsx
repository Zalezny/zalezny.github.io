import styles from './Contact.module.css';
import ContactForm from './ContactFrom';
import appStyles from '../App/App.module.css';

function Contact() {

    return (
        <section id={styles.contact}>
            <h2 className={appStyles.heading}>Contact</h2>
            <ContactForm />
        </section>
    );
}

export default Contact;