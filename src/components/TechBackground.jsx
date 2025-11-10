import { useEffect, useRef } from 'react';

const TechBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Partículas
    const particles = [];
    const particleCount = 80;

    // Código binário caindo
    const binaryColumns = [];
    const binaryCount = Math.floor(canvas.width / 20);

    // Grid
    const gridSize = 50;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        const isDark = document.documentElement.classList.contains('dark');
        ctx.fillStyle = isDark 
          ? `rgba(59, 130, 246, ${this.opacity})` 
          : `rgba(59, 130, 246, ${this.opacity * 0.6})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class BinaryColumn {
      constructor(x) {
        this.x = x;
        this.y = Math.random() * -canvas.height;
        this.speed = Math.random() * 2 + 1;
        this.characters = Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0');
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = -100;
          this.characters = Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0');
        }
      }

      draw() {
        const isDark = document.documentElement.classList.contains('dark');
        ctx.font = '12px monospace';
        
        this.characters.forEach((char, i) => {
          const opacity = (20 - i) / 20;
          ctx.fillStyle = isDark 
            ? `rgba(139, 92, 246, ${opacity * 0.3})` 
            : `rgba(139, 92, 246, ${opacity * 0.15})`;
          ctx.fillText(char, this.x, this.y + i * 15);
        });
      }
    }

    // Inicializar partículas
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Inicializar colunas binárias
    for (let i = 0; i < binaryCount; i++) {
      binaryColumns.push(new BinaryColumn(i * 20));
    }

    function drawGrid() {
      const isDark = document.documentElement.classList.contains('dark');
      ctx.strokeStyle = isDark 
        ? 'rgba(59, 130, 246, 0.03)' 
        : 'rgba(59, 130, 246, 0.02)';
      ctx.lineWidth = 1;

      // Linhas verticais
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Linhas horizontais
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Desenhar grid
      drawGrid();

      // Desenhar e atualizar código binário
      binaryColumns.forEach((column) => {
        column.update();
        column.draw();
      });

      // Desenhar e atualizar partículas
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Desenhar conexões entre partículas
      const isDark = document.documentElement.classList.contains('dark');
      particles.forEach((a, index) => {
        particles.slice(index + 1).forEach((b) => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.strokeStyle = isDark
              ? `rgba(59, 130, 246, ${0.15 * (1 - distance / 120)})`
              : `rgba(59, 130, 246, ${0.08 * (1 - distance / 120)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10"
    />
  );
};

export default TechBackground;
