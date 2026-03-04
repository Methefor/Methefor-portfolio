import { useEffect, useRef } from 'react';
import './OrbitingDots.css';

export default function OrbitingDots() {
  const containerRef = useRef(null);

  useEffect(() => {
    const dots = containerRef.current?.querySelectorAll('.dot');
    if (!dots) return;

    dots.forEach((dot, index) => {
      dot.style.animationDelay = `${index * 0.1}s`;
    });
  }, []);

  return (
    <div ref={containerRef} className="orbiting-dots-container">
      <div className="orbit-circle">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="dot" />
        ))}
      </div>
    </div>
  );
}
