// NPM Imports

// CSS
import './Skills.css';

// Skills data
import skills from '../components/MySkills';

// Skills
function Skills() {
    return (
        <div className="skills">
        
            <div className='skills-title'>My Skills</div>

            {/* Languages */}
            <div className='skills-sub-title'>Programming Languages</div> 
            <div className='skills-grid'>
                { skills.languages.map( (value, index) => (
                    <div key={`skills-grid-lang-${index}`} className='skills-grid-item'>
                        <div className='skills-grid-item-name'>{value.name}</div>
                        <div className='skills-grid-item-level'>{value.level}</div>
                        <div className='skills-grid-item-yoe txt-left'>{value.yoe}</div>
                    </div>
                )) }
            </div>

            {/* Frontend */}
            <div className='skills-sub-title'>Frontend Technologies</div> 
            <div className='skills-grid'>
                { skills.frontend.map( (value, index) => (
                    <div key={`skills-grid-front-${index}`} className='skills-grid-item'>
                        <div className='skills-grid-item-name'>{value.name}</div>
                        <div className='skills-grid-item-level'>{value.level}</div>
                        <div className='skills-grid-item-yoe txt-left'>{value.yoe}</div>
                    </div>
                )) }
            </div>

            {/* Backend */}
            <div className='skills-sub-title'>Backend Technologies</div> 
            <div className='skills-grid'>
                { skills.backend.map( (value, index) => (
                    <div key={`skills-grid-back-${index}`} className='skills-grid-item'>
                        <div className='skills-grid-item-name'>{value.name}</div>
                        <div className='skills-grid-item-level'>{value.level}</div>
                        <div className='skills-grid-item-yoe txt-left'>{value.yoe}</div>
                    </div>
                )) }
            </div>


            {/* Other */}
            <div className='skills-sub-title'>Other Technologies</div> 
            <div className='skills-grid'>
                { skills.other.map( (value, index) => (
                    <div key={`skills-grid-other-${index}`} className='skills-grid-item'>
                        <div className='skills-grid-item-name'>{value.name}</div>
                        <div className='skills-grid-item-level'>{value.level}</div>
                        <div className='skills-grid-item-yoe txt-left'>{value.yoe}</div>
                    </div>
                )) }
            </div>

            <div className='skills-spacer'></div>

        </div>
    );
}

export default Skills;
