import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [activeLink, setActiveLink] = useState('home');

  return (
    <>
      <nav class="navbar">
        <ul class="nav-links">
          <li><a href="#home" className={activeLink === 'home' ? 'active-line' : ''}
            onClick={() => {
              setActiveLink('home')
            }}>Home</a></li>
          <li><a href="#skills" className={activeLink === 'skills' ? 'active-line' : ''}
            onClick={() => {
              setActiveLink('skills')
            }}>Skills</a></li>
          <li><a href="#experience" className={activeLink === 'experience' ? 'active-line' : ''}
            onClick={() => {
              setActiveLink('experience')
            }}>Experience</a></li>
          <li><a href="#projects" className={activeLink === 'projects' ? 'active-line' : ''}
            onClick={() => {
              setActiveLink('projects')
            }}>Projects</a></li>
        </ul>
      </nav>
      <div className='home-page' id='home'>
        <div className='home-page-quote'>
          <span>As <span className='quote-heilight'>heron</span> stands with folded wing, so wait in waiting hour
            As heron snaps its prey, when time, put forth your power<span className='quote-heilight'>...</span></span>
        </div>
        <img className='home-page-gif' src='gif2.gif'></img>
      </div>
      <div className='container'>
        <div className='skills' id='skills'>
          <span>Skills</span>
          <ul className='skills-list'>
            <li>Exposure in implementing various MERN stack (MongoDB , ReactJS , NodeJS).</li>
            <li>Good in developing MERN stack applications by writing server side code with NodeJS and
              express framework. </li>
            <li>Used MongoDB database to store and retrieve data in specific collections using schema of mongoose.</li>
            <li>Proficient in using ReactJs to build User Interface for web application.</li>
            <li>Good understanding in creating responsive web application using media queries with break
              points and using flex layout without media queries.</li>
            <li>Proficient in Figma to design interactive and user friendly UI designs for web application.</li>
          </ul>
        </div>
        <div className='experience' id='experience'>
          <span>Experience</span>
          <div className='experience-container'>
            <span className='experience-span'>I'm an accomplished full-stack web developer, adept at harnessing the power of the MERN stack (MongoDB, Express, React, Node.js) to create dynamic and engaging applications. My skills encompass the entire development cycle, from crafting intricate server-side logic with Node.js and Express to optimizing data storage using MongoDB's versatile schema. On the front end, I excel in developing captivating user interfaces with React, leveraging media queries and flex layout to ensure responsiveness across devices. My design prowess extends to Figma, where I craft intuitive and visually appealing UI designs. Most importantly, I specialize in front-end development, dedicated to crafting seamless and responsive websites that leave a lasting impact.</span>
            <img className='experience-img' src='san.png'></img>
          </div>
        </div>
        <div className='projects' id='projects'>
          <div>
            <span>Projects</span>
          </div>
          <div className='project-card-container'>
            <div className='project-card'>
              <h3>Library Management System</h3>
              <h3>Client : In- House Project </h3>
              <h4 >Responsibilities and Deliverables:</h4>
              <ul >
                <li>Developed a search bar to search books in Library using Regex.</li>
                <li>Designed a module to send email using node-mailer.</li>
                <li>Developed module to download the JSON data as CSV file.</li>
              </ul>
            </div>
            <div className='project-card'>
              <h3> Women’ssafety SOS App</h3>
              <h3>Client : In- House Project </h3>
              <h4 >Responsibilities and Deliverables:</h4>
              <ul >
                <li>Developed an authorization using OAuth sign-in with google.</li>
                <li>Implemented logic for OAuth sign-in with google.</li>
                <li>Created an auto generated mail containing OTP and send it while authorizing.</li>
              </ul>
            </div>
            <div className='project-card'>
              <h3>Employee Virtual Monitoring System</h3>
              <h3>Client : In-House Project </h3>
              <h4 >Responsibilities and Deliverables:</h4>
              <ul >
                <li>Experience the role of Leadership and coordinated team members in project completion.</li>
                <li>Coded for taking screenshots of user desktop in a particular interval.</li>
                <li>Implemented the logic to view the desktop screen of different user</li>
              </ul>
            </div>
            <div className='project-card'>
              <h3>RYRC Website and Web Portal</h3>
              <h3>Client : Rajavalli Rajiv</h3>
              <h4 >Responsibilities and Deliverables:</h4>
              <ul >
                <li>Utilize React and implementing on various screens for the front-end.</li>
                <li>Designed various pages using Figma , web-based interface tool.</li>
                <li>Proficient in using flexbox to make it responsive.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='footer'>
        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
        <a>&nbsp;&nbsp;santhosh.r@kaaviansys.com</a>
      </div>
    </>
  )
}


export default App;