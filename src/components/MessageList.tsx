import type { Message } from "../types/agent";
import "./MessageList.css";

interface Props {
  messages: Message[];
}

export default function MessageList({ messages }: Props) {
  return (
    <div className="message-list">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`message ${msg.role === "user" ? "user" : "agent"}`}
        >
          {msg.content}
        </div>
      ))}
    </div>
  );
}
