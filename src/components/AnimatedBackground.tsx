/**
 * Composant AnimatedBackground — Fond 3D interactif avec thème CS/Coding/Gaming/Hacking.
 * Utilise un Canvas 2D performant pour un rendu fluide sans dépendances externes.
 * Affiche des symboles flottants, particules et une grille cyberpunk.
 */
"use client";

import { useEffect, useRef, useCallback } from "react";

// --- Symboles flottants : code, terminal, hacking, gaming ---
const SYMBOLS = [
  "</>", "{}", "=>", "//", "&&", "||", "!=", "++", "let", "fn",
  "git", "npm", "tsx", "py", "js", "css", "sql", "api",
  "~/", "sudo", "root", "$_", "ssh", "nmap", "0x", "chmod",
  "#!", "ping", "wget", "curl", "hack", "kali", ">>",
  "GG", "FPS", "HP", "XP", "LVL", "CTF", "PWN", "0day",
  "01", "10", "11", "00", "0xff", "null", "void", "int",
];

const COLORS = [
  "#3b82f6", "#6366f1", "#8b5cf6", "#06b6d4", "#10b981", "#22d3ee",
];

interface FloatingSymbol {
  text: string;
  x: number;
  y: number;
  z: number;
  speed: number;
  rotSpeed: number;
  angle: number;
  fontSize: number;
  color: string;
  opacity: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animRef = useRef<number>(0);

  const initSymbols = useCallback((w: number, h: number): FloatingSymbol[] => {
    return Array.from({ length: 80 }, () => ({
      text: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 2 + 1,
      speed: 0.3 + Math.random() * 0.8,
      rotSpeed: (Math.random() - 0.5) * 0.03,
      angle: Math.random() * Math.PI * 2,
      fontSize: 14 + Math.random() * 20,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      opacity: 0.2 + Math.random() * 0.35,
    }));
  }, []);

  const initParticles = useCallback((w: number, h: number): Particle[] => {
    return Array.from({ length: 180 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3.5 + 1,
      opacity: Math.random() * 0.7 + 0.2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;

    let symbols = initSymbols(w, h);
    let particles = initParticles(w, h);
    let time = 0;

    // --- Gestion du resize ---
    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      symbols = initSymbols(w, h);
      particles = initParticles(w, h);
    };
    window.addEventListener("resize", handleResize);

    // --- Suivi de la souris pour effet parallaxe ---
    const handleMouse = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / w - 0.5) * 2;
      mouseRef.current.y = (e.clientY / h - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouse);

    // --- Dessiner la grille cyberpunk animée ---
    function drawGrid(ctx: CanvasRenderingContext2D, t: number) {
      const gridSpacing = 60;
      const offset = (t * 15) % gridSpacing;

      ctx.strokeStyle = "rgba(30, 58, 95, 0.3)";
      ctx.lineWidth = 0.8;

      // Lignes horizontales
      for (let y = offset; y < h; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Lignes verticales
      for (let x = offset; x < w; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      // Lignes de perspective convergentes (effet Tron)
      const centerX = w / 2 + mouseRef.current.x * 50;
      const centerY = h * 0.4 + mouseRef.current.y * 30;
      ctx.strokeStyle = "rgba(59, 130, 246, 0.15)";
      ctx.lineWidth = 1.2;
      for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2 + t * 0.1;
        const endX = centerX + Math.cos(angle) * Math.max(w, h);
        const endY = centerY + Math.sin(angle) * Math.max(w, h);
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }
    }

    // --- Dessiner les particules flottantes ---
    function drawParticles(ctx: CanvasRenderingContext2D) {
      for (const p of particles) {
        p.x += p.vx + mouseRef.current.x * 0.1;
        p.y += p.vy + mouseRef.current.y * 0.1;

        // Wrap-around
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      }

      // Dessiner les connexions entre particules proches
      ctx.strokeStyle = "#3b82f6";
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.globalAlpha = (1 - dist / 130) * 0.3;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    // --- Dessiner les symboles flottants ---
    function drawSymbols(ctx: CanvasRenderingContext2D, t: number) {
      for (const s of symbols) {
        // Mouvement
        s.y -= s.speed;
        s.angle += s.rotSpeed;
        const parallaxX = mouseRef.current.x * 15 * (1 / s.z);
        const parallaxY = mouseRef.current.y * 10 * (1 / s.z);
        const bobY = Math.sin(t * s.speed * 2 + s.x) * 8;

        // Reset si hors écran
        if (s.y < -50) {
          s.y = h + 50;
          s.x = Math.random() * w;
        }

        const drawX = s.x + parallaxX;
        const drawY = s.y + parallaxY + bobY;

        ctx.save();
        ctx.translate(drawX, drawY);
        ctx.rotate(s.angle);
        ctx.font = `${s.fontSize / s.z}px 'Courier New', monospace`;
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.opacity / s.z;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // Glow effect
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 18;
        ctx.fillText(s.text, 0, 0);
        ctx.shadowBlur = 0;

        ctx.restore();
      }
    }

    // --- Scanlines effect subtil ---
    function drawScanlines(ctx: CanvasRenderingContext2D) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.03)";
      for (let y = 0; y < h; y += 4) {
        ctx.fillRect(0, y, w, 1);
      }
    }

    // --- Boucle d'animation principale ---
    function animate() {
      time += 0.016;
      ctx.clearRect(0, 0, w, h);
      ctx.globalAlpha = 1;

      // Fond avec léger gradient
      const gradient = ctx.createRadialGradient(
        w / 2, h / 2, 0, w / 2, h / 2, Math.max(w, h) * 0.7
      );
      gradient.addColorStop(0, "rgba(15, 23, 42, 0.5)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, w, h);

      // Couches de rendu
      drawGrid(ctx, time);
      drawParticles(ctx);
      drawSymbols(ctx, time);
      drawScanlines(ctx);

      ctx.globalAlpha = 1;
      animRef.current = requestAnimationFrame(animate);
    }

    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, [initSymbols, initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
}
