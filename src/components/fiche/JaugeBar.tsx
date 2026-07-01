"use client";

// Une ligne « jauge de remplissage » : un nom à gauche, un mot d'état à droite, une
// barre qui se remplit dessous. Primitive PARTAGÉE par les voyants de la fiche
// (par savoir-faire) et le tableau du hub (par notion), pour un rendu identique.
//
// Doctrine (§6 bis) : la barre ne fait que monter (pas de note, pas de %). On qualifie
// la progression par un mot, jamais par un chiffre.

import { jaugeLabel, type EtatMaitrise, type JaugeSavoirFaire } from "./maitrise";

// Couleur de la barre et du libellé selon l'état.
export const ETAT_STYLE: Record<EtatMaitrise, { fill: string; text: string }> = {
  acquis: { fill: "bg-success", text: "text-success" },
  "a-consolider": { fill: "bg-warning", text: "text-warning" },
  "pas-encore": { fill: "bg-base-300", text: "text-base-content/40" },
};

export function JaugeRow({ name, jauge }: { name: string; jauge: JaugeSavoirFaire }) {
  const { label, etat } = jaugeLabel(jauge);
  const style = ETAT_STYLE[etat];
  // Largeur du remplissage : un mince filet visible dès qu'il y a une réussite.
  const width = jauge.ratio > 0 ? `${Math.max(6, Math.round(jauge.ratio * 100))}%` : "0%";

  return (
    <li className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-semibold text-base-content">{name}</span>
        <span className={`text-xs font-semibold ${style.text}`}>{label}</span>
      </div>
      <div
        className="h-2.5 rounded-full bg-base-200 overflow-hidden"
        role="progressbar"
        aria-label={`${name} : ${label}`}
      >
        <div
          className={`h-full rounded-full transition-[width] duration-500 ${style.fill}`}
          style={{ width }}
        />
      </div>
    </li>
  );
}
