// NPM Imports
import { useState } from 'react';

// My Modues
import NavBar from './NavBar';
import Home from '../views/Home';
// import About from '../views/About';
import Experience from '../views/Experience';
import Education from '../views/Education';
import Skills from '../views/Skills';
import Contact from '../views/Contact';

// CSS
import './App.css';

// App
function App() {

  // State Variables
  const [activePage, setActivePage] = useState('home');

  // Function for changing active view / page
  const changePage = (event, page) => {

    // Scroll to the top, some reason scroll stays from view to view
    window.scrollTo({ top: 0 });

    // Update state
    setActivePage(page);
  }

  // Render
  return (
    <div className="container">
      
      {/* Nav Bar */}
      <NavBar changePage={changePage} />

      {/* Pick right view / page to render depending on the state (Simple Router) */}
      {
        activePage === 'home' ? <Home /> 
        // : activePage === 'about' ? <About /> 
        : activePage === 'experience' ? <Experience /> 
        : activePage === 'education' ? <Education /> 
        : activePage === 'skills' ? <Skills /> 
        : activePage === 'contact' ? <Contact /> 
        : null
      }

      {/* Spacer to give some extra space at the bottom of the page */}
      <div className='bottom-spacer'></div>

    </div>
  );
}

export default App;
