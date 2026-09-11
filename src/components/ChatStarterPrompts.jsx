import { useState, useEffect } from "react";
import "./ChatStarterPrompts.css";

export default function ChatStarterPrompts() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showPrompts = () => setVisible(true);
    const hidePrompts = () => setVisible(false);

    window.addEventListener("showStarterPrompts", showPrompts);
    window.addEventListener("hideStarterPrompts", hidePrompts);

    return () => {
      window.removeEventListener("showStarterPrompts", showPrompts);
      window.removeEventListener("hideStarterPrompts", hidePrompts);
    };
  }, []);

  const prompts = [
    "Tell me about CloudAge",
    "What Salesforce services do you offer?",
    "Show customer success stories",
    "Tell me about Agentforce solutions",
    "Contact CloudAge",
  ];

  const sendPrompt = async (prompt) => {
    try {
      console.log("Prompt clicked:", prompt);

      // We'll connect this later
      // sendTextMessage(prompt);

      setVisible(false);
    } catch (err) {
      console.error(err);
    }
  };

  if (!visible) return null;

  return (
    <div className="starter-prompts">
      <div className="starter-header">
        <span>Need help? Ask CloudAge AI</span>

        <button
          className="close-btn"
          onClick={() => setVisible(false)}
        >
          ✕
        </button>
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