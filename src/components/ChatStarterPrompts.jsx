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
            onClick={() => {
              alert(prompt); // we'll replace later
            }}
          >
            {prompt}
          </button>
        ))}
      </div>
    </div>
  );
}