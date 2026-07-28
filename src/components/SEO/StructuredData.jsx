import { Helmet } from "react-helmet-async";

export default function StructuredData() {
  const professionalService = {
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
  const localBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",

  "name": "CloudAge Informatica",

  "url": "https://cloudage-website.pages.dev",

  "image": "https://cloudage-website.pages.dev/CloudAgeLogo.png",

  "telephone": "+91 92651 26818",

  "email": "contact@cloudageinformatica.com",

  "priceRange": "$$",

  "address": {
    "@type": "PostalAddress",
    "streetAddress": "409 Soham Arcade, Near Bagban Circle, Gaurav Path Road",
    "addressLocality": "Surat",
    "addressRegion": "Gujarat",
    "postalCode": "394510",
    "addressCountry": "IN"
  },

  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "21.1898",
    "longitude": "72.7699"
  },

  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:30",
      "closes": "18:30"
    }
  ]
};

  return (
    <Helmet>
     <script type="application/ld+json">
  {JSON.stringify(professionalService)}
</script>

<script type="application/ld+json">
  {JSON.stringify(localBusiness)}
</script>
    </Helmet>
  );
}