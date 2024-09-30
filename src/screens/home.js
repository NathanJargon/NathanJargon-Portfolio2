import React, { useEffect } from 'react';
import './styles/home.css';
import LeftComponent from './component/LeftComponent';
import RightComponent from './component/RightComponent';

const Home = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const cursorCircle = document.getElementById('cursor-circle');
      cursorCircle.style.left = `${event.clientX}px`;
      cursorCircle.style.top = `${event.clientY}px`;
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div id="home">
      <LeftComponent />
      <RightComponent />
      <div id="cursor-circle"></div>
    </div>
  );
};

export default Home;