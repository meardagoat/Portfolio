import { useEffect, useState } from 'react';

const MouseTrail = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newStar = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 3 + 1,
        color: ['#FF6B35', '#0A84FF', '#BF5AF2'][Math.floor(Math.random() * 3)],
        velocity: {
          x: (Math.random() - 0.5) * 2,
          y: (Math.random() - 0.5) * 2,
        },
      };

      setStars((prevStars) => [...prevStars, newStar].slice(-30)); // Garder seulement les 30 dernières étoiles
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation des étoiles
    const interval = setInterval(() => {
      setStars((prevStars) =>
        prevStars
          .map((star) => ({
            ...star,
            x: star.x + star.velocity.x,
            y: star.y + star.velocity.y,
            size: star.size * 0.95, // Réduction progressive
          }))
          .filter((star) => star.size > 0.1) // Supprimer les étoiles trop petites
      );
    }, 50);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full transition-all duration-100"
          style={{
            left: `${star.x}px`,
            top: `${star.y}px`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            boxShadow: `0 0 ${star.size * 4}px ${star.color}`,
            transform: 'translate(-50%, -50%)',
            opacity: star.size / 4,
          }}
        />
      ))}
    </div>
  );
};

export default MouseTrail;
