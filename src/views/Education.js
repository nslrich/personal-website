// NPM Imports

// CSS
import './Education.css';

// Education
function Education() {
    return (
        <div className="education">
        
            <div className='education-title'>My Education</div>

            <div className='education-row'>
                <div className='education-item-left'>
                    <div className='education-item-school'>University of Southern Maine</div>
                    <div className='education-item-location'>Portland, Maine</div>
                    <div className='education-item-year'>May 2020</div>
                </div>
                <div className='education-item-right'>
                    <div className='education-item-degree'>BS in Computer Science</div>
                    <div className='education-item-courses'>Relevent Courses:</div>
                    <div className='education-item-courses'>Design of Computing Algorithms, Software Project Management, Operating Systems, Machine Learning, Database Systems, Systems Programming, Object-Oriented Design and Data Structures.</div>
                </div>
            </div>

            <div className='education-hr'></div>

            <div className='education-row'>
                <div className='education-item-left'>
                    <div className='education-item-school'>Kents Hill School</div>
                    <div className='education-item-location'>Kents Hill, Maine</div>
                    <div className='education-item-year'>May 2014</div>
                </div>
                <div className='education-item-right'>
                    <div className='education-item-degree'>High School Diploma</div>
                </div>
            </div>
        </div>
    );
}

export default Education;
