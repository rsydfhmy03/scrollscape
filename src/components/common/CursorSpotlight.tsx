import { useState, useEffect } from 'react';

const CursorSpotlight = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background: `radial-gradient(600px at ${position.x}px ${position.y}px, rgba(0, 229, 255, 0.1), transparent 80%)`,
      }}
    />
  );
};

export default CursorSpotlight;