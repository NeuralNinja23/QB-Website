import { useEffect, useRef } from 'react';

interface Blob {
  x: number;
  y: number;
  size: number;
  dx: number;
  dy: number;
  hue: number;
}

const FloatingBlobs = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const blobsRef = useRef<Blob[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationIdRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    // Initialize blobs
    const initBlobs = () => {
      blobsRef.current = [];
      for (let i = 0; i < 8; i++) {
        blobsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 60 + 20,
          dx: (Math.random() - 0.5) * 0.5,
          dy: (Math.random() - 0.5) * 0.5,
          hue: Math.random() * 60 + 260, // Purple to blue range
        });
      }
    };

    const drawBlob = (blob: Blob) => {
      const gradient = ctx.createRadialGradient(
        blob.x, blob.y, 0,
        blob.x, blob.y, blob.size
      );
      
      gradient.addColorStop(0, `hsla(${blob.hue}, 70%, 60%, 0.3)`);
      gradient.addColorStop(0.7, `hsla(${blob.hue}, 70%, 60%, 0.1)`);
      gradient.addColorStop(1, `hsla(${blob.hue}, 70%, 60%, 0)`);

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(blob.x, blob.y, blob.size, 0, Math.PI * 2);
      ctx.fill();
    };

    const updateBlobs = () => {
      blobsRef.current.forEach((blob) => {
        // Cursor attraction
        const dx = mouseRef.current.x - blob.x;
        const dy = mouseRef.current.y - blob.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          const force = (200 - distance) / 200;
          blob.dx += (dx / distance) * force * 0.01;
          blob.dy += (dy / distance) * force * 0.01;
        }

        // Update position
        blob.x += blob.dx;
        blob.y += blob.dy;

        // Damping
        blob.dx *= 0.99;
        blob.dy *= 0.99;

        // Boundary bouncing
        if (blob.x < -blob.size) blob.x = canvas.width + blob.size;
        if (blob.x > canvas.width + blob.size) blob.x = -blob.size;
        if (blob.y < -blob.size) blob.y = canvas.height + blob.size;
        if (blob.y > canvas.height + blob.size) blob.y = -blob.size;
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      updateBlobs();
      blobsRef.current.forEach(drawBlob);
      
      animationIdRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initBlobs();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'multiply' }}
    />
  );
};

export default FloatingBlobs;