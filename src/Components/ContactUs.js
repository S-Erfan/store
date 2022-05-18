import React from 'react';

//icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelopeOpenText, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

//stylesheet
import styles from './styles/ContactUs.module.css';


const ContactUs = () => {
    return (
        <div className={styles.mainContainer}> 
            <div className={styles.info}>
                <div className={styles.infoDetail}>
                    <h2>Contact info</h2>
                    <div>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <span>lormsdkfjifdndnfhdsnhfef</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faEnvelopeOpenText} />
                        <span>amo.erfan@lso.com</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPhone} />
                        <span>+1 2451451-5644</span>
                    </div>
                </div>
                <div className={styles.logoContact}>
                    <FontAwesomeIcon icon={faTwitter}/>
                    <FontAwesomeIcon icon={faFacebook}/>
                    <FontAwesomeIcon icon={faInstagram}/>
                    <FontAwesomeIcon icon={faLinkedin}/>
                </div>
            </div>
            <form className={styles.form}>
                <h3>Send a Message</h3>
                <div className={styles.getUser}>
                    <div className={styles.inputFild}>
                        <input type='text' placeholder='First Name'/>
                        <input type='text' placeholder='Last Name'/>
                    </div>
                    <div className={styles.inputFild}>
                        <input type='email' placeholder='Email Address'/>
                        <input type='text' placeholder='Mobile Number'/>
                    </div>
                </div>
                <div className={styles.writing}>
                    <label htmlFor="messageIn">Write your Message here...</label>
                    <textarea id="messageIn" placeholder="Message" className={styles.textWrite}></textarea>
                </div>
                <button className={styles.btn} type='submit'>Send</button>
            </form>
        </div>
    );
};

export default ContactUs;