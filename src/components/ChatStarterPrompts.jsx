import { useState } from "react";
import "./ChatStarterPrompts.css";

export default function ChatStarterPrompts() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const prompts = [
    "Tell me about CloudAge",
    "What Salesforce services do you offer?",
    "Show customer success stories",
    "Tell me about Agentforce solutions",
    "Contact CloudAge",
  ];

  const sendPrompt = async (prompt) => {
    try {
      // Open chat if not already open
      await window.embeddedservice_bootstrap?.utilAPI?.launchChat();

      // Give chat a moment to initialize
      setTimeout(() => {
        if (
          window.embeddedservice_bootstrap?.utilAPI?.sendTextMessage
        ) {
          window.embeddedservice_bootstrap.utilAPI.sendTextMessage(prompt);
        } else {
          console.error("sendTextMessage API not available");
        }
      }, 1000);

      setVisible(false);
    } catch (err) {
      console.error("Failed to send prompt:", err);
    }
  };

  return (
    <div className="starter-prompts">
      <div className="starter-header">
        <span>Need help? Ask CloudAge AI</span>
        <button onClick={() => setVisible(false)}>✕</button>
      </div>

      <div className="starter-buttons">
        {prompts.map((prompt) => (
          <button
            key={prompt}
            onClick={() => sendPrompt(prompt)}
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
}