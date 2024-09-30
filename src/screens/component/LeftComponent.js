import React, { useState } from 'react';
import './styles/LeftComponent.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faItchIo } from '@fortawesome/free-brands-svg-icons';

const LeftComponent = () => {
  const [activeSection, setActiveSection] = useState('ABOUT');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="left-component">
      <h1>Nash Andrew Y. Bondoc</h1>
      <h2>Full-Stack Developer</h2>
      <p>
        An experienced developer who loves to code—turning ideas into working software, fixing bugs, and making things run smoothly.
      </p>
      <div className="sections">
        <h3 
          className={activeSection === 'ABOUT' ? 'active' : ''} 
          onClick={() => handleSectionClick('ABOUT')}
        >
          ABOUT
        </h3>
        <h3 
          className={activeSection === 'EXPERIENCE' ? 'active' : ''} 
          onClick={() => handleSectionClick('EXPERIENCE')}
        >
          EXPERIENCE
        </h3>
        <h3 
          className={activeSection === 'PROJECTS' ? 'active' : ''} 
          onClick={() => handleSectionClick('PROJECTS')}
        >
          PROJECTS
        </h3>
        <h3 
          className={activeSection === 'NOVELS' ? 'active' : ''} 
          onClick={() => handleSectionClick('NOVELS')}
        >
          NOVELS
        </h3>
      </div>
      <div className="social-icons">
        <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-username/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://itch.io/profile/your-itch-io-username" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faItchIo} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default LeftComponent;