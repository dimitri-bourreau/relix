"use server";

import Link from "next/link";
import clsx from "clsx";

export default async function Vocabulary() {
  const vocabulary: string[][] = [
    ["femme", "fille", "frère", "garçon", "homme", "maman", "papa", "soeur"],
    [
      "apprendre",
      "avoir",
      "boire",
      "comprendre",
      "connaître",
      "faire",
      "manger",
      "penser",
      "réviser",
      "savoir",
      "être",
    ],
    ["de rien", "encore une fois", "petit à petit", "s'il vous plaît"],
    [
      "Bretagne",
      "bateau",
      "blond",
      "bonne chance",
      "bonnet",
      "bravo",
      "chaise",
      "drapeau",
      "effacer",
      "en retard",
      "escalade",
      "fenêtre",
      "finir",
      "jouer",
      "lumière",
      "mignon",
      "montre",
      "ne pas finir",
      "noir",
      "ordinateur",
      "pantalon",
      "parapluie",
      "pas la peine",
      "perruque",
      "problème",
      "pull",
      "qui",
      "répète",
      "s'occuper de",
      "table",
      "train",
      "travail",
      "téléphone",
      "tôt",
      "vacances",
      "vidéo",
      "vieux",
      "voiture",
      "volets",
      "vêtement",
      "à l'envers",
      "âge",
      "île",
    ],
    [
      "astronaute",
      "ciel",
      "croissant",
      "dormir",
      "espace",
      "espérer",
      "forme",
      "fusée",
      "nuit",
      "rêver",
      "sûr",
      "éclipse",
      "étoiles",
    ],
    [
      "à bientôt",
      "année dernière",
      "année",
      "août",
      "après",
      "après-demain",
      "après-midi",
      "aujourd'hui",
      "avant",
      "avant-hier",
      "avion",
      "avoir la forme",
      "avril",
      "bateau",
      "bon appétit",
      "bus",
      "c'est sûr",
      "camion",
      "car",
      "comme",
      "contraire",
      "date",
      "demain",
      "difficile",
      "différent",
      "dimanche",
      "doucement",
      "décembre",
      "désolé",
      "facile",
      "faux",
      "février",
      "gare",
      "grave",
      "heure",
      "hier",
      "important",
      "interdit",
      "janvier",
      "je ne comprends pas",
      "jeudi",
      "jour",
      "juillet",
      "juin",
      "lundi",
      "mai",
      "mardi",
      "mars",
      "matin",
      "merci",
      "mercredi",
      "midi",
      "minute",
      "mois",
      "moto",
      "novembre",
      "nuit",
      "octobre",
      "pardon",
      "peut-être",
      "pour",
      "prochaine année",
      "recommencez",
      "s'il vous plaît",
      "samedi",
      "seconde",
      "semaine",
      "septembre",
      "skate",
      "soir",
      "taxi",
      "TGV",
      "train",
      "tramway",
      "trotinette",
      "vendredi",
      "voiture",
      "vrai",
      "vélo",
    ],
  ];

  return (
    <section className="h-full flex flex-col gap-4">
      <p className="text-center my-4">
        Elix ne propose pas les signes de tout le vocabulaire qu&apos;on a vu...
        c&apos;est l&apos;occasion pour nous de discuter de ces trous et
        s&apos;entraider !
      </p>

      {vocabulary.reverse().map((words, index) => (
        <div
          key={`${words[0]}-${words[1]}`}
          className={clsx(
            "flex gap-4 flex-wrap items-center justify-center py-6",
            {
              "border-0": index === vocabulary.length - 1,
              "border-0 border-b-2 border-indigo-500/20":
                index !== vocabulary.length - 1,
            },
          )}
        >
          {words.map((word) => (
            <Link
              key={word}
              href={`/?q=${word}`}
              className="bg-indigo-100/50 hover:bg-indigo-100 cursor-pointer px-4 py-2 rounded-xl"
            >
              {word}
            </Link>
          ))}
        </div>
      ))}
    </section>
  );
}
