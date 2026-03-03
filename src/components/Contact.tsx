/**
 * Composant Contact — Section formulaire de contact et liens.
 */
import { personalInfo, contactSection } from "@/data/portfolio";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* --- Titre de section --- */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          {contactSection.heading}
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-8 rounded-full" />

        {/* --- Description --- */}
        <p className="text-gray-400 text-lg leading-relaxed mb-10">
          {contactSection.description}
        </p>

        {/* --- Bouton Email principal --- */}
        <a
          href={`mailto:${personalInfo.email}`}
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-blue-600 text-white text-lg font-semibold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/25 mb-12"
        >
          <FaEnvelope />
          {personalInfo.email}
        </a>

        {/* --- Liens secondaires --- */}
        <div className="flex items-center justify-center gap-6">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400 transition-colors text-xl"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-colors text-xl"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}
