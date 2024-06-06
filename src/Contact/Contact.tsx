import styles from './Contact.module.css';
import ContactForm from './ContactFrom';

function Contact() {

    return (
        <section id={styles.contact}>
            <h2 className={styles.header}>Contact</h2>
            <p className={styles.subtitle}>Feel free to contact me at </p>
            <ContactForm />
        </section>
    );
}

export default Contact;