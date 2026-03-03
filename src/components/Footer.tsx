/**
 * Composant Footer — Pied de page avec copyright.
 */
import { personalInfo } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-gray-800/50 text-center text-sm text-gray-500">
      <p>
        &copy; {year} {personalInfo.fullName}. Tous droits réservés.
      </p>
      <p className="mt-1">
        Construit avec{" "}
        <a
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Next.js
        </a>{" "}
        &{" "}
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Tailwind CSS
        </a>
        . Déployé sur{" "}
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Vercel
        </a>
        .
      </p>
    </footer>
  );
}
