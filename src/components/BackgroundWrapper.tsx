/**
 * Wrapper client pour charger le fond 3D dynamiquement (pas de SSR).
 */
"use client";

import dynamic from "next/dynamic";

const AnimatedBackground = dynamic(
  () => import("@/components/AnimatedBackground"),
  { ssr: false }
);

export default function BackgroundWrapper() {
  return <AnimatedBackground />;
}
