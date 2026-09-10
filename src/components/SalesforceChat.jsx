import { useEffect } from "react";

export default function SalesforceChat() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://cloudage.my.site.com/ESWCloudAgeAgentDeploym1789037913097/assets/js/bootstrap.min.js";

    script.onload = () => {
      try {
        window.embeddedservice_bootstrap.settings.language = "en_US";

        window.embeddedservice_bootstrap.init(
          "00Daj000016dxyv",
          "CloudAge_Agent_Deployment",
          "https://cloudage.my.site.com/ESWCloudAgeAgentDeploym1789037913097",
          {
            scrt2URL:
              "https://cloudage.my.salesforce-scrt.com",
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


