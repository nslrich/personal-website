// NPM Imports

// CSS
import './Home.css';

// Home
function Home() {
    return (
        <div className="home">
        
            <div className='home-image'>
                <div className='home-image-pic'></div>
            </div>

            <div className='home-main'>
                <div className='home-label'>Hi, I'm</div>
                <div className='home-name'>Nathan Rich</div>
                <div className='home-title'>Software Engineer</div>

                <div className='home-descp'>
                    I am a Software Engineer with a focus on full stack devlopment. 
                    I am passionate about building excellent software that improves the lives of those around me.
                </div>
            </div>

        </div>
    );
}

export default Home;
