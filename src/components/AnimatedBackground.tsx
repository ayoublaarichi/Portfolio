/**
 * Composant AnimatedBackground — Fond 3D interactif avec thème CS/Coding/Gaming/Hacking.
 * Utilise Three.js via @react-three/fiber pour un rendu 3D performant.
 * Affiche des symboles flottants liés au code, terminal, gaming et cybersécurité.
 */
"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";
import * as THREE from "three";

// --- Symboles flottants : code, terminal, hacking, gaming ---
const SYMBOLS = [
  // Coding
  "</>", "{}", "=>", "//", "&&", "||", "!=", "++", "let", "fn",
  "git", "npm", "tsx", "py", "js", "css", "sql", "api",
  // Terminal / Hacking / Kali
  "~/", "sudo", "root", "$_", "ssh", "nmap", "0x", "chmod",
  "#!", "ping", "wget", "curl", "hack", "kali", ">>",
  // Gaming
  "GG", "FPS", "HP", "XP", "LVL", "CTF", "PWN", "0day",
  // Binary / Matrix vibe
  "01", "10", "11", "00", "0xff", "null", "void", "int",
];

/**
 * Un symbole 3D flottant individuel.
 */
function FloatingSymbol({
  text,
  position,
  speed,
  rotationSpeed,
  color,
}: {
  text: string;
  position: [number, number, number];
  speed: number;
  rotationSpeed: number;
  color: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();

    // Mouvement vertical oscillant
    meshRef.current.position.y = initialY + Math.sin(t * speed) * 0.8;

    // Rotation lente
    meshRef.current.rotation.x += rotationSpeed * 0.002;
    meshRef.current.rotation.y += rotationSpeed * 0.003;
    meshRef.current.rotation.z += rotationSpeed * 0.001;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <Text
          fontSize={0.25 + Math.random() * 0.2}
          color={color}
          anchorX="center"
          anchorY="middle"
          font="/fonts/GeistMono-Regular.ttf"
          fillOpacity={0.15 + Math.random() * 0.2}
        >
          {text}
        </Text>
      </mesh>
    </Float>
  );
}

/**
 * Particules de fond style matrix / digital rain.
 */
function Particles({ count = 200 }: { count?: number }) {
  const meshRef = useRef<THREE.Points>(null);

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
      sz[i] = Math.random() * 2 + 0.5;
    }
    return [pos, sz];
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.02;
    meshRef.current.rotation.x = Math.sin(t * 0.01) * 0.1;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#3b82f6"
        transparent
        opacity={0.4}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/**
 * Grille de fond style Tron / cyberpunk.
 */
function CyberGrid() {
  const gridRef = useRef<THREE.GridHelper>(null);

  useFrame((state) => {
    if (!gridRef.current) return;
    const t = state.clock.getElapsedTime();
    gridRef.current.position.z = (t * 0.5) % 2;
  });

  return (
    <gridHelper
      ref={gridRef}
      args={[40, 40, "#1e3a5f", "#0f1b2d"]}
      position={[0, -5, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

/**
 * Scène 3D complète.
 */
function Scene() {
  // Générer des symboles avec positions aléatoires
  const symbols = useMemo(() => {
    return Array.from({ length: 40 }, (_, i) => ({
      text: SYMBOLS[i % SYMBOLS.length],
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8 - 2,
      ] as [number, number, number],
      speed: 0.3 + Math.random() * 0.7,
      rotationSpeed: 0.5 + Math.random() * 2,
      color: [
        "#3b82f6", // blue
        "#6366f1", // indigo
        "#8b5cf6", // violet
        "#06b6d4", // cyan
        "#10b981", // emerald (terminal green)
        "#22d3ee", // light cyan
      ][Math.floor(Math.random() * 6)],
    }));
  }, []);

  return (
    <>
      {/* Lumière ambiante douce */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />

      {/* Grille cyberpunk */}
      <CyberGrid />

      {/* Particules flottantes */}
      <Particles count={150} />

      {/* Symboles CS/Coding/Gaming flottants */}
      {symbols.map((sym, i) => (
        <FloatingSymbol key={i} {...sym} />
      ))}
    </>
  );
}

/**
 * Composant principal exporté — Canvas 3D en arrière-plan fixe.
 */
export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
