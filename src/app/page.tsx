import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import StatusSection from "@/components/StatusSection";
import SourcesSection from "@/components/SourcesSection";
import NewsletterSection from "@/components/NewsletterSection";

// Données structurées de la page d'accueil : le site et la marque, même
// convention que le JSON-LD des pages du parcours.
const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Maitrizz",
  url: "https://www.maitrizz.fr",
  inLanguage: "fr-FR",
  description:
    "Préparation au concours CRPE : fiches de cours, exercices corrigés et sujets blancs construits à partir des programmes officiels et des rapports de jury.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
      />
      <HeroSection />
      <FeaturesSection />
      <SourcesSection />
      <StatusSection />
      <NewsletterSection />
    </>
  );
}
