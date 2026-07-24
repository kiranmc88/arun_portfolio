import React, { useEffect, useRef } from 'react';

export default function Background({ isDarkMode }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Track resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Particles array
    const particles = [];
    const particleCount = Math.min(60, Math.floor((window.innerWidth * window.innerHeight) / 25000));
    
    // Mouse coords
    const mouse = {
      x: null,
      y: null,
      radius: 120
    };

    // Track mouse move
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Base colors based on theme
    const getParticleColor = () => {
      return isDarkMode 
        ? { r: 139, g: 92, b: 246 } // Violet
        : { r: 99, g: 102, b: 241 }; // Indigo
    };

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.4 + 0.1
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const themeColors = getParticleColor();

      // Render mouse radial glow
      if (mouse.x !== null && mouse.y !== null) {
        const gradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, mouse.radius
        );
        if (isDarkMode) {
          gradient.addColorStop(0, 'rgba(139, 92, 246, 0.08)');
          gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');
        } else {
          gradient.addColorStop(0, 'rgba(99, 102, 241, 0.06)');
          gradient.addColorStop(1, 'rgba(99, 102, 241, 0)');
        }
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Update & Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on boundaries
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Mouse influence
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            p.x -= dx * force * 0.01;
            p.y -= dy * force * 0.01;
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${themeColors.r}, ${themeColors.g}, ${themeColors.b}, ${p.alpha})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.12 * (isDarkMode ? 1.0 : 0.6);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${themeColors.r}, ${themeColors.g}, ${themeColors.b}, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDarkMode]);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Dynamic Colored Blobs (Ambient Lights) */}
      <div className="absolute top-[20%] left-[10%] w-[35vw] h-[35vw] rounded-full bg-violet-600/10 blur-[120px] dark:bg-violet-600/5 animate-float" />
      <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-blue-600/10 blur-[130px] dark:bg-blue-600/5 animate-float-delayed" />
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.5] dark:opacity-[0.8]" />
      
      {/* Canvas for Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60 dark:opacity-80" />
    </div>
  );
}
