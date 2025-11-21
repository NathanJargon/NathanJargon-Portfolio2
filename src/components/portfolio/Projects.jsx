import React, { useState } from 'react';
import '../../styles/Portfolio.css';

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    
    const projects = [
        {
            id: 1,
            title: "BLECARDFrames",
            description: "Blackjack AI Assistant using BLE (Bluetooth Low Energy) and Roboflow for card detection and analysis. Integrated with FRAME for enhanced real-time performance and accuracy.",
            technologies: ["Python", "BLE", "Roboflow", "AI/ML", "Computer Vision"],
            category: "ai",
            status: "Completed",
            year: "2024",
            github: "https://github.com/NathanJargon/BLECARDFrames",
            demo: "https://github.com/NathanJargon/BLECARDFrames",
            images: [
                "https://via.placeholder.com/600x400/007acc/ffffff?text=BLECARDFrames+Preview",
                "https://via.placeholder.com/600x400/0099ff/ffffff?text=Card+Detection+Demo"
            ],
            featured: true
        },
        {
            id: 2,
            title: "GEOPath",
            description: "React-based platform that integrates mapping capabilities and image uploads with an admin approval system for picture verification and monitoring. Focuses on seamless geolocation data interaction.",
            technologies: ["React", "JavaScript", "Maps API", "Firebase", "Geolocation"],
            category: "fullstack",
            status: "Completed",
            year: "2024",
            github: "https://github.com/NathanJargon/GEOPath",
            demo: "https://github.com/NathanJargon/GEOPath",
            images: [
                "https://via.placeholder.com/600x400/10b981/ffffff?text=GEOPath+Interface",
                "https://via.placeholder.com/600x400/059669/ffffff?text=Map+Integration",
                "https://via.placeholder.com/600x400/047857/ffffff?text=Admin+Panel"
            ],
            featured: true
        },
        {
            id: 3,
            title: "RPGInterminable",
            description: "Complex role-playing game system built with Python and Pygame featuring dynamic gameplay mechanics, character interactions, and environmental elements with cross-platform compatibility.",
            technologies: ["Python", "Pygame", "Game Development", "OOP"],
            category: "game",
            status: "Completed",
            year: "2024",
            github: "https://github.com/NathanJargon/RPGInterminable",
            demo: null,
            images: [
                "https://via.placeholder.com/600x400/8b5cf6/ffffff?text=RPG+Game+Screen",
                "https://via.placeholder.com/600x400/7c3aed/ffffff?text=Character+Stats",
                "https://via.placeholder.com/600x400/6d28d9/ffffff?text=Battle+System",
                "https://via.placeholder.com/600x400/5b21b6/ffffff?text=Inventory+UI"
            ],
            featured: false
        },
        {
            id: 4,
            title: "ProjectAGUI",
            description: "GUI-based water bill management application using customtkinter and Matplotlib. Features SQL database management, automation for calculations, and user-friendly data visualization.",
            technologies: ["Python", "Tkinter", "Matplotlib", "SQL", "GUI"],
            category: "desktop",
            status: "Completed",
            year: "2024",
            github: "https://github.com/NathanJargon/ProjectAGUI",
            demo: null,
            images: [
                "https://via.placeholder.com/600x400/f59e0b/ffffff?text=GUI+Interface"
            ],
            featured: true
        }
    ];

    const categories = [
        { id: 'all', label: 'All Projects', count: projects.length },
        { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
        { id: 'ai', label: 'AI/ML', count: projects.filter(p => p.category === 'ai').length },
        { id: 'game', label: 'Game Dev', count: projects.filter(p => p.category === 'game').length },
        { id: 'desktop', label: 'Desktop', count: projects.filter(p => p.category === 'desktop').length }
    ];

    const filteredProjects = selectedCategory === 'all' 
        ? projects 
        : projects.filter(project => project.category === selectedCategory);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed': return 'success';
            case 'In Progress': return 'warning';
            case 'Beta': return 'info';
            default: return 'default';
        }
    };

    return (
        <div className="content-section">
            <div className="section-header">
                <h1>Featured Work</h1>
                <div className="section-divider"></div>
                <p>A showcase of my recent projects and technical expertise</p>
            </div>
            
            <div className="project-filters">
                {categories.map(category => (
                    <button
                        key={category.id}
                        className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                        onClick={() => setSelectedCategory(category.id)}
                    >
                        {category.label}
                        <span className="count">{category.count}</span>
                    </button>
                ))}
            </div>
            
            <div className="projects-grid">
                {filteredProjects.map((project, index) => (
                    <div 
                        key={project.id} 
                        className={`project-card ${project.featured ? 'featured' : ''}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="project-header">
                            <div className="project-meta">
                                <span className={`status ${getStatusColor(project.status)}`}>
                                    {project.status}
                                </span>
                                <span className="year">{project.year}</span>
                            </div>
                            {project.featured && (
                                <div className="featured-badge">
                                    <i className="fas fa-star"></i>
                                </div>
                            )}
                        </div>
                        
                        <div className="project-content">
                            {project.images && project.images.length > 0 && (
                                <div className="project-images">
                                    <div className="image-carousel">
                                        {project.images.map((image, imgIndex) => (
                                            <img 
                                                key={imgIndex}
                                                src={image} 
                                                alt={`${project.title} screenshot ${imgIndex + 1}`}
                                                className={`project-image ${imgIndex === 0 ? 'active' : ''}`}
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                }}
                                            />
                                        ))}
                                        {project.images.length > 1 && (
                                            <div className="image-indicators">
                                                {project.images.map((_, imgIndex) => (
                                                    <span 
                                                        key={imgIndex}
                                                        className={`indicator ${imgIndex === 0 ? 'active' : ''}`}
                                                    ></span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            
                            <div className="technologies">
                                {project.technologies.map(tech => (
                                    <span key={tech} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                        
                        <div className="project-actions">
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-btn secondary">
                                    <i className="fab fa-github"></i>
                                    <span>Source</span>
                                </a>
                            )}
                            {project.demo && (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="action-btn primary">
                                    <i className="fas fa-external-link-alt"></i>
                                    <span>Live Demo</span>
                                </a>
                            )}
                            {!project.github && !project.demo && (
                                <div className="no-links-message">
                                    <i className="fas fa-info-circle"></i>
                                    <span>Project details available on request</span>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="projects-stats">
                <div className="stat">
                    <span className="stat-number">{projects.length}</span>
                    <span className="stat-label">Total Projects</span>
                </div>
                <div className="stat">
                    <span className="stat-number">{projects.filter(p => p.status === 'Completed').length}</span>
                    <span className="stat-label">Completed</span>
                </div>
                <div className="stat">
                    <span className="stat-number">{[...new Set(projects.flatMap(p => p.technologies))].length}</span>
                    <span className="stat-label">Technologies</span>
                </div>
            </div>
        </div>
    );
};

export default Projects;