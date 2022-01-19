// NPM Modules
import React from 'react'
import { scroller } from 'react-scroll';

// Bootstrap Modules
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {

    const gotToSection = (e, id) => {
        e.preventDefault();
        console.log(id);

        scroller.scrollTo(id, {
            smooth: false,
            offset: -56,
        });
    }

    return (
        <Navbar style={{backgroundColor: '#252626', justifyContent: 'center'}} fixed="top" className='underline'>

            <Nav className="mr-auto">

                {/* Profile Page */}
                <Nav.Link style={{color: '#cf9d33'}} onClick={e => gotToSection(e, 'profile')}>Profile</Nav.Link>

                {/* Education Page */}
                <Nav.Link style={{color: '#cf9d33'}} onClick={e => gotToSection(e, 'education')}>Education</Nav.Link>

                {/* Experience Page */}
                <Nav.Link style={{color: '#cf9d33'}} onClick={e => gotToSection(e, 'experience')}>Experience</Nav.Link>

                {/* Skills Page */}
                <Nav.Link style={{color: '#cf9d33'}} onClick={e => gotToSection(e, 'skills')}>Skills</Nav.Link>

                {/* Projects Page */}
                {/* <Nav.Link style={{color: '#cf9d33'}} onClick={e => gotToSection(e, 'projects')}>Projects</Nav.Link> */}

                {/* Contact Me Page */}
                <Nav.Link style={{color: '#cf9d33'}} onClick={e => gotToSection(e, 'contact')}>Contact</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default Header;