import React from "react";
import styles from './contact.module.css'
const Contact = () => {
    return (
        <div className={styles.main_container}>
            <form action="https://submit-form.com/Afnkd17VK" className={styles.form_container}>
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Name" required="" />
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" required="" />
                <label for="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    required='true'
                ></textarea>
                <button type="submit">Send</button>
            </form>

        </div>
    )
}
export default Contact