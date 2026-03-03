/**
 * ============================================================
 *  FICHIER DE DONNÉES DU PORTFOLIO
 *  ============================================================
 *  Modifie ce fichier pour mettre à jour toutes les informations
 *  affichées sur ton portfolio. Chaque section correspond à une
 *  partie du site.
 * ============================================================
 */

export const personalInfo = {
  // --- Informations personnelles ---
  firstName: "Ayoub",
  lastName: "Laarich",
  fullName: "Ayoub Laarich",

  // --- Titre affiché sous ton nom ---
  title: "Étudiant Ingénieur en Logiciel & Informatique",

  // --- Courte description pour la section Hero ---
  tagline:
    "Passionné par le développement web full-stack et les technologies cloud. Étudiant en première année à l'ESISA.",

  // --- Email de contact ---
  email: "laarichiayoub@gmail.com",

  // --- Liens sociaux ---
  linkedin: "https://www.linkedin.com/in/ayoub-laarichi-833425361",
  github: "https://github.com/ayoublaarichi",
};

export const aboutSection = {
  // --- Texte de la section "À propos" ---
  paragraphs: [
    "Je suis Ayoub Laarich, étudiant en première année d'ingénierie en logiciel et informatique à l'ESISA (École Supérieure d'Ingénierie en Sciences Appliquées).",
    "Passionné par le développement web full-stack, je maîtrise des technologies modernes comme Next.js, React, TypeScript, Tailwind CSS, PostgreSQL et les déploiements cloud sur Vercel.",
    "Je suis constamment à la recherche de nouveaux défis techniques et d'opportunités pour développer mes compétences en génie logiciel.",
  ],

  // --- Compétences techniques ---
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "PostgreSQL",
    "Node.js",
    "Git & GitHub",
    "Vercel",
    "REST APIs",
    "NextAuth",
    "HTML / CSS",
  ],
};

export const educationSection = [
  // --- Ajoute tes formations ici ---
  {
    institution: "ESISA – École Supérieure d'Ingénierie en Sciences Appliquées",
    degree: "Ingénierie en Logiciel & Informatique",
    period: "2025 – Présent",
    description:
      "Formation d'ingénieur couvrant le développement logiciel, les bases de données, les réseaux et l'architecture des systèmes.",
  },
  // Pour ajouter une autre formation, copie le bloc ci-dessus :
  // {
  //   institution: "Nom de l'établissement",
  //   degree: "Nom du diplôme",
  //   period: "Année début – Année fin",
  //   description: "Description courte de la formation.",
  // },
];

export const projectsSection = [
  // --- Ajoute tes projets ici ---
  {
    title: "Student Management",
    description:
      "Application web full-stack de gestion des étudiants. Authentification sécurisée, opérations CRUD complètes sur les données étudiantes, interface web propre et backend API RESTful. Déploiement cloud sur Vercel avec base de données PostgreSQL managée (Neon).",
    technologies: [
      "Next.js",
      "React",
      "NextAuth",
      "PostgreSQL",
      "Neon",
      "Vercel",
      "Tailwind CSS",
      "REST API",
    ],
    liveUrl: "https://student-management-psi-sepia.vercel.app/",
    githubUrl: "https://github.com/ayoublaarichi",
  },
  // Pour ajouter un autre projet, copie le bloc ci-dessus :
  // {
  //   title: "Nom du projet",
  //   description: "Description détaillée du projet.",
  //   technologies: ["Tech1", "Tech2", "Tech3"],
  //   liveUrl: "https://lien-vers-le-projet.com",
  //   githubUrl: "https://github.com/ton-repo",
  // },
];

export const contactSection = {
  // --- Texte affiché dans la section Contact ---
  heading: "Me Contacter",
  description:
    "N'hésitez pas à me contacter pour toute opportunité de collaboration, stage ou projet. Je suis toujours ouvert aux nouvelles idées !",
};
