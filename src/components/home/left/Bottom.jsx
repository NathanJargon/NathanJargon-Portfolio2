import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import '../../../styles/Bottom.css'; // Import the CSS file

const Bottom = () => {
    return (
        <div>
            <ul className="bottom-list">
                <li><a href="#projects">— Projects</a></li>
                <li><a href="#skills">— Skills</a></li>
                <li><a href="#jobs">— Jobs</a></li>
            </ul>
            <div className="icons">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        </div>
    );
};

export default Bottom;