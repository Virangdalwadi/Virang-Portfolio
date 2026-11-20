import React from "react";
import { Helmet } from "react-helmet-async";
import { SITE_URL } from "../lib/seo";

/**
 * Balises SEO d'une page : titre, description, canonical, hreflang EN, Open Graph et Twitter.
 * Toutes les pages passent par ici : les balises statiques d'index.html (data-rh) sont remplacées,
 * jamais dupliquées.
 */
export const Seo: React.FC<{
  title: string;
  description: string;
  /** Chemin de la page, ex. "/lab" */
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article" | "profile";
  noindex?: boolean;
  children?: React.ReactNode;
}> = ({
  title,
  description,
  path,
  image,
  imageAlt,
  type = "website",
  noindex = false,
  children,
}) => {
  // Google coupe au-delà d'environ 160 caractères : on coupe nous-mêmes, sur un mot entier
  const desc =
    description.length > 160
      ? `${description.slice(0, 157).replace(/[\s,;:.—-]+\S*$/, "")}…`
      : description;
  const canonical = `${SITE_URL}${path}`;
  const img = image
    ? image.startsWith("http")
      ? image
      : `${SITE_URL}${image}`
    : undefined;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta
        name="robots"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large"
        }
      />
      {!noindex && <link rel="canonical" href={canonical} />}
      {!noindex && <link rel="alternate" hrefLang="en" href={canonical} />}
      {!noindex && (
        <link rel="alternate" hrefLang="x-default" href={canonical} />
      )}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Virang Dalwadi" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />

      {img && <meta property="og:image" content={img} />}
      {img && <meta property="og:image:alt" content={imageAlt ?? title} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      {img && <meta name="twitter:image" content={img} />}
      {img && <meta name="twitter:image:alt" content={imageAlt ?? title} />}
      {children}
    </Helmet>
  );
};

export default Seo;
