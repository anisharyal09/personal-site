import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function InteractiveBackground() {
  const backgroundRef = useRef(null);
  const canvasRef = useRef(null);
  const rocketRef = useRef(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isFinePointer, setIsFinePointer] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(pointer: fine)').matches : true
  );

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)');
    const updatePointer = () => setIsFinePointer(finePointer.matches);

    if (finePointer.addEventListener) {
      finePointer.addEventListener('change', updatePointer);
    } else if (finePointer.addListener) {
      finePointer.addListener(updatePointer);
    }

    return () => {
      if (finePointer.removeEventListener) {
        finePointer.removeEventListener('change', updatePointer);
      } else if (finePointer.removeListener) {
        finePointer.removeListener(updatePointer);
      }
    };
  }, []);

  useEffect(() => {
    // Hide default cursor on homepage for fine pointer devices only
    if (isHomePage && isFinePointer) {
      document.body.classList.add('hide-default-cursor');
    } else {
      document.body.classList.remove('hide-default-cursor');
    }

    return () => {
      document.body.classList.remove('hide-default-cursor');
    };
  }, [isHomePage, isFinePointer]);

  useEffect(() => {
    const background = backgroundRef.current;
    const canvas = canvasRef.current;
    if (!background || !canvas) return;

    const ctx = canvas.getContext('2d');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(pointer: fine)');

    let animId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 3;
    let lastX = mouseX;
    let lastY = mouseY;
    let angle = 0;
    let hasMoved = false;

    const particles = [];
    const maxParticles = 35;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    class SmokeGradientParticle {
      constructor(x, y, vx, vy) {
        this.x = x;
        this.y = y;
        const speed = Math.sqrt(vx * vx + vy * vy);
        const sprayAngle = Math.atan2(vy, vx) + Math.PI + (Math.random() - 0.5) * 0.4;
        const push = Math.min(speed * 0.12 + 0.4, 2.0);

        this.vx = Math.cos(sprayAngle) * push + (Math.random() - 0.5) * 0.2;
        this.vy = Math.sin(sprayAngle) * push + (Math.random() - 0.5) * 0.2;
        this.radius = Math.random() * 12 + 10;
        this.maxRadius = this.radius * 2.2;
        this.life = 1.0;
        this.decay = Math.random() * 0.015 + 0.012; // Extra slow & soft smoke fade
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.radius += (this.maxRadius - this.radius) * 0.05; // Expands softly like smoke
        this.life -= this.decay;
      }

      draw(context) {
        if (this.life <= 0) return;
        context.save();
        
        const isLight = document.documentElement.classList.contains('light-mode-active');
        const r = isLight ? 2 : 0;
        const g = isLight ? 132 : 229;
        const b = isLight ? 199 : 255;
        const alpha = Math.max(0, this.life * 0.14); // Ultra soft gradient smoke

        // Create silky smooth radial gradient smoke aura
        const radGrad = context.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, Math.max(1, this.radius)
        );
        radGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha})`);
        radGrad.addColorStop(0.5, `rgba(${r}, ${g}, ${b}, ${alpha * 0.4})`);
        radGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        context.fillStyle = radGrad;
        context.beginPath();
        context.arc(this.x, this.y, Math.max(1, this.radius), 0, Math.PI * 2);
        context.fill();
        context.restore();
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth pointer variable update
      background.style.setProperty('--pointer-x', `${mouseX}px`);
      background.style.setProperty('--pointer-y', `${mouseY}px`);

      const dx = mouseX - lastX;
      const dy = mouseY - lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 1.5 && !reducedMotion.matches && finePointer.matches) {
        angle = Math.atan2(dy, dx) + Math.PI / 2;

        // Spawn soft smoke particles
        if (particles.length < maxParticles) {
          particles.push(new SmokeGradientParticle(mouseX, mouseY, dx, dy));
        }
      }

      if (rocketRef.current && isHomePage && finePointer.matches && hasMoved) {
        rocketRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) rotate(${angle}rad)`;
      }

      lastX = mouseX;
      lastY = mouseY;

      // Update & render soft smoke gradient particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw(ctx);
        if (p.life <= 0) {
          particles.splice(i, 1);
        }
      }

      animId = requestAnimationFrame(animate);
    };

    const handlePointerMove = (e) => {
      if (reducedMotion.matches || !finePointer.matches) return;
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!hasMoved) {
        hasMoved = true;
        if (backgroundRef.current) {
          backgroundRef.current.classList.add('pointer-active');
        }
        if (rocketRef.current) {
          rocketRef.current.style.opacity = '0.9';
        }
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      if (backgroundRef.current) {
        backgroundRef.current.classList.remove('pointer-active');
      }
      if (animId) cancelAnimationFrame(animId);
    };
  }, [isHomePage]);

  return (
    <div ref={backgroundRef} className="ambient-background" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="soft-cursor-canvas"
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 9998,
        }}
      />
      {isHomePage && isFinePointer && (
        <div
          ref={rocketRef}
          className="homepage-rocket-cursor"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '28px',
            height: '28px',
            marginLeft: '-14px',
            marginTop: '-14px',
            pointerEvents: 'none',
            zIndex: 9999,
            transition: 'opacity 0.3s ease',
            opacity: 0,
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full drop-shadow-[0_0_10px_rgba(0,229,255,0.7)]">
            <path
              d="M12 2.5C12 2.5 17 6.5 17 13.5C17 16.5 15.5 19 14.5 20L12 18.5L9.5 20C8.5 19 7 16.5 7 13.5C7 6.5 12 2.5 12 2.5Z"
              fill="url(#rocket-grad)"
            />
            <circle cx="12" cy="10" r="2" fill="#0f172a" />
            <defs>
              <linearGradient id="rocket-grad" x1="12" y1="2.5" x2="12" y2="20" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00e5ff" />
                <stop offset="1" stopColor="#0284c7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}
      <div className="ambient-cursor-trail ambient-cursor-trail-far" />
      <div className="ambient-cursor-trail ambient-cursor-trail-near" />
      <div className="ambient-cursor-glow" />
    </div>
  );
}



