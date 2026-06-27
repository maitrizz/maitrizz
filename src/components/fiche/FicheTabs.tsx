"use client";

import { useState } from "react";
import { RenderBlock } from "./blocks/RenderBlock";
import { FicheRouteProvider } from "./FicheRouteContext";
import type { FicheTabGroup } from "./types";

export function FicheTabs({
  tabGroups,
  ficheSlug,
  niveau,
  matiere,
}: {
  tabGroups: FicheTabGroup[];
  ficheSlug: string;
  niveau: string;
  matiere: string;
}) {
  const [activeGroup, setActiveGroup] = useState(tabGroups[0]?.id);
  const [activeTab, setActiveTab] = useState(tabGroups[0]?.tabs[0]?.id);
  // Compteur de remontage par onglet : recliquer l'onglet déjà actif réinitialise son
  // contenu (ex. quitter un exercice en cours d'« Appliquer » pour revenir aux niveaux).
  const [tabNonces, setTabNonces] = useState<Record<string, number>>({});
  const showGroupTabs = tabGroups.length > 1;
  const totalTabs = tabGroups.reduce((n, g) => n + g.tabs.length, 0);
  // Une fiche à onglet unique (ex. un sujet blanc « tout-en-un ») n'affiche
  // aucun chrome de navigation : le contenu se suffit à lui-même.
  const showTabBar = totalTabs > 1;

  function selectTab(tabId: string) {
    const group = tabGroups.find((g) => g.tabs.some((tab) => tab.id === tabId));
    if (!group) return;
    setActiveGroup(group.id);
    setActiveTab(tabId);
  }

  return (
    <FicheRouteProvider value={{ niveau, matiere }}>
    <div className="flex flex-col gap-6">
      {showTabBar && (
      <div className="flex flex-col gap-2 sticky top-16 z-10 bg-base-100/95 backdrop-blur-sm py-2 -mx-1 px-1 border-b border-base-200">
        {showGroupTabs && (
          <div className="grid grid-cols-3 gap-2">
            {tabGroups.map((group) => (
              <button
                key={group.id}
                type="button"
                onClick={() => {
                  setActiveGroup(group.id);
                  setActiveTab(group.tabs[0]?.id);
                }}
                className={
                  activeGroup === group.id
                    ? "px-3 py-2.5 rounded-xl border-2 border-primary bg-primary text-primary-content text-sm font-bold text-center transition-colors"
                    : "px-3 py-2.5 rounded-xl border-2 border-base-300 bg-base-100 text-base-content/70 text-sm font-bold text-center transition-colors hover:border-primary/40 hover:text-primary"
                }
              >
                {group.icon} {group.label}
              </button>
            ))}
          </div>
        )}

        {tabGroups.map((group) => (
          <div
            key={group.id}
            style={{ display: activeGroup === group.id ? "flex" : "none" }}
            className="gap-2 flex-wrap"
          >
            {group.tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  if (activeTab === tab.id) {
                    // Déjà sur cet onglet : on le réinitialise (retour à son écran d'accueil).
                    setTabNonces((m) => ({ ...m, [tab.id]: (m[tab.id] ?? 0) + 1 }));
                  } else {
                    setActiveTab(tab.id);
                  }
                }}
                className={
                  activeTab === tab.id
                    ? "px-3 py-1.5 rounded-lg border-2 border-primary bg-primary/10 text-primary text-xs font-semibold transition-colors"
                    : "px-3 py-1.5 rounded-lg border-2 border-base-300 bg-base-100 text-base-content/60 text-xs font-semibold transition-colors hover:border-primary/40 hover:text-primary"
                }
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
        ))}
      </div>
      )}

      {tabGroups.map((group) => (
        <div key={group.id} style={{ display: activeGroup === group.id ? "flex" : "none" }} className="flex-col gap-6">
          {group.tabs.map((tab) => (
            <div
              key={`${tab.id}-${tabNonces[tab.id] ?? 0}`}
              style={{ display: activeTab === tab.id ? "flex" : "none" }}
              className="flex-col gap-5"
            >
              {tab.blocks.map((block, i) => (
                <RenderBlock key={i} block={block} ficheSlug={ficheSlug} onNavigateTab={selectTab} />
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
    </FicheRouteProvider>
  );
}
