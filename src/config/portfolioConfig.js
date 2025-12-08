// Portfolio Configuration - Edit these numbers to update across the entire portfolio
export const portfolioStats = {
    // Professional Experience
    yearsOfExperience: 4, // Since 2021
    projectsDelivered: 15,
    completedProjects: 15,
    
    // Technical Skills
    totalTechnologies: 25, // This will be calculated automatically from projects
    
    // Client & Work Stats
    companiesWorkedWith: 5, // Shrader Technology, QuantumQuill Studios, USTP, Unify Ivy, RadicalX
    clientSatisfactionRate: 100, // %
    
    // Development Stats
    codeCommits: 500, // Approximate
    linesOfCode: 50000, // Approximate
    
    // Education & Certifications
    certifications: 3,
    educationYears: 4,
    
    // Contact & Availability
    responseTime: 24, // hours
    availability: "Available for work",
    
    // Social Media (follower counts, etc.)
    githubRepos: 20,
    linkedinConnections: 300,
    
    // Project Categories
    mobileApps: 4,
    webApplications: 3,
    gameProjects: 3,
    desktopApps: 2,
    aiProjects: 1
};

// Professional Information
export const professionalInfo = {
    name: "Nash Andrew Yagahon Bondoc",
    title: "Full Stack Developer",
    location: "Cagayan de Oro, Philippines",
    email: "bondoc.nash123@gmail.com",
    phone: "+63 926 840 6265",
    startYear: 2021,
    currentYear: new Date().getFullYear(),
    
    // Calculate years of experience dynamically
    get experience() {
        return this.currentYear - this.startYear;
    }
};

// Skills proficiency levels (0-100)
export const skillLevels = {
    // Frontend
    "React": 95,
    "JavaScript": 90,
    "HTML/CSS": 95,
    "React Native": 85,
    "Expo": 85,
    "Vite": 80,
    "Bootstrap": 85,
    
    // Backend
    "Node.js": 80,
    "Python": 90,
    "Firebase": 85,
    "SQL": 80,
    "MongoDB": 75,
    
    // Mobile Development
    "Mobile Development": 85,
    "Cross-platform": 85,
    
    // Game Development
    "Unity": 75,
    "C#": 75,
    "Pygame": 80,
    
    // AI/ML
    "Machine Learning": 70,
    "OpenAI": 75,
    "Computer Vision": 70,
    
    // Tools & Others
    "Git": 90,
    "APIs": 85,
    "Responsive Design": 95,
    "UI/UX": 80
};

export default {
    portfolioStats,
    professionalInfo,
    skillLevels
};