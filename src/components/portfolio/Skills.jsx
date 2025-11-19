import React, { useState, useEffect } from 'react';
import '../../styles/Portfolio.css';

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('frontend');
    const [animatedSkills, setAnimatedSkills] = useState({});

    const skillCategories = {
        frontend: {
            title: 'Frontend Development',
            icon: 'fas fa-code',
            color: '#3b82f6',
            skills: [
                { name: 'React', level: 90, icon: 'fab fa-react', experience: '2+ years' },
                { name: 'Next.js', level: 85, icon: 'fas fa-code', experience: '1+ years' },
                { name: 'JavaScript', level: 95, icon: 'fab fa-js-square', experience: '3+ years' },
                { name: 'TypeScript', level: 80, icon: 'fas fa-code', experience: '1+ years' },
                { name: 'HTML/CSS', level: 92, icon: 'fab fa-css3-alt', experience: '3+ years' },
                { name: 'Tailwind CSS', level: 88, icon: 'fas fa-palette', experience: '2+ years' }
            ]
        },
        backend: {
            title: 'Backend Development',
            icon: 'fas fa-server',
            color: '#10b981',
            skills: [
                { name: 'Node.js', level: 88, icon: 'fab fa-node-js', experience: '2+ years' },
                { name: 'Python', level: 92, icon: 'fab fa-python', experience: '3+ years' },
                { name: 'FastAPI', level: 85, icon: 'fas fa-bolt', experience: '1+ years' },
                { name: 'Django', level: 80, icon: 'fas fa-code', experience: '1+ years' },
                { name: 'PHP', level: 75, icon: 'fab fa-php', experience: '1+ years' },
                { name: 'SQL', level: 88, icon: 'fas fa-database', experience: '2+ years' }
            ]
        },
        database: {
            title: 'Database & Cloud',
            icon: 'fas fa-database',
            color: '#f59e0b',
            skills: [
                { name: 'Firebase', level: 90, icon: 'fas fa-fire', experience: '2+ years' },
                { name: 'SQL Database', level: 88, icon: 'fas fa-database', experience: '2+ years' },
                { name: 'PythonAnywhere', level: 75, icon: 'fas fa-cloud', experience: '1+ years' },
                { name: 'Vercel', level: 85, icon: 'fas fa-rocket', experience: '2+ years' },
                { name: 'Git/GitHub', level: 92, icon: 'fab fa-git-alt', experience: '3+ years' },
                { name: 'Arduino', level: 70, icon: 'fas fa-microchip', experience: '1+ years' }
            ]
        },
        tools: {
            title: 'Mobile & Game Development',
            icon: 'fas fa-mobile-alt',
            color: '#8b5cf6',
            skills: [
                { name: 'React Native', level: 85, icon: 'fab fa-react', experience: '2+ years' },
                { name: 'Flutter/Dart', level: 80, icon: 'fas fa-mobile', experience: '1+ years' },
                { name: 'Kotlin', level: 88, icon: 'fas fa-code', experience: '1+ years' },
                { name: 'Swift', level: 75, icon: 'fab fa-swift', experience: '6 months' },
                { name: 'Unity', level: 70, icon: 'fas fa-cube', experience: '1+ years' },
                { name: 'Figma', level: 85, icon: 'fab fa-figma', experience: '1+ years' }
            ]
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            const newAnimatedSkills = {};
            skillCategories[activeCategory].skills.forEach((skill, index) => {
                setTimeout(() => {
                    setAnimatedSkills(prev => ({
                        ...prev,
                        [skill.name]: skill.level
                    }));
                }, index * 100);
            });
        }, 200);

        return () => clearTimeout(timer);
    }, [activeCategory]);

    const categoryKeys = Object.keys(skillCategories);
    const currentCategory = skillCategories[activeCategory];

    return (
        <div className="content-section">
            <div className="section-header">
                <h1>Technical Expertise</h1>
                <div className="section-divider"></div>
                <p>Comprehensive skills across the full development stack</p>
            </div>

            <div className="skills-navigation">
                {categoryKeys.map(key => {
                    const category = skillCategories[key];
                    return (
                        <button
                            key={key}
                            className={`skill-nav-btn ${activeCategory === key ? 'active' : ''}`}
                            onClick={() => setActiveCategory(key)}
                            style={{ '--category-color': category.color }}
                        >
                            <i className={category.icon}></i>
                            <span>{category.title}</span>
                        </button>
                    );
                })}
            </div>

            <div className="skills-content">
                <div className="category-header">
                    <div className="category-info">
                        <div 
                            className="category-icon"
                            style={{ backgroundColor: currentCategory.color }}
                        >
                            <i className={currentCategory.icon}></i>
                        </div>
                        <div>
                            <h3>{currentCategory.title}</h3>
                            <p>{currentCategory.skills.length} Technologies</p>
                        </div>
                    </div>
                </div>

                <div className="skills-grid">
                    {currentCategory.skills.map((skill, index) => (
                        <div 
                            key={skill.name} 
                            className="skill-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="skill-card-header">
                                <div className="skill-icon">
                                    <i className={skill.icon}></i>
                                </div>
                                <div className="skill-info">
                                    <h4>{skill.name}</h4>
                                    <span className="experience">{skill.experience}</span>
                                </div>
                                <div className="skill-level">
                                    <span>{skill.level}%</span>
                                </div>
                            </div>
                            
                            <div className="skill-progress-container">
                                <div className="skill-progress-bg">
                                    <div 
                                        className="skill-progress-fill"
                                        style={{ 
                                            width: `${animatedSkills[skill.name] || 0}%`,
                                            backgroundColor: currentCategory.color
                                        }}
                                    ></div>
                                </div>
                            </div>
                            
                            <div className="skill-tags">
                                <span className="proficiency-tag">
                                    {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : 'Intermediate'}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="skills-summary">
                <div className="summary-stats">
                    <div className="stat-item">
                        <span className="stat-number">24+</span>
                        <span className="stat-label">Technologies</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">3+</span>
                        <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">15+</span>
                        <span className="stat-label">Projects Completed</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;