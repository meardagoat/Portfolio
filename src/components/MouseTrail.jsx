import { useEffect, useState } from 'react';

const MouseTrail = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timeout;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Traînée lumineuse qui suit la souris */}
      <div
        className="absolute transition-opacity duration-300"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: isMoving ? 0.6 : 0,
        }}
      >
        {/* Gradient radial multicolore */}
        <div
          className="w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,107,53,0.4) 0%, rgba(10,132,255,0.3) 30%, rgba(191,90,242,0.2) 60%, transparent 80%)',
            filter: 'blur(40px)',
          }}
        />
      </div>
      
      {/* Point lumineux au centre du curseur */}
      <div
        className="absolute w-2 h-2 rounded-full transition-all duration-75"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(10,132,255,0.4) 50%, transparent 100%)',
          opacity: isMoving ? 1 : 0,
          boxShadow: '0 0 20px rgba(10,132,255,0.6)',
        }}
      />
    </div>
  );
};

export default MouseTrail;

