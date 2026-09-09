// SalesforceChat.jsx
import { useEffect } from "react";

export default function SalesforceChat() {
  useEffect(() => {
    // Avoid loading the script multiple times if it already exists
    const scriptId = "salesforce-embedded-messaging";
    if (document.getElementById(scriptId)) return;

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "text/javascript";
    script.src =
      "https://cloudage.my.site.com/ESWCloudAgeWebChat1788951009790/assets/js/bootstrap.min.js";

    script.onload = () => {
      try {
        window.embeddedservice_bootstrap.settings.language = "en_US";

        window.embeddedservice_bootstrap.init(
          "00Daj000016dxyv",
          "CloudAge_Web_Chat",
          "https://cloudage.my.site.com/ESWCloudAgeWebChat1788951009790",
          {
            scrt2URL: "https://cloudage.my.salesforce-scrt.com",
          }
        );
      } catch (err) {
        console.error("Error loading Embedded Messaging: ", err);
      }
    };

    document.body.appendChild(script);

    return () => {
      // Optional: Clean up script tag on unmount
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
}