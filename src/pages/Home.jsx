import Hero from "../components/Hero/Hero";
import StructuredData from "../components/SEO/StructuredData";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
     <Helmet>

  <title>
    CloudAge Informatica | Salesforce Consulting & CRM Solutions
  </title>

  <meta
    name="description"
    content="CloudAge Informatica helps businesses implement, customize and optimize Salesforce CRM with certified consultants."
  />

  <link
    rel="canonical"
    href="https://cloudage-website.pages.dev/"
  />

  <meta name="robots" content="index,follow" />

  <meta property="og:type" content="website" />

  <meta
    property="og:title"
    content="CloudAge Informatica | Salesforce Consulting & CRM Solutions"
  />

  <meta
    property="og:description"
    content="CloudAge Informatica helps businesses implement, customize and optimize Salesforce CRM with certified consultants."
  />

  <meta
    property="og:url"
    content="https://cloudage-website.pages.dev/"
  />

  <meta
    property="og:image"
    content="https://cloudage-website.pages.dev/CloudAgeLogo.png"
  />

  <meta
    property="og:image:alt"
    content="CloudAge Informatica Salesforce Consulting"
  />

  <meta
    property="og:site_name"
    content="CloudAge Informatica"
  />

  <meta
    name="twitter:card"
    content="summary_large_image"
  />


  <script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "CloudAge Informatica",
  "url": "https://cloudage-website.pages.dev",
  "logo": "https://cloudage-website.pages.dev/CloudAgeLogo.png",
  "image": "https://cloudage-website.pages.dev/CloudAgeLogo.png",
  "telephone": "+91 92651 26818",
  "email": "contact@cloudageinformatica.com",
  "description": "CloudAge Informatica provides Salesforce consulting, CRM implementation, Experience Cloud, Service Cloud, custom Salesforce development and integration services.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Surat",
    "addressRegion": "Gujarat",
    "addressCountry": "IN"
  }
}
`}
</script>

</Helmet>
     <StructuredData />
      <Hero />
     <ServicesSection />
      <WhyChoose />
    </>
  );
}

export default Home;