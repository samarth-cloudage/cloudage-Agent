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
      console.log("Bootstrap loaded");
      try {
         console.log("Starting Agent");
        window.embeddedservice_bootstrap.settings.language = "en_US";
        window.embeddedservice_bootstrap.settings.restrictSessionOnMessagingChannel = true;
        window.embeddedservice_bootstrap.init(
          "00Daj000016dxyv",
          "CloudAge_Agent_Deployment",
          "https://cloudage.my.site.com/ESWCloudAgeAgentDeploym1789037913097",
          {
            scrt2URL:
              "https://cloudage.my.salesforce-scrt.com",
          }
        );
         console.log("Init called");
      } catch (err) {
        console.error("Agent Init Error", err);
      }
    };

    document.body.appendChild(script);
  }, []);

  return null;
}


