/**
 * Composant Hero — Section d'accueil principale (en-tête).
 * Affiche le nom, le titre et les liens sociaux.
 * Fond transparent pour laisser voir le background 3D.
 */
import { personalInfo } from "@/data/portfolio";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-6 relative"
    >
      <div className="max-w-3xl text-center relative z-10">
        {/* --- Salutation --- */}
        <p className="text-blue-400 font-medium mb-2 text-lg">
          Bonjour, je suis
        </p>

        {/* --- Nom complet --- */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
          {personalInfo.fullName}
        </h1>

        {/* --- Titre --- */}
        <h2 className="text-xl md:text-2xl text-gray-400 mb-6">
          {personalInfo.title}
        </h2>

        {/* --- Description courte --- */}
        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
          {personalInfo.tagline}
        </p>

        {/* --- Liens sociaux & Contact --- */}
        <div className="flex items-center justify-center gap-5 flex-wrap">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/25"
          >
            <FaLinkedin className="text-lg" />
            LinkedIn
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-700 text-gray-300 font-medium hover:bg-white/10 hover:border-gray-500 transition-colors"
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>
          <a
            href={`https://mail.google.com/mail/?view=cm&to=${personalInfo.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-700 text-gray-300 font-medium hover:bg-white/10 hover:border-gray-500 transition-colors"
          >
            <FaEnvelope className="text-lg" />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
