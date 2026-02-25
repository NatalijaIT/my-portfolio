'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

interface Dot {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const DOT_COUNT = 400;
const MAX_DISTANCE = 100;
const DOT_RADIUS = 1.5;
const SPEED = 0.6;
const CURSOR_RADIUS = 160;

export default function ConnectingDots() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<{ x: number; y: number } | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const dots: Dot[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const populate = () => {
      dots.length = 0;
      for (let i = 0; i < DOT_COUNT; i++) {
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * SPEED,
          vy: (Math.random() - 0.5) * SPEED,
        });
      }
    };

    const influence = (x: number, y: number): number => {
      const mouse = mouseRef.current;
      if (!mouse) return 0;
      const dx = x - mouse.x;
      const dy = y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist >= CURSOR_RADIUS) return 0;
      return 1 - dist / CURSOR_RADIUS;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = resolvedTheme === 'dark';
      const rgb = isDark ? '255,255,255' : '24,24,27';
      const dotAlpha = isDark ? 1 : 0.9;
      const lineAlpha = isDark ? 0.95 : 0.75;

      for (const dot of dots) {
        dot.x += dot.vx;
        dot.y += dot.vy;
        if (dot.x < 0 || dot.x > canvas.width) dot.vx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.vy *= -1;
      }

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist >= MAX_DISTANCE) continue;

          const inf = Math.max(
            influence(dots[i].x, dots[i].y),
            influence(dots[j].x, dots[j].y),
          );
          if (inf <= 0) continue;

          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.strokeStyle = `rgba(${rgb},${inf * (1 - dist / MAX_DISTANCE) * lineAlpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      for (const dot of dots) {
        const inf = influence(dot.x, dot.y);
        if (inf <= 0) continue;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},${inf * dotAlpha})`;
        ctx.fill();
      }

      const mouse = mouseRef.current;
      if (mouse) {
        for (const dot of dots) {
          const dx = dot.x - mouse.x;
          const dy = dot.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist >= MAX_DISTANCE) continue;
          const opacity = (1 - dist / MAX_DISTANCE) * 0.85;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(dot.x, dot.y);
          ctx.strokeStyle = `rgba(${rgb},${opacity})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},0.95)`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x < 0 || x > rect.width || y < 0 || y > rect.height) {
        mouseRef.current = null;
      } else {
        mouseRef.current = { x, y };
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current = null;
    };

    const handleResize = () => {
      resize();
      populate();
    };

    resize();
    populate();
    draw();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="connecting-dots absolute inset-0 h-full w-full"
    />
  );
}
