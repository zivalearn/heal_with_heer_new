import { TarotCard78 } from '../data/tarotCards78';

export interface TarotReadingRequest {
  guidanceType?: string;
  name?: string;
  question?: string;
  cards: Array<{
    id: string;
    name: string;
    keywords: string[];
    upright: string;
    reversed: string;
    orientation: 'upright' | 'reversed';
  }>;
}

export interface TarotReadingResponse {
  guidanceType: string;
  cardsDrawn: string[];
  guidance: string;
  affirmation: string;
  // Backward compatibility fields if needed
  overallEnergy?: string;
  pastInterpretation?: string;
  presentInterpretation?: string;
  futureInterpretation?: string;
  cardsConnection?: string;
  practicalGuidance?: string;
  reflectionQuestion?: string;
}

export class TarotService {
  /**
   * Generates a 3-card Past-Present-Future Tarot reading from the backend.
   */
  static async generateReading(request: TarotReadingRequest): Promise<TarotReadingResponse> {
    try {
      const response = await fetch("/api/tarot-reading", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(request)
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || `Server responded with status ${response.status}`);
      }

      const reading: TarotReadingResponse = await response.json();
      return reading;
    } catch (error: any) {
      console.error("Error generating tarot reading in TarotService:", error);
      throw error;
    }
  }
}
