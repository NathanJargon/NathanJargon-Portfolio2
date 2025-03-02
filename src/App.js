import React, { useEffect } from 'react';
import './styles/App.css';
import Home from './components/pages/Home';

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const glow = document.querySelector('.glow');
      const rect = glow.parentElement.getBoundingClientRect();
      glow.style.transform = `translate(${e.clientX - rect.left - glow.offsetWidth / 2}px, ${e.clientY - rect.top - glow.offsetHeight / 2}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className="background">
        <div className="glow"></div>
      </div>
      <Home />
    </div>
  );
}

export default App;