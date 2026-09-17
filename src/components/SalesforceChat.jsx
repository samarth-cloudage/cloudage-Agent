import { useEffect } from "react";

export default function SalesforceChat() {
  useEffect(() => {
    const script = document.getElementById("salesforce-chat-script");
    if (!script) return;

    const initChat = () => {
      try {
        window.embeddedservice_bootstrap.settings.language = "en_US";
        window.embeddedservice_bootstrap.settings.restrictSessionOnMessagingChannel = true;

        let sessionCleared = false;

        window.addEventListener("onEmbeddedMessagingReady", async () => {
          if (sessionCleared) return;
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
          "https://cloudage.my.site.com/ESWCloudAgeAgent1789553392513",
          {
            scrt2URL: "https://cloudage.my.salesforce-scrt.com",
          }
        );
      } catch (err) {
        console.error(err);
      }
    };

    // If script already loaded before this effect ran, init immediately
    if (window.embeddedservice_bootstrap) {
      initChat();
    } else {
      script.addEventListener("load", initChat);
      script.addEventListener("error", (e) =>
        console.error("Salesforce chat script failed to load", e)
      );
    }

    return () => {
      script.removeEventListener("load", initChat);
    };
  }, []);

  return null;
}