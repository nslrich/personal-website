// NPM Imports

// CSS
import './Experience.css';

// Experience
function Experience() {
    return (
        <div className="experience">
        
            <div className='experience-title'>My Experience</div>

            <div className='experience-row'>
                <div className='experience-item-left'>
                    <div className='experience-item-employeer'>Perceptly</div>
                    <div className='experience-item-location'>Remote, US</div>
                    <div className='experience-item-year'>Jun. 2022 - Jun 2023</div>
                </div>
                <div className='experience-item-right'>
                    <div className='experience-item-role'>Senior Software Engineer</div>
                    <ul className='experience-item-description'>
                        <li>Designed, developed and maintained full stack web app using MERN + BigQuery.</li>
                        <li>Designed, developed API connections (OAuth) to Facebook, Google, and TikTok accounts.</li>
                        <li>Responsible for designing and developing payment collection via Stripe's API</li>
                        <li>Designed, developed and deployed automation software for data collection from various API's using Python and Nodejs</li>
                        <li>Created and maintained databases and cloud storage (Google's BigQuery + Cloud Storage and MongoDB).</li>
                    </ul>
                </div>
            </div>

            <div className='experience-hr'></div>

            <div className='experience-row'>
                <div className='experience-item-left'>
                    <div className='experience-item-employeer'>Yale Cordage, Inc.</div>
                    <div className='experience-item-location'>Saco, Maine</div>
                    <div className='experience-item-year'>Jan. 2020 - Jun. 2022</div>
                </div>
                <div className='experience-item-right'>
                    <div className='experience-item-role'>Software Engineer</div>
                    <ul className='experience-item-description'>
                        <li>Designed, deployed, and maintained web applications using React, Node.js (Express.js), MySQL and SQL Server.</li>
                        <li>Created custom rope testing software using Python (Tkinter, Matplotlib, MySQL and SQL Server).</li>
                        <li>Created custom reporting tools and automated data refreshing using MS Graph API with data gathered from an ERP system.</li>
                        <li>Created RESTful APIs for PLC’s and other devices for creating / updating recipes and uploading live and historical data.</li>
                        <li>Setup data visualization tools using Grafana and InfluxDB.</li>
                    </ul>
                </div>
            </div>

            <div className='experience-hr'></div>

            <div className='experience-row'>
                <div className='experience-item-left'>
                    <div className='experience-item-employeer'>Yale Cordage, Inc.</div>
                    <div className='experience-item-location'>Saco, Maine</div>
                    <div className='experience-item-year'>Jul. 2019 - Jan. 2020</div>
                </div>
                <div className='experience-item-right'>
                    <div className='experience-item-role'>SQL Database Intern</div>
                    <ul className='experience-item-description'>
                        <li>Designed, wired, programed, and deployed Raspberry Pi’s and Arduinos on braiding, twisting and winding machines to collect various data.</li>
                        <li>Setup MySQL and InfluxDB databases for many different data sources.</li>
                    </ul>
                </div>
            </div>

            <div className='experience-hr'></div>

            <div className='experience-row'>
                <div className='experience-item-left'>
                    <div className='experience-item-employeer'>BaselineES</div>
                    <div className='experience-item-location'>Yarmouth, Maine</div>
                    <div className='experience-item-year'>May 2016 - Oct. 2018</div>
                </div>
                <div className='experience-item-right'>
                    <div className='experience-item-role'>IT/Software Developer Intern</div>
                    <ul className='experience-item-description'>
                        <li>Designed and developed automation software in AutoIt and Nodejs (Puppeteer).</li>
                        <li>Created and deployed web apps using React, Nodejs, and PostgreSQL database.</li>
                        <li>Demonstrated software and deliverables to clients and stakeholders.</li>
                        <li>Maintained and updated software.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Experience;
