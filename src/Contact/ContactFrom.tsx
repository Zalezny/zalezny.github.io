import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';
import { t } from 'i18next';
const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null as string | null);
    const formRef = useRef(null);

    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        emailjs
            .sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID as string,
                import.meta.env.VITE_EMAIL_TEMPLATE_ID as string, formRef.current!, {
                publicKey: import.meta.env.VITE_PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setIsSubmitting(true);
                    setStateMessage(t('ThankYouMsg'));
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setStateMessage(t('FailedMsg'));
                },
            );
    };
    return (
        <div className={styles.main_container}>
            {isSubmitting ? <div className={styles.contact_response_container}>
                <h2 className={styles.contact_response}>{stateMessage}</h2>

            </div> : null}

            <div className={isSubmitting ? [styles.container_contact_form, styles.opacity].join(' ') : styles.container_contact_form}>


                <form ref={formRef} className={styles.contact_form} onSubmit={sendEmail}>
                    <div className={styles.label_form_container}>
                        <label className={styles.label_form}>{t('Name')}</label>
                        <input className={styles.input_form} type="text" name="sender_name" placeholder={t('EnterName')} disabled={isSubmitting} />
                    </div>
                    <div className={styles.label_form_container}>
                        <label className={styles.label_form}>{t('Email')}</label>
                        <input className={styles.input_form} type="email" name="sender_email" placeholder={t('EnterEmail')} disabled={isSubmitting} />
                    </div>
                    <div className={styles.label_form_container}>
                        <label className={styles.label_form} aria-placeholder='Enter Your Message'>{t('Message')}</label>
                        <textarea className={styles.input_form} name="message" cols={30} rows={10} placeholder={t('EnterMsg')} disabled={isSubmitting} />
                    </div>

                    <input className={styles.submit_btn} type="submit" value={t('Submit')} disabled={isSubmitting} />
                </form>
            </div>

        </div>
    );
};
export default ContactForm;