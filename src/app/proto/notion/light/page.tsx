import Link from "next/link";
import {
  MATIERE_LABELS,
  getPartieGroups,
  type Matiere,
} from "../../../reviser/[niveau]/epreuves/ecrites/[matiere]/data";

/* Index du proto « scroll libre » : liste toutes les fiches français + maths
   (référence M2) pour ouvrir chacune dans la maquette light et valider la
   direction sur tout le catalogue. La fiche pilote (classes grammaticales)
   vit désormais sur /proto/notion/light/francais/classes-grammaticales.
   Rien de branché sur les vraies pages. */

const MATIERES_PROTO: Matiere[] = ["francais", "mathematiques"];

export default function NotionProtoLightIndexPage() {
  return (
    <div className="min-h-screen bg-[#fffdf8]">
      <div className="mx-auto w-full max-w-[68rem] px-4 py-10 md:px-8">
        <div className="border-b border-outline-variant/50 pb-6">
          <h1 className="font-serif text-3xl font-bold text-primary">
            Proto « scroll libre » : toutes les notions
          </h1>
          <p className="mt-2 max-w-[46rem] font-serif text-lg italic text-on-surface-variant">
            Chaque lien ouvre la fiche (référence M2) dans la maquette light, pour
            comparer avec les vraies pages.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-12">
          {MATIERES_PROTO.map((matiere) => (
            <section key={matiere}>
              <h2 className="font-ui text-base font-bold uppercase tracking-[0.04em] text-secondary">
                {MATIERE_LABELS[matiere]}
              </h2>
              <div className="mt-4 flex flex-col gap-6">
                {getPartieGroups("m2", matiere).map((group) => (
                  <div key={group.partie}>
                    <p className="font-ui text-xs font-bold uppercase tracking-[0.06em] text-on-surface-variant">
                      {group.partie}
                    </p>
                    <ul className="mt-2 flex flex-col gap-1">
                      {group.fiches.map((f) => (
                        <li key={f.slug}>
                          <Link
                            href={`/proto/notion/light/${matiere}/${f.slug}`}
                            className="font-ui text-sm text-primary underline decoration-outline-variant underline-offset-4 transition-colors hover:text-secondary"
                          >
                            <span className="mr-1.5 font-bold">
                              {String(f.numero).padStart(2, "0")}
                            </span>
                            {f.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
