/**
 * Composant Certificates — Affiche les certificats obtenus sous forme de cartes avec images.
 */
import Image from "next/image";
import { certificatesSection } from "@/data/portfolio";
import { FaExternalLinkAlt, FaAward } from "react-icons/fa";

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* --- Titre de section --- */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 text-center">
          Certificats
        </h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-10 rounded-full" />

        {/* --- Grille de certificats --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesSection.map((cert, i) => (
            <a
              key={i}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-gray-800/50 bg-gray-900/50 backdrop-blur-sm shadow-sm hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              {/* Image du certificat */}
              <div className="relative w-full aspect-[4/3] bg-gray-800 overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay au survol */}
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-300 flex items-center justify-center">
                  <FaExternalLinkAlt className="text-white text-2xl opacity-0 group-hover:opacity-80 transition-opacity duration-300 drop-shadow-lg" />
                </div>
              </div>

              {/* Infos du certificat */}
              <div className="p-5">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400 mt-0.5">
                    <FaAward />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
