import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';
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
                    setStateMessage('Thank you for your message. I will get back to you as soon as possible');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setStateMessage('Sorry, there was an error. Please try again later or write directly to me: danielnowax@gmail.com');
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
                        <label className={styles.label_form}>Name</label>
                        <input className={styles.input_form} type="text" name="sender_name" placeholder='Enter Your Name' disabled={isSubmitting} />
                    </div>
                    <div className={styles.label_form_container}>
                        <label className={styles.label_form}>Email</label>
                        <input className={styles.input_form} type="email" name="sender_email" placeholder='Enter Your Email' disabled={isSubmitting}/>
                    </div>
                    <div className={styles.label_form_container}>
                        <label className={styles.label_form} aria-placeholder='Enter Your Message'>Message</label>
                        <textarea className={styles.input_form} name="message" cols={30} rows={10} placeholder='Enter Your Message' disabled={isSubmitting} />
                    </div>

                    <input className={styles.submit_btn} type="submit" value="Submit" disabled={isSubmitting}/>
                </form>
            </div>

        </div>
    );
};
export default ContactForm;