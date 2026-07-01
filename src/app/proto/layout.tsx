import { Caveat } from "next/font/google";
import ProtoHeader from "./ProtoHeader";
import ProtoFooter from "./ProtoFooter";

/* Layout commun aux pages prototype (/proto et /proto/reviser).
   Porte la surcharge de charte LOCALE (fond ivoire), la police manuscrite,
   et le header/footer propres au prototype. Rien de tout ceci n'affecte le
   reste du site. */

const hand = Caveat({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-hand",
});

const charteProto = {
  "--color-surface": "#fdfaf5",
  "--color-surface-container": "#f3efe8",
  backgroundColor: "#fdfaf5",
} as React.CSSProperties;

export default function ProtoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${hand.variable} flex min-h-screen flex-col`}
      style={charteProto}
    >
      <ProtoHeader />
      <main className="flex-1">{children}</main>
      <ProtoFooter />
    </div>
  );
}
