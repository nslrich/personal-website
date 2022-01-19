// NPM Modules
import React from 'react';

// Bootstrap Modules
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// My Modules
import Spacer from '../components/Spacer';

// Images
import LinkImage from '../images/link-blue.png';

function Experience () {
    
    return (
        <div style={{backgroundColor: '#1A1A1B', color: 'white'}}>
            <div name='experience' className='container'>

                {/* Title */}
                <Row className='no-side-margins'>
                    <Col md={{ span: 8, offset: 2 }}>
                        <h1 className='text-center theme'>Experience</h1>
                        <hr />
                    </Col>
                </Row>

                <Spacer height={15}/>

                <Row className='no-side-margins'>
                    <Col md={{ span: 2, offset: 2 }}>
                    
                        <Row className='no-side-margins'>
                            <h5>Yale Cordage</h5>
                        </Row>

                        <Row className='no-side-margins'>
                            <h6>Saco, Maine</h6>
                        </Row>

                        <Row className='no-side-margins'>
                            <h6>Jan 2020 - Present</h6>
                        </Row>

                        <Row className='no-side-margins'>
                            <a href='https://www.yalecordage.com/'>
                                <img src={LinkImage} alt='Website' className='link-icon' />
                            </a>
                        </Row>
                    </Col>

                    <Col md={{ span: 6 }}>
                        <Row className='no-side-margins'>
                            <h5>Software Engineer</h5>
                        </Row>

                        <Row className='no-side-margins'>
                            <p>Designed and deployed web apps using React, Node.js (Express API), and MySQL & SQL Server databases.</p>
                            <p>Created custom rope testing software using Python (Tkinter, Matplotlib, and MySQL & SQL Server).</p>
                            <p>Created custom reporting tools from data gathered from an ERP system.</p>
                            <p>Maintained and updated web apps, software, and reporting tools.</p>
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
                    <Col md={{ span: 2, offset: 2 }}>
                    
                    <Row className='no-side-margins'>
                            <h5>Yale Cordage</h5>
                        </Row>

                        <Row className='no-side-margins'>
                            <h6>Saco, Maine</h6>
                        </Row>

                        <Row className='no-side-margins'>
                            <h6>Jul 2019 - Jan 2020</h6>
                        </Row>

                        <Row className='no-side-margins'>
                            <a href='https://www.yalecordage.com/'>
                                <img src={LinkImage} alt='Website' className='link-icon' />
                            </a>
                        </Row>
                    </Col>

                    <Col md={{ span: 6 }}>
                        <Row className='no-side-margins'>
                            <h5>SQL Database Intern</h5>
                        </Row>

                        <Row className='no-side-margins'>
                            <p>Designed and deployed software for Raspberry Pi’s to collect machine data.</p>
                            <p>Designed, wired, setup, programed, and deployed Raspberry Pi’s and Arduinos.</p>
                            <p>Created MySQL and Influxdb databases for many different data sources.</p>
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
                    <Col md={{ span: 2, offset: 2 }}>
                    
                    <Row className='no-side-margins'>
                            <h5>BaselineES</h5>
                        </Row>

                        <Row className='no-side-margins'>
                            <h6>Yarmouth, Maine</h6>
                        </Row>

                        <Row className='no-side-margins'>
                            <h6>May 2016 - Oct 2018</h6>
                        </Row>

                        <Row className='no-side-margins'>
                            <a href='https://www.baselinees.us/'>
                                <img src={LinkImage} alt='Website' className='link-icon' />
                            </a>
                        </Row>
                    </Col>

                    <Col md={{ span: 6 }}>
                        <Row className='no-side-margins'>
                            <h5>IT/Software Developer Intern</h5>
                        </Row>

                        <Row className='no-side-margins'>
                            <p>Designed and developed automation software in AutoIt and Nodejs (Puppeteer).</p>
                            <p>Created and deployed web apps using React, Nodejs, and PostgreSQL database.</p>
                            <p>Demonstrated software and deliverables to clients and stakeholders.</p>
                            <p>Maintained and updated software.</p>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Experience;