import type { AgentResponse } from "../types/agent";

export function mockAgent(input: string): AgentResponse {
  const text = input.toLowerCase();

  if (text.includes("trip")) {
    return {
      reply: "Great! Which city are you traveling to?"
    };
  }

  if (text.includes("hanoi")) {
    return {
      reply: "Nice choice! Here’s a sample 3-day plan.",
      itinerary: [
        {
          morning: "Temple of Literature",
          afternoon: "Ho Chi Minh Mausoleum",
          evening: "Old Quarter walk"
        },
        {
          morning: "Local market",
          afternoon: "Street food tour",
          evening: "Coffee near the lake"
        },
        {
          morning: "Free time",
          afternoon: "Shopping",
          evening: "Relaxed dinner"
        }
      ]
    };
  }

  return {
    reply: "Tell me more about your travel plans."
  };
}
