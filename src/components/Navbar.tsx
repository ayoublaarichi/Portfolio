/**
 * Composant Navbar — Barre de navigation fixe en haut de la page.
 * Les liens scrollent vers les sections correspondantes.
 */
"use client";

import { useState } from "react";
import { personalInfo } from "@/data/portfolio";
import { FiMenu, FiX } from "react-icons/fi";

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Éducation", href: "#education" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* --- Logo / Nom --- */}
        <a
          href="#hero"
          className="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {personalInfo.firstName}
          <span className="text-blue-600">.</span>
        </a>

        {/* --- Liens desktop --- */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* --- Bouton menu mobile --- */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* --- Menu mobile --- */}
      {menuOpen && (
        <ul className="md:hidden bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 px-6 pb-4 space-y-3 text-sm font-medium text-gray-600 dark:text-gray-300">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
