// NPM Imports
import { useState } from 'react';

// CSS
import './Contact.css';

// Images
import LinkedInLogo from '../images/link-logo.svg';
import GitHubLogo from '../images/github-logo.svg';
import EmailLogo from '../images/email.svg';
import PdfLogo from '../images/pdf.svg';

// Documents
import ResumePdf from '../documents/Resume-Public.pdf';

// Contact
function Contact() {

    // State Variables
    const [formName, setFormName] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const [formSubject, setFormSubject] = useState('');
    const [formMessage, setFormMessage] = useState('');

    // Function to handle on submit
    const formSubmit = (event) => {

        // Prevent submitting of form
        event.preventDefault();

        // Disable button
        document.getElementById('contact-form-btn').disabled = true;

        // Check values
        var fail = false;

        // Check name
        if (formName === '') {

            // Show helpful message
            document.getElementById('contact-name-req').style.visibility = 'visible';

            // Set failed
            fail = true;
        } else {

            // Hide helpful message (No effect if already hidden)
            document.getElementById('contact-name-req').style.visibility = 'hidden';
        }

        // Check email
        if (formEmail === '') {

            // Show helpful message
            document.getElementById('contact-email-req').style.visibility = 'visible';

            // Set failed
            fail = true;
        } else {

            // Hide helpful message (No effect if already hidden)
            document.getElementById('contact-email-req').style.visibility = 'hidden';
        }

        // Check subject
        if (formSubject === '') {

            // Show helpful message
            document.getElementById('contact-subject-req').style.visibility = 'visible';

            // Set failed
            fail = true;
        } else {

            // Hide helpful message (No effect if already hidden)
            document.getElementById('contact-subject-req').style.visibility = 'hidden';
        }

        // Check message
        if (formMessage === '') {

            // Show helpful message
            document.getElementById('contact-msg-req').style.visibility = 'visible';

            // Set failed
            fail = true;
        } else {

            // Hide helpful message (No effect if already hidden)
            document.getElementById('contact-msg-req').style.visibility = 'hidden';
        }

        if (fail) {

            // Enable button
            document.getElementById('contact-form-btn').disabled = false;

        } else {

            // Setup email options / details
            var options = {
                subject: formSubject,
                name: formName,
                email: formEmail,
                message: formMessage,
            };

            // Send email using EmailJS
            // Sadly this requires Secret Keys to use, I dont have a backend setup for this project.
            // Adding secret keys directly to and .env file or any other way is not recommended as it can be seen.
            // This is just a template of what it could do if all parts were setup.

            document.getElementById('contact-form-status').className = 'contact-form-status-fail';
            document.getElementById('contact-form-status').innerText = 'Unable to send message. Due to React\'s inability to hide secret keys and without a backend API, there is no safe way to use EmailJS. Sorry for the inconvenience. If you wish to reach out to me please message me via LinkedIn or email me directly.';
        }
    }

    // Render
    return (
        <div className="contact">

            <div className='contact-title'>Contact Me</div>

            <div className='contact-main'>

                <div className='contact-methods'>
                    
                    <div className='contact-methods-note'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities.</div>

                    <a className='contact-methods-item' href='https://www.linkedin.com/in/nathan-sl-rich' target="_blank" rel="noopener noreferrer">
                        <img className='contact-methods-img' src={LinkedInLogo} alt='LinkedIn' />
                        <div className='contact-methods-name'>nathan-sl-rich</div>
                    </a>
                    <a className='contact-methods-item' href='https://github.com/nslrich' target="_blank" rel="noopener noreferrer">
                        <img className='contact-methods-img' src={GitHubLogo} alt='GitHub' />
                        <div className='contact-methods-name'>nslrich</div>
                    </a>
                    <a className='contact-methods-item' href='mailto:nslrich@gmail.com' target="_blank" rel="noopener noreferrer">
                        <img className='contact-methods-img' src={EmailLogo} alt='Email' />
                        <div className='contact-methods-name'>nslrich@gmail.com</div>
                    </a>
                    <a className='contact-methods-item' href={ResumePdf} target="_blank" rel="noopener noreferrer">
                        <img className='contact-methods-img' src={PdfLogo} alt='PDF' />
                        <div className='contact-methods-name'>Downloadable Resume</div>
                    </a>
                </div>

                <form className='contact-form' onSubmit={(e) => { formSubmit(e) }}>

                    <div className='contact-form-row'>
                        <div className='contact-form-group'>
                            <input className='contact-form-input' placeholder='Your Name' value={formName} onChange={(e) => { setFormName(e.target.value) }}></input>
                            <div id='contact-name-req' className='contact-form-required'>Name is required.</div>
                        </div>

                        <div className='contact-form-group'>
                            <input className='contact-form-input' placeholder='Your Email' type='email'
                                value={formEmail} onChange={(e) => { setFormEmail(e.target.value) }}
                            ></input>
                            <div id='contact-email-req' className='contact-form-required'>Email is required.</div>
                        </div>
                    </div>

                    <div className='contact-form-row'>
                        <div className='contact-form-group'>
                            <input className='contact-form-input' placeholder='Message Subject' value={formSubject} onChange={(e) => { setFormSubject(e.target.value) }}></input>
                            <div id='contact-subject-req' className='contact-form-required'>Subject is required.</div>
                        </div>
                    </div>

                    <div className='contact-form-row'>
                        <div className='contact-form-group'>
                            <textarea className='contact-form-input contact-form-textarea' placeholder='Message'
                                rows={12} value={formMessage} onChange={(e) => { setFormMessage(e.target.value) }}
                            ></textarea>
                            <div id='contact-msg-req' className='contact-form-required'>Message is required.</div>
                        </div>
                    </div>

                    <div className='contact-form-btn-bar'>
                        <button id='contact-form-btn' className='contact-form-btn' type='submit'>Send Message</button>
                        <div id='contact-form-status' className='contact-form-status'></div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
