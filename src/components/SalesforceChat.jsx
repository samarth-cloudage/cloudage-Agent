import { useEffect } from "react";

export default function SalesforceChat() {
  useEffect(() => {
    if (document.getElementById("salesforce-chat-script")) return;
    const script = document.createElement("script");
    script.id = "salesforce-chat-script";

    script.src =
      "https://cloudage.my.site.com/ESWCloudAgeAgent1789466082202/assets/js/bootstrap.min.js";

    script.onerror = (e) => {
      console.error("Salesforce chat script failed to load", e);
    };

    script.onload = () => {
      try {
        window.embeddedservice_bootstrap.settings.language = "en_US";
        window.embeddedservice_bootstrap.settings.restrictSessionOnMessagingChannel = true;

        let sessionCleared = false;

        window.addEventListener("onEmbeddedMessagingReady", async () => {
          if (sessionCleared) return; // guard against repeat firing
          sessionCleared = true;

          try {
            await window.embeddedservice_bootstrap.userVerificationAPI.clearSession();
            console.log("Session Cleared");
          } catch (e) {
            console.error(e);
          }
        });

        window.embeddedservice_bootstrap.init(
          "00Daj000016dxyv",
          "CloudAge_Agent",
          "https://cloudage.my.site.com/ESWCloudAgeAgent1789466082202",
          {
            scrt2URL: "https://cloudage.my.salesforce-scrt.com",
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