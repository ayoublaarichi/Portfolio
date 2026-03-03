/**
 * Composant About — Section "À propos" avec bio et compétences.
 */
import { aboutSection } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gray-950/60 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        {/* --- Titre de section --- */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
          À propos
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-10 rounded-full" />

        {/* --- Paragraphes de présentation --- */}
        <div className="space-y-4 text-gray-400 leading-relaxed text-lg mb-12">
          {aboutSection.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* --- Compétences --- */}
        <h3 className="text-xl font-semibold text-white mb-4">
          Compétences techniques
        </h3>
        <div className="flex flex-wrap gap-3">
          {aboutSection.skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-blue-900/30 text-blue-300 text-sm font-medium border border-blue-800/30"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
