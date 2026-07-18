/* Les quatre promesses du produit, dans le langage « cahier » du parcours :
   dessins main levée, filets, pas de cartes en verre ni d'icônes génériques. */
const essentiels = [
  {
    icon: "/illustrations/copie-stylo.svg",
    title: "Des fiches qui vont à l'essentiel",
    text: "Une notion par fiche : le cours, les pièges classiques et les exercices corrigés au même endroit, dans l'ordre du programme.",
  },
  {
    icon: "/illustrations/loupe-phrase.svg",
    title: "La méthode, pas seulement la règle",
    text: "Chaque fiche détaille le geste attendu à l'épreuve : comment analyser, justifier et rédiger votre réponse.",
  },
  {
    icon: "/illustrations/chronometre.svg",
    title: "Un entraînement espacé",
    text: "Les questions reviennent au bon moment : ce que vous ratez revient plus tôt, ce que vous maîtrisez s'espace.",
  },
  {
    icon: "/illustrations/graphique-barres.svg",
    title: "Des repères de progression",
    text: "Des voyants simples, notion par notion, pour savoir où vous en êtes et où concentrer vos efforts.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="piliers" className="mx-auto max-w-[1440px] px-5 py-16 md:px-16 lg:py-24">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-balance text-3xl font-bold leading-tight text-primary lg:text-4xl">
          Tout ce qu&apos;il faut, rien de plus
        </h2>
        <p className="mx-auto max-w-2xl font-ui text-base leading-relaxed text-on-surface-variant lg:text-lg">
          Fiches, méthode, exercices corrigés et entraînement espacé : le
          nécessaire pour préparer l&apos;écrit et l&apos;oral, sans vous
          disperser.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {essentiels.map((item) => (
          <div key={item.title} className="border-t-2 border-primary/15 pt-5">
            <img
              src={item.icon}
              alt=""
              aria-hidden
              className="h-12 w-auto"
            />
            <h3 className="mt-4 text-lg font-bold text-primary">
              {item.title}
            </h3>
            <p className="mt-2 font-ui text-sm leading-relaxed text-on-surface-variant">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
