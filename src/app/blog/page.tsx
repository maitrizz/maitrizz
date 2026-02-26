"use client";

import Link from "next/link";
import { useState } from "react";
import { articles, categories } from "./data";
import type { Article } from "./data";

const categoryStyle: Record<Article["category"], string> = {
  Conseils: "bg-accent/15 text-accent",
  Témoignages: "bg-secondary/40 text-primary",
  Guides: "bg-primary/10 text-primary",
  Actualités: "bg-info/20 text-info",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="bg-base-100 grid-paper border-2 border-base-300 rounded-2xl p-6 flex flex-col gap-4 hover:border-primary/40 hover:shadow-lg transition-all duration-200 group"
    >
      {/* Catégorie + temps de lecture */}
      <div className="flex items-center gap-2 flex-wrap">
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryStyle[article.category]}`}
        >
          {article.category}
        </span>
        <span className="text-xs text-base-content/40">
          {article.readTime} min de lecture
        </span>
      </div>

      {/* Titre */}
      <h3 className="font-bold text-lg text-base-content group-hover:text-primary transition-colors leading-snug">
        {article.title}
      </h3>

      {/* Extrait */}
      <p className="text-sm text-base-content/55 line-clamp-3 leading-relaxed flex-1">
        {article.excerpt}
      </p>

      {/* Pied de carte */}
      <div className="flex items-center justify-between pt-4 border-t border-base-300 mt-auto -mx-6 px-6 -mb-6 pb-6 bg-base-100 rounded-b-2xl">
        <div>
          <p className="text-xs font-semibold text-base-content/70">
            {article.author}
          </p>
          <p className="text-xs text-base-content/40">{formatDate(article.date)}</p>
        </div>
        <span className="text-sm font-semibold text-primary group-hover:underline">
          Lire →
        </span>
      </div>
    </Link>
  );
}

function FeaturedArticle({ article }: { article: Article }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="bg-base-100 border-2 border-base-300 rounded-2xl p-8 lg:p-10 flex flex-col gap-5 hover:border-primary/40 hover:shadow-xl transition-all duration-200 group"
    >
      {/* Badges */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-accent text-white">
          À la une
        </span>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryStyle[article.category]}`}
        >
          {article.category}
        </span>
        <span className="text-xs text-base-content/40">
          {article.readTime} min de lecture
        </span>
      </div>

      {/* Titre */}
      <h2 className="text-2xl md:text-3xl font-black text-base-content group-hover:text-primary transition-colors leading-snug max-w-3xl">
        {article.title}
      </h2>

      {/* Extrait */}
      <p className="text-base text-base-content/60 max-w-3xl leading-relaxed">
        {article.excerpt}
      </p>

      {/* Auteur + CTA */}
      <div className="flex items-center justify-between pt-4 border-t border-base-300 flex-wrap gap-4">
        <div>
          <p className="text-sm font-semibold text-base-content/80">
            {article.author}
          </p>
          <p className="text-xs text-base-content/40">
            {article.authorRole} · {formatDate(article.date)}
          </p>
        </div>
        <span className="btn btn-primary btn-sm rounded-full px-6">
          Lire l&apos;article →
        </span>
      </div>
    </Link>
  );
}

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState<
    Article["category"] | "Tous"
  >("Tous");

  const featuredArticle = articles.find((a) => a.featured);
  const filteredArticles = articles.filter((a) => {
    if (activeCategory === "Tous") return !a.featured;
    return a.category === activeCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-primary grid-paper-light py-20 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/5 rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-accent rounded-full shrink-0" />
            <span className="text-white/90 text-sm font-medium">
              Conseils, guides & témoignages
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            Le Blog <span className="text-accent">Maitrizz</span>
          </h1>
          <p className="text-lg text-white/70 max-w-xl leading-relaxed">
            Conseils de préparation, guides pratiques et témoignages de lauréats
            pour réussir le CRPE.
          </p>
        </div>
      </div>

      <div className="bg-base-100 max-w-6xl mx-auto px-6 lg:px-8 py-14">
        {/* Article à la une */}
        {featuredArticle && activeCategory === "Tous" && (
          <div className="mb-12">
            <FeaturedArticle article={featuredArticle} />
          </div>
        )}

        {/* Filtres */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-150 ${
              activeCategory === "Tous"
                ? "bg-primary text-white"
                : "text-base-content/60 hover:text-primary hover:bg-primary/8"
            }`}
            onClick={() => setActiveCategory("Tous")}
          >
            Tous les articles
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-150 ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "text-base-content/60 hover:text-primary hover:bg-primary/8"
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Compteur */}
        <p className="text-sm text-base-content/40 mb-8">
          {filteredArticles.length} article
          {filteredArticles.length > 1 ? "s" : ""}
          {activeCategory !== "Tous" ? ` dans "${activeCategory}"` : ""}
        </p>

        {/* Grille */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-base-content/40">
            <p className="text-lg font-medium">
              Aucun article dans cette catégorie pour l&apos;instant.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
