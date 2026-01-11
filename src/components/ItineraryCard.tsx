import type { ItineraryDay } from "../types/agent";
import './IntineraryCard.css'

interface Props {
  itinerary: ItineraryDay[];
}

export default function ItineraryCard({ itinerary }: Props) {
  return (
    <div className="itinerary-card">
      <h3>Your Itinerary</h3>

      {itinerary.map((day, idx) => (
        <div key={idx} className="itinerary-day">
          <h4>Day {idx + 1}</h4>
          <ul>
            <li><strong>Morning:</strong> {day.morning}</li>
            <li><strong>Afternoon:</strong> {day.afternoon}</li>
            <li><strong>Evening:</strong> {day.evening}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}
