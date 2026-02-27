import React, { useState } from 'react';
import '../../styles/Portfolio.css';
import { portfolioStats } from '../../config/portfolioConfig.js';

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    
    const projects = [
        {
            id: 1,
            title: "Shrader Technology",
            description: "Professional company website built with React-Vite for a technology company. Features modern design, responsive layout, and optimized performance for business operations.",
            technologies: ["React", "Vite", "JavaScript", "CSS", "Responsive Design"],
            category: "fullstack",
            status: "Completed",
            year: "2024",
            color: "#FF6B6B",
            featured: true,
            demo: "https://shradertechnology.vercel.app"
        },
        {
            id: 2,
            title: "BLECARDFrames",
            description: "Blackjack AI Assistant using BLE (Bluetooth Low Energy) and Roboflow for card detection and analysis. Integrated with FRAME for enhanced real-time performance and accuracy.",
            technologies: ["Python", "BLE", "Roboflow", "AI/ML", "Computer Vision"],
            category: "ai",
            status: "Completed",
            year: "2024",
            color: "#4ECDC4",
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
            color: "#95E1D3",
            featured: true,
            github: "https://github.com/NathanJargon/GEOPath"
        },
        {
            id: 4,
            title: "EscapeFlow",
            description: "Python maze-escape game with moving obstacles using BFS (Breadth-First Search) algorithm and dynamic obstacle avoidance. Features intelligent pathfinding and real-time obstacle navigation.",
            technologies: ["Python", "BFS Algorithm", "Game Development", "Pathfinding"],
            category: "game",
            status: "Completed",
            year: "2024",
            color: "#FFE66D",
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
            color: "#A8E6CF",
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
            color: "#FFD93D",
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
            color: "#6BCB77",
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
            color: "#4D96FF",
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
            color: "#FF6348",
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
            color: "#38A169",
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
            color: "#9B59B6",
            featured: false
        },
        {
            id: 12,
            title: "Tag-Alam",
            description: "Filipino-learning Unity game where players pronounce Filipino words correctly to throw slippers towards cans. Features speech recognition technology and cultural education through interactive gameplay.",
            technologies: ["Unity", "C#", "Speech Recognition", "Game Development", "Education"],
            category: "game",
            status: "Completed",
            year: "2024",
            color: "#E74C3C",
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
            color: "#3498DB",
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
            color: "#1ABC9C",
            featured: true
        },
        {
            id: 15,
            title: "Steezy Gadget Hub",
            description: "Full-featured e-commerce platform with product display, filtering, infinite scroll, cart management, user authentication, and mock checkout functionality. Includes inventory management and user order history.",
            technologies: ["React", "Firebase", "E-commerce", "Authentication", "State Management"],
            category: "fullstack",
            status: "Completed",
            year: "2024",
            color: "#F39C12",
            featured: true,
            demo: "https://steezy-gadget-hub.vercel.app"
        },
        {
            id: 16,
            title: "Smartways",
            description: "Expo mobile application for car tracking and management. Enables users to monitor vehicle location, performance metrics, and maintenance schedules in real-time with comprehensive vehicle analytics.",
            technologies: ["React Native", "Expo", "Location Tracking", "Mobile Dev", "Vehicle Management"],
            category: "mobile",
            status: "Completed",
            year: "2024",
            color: "#FF4757",
            featured: true,
            github: "https://github.com/NathanJargon/Smartways"
        },
        {
            id: 17,
            title: "Learnify",
            description: "Mobile expo learning application designed for students. Provides interactive educational content, progress tracking, and personalized learning paths to enhance academic performance and engagement.",
            technologies: ["React Native", "Expo", "Education", "Mobile Dev", "Learning Management"],
            category: "mobile",
            status: "Completed",
            year: "2024",
            color: "#5F27CD",
            featured: true,
            github: "https://github.com/NathanJargon/LEARNIFYMobile"
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

    const filteredProjects = (selectedCategory === 'all' 
        ? projects 
        : projects.filter(project => project.category === selectedCategory))
        .sort((a, b) => {
            // Prioritize projects with demo links
            if (a.demo && !b.demo) return -1;
            if (!a.demo && b.demo) return 1;
            // Then by featured status
            if (a.featured && !b.featured) return -1;
            if (!a.featured && b.featured) return 1;
            return 0;
        });

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
                            <div className="project-color-block" style={{ backgroundColor: project.color }}></div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            
                            <div className="technologies">
                                {project.technologies.map(tech => (
                                    <span key={tech} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            
                            <div className="project-actions">
                                {project.demo && (
                                    <a 
                                        href={project.demo} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="demo-btn"
                                    >
                                        <i className="fas fa-external-link-alt"></i>
                                        View Demo
                                    </a>
                                )}
                                {project.github && (
                                    <a 
                                        href={project.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="github-btn"
                                    >
                                        <i className="fab fa-github"></i>
                                        GitHub Repo
                                    </a>
                                )}
                            </div>
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