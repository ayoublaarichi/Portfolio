/**
 * Composant Hero — Section d'accueil principale (en-tête).
 * Affiche le nom, le titre et les liens sociaux.
 */
import { personalInfo } from "@/data/portfolio";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="max-w-3xl text-center">
        {/* --- Salutation --- */}
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 text-lg">
          Bonjour, je suis
        </p>

        {/* --- Nom complet --- */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
          {personalInfo.fullName}
        </h1>

        {/* --- Titre --- */}
        <h2 className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-6">
          {personalInfo.title}
        </h2>

        {/* --- Description courte --- */}
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
          {personalInfo.tagline}
        </p>

        {/* --- Liens sociaux & Contact --- */}
        <div className="flex items-center justify-center gap-5">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            <FaLinkedin className="text-lg" />
            LinkedIn
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <FaEnvelope className="text-lg" />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
