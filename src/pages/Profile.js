// NPM Modules
import React from 'react';

// Bootstrap Modules
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

// My Modules
import Spacer from '../components/Spacer';

// Images
import Selfie from '../images/profile-pic.png';

function Profile () {
    
    return (

        <div style={{backgroundColor: '#1A1A1B', color: 'white'}}>
            <div name='profile' className='container'>

                {/* Title */}
                <Row className='no-side-margins'>
                    <Col md={{ span: 8, offset: 2 }}>
                        <h1 className='text-center theme'>Profile</h1>
                        <hr />
                    </Col>
                </Row>

                <Spacer height={20}/>

                {/* Body */}
                <Row className='no-side-margins'>
                    <Col md={{ span: 8, offset: 2 }}>
                        <Row className='no-side-margins'>
                            <Col>
                                <h4 className='text-center'>About Me</h4>
                                {/* <hr /> */}
                                <p>
                                    My name is Nathan Rich. I am an experienced software engineer who primarily focus on full stack web development. 
                                    In my four years of development, I have worked with many technologies in web development, application development, automation, and data collection.  
                                    I have spent most of my time working as a solo developer designing and creating all parts of the software and working directly with the stakeholders.
                                    I am eager to learn more technologies, techniques, and ideas. 
                                </p>
                                {/* I am 26 years old Software Engineer. I tend to focus more on web devlopment, but enjoy making standalone apps and other projects as well. */}
                            </Col>

                            <Col className='items-center'>
                                <Image src={Selfie} className='profile-pic' alt='Nathan Rich'/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Profile;