"use client";

import { Fragment } from "react";
import Link from "next/link";
import type { RichText as RichTextValue } from "./types";
import { useFicheRoute } from "./FicheRouteContext";

const INLINE_REGEX =
  /(\[[^\]]+\]\((?:https?:\/\/|fiche:)[^)\s]+\)|<u>.+?<\/u>|\*\*.+?\*\*|~~.+?~~|\*.+?\*)/g;

function parseInline(
  line: string,
  keyPrefix: string,
  route: { niveau: string; matiere: string } | null,
) {
  return line
    .split(INLINE_REGEX)
    .filter((part) => part.length > 0)
    .map((part, i) => {
      const key = `${keyPrefix}-${i}`;
      // gras / italique / barré / souligné : on rend récursivement le contenu
      // interne pour autoriser le balisage imbriqué (ex. un mot souligné à
      // l'intérieur d'une citation en italique).
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={key}>{parseInline(part.slice(2, -2), key, route)}</strong>;
      }
      if (part.startsWith("<u>") && part.endsWith("</u>")) {
        return <u key={key}>{parseInline(part.slice(3, -4), key, route)}</u>;
      }
      // Lien interne vers une autre fiche : [texte](fiche:slug)
      const ficheMatch = part.match(/^\[([^\]]+)\]\(fiche:([^)\s]+)\)$/);
      if (ficheMatch) {
        const label = ficheMatch[1];
        const slug = ficheMatch[2];
        if (!route) {
          // Hors contexte de route : on rend le libellé sans lien plutôt qu'un href cassé.
          return <Fragment key={key}>{label}</Fragment>;
        }
        const href = `/reviser/${route.niveau}/epreuves/ecrites/${route.matiere}/${slug}`;
        return (
          <Link key={key} href={href} className="link link-primary font-medium">
            {label}
          </Link>
        );
      }
      const linkMatch = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)$/);
      if (linkMatch) {
        return (
          <a
            key={key}
            href={linkMatch[2]}
            target="_blank"
            rel="noreferrer"
            className="link link-primary font-medium"
          >
            {linkMatch[1]}
          </a>
        );
      }
      if (part.startsWith("~~") && part.endsWith("~~")) {
        return <s key={key}>{parseInline(part.slice(2, -2), key, route)}</s>;
      }
      if (part.startsWith("*") && part.endsWith("*")) {
        return <em key={key}>{parseInline(part.slice(1, -1), key, route)}</em>;
      }
      return <Fragment key={key}>{part}</Fragment>;
    });
}

/**
 * Affiche un texte avec mise en forme légère : **gras**, *italique*, ~~barré~~, <u>souligné</u>,
 * et "\n" rendu comme retour à la ligne.
 */
export function RichText({ text }: { text: RichTextValue }) {
  const route = useFicheRoute();
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {parseInline(line, `l${i}`, route)}
        </Fragment>
      ))}
    </>
  );
}
