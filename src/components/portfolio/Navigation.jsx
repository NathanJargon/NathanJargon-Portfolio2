import React from 'react';
import '../../styles/Navigation.css';
import { professionalInfo, portfolioStats } from '../../config/portfolioConfig.js';

const Navigation = ({ activeSection, setActiveSection, setIsMobileMenuOpen }) => {
    const navigationItems = [
        { id: 'about', label: 'About', icon: 'fas fa-user' },
        { id: 'skills', label: 'Skills', icon: 'fas fa-code' },
        { id: 'projects', label: 'Projects', icon: 'fas fa-laptop-code' },
        { id: 'contact', label: 'Contact', icon: 'fas fa-envelope' }
    ];

    const handleItemClick = (sectionId) => {
        setActiveSection(sectionId);
        setIsMobileMenuOpen(false); // Close mobile menu when item is clicked
    };

    return (
        <nav className="navigation">
            <div className="nav-header">
                <div className="profile-image">
                    <div className="profile-placeholder">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <h2 className="name">{professionalInfo.name.split(' ').slice(0, 2).join(' ')}</h2>
                <p className="title">{professionalInfo.title}</p>
                <div className="status-indicator">
                    <span className="status-dot"></span>
                    <span className="status-text">{portfolioStats.availability}</span>
                </div>
            </div>
            
            <ul className="nav-menu">
                {navigationItems.map((item) => (
                    <li key={item.id}>
                        <button
                            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                            onClick={() => handleItemClick(item.id)}
                        >
                            <i className={item.icon}></i>
                            <span>{item.label}</span>
                            <div className="nav-indicator"></div>
                        </button>
                    </li>
                ))}
            </ul>

            <div className="nav-footer">
                <div className="social-links">
                    <a href="https://github.com/NathanJargon" target="_blank" rel="noopener noreferrer" className="social-link">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/nashbondoc/" target="_blank" rel="noopener noreferrer" className="social-link">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://nathanjargon.itch.io" target="_blank" rel="noopener noreferrer" className="social-link">
                        <i className="fab fa-itch-io"></i>
                    </a>
                    <a href="mailto:bondoc.nash123@gmail.com" className="social-link">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;