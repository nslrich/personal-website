// NPM Modules
import React from 'react';

// Bootstrap Modules
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// My Modules
import Spacer from '../components/Spacer';

// Icons
import GithubLogo from '../images/github-logo.svg';
import LinkedInLogo from '../images/linkedin-logo.svg'
import EmailLogo from '../images/email.svg';
import PDFLogo from '../images/pdf.svg';

// PDF
import ResumePDF from '../images/Public_Resume_Nathan_Rich.pdf';

function Contact () {
    
    return (
        <div style={{backgroundColor: '#1A1A1B', color: 'white'}}>
            <div name='contact' className='container'>

                {/* Title */}
                <Row className='no-side-margins'>
                    <Col md={{ span: 8, offset: 2 }}>
                        <h1 className='text-center theme'>Contact Me</h1>
                        <hr />
                    </Col>
                </Row>

                <Spacer height={20}/>

                <Row className='no-side-margins'>
                    <Col md={{ span: 4, offset: 2 }}>
                        <Row className='no-side-margins contact-row'>
                            <a href='https://www.linkedin.com/in/nathan-sl-rich/' target="_blank" rel="noopener noreferrer">
                                <Row className='no-side-margins no-wrap'>
                                    <img src={LinkedInLogo} alt='LinkedIn' className='contact-icon' />
                                    <div className='contact-link'>https://www.linkedin.com/in/nathan-sl-rich/</div>
                                </Row>
                            </a>
                        </Row>
                    </Col>

                    <Col md={{ span: 4 }}>
                        <Row className='no-side-margins contact-row'>
                            <a href='https://github.com/nslrich' target="_blank" rel="noopener noreferrer">
                                <Row className='no-side-margins no-wrap'>
                                    <img src={GithubLogo} alt='GitHub' className='contact-icon' />
                                    <div className='contact-link'>https://github.com/nslrich</div>
                                </Row>
                            </a>
                        </Row>
                    </Col>
                </Row>

                <Row className='no-side-margins'>
                    <Col md={{ span: 4, offset: 2 }}>
                        <Row className='no-side-margins contact-row'>
                            <a href="mailto:nslrich@gmail.com">
                                <Row className='no-side-margins no-wrap'>
                                    <img src={EmailLogo} alt='LinkedIn' className='contact-icon' />
                                    <div className='contact-link'>nslrich@gmail.com</div>
                                </Row>
                            </a>
                        </Row>
                    </Col>

                    <Col md={{ span: 4 }}>
                        <Row className='no-side-margins contact-row' target="_blank" rel="noopener noreferrer">
                            <a href={ResumePDF}>
                                <Row className='no-side-margins no-wrap'>
                                    <img src={PDFLogo} alt='Resume' className='contact-icon' />
                                    <div className='contact-link'>Download Resume</div>
                                </Row>
                            </a>
                        </Row>
                    </Col>
                </Row>

                <Spacer height={50}/>
            </div>
        </div>
    )
}

export default Contact;