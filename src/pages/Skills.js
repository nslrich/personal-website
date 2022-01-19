// NPM Modules
import React from 'react';

// Bootstrap Modules
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// My Modules
import Spacer from '../components/Spacer'

// Images
import { ReactComponent as FullStar } from '../images/full-star.svg';
import { ReactComponent as EmptyStar } from '../images/empty-star.svg';

function Skills () {
    
    return (
       <div style={{backgroundColor: '#1A1A1B', color: 'white'}}>
            <div name='skills' className='container'>

                {/* Title */}
                <Row className='no-side-margins'>
                    <Col md={{ span: 8, offset: 2 }}>
                        <h1 className='text-center theme'>Skills</h1>
                        <hr />
                    </Col>
                </Row>

                <Spacer height={15}/>

                <Row className='no-side-margins'>
                    <Col md={{ span: 4, offset: 2 }}>
                    
                        <Row className='no-side-margins row-highlight'>
                            <Col>
                                <h6 className='sm-top-bot-mrg'>Bootstrap</h6>
                            </Col>

                            <Col>
                                <Row className='no-side-margins sm-top-bot-mrg jc-end'>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                </Row>
                            </Col>
                        </Row>

                        <Row className='no-side-margins row-highlight'>
                            <Col>
                                <h6 className='sm-top-bot-mrg'>Express</h6>
                            </Col>

                            <Col>
                                <Row className='no-side-margins sm-top-bot-mrg jc-end'>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                </Row>
                            </Col>
                        </Row>

                        <Row className='no-side-margins row-highlight'>
                            <Col>
                                <h6 className='sm-top-bot-mrg'>HTML</h6>
                            </Col>

                            <Col>
                                <Row className='no-side-margins sm-top-bot-mrg jc-end'>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                </Row>
                            </Col>
                        </Row>

                        <Row className='no-side-margins row-highlight'>
                            <Col>
                                <h6 className='sm-top-bot-mrg'>Javascript</h6>
                            </Col>

                            <Col>
                                <Row className='no-side-margins sm-top-bot-mrg jc-end'>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                </Row>
                            </Col>
                        </Row>

                        <Row className='no-side-margins row-highlight'>
                            <Col>
                                <h6 className='sm-top-bot-mrg'>JSON</h6>
                            </Col>

                            <Col>
                                <Row className='no-side-margins sm-top-bot-mrg jc-end'>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                </Row>
                            </Col>
                        </Row>

                        <Row className='no-side-margins row-highlight'>
                            <Col>
                                <h6 className='sm-top-bot-mrg'>Node.js</h6>
                            </Col>

                            <Col>
                                <Row className='no-side-margins sm-top-bot-mrg jc-end'>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                </Row>
                            </Col>
                        </Row>

                        <Row className='no-side-margins row-highlight'>
                            <Col>
                                <h6 className='sm-top-bot-mrg'>React</h6>
                            </Col>

                            <Col>
                                <Row className='no-side-margins sm-top-bot-mrg jc-end'>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                </Row>
                            </Col>
                        </Row>

                        <Row className='no-side-margins row-highlight'>
                            <Col>
                                <h6 className='sm-top-bot-mrg'>Visual Studio Code</h6>
                            </Col>

                            <Col>
                                <Row className='no-side-margins sm-top-bot-mrg jc-end'>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                </Row>
                            </Col>
                        </Row>

                        <Row className='no-side-margins row-highlight'>
                            <Col>
                                <h6 className='sm-top-bot-mrg'>Windows</h6>
                            </Col>

                            <Col>
                                <Row className='no-side-margins sm-top-bot-mrg jc-end'>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                </Row>
                            </Col>
                        </Row>

                        <Row className='no-side-margins row-highlight'>
                            <Col>
                                <h6 className='sm-top-bot-mrg'>CSS</h6>
                            </Col>

                            <Col>
                                <Row className='no-side-margins sm-top-bot-mrg jc-end'>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <EmptyStar className='star-icon'/>
                                </Row>
                            </Col>
                        </Row>

                        <Row className='no-side-margins row-highlight'>
                            <Col>
                                <h6 className='sm-top-bot-mrg'>Electron</h6>
                            </Col>

                            <Col>
                                <Row className='no-side-margins sm-top-bot-mrg jc-end'>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <EmptyStar className='star-icon'/>
                                </Row>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={{ span: 4 }}>
                        <Row className='no-side-margins row-highlight'>
                            <Col>
                                <h6 className='sm-top-bot-mrg'>GitHub</h6>
                            </Col>

                            <Col>
                                <Row className='no-side-margins sm-top-bot-mrg jc-end'>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <EmptyStar className='star-icon'/>
                                </Row>
                            </Col>
                        </Row>

                        <Row className='no-side-margins row-highlight'>
                            <Col>
                                <h6 className='sm-top-bot-mrg'>MS Office</h6>
                            </Col>

                            <Col>
                                <Row className='no-side-margins sm-top-bot-mrg jc-end'>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <EmptyStar className='star-icon'/>
                                </Row>
                            </Col>
                        </Row>

                        <Row className='no-side-margins row-highlight'>
                            <Col>
                                <h6 className='sm-top-bot-mrg'>MySQL</h6>
                            </Col>

                            <Col>
                                <Row className='no-side-margins sm-top-bot-mrg jc-end'>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <EmptyStar className='star-icon'/>
                                </Row>
                            </Col>
                        </Row>

                        <Row className='no-side-margins row-highlight'>
                            <Col>
                                <h6 className='sm-top-bot-mrg'>Postman</h6>
                            </Col>

                            <Col>
                                <Row className='no-side-margins sm-top-bot-mrg jc-end'>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <EmptyStar className='star-icon'/>
                                </Row>
                            </Col>
                        </Row>

                        <Row className='no-side-margins row-highlight'>
                            <Col>
                                <h6 className='sm-top-bot-mrg'>Python</h6>
                            </Col>

                            <Col>
                                <Row className='no-side-margins sm-top-bot-mrg jc-end'>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <EmptyStar className='star-icon'/>
                                </Row>
                            </Col>
                        </Row>

                        <Row className='no-side-margins row-highlight'>
                            <Col>
                                <h6 className='sm-top-bot-mrg'>RESTful API</h6>
                            </Col>

                            <Col>
                                <Row className='no-side-margins sm-top-bot-mrg jc-end'>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <EmptyStar className='star-icon'/>
                                </Row>
                            </Col>
                        </Row>

                        <Row className='no-side-margins row-highlight'>
                            <Col>
                                <h6 className='sm-top-bot-mrg'>Linux</h6>
                            </Col>

                            <Col>
                                <Row className='no-side-margins sm-top-bot-mrg jc-end'>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <EmptyStar className='star-icon'/>
                                    <EmptyStar className='star-icon'/>
                                </Row>
                            </Col>
                        </Row>

                        <Row className='no-side-margins row-highlight'>
                            <Col>
                                <h6 className='sm-top-bot-mrg'>Arduino / C++</h6>
                            </Col>

                            <Col>
                                <Row className='no-side-margins sm-top-bot-mrg jc-end'>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <EmptyStar className='star-icon'/>
                                    <EmptyStar className='star-icon'/>
                                </Row>
                            </Col>
                        </Row>

                        <Row className='no-side-margins row-highlight'>
                            <Col>
                                <h6 className='sm-top-bot-mrg'>Java</h6>
                            </Col>

                            <Col>
                                <Row className='no-side-margins sm-top-bot-mrg jc-end'>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <EmptyStar className='star-icon'/>
                                    <EmptyStar className='star-icon'/>
                                </Row>
                            </Col>
                        </Row>

                        <Row className='no-side-margins row-highlight'>
                            <Col>
                                <h6 className='sm-top-bot-mrg'>PLC's</h6>
                            </Col>

                            <Col>
                                <Row className='no-side-margins sm-top-bot-mrg jc-end'>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <EmptyStar className='star-icon'/>
                                    <EmptyStar className='star-icon'/>
                                </Row>
                            </Col>
                        </Row>

                        <Row className='no-side-margins row-highlight'>
                            <Col>
                                <h6 className='sm-top-bot-mrg'>SQL Server</h6>
                            </Col>

                            <Col>
                                <Row className='no-side-margins sm-top-bot-mrg jc-end'>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <FullStar className='star-icon'/>
                                    <EmptyStar className='star-icon'/>
                                    <EmptyStar className='star-icon'/>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Skills;