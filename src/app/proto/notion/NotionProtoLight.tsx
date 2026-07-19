"use client";

import { FicheScroll } from "@/components/fiche/FicheScroll";
import { DemoOverlaysProvider } from "@/components/fiche/blocks/demoOverlays";
import type { Fiche } from "@/components/fiche/types";
import { DEMO_OVERLAYS } from "./demoData";

/* Le proto « scroll libre » est devenu la vraie mise en page des fiches
   (FicheScroll, déployée sur /reviser pour français + maths le 18/07).
   Cette enveloppe ne garde que ce qui reste propre au proto : les surcouches
   démo À VALIDER (listes de mots des classes fermées, rappels « De mémoire »),
   absentes des vraies pages tant qu'elles n'ont pas été relues. */

export function NotionProtoLight({ fiche }: { fiche: Fiche }) {
  return (
    <DemoOverlaysProvider value={DEMO_OVERLAYS}>
      <div className="min-h-screen bg-[#fffdf8]">
        <div className="mx-auto w-full max-w-[68rem] px-4 py-10 md:px-8">
          <FicheScroll fiche={fiche} niveau="m2" matiere={fiche.matiere} />
        </div>
      </div>
    </DemoOverlaysProvider>
  );
}
