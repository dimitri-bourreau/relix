import Link from "next/link";

const wordGroups = [
  [
    "À partir de",
    "Absent ",
    "Aéroport",
    "Apprendre",
    "Au futur",
    "Aujourd'hui",
    "Avant",
    "Avant",
    "Avion",
    "Belle electrique",
    "Bientôt",
    "Bon",
    "C'est pas la peine",
    "Cerise",
    "Chanter",
    "Chateau",
    "Chic",
    "Clown",
    "Communication",
    "Comprendre",
    "Comptine",
    "Contraire",
    "Courir",
    "Cours",
    "Date",
    "Décoller",
    "Demain",
    "Demain",
    "différent",
    "Dimanche",
    "Doubler",
    "Écurueil",
    "Embouteillage",
    "Encore",
    "Erreur",
    "Et",
    "Faim",
    "France",
    "Fusée",
    "Gentil",
    "Grêve",
    "Gym",
    "Habiter",
    "Hier",
    "Improviser",
    "Information",
    "Interface",
    "J'adore",
    "Jeudi",
    "Jour",
    "Le temps",
    "Lundi",
    "Lundi dernier",
    "Lundi prochain",
    "Maintenant",
    "Maman",
    "Marcher",
    "Mardi",
    "Mercredi",
    "Météo",
    "Métier",
    "Moto",
    "Nager",
    "Nuit",
    "Ou",
    "Où",
    "Pareil",
    "Parfait",
    "Paris",
    "Parking",
    "Pas comprendre",
    "Passé proche",
    "Pédaler",
    "Peinture",
    "Petit déjeuner",
    "Pont",
    "Proche",
    "Qui",
    "Randonner",
    "Rentrée",
    "Rentrer",
    "Réutiliser",
    "S'il te plaît",
    "Saint",
    "Samedi",
    "Sculpture",
    "Se tromper",
    "Semaine",
    "Taxi",
    "Témoin de Jéhova",
    "Théâtre",
    "Tous les jours",
    "Tous les lundis",
    "Train",
    "Tramway",
    "Travail",
    "Un jour",
    "Urgence",
    "Vélo",
    "Vendredi",
    "Village",
    "Ville",
    "Vite",
    "Voiture",
    "Yoga",
  ],
  [
    "acteur",
    "art",
    "association",
    "BD",
    "bravo",
    "ça dépend",
    "ça va",
    "calme",
    "chanter",
    "chocolat",
    "comme ci comme ça",
    "dessiner",
    "deviner",
    "devoirs",
    "différent",
    "foot",
    "groupe",
    "histoire",
    "Là",
    "manque",
    "mystère",
    "neige",
    "politique",
    "princesse",
    "question",
    "refaire",
    "réfléchir",
    "règles",
    "reine",
    "s'exprimer",
    "s'il te plaît",
    "science",
    "sculpture",
    "se présenter",
    "sport",
    "Tahiti",
    "télévision",
    "Venezuela",
  ],
];

export default function VocabulaireVuEnCours() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-950 via-fuchsia-900 to-amber-900 animate-gradient" />

      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-fuchsia-500/30 rounded-full blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-32 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/20 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "0.75s" }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen px-6 py-12">
        {/* Header */}
        <header className="flex flex-col items-center text-center gap-4 mb-12">
          <Link
            href="/"
            className="text-4xl md:text-5xl font-black tracking-tight hover:scale-105 transition-transform"
          >
            <span className="bg-gradient-to-r from-white via-fuchsia-200 to-amber-200 bg-clip-text text-transparent">
              RELIX
            </span>
            <span className="ml-2">🐇</span>
          </Link>
          <h1 className="text-2xl md:text-3xl text-fuchsia-100/90 font-semibold">
            Vocabulaire vu en cours
          </h1>
        </header>

        {/* Word groups */}
        <div className="max-w-4xl mx-auto space-y-8">
          {wordGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <div className="flex flex-wrap gap-3">
                {group.map((word) => (
                  <Link
                    key={word}
                    href={`/?q=${encodeURIComponent(word)}`}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 rounded-full text-white font-medium transition-all duration-200 hover:scale-105"
                  >
                    {word}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
