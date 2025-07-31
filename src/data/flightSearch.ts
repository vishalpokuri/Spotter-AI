import type { FlightSearchResponse, FlightItinerary } from "../lib/types";
import { mockResults } from "./mockResults";

interface FlightSearchParams {
  from?: string;
  to?: string;
  tripType?: string;
  departureDate?: string;
  returnDate?: string;
  adults?: number;
  children?: number;
  infants?: number;
  cabinClass?: string;
}

export const searchFlights = async (params: FlightSearchParams): Promise<FlightSearchResponse> => {
  // Simulate realistic API delay
  await new Promise(resolve => setTimeout(resolve, 1500 + Math.random() * 1000));
  
  // Return the mock results with some variations based on search params
  const response: FlightSearchResponse = {
    ...mockResults,
    timestamp: Date.now(),
    sessionId: generateSessionId(),
    data: {
      ...mockResults.data,
      // Vary the results slightly based on search criteria
      itineraries: getVariedResults(params)
    }
  };
  
  return response;
};

const generateSessionId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

const getVariedResults = (params: FlightSearchParams): FlightItinerary[] => {
  const baseResults = [...mockResults.data.itineraries];
  
  // Shuffle results for variety
  const shuffled = baseResults.sort(() => Math.random() - 0.5);
  
  // Adjust prices based on parameters
  return shuffled.map(itinerary => ({
    ...itinerary,
    price: {
      ...itinerary.price,
      raw: itinerary.price.raw + (Math.random() * 200 - 100), // ±$100 variation
      formatted: `$${Math.round(itinerary.price.raw + (Math.random() * 200 - 100))}`
    },
    // Update departure dates to be more recent
    legs: itinerary.legs.map(leg => ({
      ...leg,
      departure: adjustDate(leg.departure, params.departureDate),
      arrival: adjustDate(leg.arrival, params.departureDate),
      segments: leg.segments.map(segment => ({
        ...segment,
        departure: adjustDate(segment.departure, params.departureDate),
        arrival: adjustDate(segment.arrival, params.departureDate)
      }))
    }))
  }));
};

const adjustDate = (originalDate: string, targetDate?: string): string => {
  if (!targetDate) {
    // Default to next week
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    return nextWeek.toISOString();
  }
  
  try {
    const target = new Date(targetDate);
    const original = new Date(originalDate);
    
    // Keep the same time, but use the target date
    const adjusted = new Date(target);
    adjusted.setHours(original.getHours());
    adjusted.setMinutes(original.getMinutes());
    adjusted.setSeconds(original.getSeconds());
    
    return adjusted.toISOString();
  } catch {
    return originalDate;
  }
};

