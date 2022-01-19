// NPM Modules
import React from 'react';

// Bootstrap Modules
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// My Modules
import Spacer from '../components/Spacer';

function Projects () {
    
    return (
        <div style={{backgroundColor: '#1A1A1B', color: 'white'}}>
            <div name='projects' className='container'>

                {/* Title */}
                <Row className='no-side-margins'>
                    <Col md={{ span: 8, offset: 2 }}>
                        <h1 className='text-center theme'>Projects</h1>
                        <hr />
                    </Col>
                </Row>

                <Spacer height={20}/>

            </div>
        </div>
    )
}

export default Projects;