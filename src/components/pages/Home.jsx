import React, { useState } from 'react';
import Navigation from '../portfolio/Navigation';
import About from '../portfolio/About';
import Projects from '../portfolio/Projects';
import Skills from '../portfolio/Skills';
import Contact from '../portfolio/Contact';
import '../../styles/Home.css';

const Home = () => {
    const [activeSection, setActiveSection] = useState('about');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const renderContent = () => {
        switch(activeSection) {
            case 'about':
                return <About />;
            case 'projects':
                return <Projects />;
            case 'skills':
                return <Skills />;
            case 'contact':
                return <Contact />;
            default:
                return <About />;
        }
    };

    return (
        <div className="portfolio-container">
            {/* Mobile Menu Button */}
            <button 
                className="mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Navigation Sidebar */}
            <div className={`navigation-sidebar ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                <Navigation 
                    activeSection={activeSection} 
                    setActiveSection={setActiveSection}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                />
            </div>

            {/* Content Area */}
            <div className="content-area">
                {renderContent()}
            </div>

            {/* Mobile Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="mobile-overlay"
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>
            )}
        </div>
    );
};

export default Home;