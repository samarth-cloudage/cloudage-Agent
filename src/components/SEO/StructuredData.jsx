import { Helmet } from "react-helmet-async";

export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",

    "name": "CloudAge Informatica",

    "url": "https://cloudage-website.pages.dev",

    "logo": "https://cloudage-website.pages.dev/CloudAgeLogo.png",

    "image": "https://cloudage-website.pages.dev/CloudAgeLogo.png",

    "telephone": "+91 92651 26818",

    "email": "contact@cloudageinformatica.com",

    "description":
      "CloudAge Informatica provides Salesforce consulting, CRM implementation, Experience Cloud, Service Cloud, custom Salesforce development and integration services.",

    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Surat",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },

    "areaServed": "Worldwide",

    "sameAs": []
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}