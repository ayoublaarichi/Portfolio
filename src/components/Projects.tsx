/**
 * Composant Projects — Section présentant les projets réalisés.
 */
import { projectsSection } from "@/data/portfolio";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-5xl mx-auto">
        {/* --- Titre de section --- */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 text-center">
          Projets
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-10 rounded-full" />

        {/* --- Grille de projets --- */}
        <div className="grid md:grid-cols-2 gap-8">
          {projectsSection.map((project, i) => (
            <div
              key={i}
              className="flex flex-col p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Nom du projet */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {/* Technologies utilisées */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Liens */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    Voir en ligne
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm font-medium transition-colors"
                  >
                    <FaGithub />
                    Code source
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
