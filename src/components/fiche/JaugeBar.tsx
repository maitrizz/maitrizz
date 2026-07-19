"use client";

// Une ligne « jauge » : un nom à gauche, un mot d'état à droite, une barre SEGMENTÉE
// dessous. Primitive PARTAGÉE par les voyants de la fiche (par savoir-faire) et le
// tableau du hub (par notion), pour un rendu identique — mêmes couleurs, même langage.
//
// Doctrine (§6 bis) : la barre ne fait que monter (pas de note, pas de %). On qualifie
// la progression par un mot, jamais par un chiffre. Les segments parlent le même langage
// que le hub : vert = acquis · ambre = à revoir (raté à reprendre) · gris = pas encore.

import { ETAT_STYLE, jaugeLabel, type JaugeSavoirFaire } from "./maitrise";

export function JaugeRow({ name, jauge }: { name: string; jauge: JaugeSavoirFaire }) {
  const { label, etat } = jaugeLabel(jauge);
  const { reussis, tentes, total } = jauge;
  const part = (x: number) => (total > 0 ? (x / total) * 100 : 0);
  const vert = part(reussis);
  const ambre = part(tentes - reussis);

  return (
    <li className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-semibold text-base-content">{name}</span>
        <span className={`text-xs font-semibold ${ETAT_STYLE[etat].text}`}>{label}</span>
      </div>
      <span
        className={`flex h-2.5 w-full overflow-hidden rounded-full ${ETAT_STYLE["pas-encore"].fill}`}
        role="img"
        aria-label={`${name} : ${label}`}
      >
        {vert > 0 && (
          <span
            className={`${ETAT_STYLE.acquis.fill} transition-[width] duration-500`}
            style={{ width: `${vert}%` }}
          />
        )}
        {ambre > 0 && (
          <span
            className={`${ETAT_STYLE["a-consolider"].fill} transition-[width] duration-500`}
            style={{ width: `${ambre}%` }}
          />
        )}
      </span>
    </li>
  );
}
