import React, { useState } from 'react';
import '../../styles/Portfolio.css';
import { professionalInfo, portfolioStats } from '../../config/portfolioConfig.js';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission
        // For now, we'll just show a success message
        setFormStatus('Thank you for your message! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const contactInfo = [
        {
            icon: '📧',
            title: 'Email',
            value: professionalInfo.email,
            link: `mailto:${professionalInfo.email}`
        },
        {
            icon: '📱',
            title: 'Phone',
            value: professionalInfo.phone,
            link: `tel:${professionalInfo.phone.replace(/\s/g, '')}`
        },
        {
            icon: '📍',
            title: 'Location',
            value: professionalInfo.location,
            link: null
        },
        {
            icon: '🌐',
            title: 'GitHub',
            value: 'github.com/NathanJargon',
            link: 'https://github.com/NathanJargon'
        }
    ];

    return (
        <div className="content-section">
            <div className="section-header">
                <h1>Get In Touch</h1>
                <div className="section-divider"></div>
                <p>Let's discuss your next project or opportunity</p>
            </div>
            
            <div className="contact-content">
                <div className="contact-intro">
                    <h2>Let's Work Together! 🚀</h2>
                    <p>
                        I'm a passionate Full-Stack Developer and Machine Learning Engineer based in the Philippines. 
                        Whether you have a project idea, want to collaborate on innovative solutions, or just want to connect, 
                        feel free to reach out!
                    </p>
                </div>

                <div className="contact-grid">
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <div className="contact-details">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="contact-item">
                                    <span className="contact-icon">{info.icon}</span>
                                    <div className="contact-text">
                                        <h4>{info.title}</h4>
                                        {info.link ? (
                                            <a href={info.link} target={info.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                                                {info.value}
                                            </a>
                                        ) : (
                                            <span>{info.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="social-section">
                            <h4>Follow Me</h4>
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
                                <a href="https://nathanjargon.bsky.social" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <i className="fas fa-cloud"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form">
                        <h3>Send a Message</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="submit-button">
                                Send Message
                            </button>
                        </form>
                        {formStatus && <div className="form-status">{formStatus}</div>}
                    </div>
                </div>

                <div className="availability">
                    <div className="availability-card">
                        <h3>🟢 Available for Work</h3>
                        <p>
                            I'm currently available for freelance projects and full-time opportunities. 
                            Let's discuss how we can work together!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;