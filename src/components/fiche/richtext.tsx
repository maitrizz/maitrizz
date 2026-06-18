import { Fragment } from "react";
import type { RichText as RichTextValue } from "./types";

const INLINE_REGEX = /(\[[^\]]+\]\(https?:\/\/[^)\s]+\)|\*\*.+?\*\*|~~.+?~~|\*.+?\*)/g;

function parseInline(line: string, keyPrefix: string) {
  return line
    .split(INLINE_REGEX)
    .filter((part) => part.length > 0)
    .map((part, i) => {
      const key = `${keyPrefix}-${i}`;
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={key}>{part.slice(2, -2)}</strong>;
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
        return <s key={key}>{part.slice(2, -2)}</s>;
      }
      if (part.startsWith("*") && part.endsWith("*")) {
        return <em key={key}>{part.slice(1, -1)}</em>;
      }
      return <Fragment key={key}>{part}</Fragment>;
    });
}

/**
 * Affiche un texte avec mise en forme légère : **gras**, *italique*, ~~barré~~,
 * et "\n" rendu comme retour à la ligne.
 */
export function RichText({ text }: { text: RichTextValue }) {
  const lines = text.split("\n");
  return (
    <>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {parseInline(line, `l${i}`)}
        </Fragment>
      ))}
    </>
  );
}
