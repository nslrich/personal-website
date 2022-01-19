// NPM Modules
import React from 'react';
import ReactDOM from 'react-dom';

// My Components
import Header from './components/Header';
import Spacer from './components/Spacer';
import Profile from './pages/Profile';
import Education from './pages/Education';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
// import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// CSS Imports
import './index.css';

document.title = 'Nathan Rich';

// Render
ReactDOM.render(
  <React.StrictMode>

    {/* NavBar */}
    <Header />

    {/* Spacer to make sure nothing is hidding behind the navbar */}
    <Spacer height={56}/>

    {/* Pages/Tabs */}
    <Profile />
    <Education />
    <Experience />
    <Skills />
    {/* <Projects /> */}
    <Contact />
    
  </React.StrictMode>,
  document.getElementById('root')
);