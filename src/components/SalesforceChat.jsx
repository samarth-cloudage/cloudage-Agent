// SalesforceChat.jsx
import { useEffect } from "react";

export default function SalesforceChat() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://orgfarm-29a4d421ea-dev-ed.develop.my.site.com/ESWCloudAgeAgent1788417796283/assets/js/bootstrap.min.js";

    script.onload = () => {
      try {
        window.embeddedservice_bootstrap.settings.language = "en_US";

        window.embeddedservice_bootstrap.init(
          "00DgK00000Q8rue",
          "CloudAge_Agent",
          "https://orgfarm-29a4d421ea-dev-ed.develop.my.site.com/ESWCloudAgeAgent1788417796283",
          {
            scrt2URL:
              "https://orgfarm-29a4d421ea-dev-ed.develop.my.salesforce-scrt.com",
          }
        );
      } catch (err) {
        console.error(err);
      }
    };

    document.body.appendChild(script);
  }, []);

  return null;
}