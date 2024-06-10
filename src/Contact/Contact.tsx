import styles from './Contact.module.css';
import ContactForm from './ContactFrom';
import appStyles from '../App/App.module.css';
import { t } from 'i18next';

function Contact() {

    return (
        <section id='contact' className={styles.contact}>
            <h2 className={appStyles.heading}>{t('Contact')}</h2>
            <ContactForm />
        </section>
    );
}

export default Contact;