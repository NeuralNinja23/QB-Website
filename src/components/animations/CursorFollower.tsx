import { useEffect, useRef, useState } from 'react';

const CursorFollower = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.matches('button, a, [role="button"], input, textarea, select');
      setIsHovering(isInteractive);
    };

    const animateCursor = () => {
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;
      
      cursorX += dx * 0.1;
      cursorY += dy * 0.1;
      
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      
      requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);
    
    animateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed pointer-events-none z-50 transition-all duration-300 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${isHovering ? 'scale-150' : 'scale-100'}`}
      style={{
        width: '20px',
        height: '20px',
        background: 'radial-gradient(circle, hsl(270, 85%, 60%, 0.3), transparent 70%)',
        borderRadius: '50%',
        mixBlendMode: 'multiply',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

export default CursorFollower;