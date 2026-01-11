import { useState } from "react";
import MessageList from "./components/MessageList.tsx";
import ChatInput from "./components/ChatInput.tsx";
import ItineraryCard from "./components/ItineraryCard.tsx";
import { mockAgent } from "./agent/mockAgent.ts";
import type { Message, ItineraryDay } from "./types/agent";
import './style.css'

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [itinerary, setItinerary] = useState<ItineraryDay[] | null>(null);

  const handleSend = async (text: string) => {
    const userMessage: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);

    const agentResponse = mockAgent(text);

    const agentMessage: Message = {
      role: "agent",
      content: agentResponse.reply
    };

    setMessages((prev) => [...prev, agentMessage]);

    if (agentResponse.itinerary) {
      setItinerary(agentResponse.itinerary);
    }
  };

  return (
    <div className="app-container">
      <h2 className="app-title">Travel AI Agent</h2>
      <MessageList messages={messages} />
      {itinerary && <ItineraryCard itinerary={itinerary} />}
      <ChatInput onSend={handleSend} />
    </div>
  );
}

export default App;
