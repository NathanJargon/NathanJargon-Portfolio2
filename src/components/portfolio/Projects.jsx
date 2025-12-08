import React, { useState } from 'react';
import '../../styles/Portfolio.css';
import { portfolioStats } from '../../config/portfolioConfig.js';

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [activeImageIndex, setActiveImageIndex] = useState({});
    
    const projects = [
        {
            id: 1,
            title: "Shrader Technology",
            description: "Professional company website built with React-Vite for a technology company. Features modern design, responsive layout, and optimized performance for business operations.",
            technologies: ["React", "Vite", "JavaScript", "CSS", "Responsive Design"],
            category: "fullstack",
            status: "Completed",
            year: "2024",
            github: null,
            demo: "https://shradertechnology.vercel.app",
            images: [
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
            ],
            featured: true
        },
        {
            id: 2,
            title: "BLECARDFrames",
            description: "Blackjack AI Assistant using BLE (Bluetooth Low Energy) and Roboflow for card detection and analysis. Integrated with FRAME for enhanced real-time performance and accuracy.",
            technologies: ["Python", "BLE", "Roboflow", "AI/ML", "Computer Vision"],
            category: "ai",
            status: "Completed",
            year: "2024",
            github: "https://github.com/NathanJargon/BLECARDFrames",
            demo: null,
            images: [
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center",
                "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=center"
            ],
            featured: true
        },
        {
            id: 3,
            title: "GEOPath",
            description: "React-based platform that integrates mapping capabilities and image uploads with an admin approval system for picture verification and monitoring. Focuses on seamless geolocation data interaction.",
            technologies: ["React", "JavaScript", "Maps API", "Firebase", "Geolocation"],
            category: "fullstack",
            status: "Completed",
            year: "2024",
            github: "https://github.com/NathanJargon/GEOPath",
            demo: null,
            images: [
                "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop&crop=center",
                "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=600&h=400&fit=crop&crop=center",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
            ],
            featured: true
        },
        {
            id: 4,
            title: "EscapeFlow",
            description: "Python maze-escape game with moving obstacles using BFS (Breadth-First Search) algorithm and dynamic obstacle avoidance. Features intelligent pathfinding and real-time obstacle navigation.",
            technologies: ["Python", "BFS Algorithm", "Game Development", "Pathfinding"],
            category: "game",
            status: "Completed",
            year: "2024",
            github: "https://github.com/NathanJargon/EscapeFlow",
            demo: null,
            images: [
                "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop&crop=center",
                "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&crop=center"
            ],
            featured: false
        },
        {
            id: 5,
            title: "CPGraphing",
            description: "Python-based application that visualizes mathematical functions and their derivatives/integrals using computational methods. Features interactive graphing and real-time calculations.",
            technologies: ["Python", "Matplotlib", "NumPy", "Calculus", "Data Visualization"],
            category: "desktop",
            status: "Completed",
            year: "2024",
            github: "https://github.com/NathanJargon/CPGraphing",
            demo: null,
            images: [
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
                "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=600&h=400&fit=crop&crop=center"
            ],
            featured: false
        },
        {
            id: 6,
            title: "Ecoventurer",
            description: "Expo mobile garbage classifier application using OpenAI technology. Features real-time image recognition to help users properly categorize waste for environmental sustainability.",
            technologies: ["React Native", "Expo", "OpenAI", "Machine Learning", "Mobile Dev"],
            category: "mobile",
            status: "Completed",
            year: "2024",
            github: "https://github.com/NathanJargon/Ecoventurer",
            demo: null,
            images: [
                "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop&crop=center",
                "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center"
            ],
            featured: true
        },
        {
            id: 7,
            title: "STIQR",
            description: "Expo mobile student and teacher QR attendance application. Streamlines attendance tracking with QR code scanning technology for educational institutions.",
            technologies: ["React Native", "Expo", "QR Code", "Mobile Dev", "Education"],
            category: "mobile",
            status: "Completed",
            year: "2024",
            github: "https://github.com/NathanJargon/STIQR",
            demo: null,
            images: [
                "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop&crop=center",
                "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop&crop=center"
            ],
            featured: false
        },
        {
            id: 8,
            title: "CSUMobilePortal",
            description: "Expo mobile student portal application for schedules and calendar events. Provides students with easy access to academic information and event management.",
            technologies: ["React Native", "Expo", "Calendar API", "Mobile Dev", "Education"],
            category: "mobile",
            status: "Completed",
            year: "2024",
            github: "https://github.com/NathanJargon/CSUMobilePortal",
            demo: null,
            images: [
                "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop&crop=center",
                "https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&h=400&fit=crop&crop=center"
            ],
            featured: false
        },
        {
            id: 9,
            title: "EXPENSEPal",
            description: "React web application for tracking personal expenses. Features intuitive expense categorization, budget management, and financial analytics for personal finance management.",
            technologies: ["React", "JavaScript", "Local Storage", "Chart.js", "Finance"],
            category: "fullstack",
            status: "Completed",
            year: "2024",
            github: "https://github.com/NathanJargon/EXPENSEPal",
            demo: null,
            images: [
                "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=center",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
            ],
            featured: false
        },
        {
            id: 10,
            title: "KARBON",
            description: "Expo mobile carbon footprint tracker application. Helps users monitor and reduce their environmental impact through activity tracking and sustainability recommendations.",
            technologies: ["React Native", "Expo", "Environmental Data", "Mobile Dev", "Sustainability"],
            category: "mobile",
            status: "Completed",
            year: "2024",
            github: "https://github.com/NathanJargon/KARBON",
            demo: null,
            images: [
                "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=600&h=400&fit=crop&crop=center",
                "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop&crop=center"
            ],
            featured: true
        },
        {
            id: 11,
            title: "RPGInterminable",
            description: "Complex role-playing game system built with Python and Pygame featuring dynamic gameplay mechanics, character interactions, and environmental elements with cross-platform compatibility.",
            technologies: ["Python", "Pygame", "Game Development", "OOP"],
            category: "game",
            status: "Completed",
            year: "2024",
            github: "https://github.com/NathanJargon/RPGInterminable",
            demo: null,
            images: [
                "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop&crop=center",
                "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop&crop=center",
                "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop&crop=center",
                "https://images.unsplash.com/photo-1556438064-2d7646166914?w=600&h=400&fit=crop&crop=center"
            ],
            featured: false
        },
        {
            id: 12,
            title: "TAG-ALAM",
            description: "Filipino-learning Unity game where players pronounce Filipino words correctly to throw slippers towards cans. Features speech recognition technology and cultural education through interactive gameplay.",
            technologies: ["Unity", "C#", "Speech Recognition", "Game Development", "Education"],
            category: "game",
            status: "Completed",
            year: "2024",
            github: "https://github.com/NathanJargon/TAG-ALAM",
            demo: null,
            images: [
                "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop&crop=center",
                "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&crop=center",
                "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop&crop=center"
            ],
            featured: true
        },
        {
            id: 13,
            title: "ProjectAGUI",
            description: "GUI-based water bill management application using customtkinter and Matplotlib. Features SQL database management, automation for calculations, and user-friendly data visualization.",
            technologies: ["Python", "Tkinter", "Matplotlib", "SQL", "GUI"],
            category: "desktop",
            status: "Completed",
            year: "2024",
            github: "https://github.com/NathanJargon/ProjectAGUI",
            demo: null,
            images: [
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
            ],
            featured: false
        },
        {
            id: 14,
            title: "ATFLParser",
            description: "Resilient compiler simulation with Thompson's Construction for regex-to-NFA conversion and LL(1) parsing with bio-inspired adaptive error recovery. Features modular design with separated lexical and syntactic analysis phases.",
            technologies: ["Python", "Compiler Design", "Finite Automata", "Parsing", "Algorithms"],
            category: "desktop",
            status: "Completed",
            year: "2024",
            github: "https://github.com/NathanJargon/ATFLParser",
            demo: null,
            images: [
                "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop&crop=center",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
            ],
            featured: true
        },
        {
            id: 15,
            title: "SteezyGadgetHub",
            description: "Full-featured e-commerce platform with product display, filtering, infinite scroll, cart management, user authentication, and mock checkout functionality. Includes inventory management and user order history.",
            technologies: ["React", "Firebase", "E-commerce", "Authentication", "State Management"],
            category: "fullstack",
            status: "Completed",
            year: "2024",
            github: "https://github.com/NathanJargon/SteezyGadgetHub",
            demo: null,
            images: [
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop&crop=center",
                "https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=600&h=400&fit=crop&crop=center",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
            ],
            featured: true
        }
    ];

    const categories = [
        { id: 'all', label: 'All Projects', count: projects.length },
        { id: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
        { id: 'mobile', label: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
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

    const nextImage = (projectId, imageCount) => {
        setActiveImageIndex(prev => ({
            ...prev,
            [projectId]: ((prev[projectId] || 0) + 1) % imageCount
        }));
    };

    const prevImage = (projectId, imageCount) => {
        setActiveImageIndex(prev => ({
            ...prev,
            [projectId]: ((prev[projectId] || 0) - 1 + imageCount) % imageCount
        }));
    };

    const setImageIndex = (projectId, index) => {
        setActiveImageIndex(prev => ({
            ...prev,
            [projectId]: index
        }));
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
                                                className={`project-image ${imgIndex === (activeImageIndex[project.id] || 0) ? 'active' : ''}`}
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                }}
                                            />
                                        ))}
                                        {project.images.length > 1 && (
                                            <>
                                                <button 
                                                    className="carousel-btn prev-btn"
                                                    onClick={() => prevImage(project.id, project.images.length)}
                                                    aria-label="Previous image"
                                                >
                                                    <i className="fas fa-chevron-left"></i>
                                                </button>
                                                <button 
                                                    className="carousel-btn next-btn"
                                                    onClick={() => nextImage(project.id, project.images.length)}
                                                    aria-label="Next image"
                                                >
                                                    <i className="fas fa-chevron-right"></i>
                                                </button>
                                                <div className="image-indicators">
                                                    {project.images.map((_, imgIndex) => (
                                                        <span 
                                                            key={imgIndex}
                                                            className={`indicator ${imgIndex === (activeImageIndex[project.id] || 0) ? 'active' : ''}`}
                                                            onClick={() => setImageIndex(project.id, imgIndex)}
                                                        ></span>
                                                    ))}
                                                </div>
                                            </>
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
                    <span className="stat-number">{portfolioStats.projectsDelivered}</span>
                    <span className="stat-label">Total Projects</span>
                </div>
                <div className="stat">
                    <span className="stat-number">{portfolioStats.completedProjects}</span>
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