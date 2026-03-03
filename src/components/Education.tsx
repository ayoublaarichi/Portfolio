/**
 * Composant Education — Section parcours académique.
 */
import { educationSection } from "@/data/portfolio";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* --- Titre de section --- */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 text-center">
          Éducation
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-10 rounded-full" />

        {/* --- Liste des formations --- */}
        <div className="space-y-8">
          {educationSection.map((edu, i) => (
            <div
              key={i}
              className="flex gap-4 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Icône */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl">
                <FaGraduationCap />
              </div>

              {/* Détails */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                  {edu.institution}
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
                  {edu.period}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  {edu.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
