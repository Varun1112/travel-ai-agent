export type Role = "user" | "agent";

export interface Message {
  role: Role;
  content: string;
}

export interface ItineraryDay {
  morning: string;
  afternoon: string;
  evening: string;
}

export interface AgentResponse {
  reply: string;
  itinerary?: ItineraryDay[] | null;
}
