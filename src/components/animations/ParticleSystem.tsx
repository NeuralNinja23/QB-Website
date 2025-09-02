import { useEffect, useMemo } from 'react';

interface Particle {
  id: number;
  size: number;
  left: number;
  delay: number;
  duration: number;
}

const ParticleSystem = ({ count = 50 }: { count?: number }) => {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      left: Math.random() * 100,
      delay: Math.random() * 20,
      duration: Math.random() * 10 + 15,
    }));
  }, [count]);

  return (
    <div className="particle-system">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            opacity: Math.random() * 0.5 + 0.2,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleSystem;