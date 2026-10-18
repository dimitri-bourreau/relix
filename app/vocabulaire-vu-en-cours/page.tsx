import Link from "next/link";

const wordGroups = [
    [
        "500",
        "allumer la lumière",
        "année",
        "apprendre",
        "attention",
        "avant",
        "avoir mal au ventre",
        "cancer",
        "cent",
        "chateau",
        "chocolat",
        "comment",
        "configuration",
        "contre",
        "contrôler",
        "couloir",
        "cours",
        "course",
        "demander",
        "dépistage",
        "dépistage",
        "diagnostiquer",
        "directeur",
        "direction du regard",
        "disparu",
        "emplacement",
        "enseigner",
        "entendant",
        "éteindre",
        "évènement",
        "expression faciale",
        "film",
        "fini",
        "four",
        "frange",
        "grammaire",
        "guérison",
        "hôpital",
        "image",
        "informer",
        "intéressant",
        "joie",
        "lutter",
        "lycée",
        "maladie",
        "malentendant",
        "manger",
        "manifestation",
        "manuel",
        "marseille",
        "médecin",
        "médicament",
        "métro",
        "mime",
        "mois",
        "moitié",
        "mouvement labial",
        "mouvement",
        "mouvement",
        "musique",
        "nice",
        "noir",
        "nu",
        "octobre",
        "opération",
        "organiser",
        "orientation",
        "paramètres",
        "pas mal",
        "payer",
        "politique",
        "possible",
        "posture corporelle",
        "pouvoir",
        "préparer",
        "prétentieux",
        "prévention",
        "quoi",
        "recherche scientifique",
        "règles",
        "respect",
        "revendication",
        "révolte",
        "rose",
        "sciences",
        "se faire dépister",
        "sein",
        "sensibilisation",
        "siècle",
        "sms",
        "solidarité",
        "sourd",
        "sourds",
        "symptômes",
        "téléphone",
        "thème",
        "traitement",
        "un an",
        "visio",
    ],
    [
        "à partir de",
        "absent ",
        "aéroport",
        "apprendre",
        "au futur",
        "aujourd'hui",
        "avant",
        "avant",
        "avion",
        "belle electrique",
        "bientôt",
        "bon",
        "c'est pas la peine",
        "cerise",
        "chanter",
        "chateau",
        "chic",
        "clown",
        "communication",
        "comprendre",
        "comptine",
        "contraire",
        "courir",
        "cours",
        "date",
        "décoller",
        "demain",
        "demain",
        "différent",
        "dimanche",
        "doubler",
        "écurueil",
        "embouteillage",
        "encore",
        "erreur",
        "et",
        "faim",
        "france",
        "fusée",
        "gentil",
        "grêve",
        "gym",
        "habiter",
        "hier",
        "improviser",
        "information",
        "interface",
        "j'adore",
        "jeudi",
        "jour",
        "le temps",
        "lundi",
        "lundi dernier",
        "lundi prochain",
        "maintenant",
        "maman",
        "marcher",
        "mardi",
        "mercredi",
        "météo",
        "métier",
        "moto",
        "nager",
        "nuit",
        "ou",
        "où",
        "pareil",
        "parfait",
        "paris",
        "parking",
        "pas comprendre",
        "passé proche",
        "pédaler",
        "peinture",
        "petit déjeuner",
        "pont",
        "proche",
        "qui",
        "randonner",
        "rentrée",
        "rentrer",
        "réutiliser",
        "s'il te plaît",
        "saint",
        "samedi",
        "sculpture",
        "se tromper",
        "semaine",
        "taxi",
        "témoin de jéhova",
        "théâtre",
        "tous les jours",
        "tous les lundis",
        "train",
        "tramway",
        "travail",
        "un jour",
        "urgence",
        "vélo",
        "vendredi",
        "village",
        "ville",
        "vite",
        "voiture",
        "yoga",
    ],
    [
        "acteur",
        "art",
        "association",
        "bd",
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
        "là",
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
        "tahiti",
        "télévision",
        "venezuela",
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
                                {group.map((word, index) => (
                                    <Link
                                        key={`${word}-${index}`}
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
