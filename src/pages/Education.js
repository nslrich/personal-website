// NPM Modules
import React from 'react';

// Bootstrap Modules
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// My Modules
import Spacer from '../components/Spacer';

// Images
import LinkImage from '../images/link-blue.png';

function Education () {
    
    return (
        <div style={{backgroundColor: '#1A1A1B', color: 'white'}}>
            <div name='education' className='container'>

                {/* Title */}
                <Row className='no-side-margins'>
                    <Col md={{ span: 8, offset: 2 }}>
                        <h1 className='text-center theme'>Education</h1>
                        <hr />
                    </Col>
                </Row>

                <Spacer height={15}/>

                <Row className='no-side-margins'>
                    <Col md={{ span: 3, offset: 2 }}>
                    
                        <Row className='no-side-margins'>
                            <h5>University of Southern Maine</h5>
                        </Row>

                        <Row className='no-side-margins'>
                            <h6>Portland, Maine</h6>
                        </Row>

                        <Row className='no-side-margins'>
                            <h6>May 2020</h6>
                        </Row>

                        <Row className='no-side-margins'>
                            <a href='https://usm.maine.edu/'>
                                <img src={LinkImage} alt='Website' className='link-icon' />
                            </a>
                        </Row>

                    </Col>

                    <Col md={{ span: 5 }}>
                        <Row className='no-side-margins'>
                            <h5>Bachelor - Computer Science</h5>
                        </Row>

                        <Row className='no-side-margins'>
                            <p>Relevent Course Work:</p>
                            <p>Design of Computing Algorithms, Software Project Management, Operating Systems, Machine Learning, Database Systems, Systems Programming, Object-Oriented Design and Data Structures.</p>
                        </Row>
                    </Col>
                </Row>

                {/* Title */}
                <Row className='no-side-margins'>
                    <Col md={{ span: 8, offset: 2 }}>
                        <hr />
                    </Col>
                </Row>

                <Spacer height={15}/>

                <Row className='no-side-margins'>
                    <Col md={{ span: 3, offset: 2 }}>
                    
                        <Row className='no-side-margins'>
                            <h5>Kents Hill School</h5>
                        </Row>

                        <Row className='no-side-margins'>
                            <h6>Kents Hill, Maine</h6>
                        </Row>

                        <Row className='no-side-margins'>
                            <h6>May 2014</h6>
                        </Row>

                        <Row className='no-side-margins'>
                            <a href='https://www.kentshill.org/'>
                                <img src={LinkImage} alt='Website' className='link-icon' />
                            </a>
                        </Row>
                    </Col>

                    <Col md={{ span: 5 }}>
                        <Row className='no-side-margins'>
                            <h5>Highschool Diploma</h5>
                        </Row>

                        <Row className='no-side-margins'>
                            <p></p>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Education;