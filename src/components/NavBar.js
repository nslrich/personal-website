// NPM Imports

// My Modues

// CSS
import './NavBar.css';

// Images / SVG's
import HomeSvg from '../images/home.svg';
// import ProfileSvg from '../images/profile.svg';
import WorkSvg from '../images/work.svg';
import GradCapSvg from '../images/grad-cap.svg';
import SkillsSvg from '../images/skills.svg';
import ContactSvg from '../images/contact.svg';

// Navigation Bar
function NavBar(props) {

    // Render
    return (
        <div className="nav-bar">
        
            {/* Home */}
            <div className='nav-bar-item' onClick={ (e) => { props.changePage(e, 'home') } }>
                <img className='nav-bar-img' src={HomeSvg} alt='HOME'/>
            </div>

            {/* About */}
            {/* <div className='nav-bar-item' onClick={ (e) => { props.changePage(e, 'about') } }>
                <img className='nav-bar-img' src={ProfileSvg} alt='ABOUT'/>
            </div> */}

            {/* Experience */}
            <div className='nav-bar-item' onClick={ (e) => { props.changePage(e, 'experience') } }>
                <img className='nav-bar-img' src={WorkSvg} alt='EXP'/>
            </div>

            {/* Education */}
            <div className='nav-bar-item' onClick={ (e) => { props.changePage(e, 'education') } }>
                <img className='nav-bar-img' src={GradCapSvg} alt='EDU'/>
            </div>

            {/* Skills */}
            <div className='nav-bar-item' onClick={ (e) => { props.changePage(e, 'skills') } }>
                <img className='nav-bar-img' src={SkillsSvg} alt='SKILLS'/>
            </div>

            {/* Contact */}
            <div className='nav-bar-item' onClick={ (e) => { props.changePage(e, 'contact') } }>
                <img className='nav-bar-img' src={ContactSvg} alt='CONT'/>
            </div>
        </div>
    );
}

export default NavBar;
