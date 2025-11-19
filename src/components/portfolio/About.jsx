import React, { useState } from 'react';
import '../../styles/Portfolio.css';

const About = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const tabs = {
        overview: {
            title: 'Overview',
            icon: 'fas fa-user',
            content: (
                <div className="tab-content">
                    <div className="intro">
                        <h3>Full Stack Developer & Machine Learning Engineer</h3>
                        <p className="lead">
                            I'm a passionate developer and ML engineer with expertise in building scalable applications 
                            and innovative AI solutions. Currently pursuing my Bachelor's in Computer Science while 
                            gaining hands-on experience with leading tech companies worldwide.
                        </p>
                    </div>
                    
                    <div className="highlights">
                        <div className="highlight-item">
                            <div className="highlight-icon">
                                <i className="fas fa-rocket"></i>
                            </div>
                            <div>
                                <h4>Innovation Focused</h4>
                                <p>Always exploring cutting-edge technologies and methodologies to deliver exceptional results.</p>
                            </div>
                        </div>
                        
                        <div className="highlight-item">
                            <div className="highlight-icon">
                                <i className="fas fa-users"></i>
                            </div>
                            <div>
                                <h4>Collaborative Approach</h4>
                                <p>Strong believer in agile methodologies and cross-functional team collaboration.</p>
                            </div>
                        </div>
                        
                        <div className="highlight-item">
                            <div className="highlight-icon">
                                <i className="fas fa-code"></i>
                            </div>
                            <div>
                                <h4>Clean Code Advocate</h4>
                                <p>Committed to writing maintainable, scalable, and well-documented code.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        experience: {
            title: 'Experience',
            icon: 'fas fa-briefcase',
            content: (
                <div className="tab-content">
                    <div className="experience-timeline">
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h4>Full Stack Developer</h4>
                                    <span className="company">Shrader Technology</span>
                                    <span className="period">Sept 2024 - Mar 2025</span>
                                </div>
                                <p>Developed mobile applications using Kotlin and Swift and website development using React and Node.js, contributing to feature-rich and user-friendly designs.</p>
                                <div className="achievements">
                                    <span>• Pushed 70% of improved work development code</span>
                                    <span>• QA tested applications with agile methodologies</span>
                                    <span>• Enhanced creative design skills with Figma</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h4>Full-Stack Developer & Co-Founder</h4>
                                    <span className="company">QuantumQuill Studios</span>
                                    <span className="period">Dec 2023 - Sept 2024</span>
                                </div>
                                <p>Co-founded a startup company, spearheading full-stack development of both web and mobile applications.</p>
                                <div className="achievements">
                                    <span>• Led end-to-end development processes</span>
                                    <span>• Designed scalable applications</span>
                                    <span>• Ensured high-quality product delivery</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h4>Backend API Developer</h4>
                                    <span className="company">USTP</span>
                                    <span className="period">Nov 2023 - Nov 2024</span>
                                </div>
                                <p>Key developer in the CORE team, creating APIs to manage and streamline information for Computer Science students.</p>
                                <div className="achievements">
                                    <span>• Developed student management APIs</span>
                                    <span>• Streamlined CS department processes</span>
                                    <span>• Enhanced system efficiency</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <h4>Machine Learning Engineer Intern</h4>
                                    <span className="company">Unify Ivy & RadicalX</span>
                                    <span className="period">Sept 2023 - Jan 2024</span>
                                </div>
                                <p>Designed ML algorithms and contributed to AI projects for international companies.</p>
                                <div className="achievements">
                                    <span>• Achieved 10% improvement in model efficiency</span>
                                    <span>• Delivered 20% of new functionality</span>
                                    <span>• Gained hands-on AI/ML experience</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        education: {
            title: 'Education',
            icon: 'fas fa-graduation-cap',
            content: (
                <div className="tab-content">
                    <div className="education-grid">
                        <div className="education-item">
                            <div className="education-icon">
                                <i className="fas fa-university"></i>
                            </div>
                            <div className="education-details">
                                <h4>Bachelor of Science in Computer Science</h4>
                                <p className="institution">University of Science and Technology of Southern Philippines</p>
                                <span className="year">May 2023 - Present</span>
                                <p className="description">Currently pursuing BSCS with focus on software development and AI. Actively supporting fellow students with technical guidance.</p>
                            </div>
                        </div>
                        
                        <div className="education-item">
                            <div className="education-icon">
                                <i className="fas fa-brain"></i>
                            </div>
                            <div className="education-details">
                                <h4>Machine Learning Specialization</h4>
                                <p className="institution">Practical Experience</p>
                                <span className="year">2023 - 2024</span>
                                <p className="description">Gained extensive hands-on experience through internships with Unify Ivy, RadicalX, and Toloka AI projects.</p>
                            </div>
                        </div>
                        
                        <div className="education-item">
                            <div className="education-icon">
                                <i className="fas fa-code"></i>
                            </div>
                            <div className="education-details">
                                <h4>Full-Stack Development</h4>
                                <p className="institution">Self-Taught & Professional Practice</p>
                                <span className="year">2023 - Present</span>
                                <p className="description">Comprehensive experience in web and mobile development through startup co-founding and various projects.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="continuous-learning">
                        <h4>Continuous Learning</h4>
                        <p>I believe in staying current with technology trends and regularly pursue online courses, attend conferences, and contribute to open-source projects.</p>
                    </div>
                </div>
            )
        }
    };

    return (
        <div className="content-section">
            <div className="section-header">
                <h1>About Nash</h1>
                <div className="section-divider"></div>
                <p>Get to know more about my background, experience, and passion for technology</p>
            </div>

            <div className="about-tabs">
                {Object.entries(tabs).map(([key, tab]) => (
                    <button
                        key={key}
                        className={`tab-button ${activeTab === key ? 'active' : ''}`}
                        onClick={() => setActiveTab(key)}
                    >
                        <i className={tab.icon}></i>
                        <span>{tab.title}</span>
                    </button>
                ))}
            </div>

            <div className="about-content">
                {tabs[activeTab].content}
            </div>

            <div className="about-stats">
                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="fas fa-project-diagram"></i>
                    </div>
                    <div className="stat-content">
                        <span className="stat-number">15+</span>
                        <span className="stat-label">Projects Delivered</span>
                    </div>
                </div>
                
                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="fas fa-clock"></i>
                    </div>
                    <div className="stat-content">
                        <span className="stat-number">2+</span>
                        <span className="stat-label">Years Experience</span>
                    </div>
                </div>
                
                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="fas fa-building"></i>
                    </div>
                    <div className="stat-content">
                        <span className="stat-number">6+</span>
                        <span className="stat-label">Companies Worked</span>
                    </div>
                </div>
                
                <div className="stat-card">
                    <div className="stat-icon">
                        <i className="fas fa-code"></i>
                    </div>
                    <div className="stat-content">
                        <span className="stat-number">25+</span>
                        <span className="stat-label">Technologies</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;