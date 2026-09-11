import { useEffect } from "react";

export default function SalesforceChat() {
  useEffect(() => {
    if (document.getElementById("salesforce-chat-script")) return; 
    const script = document.createElement("script");
    script.id = "salesforce-chat-script";

    script.src =
      "https://cloudage.my.site.com/ESWCloudAgeAgentDeploym1789037913097/assets/js/bootstrap.min.js";

      script.onerror = (e) => {
  console.error("Salesforce chat script failed to load", e);
};
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


