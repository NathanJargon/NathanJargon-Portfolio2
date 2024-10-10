import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

function DisableZoom() {
  useEffect(() => {
    const handleWheel = (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
    };

    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '=')) {
        e.preventDefault();
      }
    };

    const handleTouchMove = (e) => {
      if (e.scale !== 1) {
        e.preventDefault();
      }
    };

    // Add event listeners when the component mounts
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    // Clean up by removing event listeners when the component unmounts
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <style>
        {`
          html, body {
            touch-action: manipulation;
            -ms-touch-action: manipulation;
            overflow: hidden;
          }
        `}
      </style>
    </Helmet>
  );
}

export default DisableZoom;