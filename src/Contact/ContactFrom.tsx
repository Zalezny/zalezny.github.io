import { useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';
const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null as string | null);
    const sendEmail = (e: any) => {
        e.persist();
        e.preventDefault();
        setIsSubmitting(true);
        emailjs
            .sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
                e.target,
                'user_1vz8z2i'
            )
            .then(
                (_) => {
                    setStateMessage('Email sent!');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000); // hide message after 5 seconds
                },
                (_) => {
                    setStateMessage('Email failed to send');
                    setIsSubmitting(false);
                    setTimeout(() => {
                        setStateMessage(null);
                    }, 5000); // hide message after 5 seconds
                }
            );

        // Clears the form after sending the email
        e.target.reset();
    };
    return (
        <div className={styles.container_contact_form}>
            <form className={styles.contact_form} onSubmit={sendEmail}>
                <div className={styles.label_form_container}>
                    <label className={styles.label_form}>Name</label>
                    <input className={styles.input_form} type="text" name="user_name" />
                </div>
                <div className={styles.label_form_container}>
                    <label className={styles.label_form}>Email</label>
                    <input className={styles.input_form} type="email" name="user_email" />
                </div>
                <div className={styles.label_form_container}>
                    <label className={styles.label_form}>Message</label>
                    <textarea className={styles.input_form} name="message" />
                </div>

                <input type="submit" value="Send" disabled={isSubmitting} />
                {stateMessage && <p>{stateMessage}</p>}
            </form>
        </div>

    );
};
export default ContactForm;