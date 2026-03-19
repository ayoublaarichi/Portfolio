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
  lastName: "Laarichi",
  fullName: "Ayoub Laarichi",

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
    "Je suis Ayoub Laarichi, étudiant en première année d'ingénierie en logiciel et informatique à l'ESISA (École Supérieure d'Ingénierie en Sciences Appliquées).",
    "Passionné par le développement web full-stack, je maîtrise des technologies modernes comme Next.js, React, TypeScript, Tailwind CSS, PostgreSQL et les déploiements cloud sur Vercel.",
    "En parallèle, je développe activement mes compétences en cybersécurité, avec un focus sur les rôles de Security Analyst et Penetration Tester. J'explore les méthodologies d'offensive et defensive security à travers des plateformes comme TryHackMe et des outils professionnels.",
    "Je suis constamment à la recherche de nouveaux défis techniques et d'opportunités pour développer mes compétences en génie logiciel et en sécurité informatique.",
  ],

  // --- Compétences techniques ---
  skills: [
    // --- Développement Web ---
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "C++",
    "Tailwind CSS",
    "HTML / CSS",
    "PostgreSQL",
    "Node.js",
    "Git & GitHub",
    "Vercel",
    "REST APIs",
    "NextAuth",
    // --- Cybersécurité & Offensive/Defensive ---
    "Offensive Security",
    "Defensive Security",
    "Metasploit",
    "Nmap",
    "John the Ripper",
    "Wireshark",
    "Cryptography",
    "Hashing",
    // --- Réseaux & Infrastructure ---
    "Linux",
    "Networking Concepts",
    "DNS",
    "HTTP",
    "OSI Model",
    "Packets & Frames",
    "LAN",
    "Networking Core Protocols",
    "Networking Secure Protocols",
    // --- Cloud & Autres ---
    "Cloud Computing Fundamentals",
    "Data Representation",
    "Search Skills",
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
    title: "LogSentinel",
    description:
      "Plateforme de surveillance et d'analyse des logs orientée sécurité. Interface web moderne pour visualiser les événements, détecter des comportements suspects et améliorer la visibilité opérationnelle.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Security Monitoring",
      "Log Analysis",
      "Vercel",
    ],
    liveUrl:
      "https://logsentinel-n4cwjoew1-laarichiayoub-9075s-projects.vercel.app/",
    githubUrl: "https://github.com/ayoublaarichi/LogSentinel",
  },
  {
    title: "SafeScan",
    description:
      "Suite de sécurité composée d'un outil CLI et d'une interface web pour scanner, analyser et faciliter les vérifications de sécurité sur différents environnements.",
    technologies: [
      "Security",
      "CLI",
      "Web Application",
      "JavaScript",
      "TypeScript",
      "Vercel",
    ],
    liveUrl: "https://safescan-web-two.vercel.app/",
    githubUrl: "https://github.com/ayoublaarichi/SafeScan_WEB",
    githubUrls: [
      {
        label: "SafeScan CLI",
        url: "https://github.com/ayoublaarichi/SafeScan_CLI",
      },
      {
        label: "SafeScan WEB",
        url: "https://github.com/ayoublaarichi/SafeScan_WEB",
      },
    ],
  },
  {
    title: "ThreatScan",
    description:
      "Application web dédiée à l'évaluation de menaces et au scanning de sécurité, avec une interface claire pour centraliser les résultats et accélérer l'analyse.",
    technologies: [
      "Cybersecurity",
      "Threat Analysis",
      "Next.js",
      "React",
      "TypeScript",
      "Vercel",
    ],
    liveUrl: "https://threatscan-nine.vercel.app/",
    githubUrl: "https://github.com/ayoublaarichi/ThreatScan",
  },
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

export const certificatesSection = [
  // --- Ajoute tes certificats ici ---
  {
    title: "C Programming Basics",
    issuer: "Simplilearn / SkillUp",
    description:
      "Foundational certification in C programming covering syntax, control structures, functions, and algorithmic problem-solving.",
    skills: [
      "C Programming",
      "Algorithmic Thinking",
      "Control Structures",
      "Fonctions",
      "Functions",
      "Problem Solving",
    ],
    image: "/certificates/simplilearn-c.png",
    url: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIzMTM3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTQ1MjgyNV85NjU4MzkyMTc2Mzg0NTk4NjMxMy5wbmciLCJ1c2VybmFtZSI6ImxhYXJpY2hpIEF5b3ViIn0%3D&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F5920%2FC-Programming-Basics%2Fcertificate%2Fdownload-skillup&%24web_only=true",
  },
  {
    title: "TryHackMe – Cybersecurity Path",
    issuer: "TryHackMe",
    description:
      "Hands-on cybersecurity pathway focused on blue-team and red-team fundamentals through practical labs and real-world scenarios.",
    skills: [
      "Cybersecurity Fundamentals",
      "Network Security",
      "Threat Analysis",
      "Linux Basics",
      "Offensive Security",
    ],
    image: "/certificates/thm-cert-1.png",
    url: "https://tryhackme.com/certificate/THM-9OYK4GVVGP",
  },
  {
    title: "TryHackMe – Security Training",
    issuer: "TryHackMe",
    description:
      "Applied security training based on realistic scenarios to strengthen investigation, detection, and system hardening practices.",
    skills: [
      "Incident Investigation",
      "Vulnerability Assessment",
      "Security Hardening",
      "Tooling (Nmap / Wireshark)",
      "Hands-on Practice",
    ],
    image: "/certificates/thm-cert-2.png",
    url: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-ANO2TTIBEO.pdf",
  },
  {
    title: "TryHackMe – Cyber Security 101 Learning Path",
    issuer: "TryHackMe",
    description:
      "Completion certificate for the Cyber Security 101 Learning Path, covering practical foundations in cybersecurity through guided hands-on content.",
    skills: [
      "Cyber Security Basics",
      "Hands-on Labs",
      "Security Fundamentals",
      "Learning Path Completion",
      "TryHackMe",
    ],
    image: "/certificates/thm-cert-2.png",
    url: "https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-CUQVDTXABF.pdf",
  },
  // Pour ajouter un autre certificat :
  // {
  //   title: "Nom du certificat",
  //   issuer: "Organisme",
  //   description: "Description courte du certificat.",
  //   skills: ["Compétence 1", "Compétence 2", "Compétence 3"],
  //   image: "/certificates/nom-image.png",
  //   url: "https://lien-vers-le-certificat",
  // },
];
