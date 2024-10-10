import React, { useEffect, useRef } from 'react';
import './styles/RightComponent.css'; // Import CSS for RightComponent
import sectionInfo from './data/sectionInfo'; // Import section info

const RightComponent = () => {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const novelsRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(`Section in view: ${entry.target.id.toUpperCase()}`);
        }
      });
    }, options);

    const sections = [aboutRef.current, experienceRef.current, projectsRef.current, novelsRef.current];
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="right-component">
      <div ref={aboutRef} id="about" className="section">
        <p>{sectionInfo.about.content}</p>
      </div>
      <div ref={experienceRef} id="experience" className="section">
        <p>{sectionInfo.experience.content}</p>
      </div>
      <div ref={projectsRef} id="projects" className="section">
        <p>{sectionInfo.projects.content}</p>
      </div>
      <div ref={novelsRef} id="novels" className="section">
        <p>{sectionInfo.novels.content}</p>
      </div>
    </div>
  );
};

export default RightComponent;