import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import FlightCard from "./ui/FlightCard";
import SidebarFilters from "./SidebarFilters";
import type { FlightItinerary } from "../lib/types";
import { searchFlights } from "../data/flightSearch";

interface DashboardProps {
  isOneway?: boolean;
}

export default function Dashboard({ isOneway = false }: DashboardProps) {
  const [searchParams, _setSearchParams] = useSearchParams();
  const [flights, setFlights] = useState<FlightItinerary[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch flights using simulation
  const fetchFlights = async () => {
    setLoading(true);
    try {
      const searchCriteria = {
        from: searchParams.get("from") || "",
        to: searchParams.get("to") || "",
        tripType: searchParams.get("tripType") || "roundtrip",
        departureDate: searchParams.get("departureDate") || "",
        returnDate: searchParams.get("returnDate") || "",
        adults: parseInt(searchParams.get("adults") || "1"),
        children: parseInt(searchParams.get("children") || "0"),
        infants: parseInt(searchParams.get("infants") || "0"),
        cabinClass: searchParams.get("cabinClass") || "economy",
      };

      const response = await searchFlights(searchCriteria);
      setFlights(response.data.itineraries);
    } catch (error) {
      console.error("Error searching flights:", error);
      setFlights([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch flights on mount and when search params change
  useEffect(() => {
    fetchFlights();
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex max-w-7xl mx-auto">
        {/* Left Sidebar - Filters */}
        <SidebarFilters flights={flights} loading={loading} />

        {/* Right Content - Flight Results */}
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="mb-6">
            <h1
              className="text-2xl font-bold text-gray-900 mb-2"
              style={{ fontFamily: "var(--font-med)" }}
            >
              Flight Results
            </h1>
            <div className="flex items-center justify-between">
              <p
                className="text-gray-600"
                style={{ fontFamily: "var(--font-light)" }}
              >
                {loading
                  ? "Loading flights..."
                  : `Showing ${flights.length} of ${flights.length} flights`}
              </p>
              <p
                className="text-sm text-gray-500"
                style={{ fontFamily: "var(--font-light)" }}
              >
                Prices include taxes and fees
              </p>
            </div>
          </div>

          {/* Flight Results */}
          <div className="space-y-4 max-w-2xl">
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p
                  className="text-gray-600"
                  style={{ fontFamily: "var(--font-light)" }}
                >
                  Searching for the best flights...
                </p>
              </div>
            ) : flights.length > 0 ? (
              flights.map((flight) => (
                <FlightCard
                  key={flight.id}
                  flight={flight}
                  isOneway={isOneway}
                />
              ))
            ) : (
              <div className="text-center py-12">
                <p
                  className="text-gray-600 mb-2"
                  style={{ fontFamily: "var(--font-reg)" }}
                >
                  No flights found
                </p>
                <p
                  className="text-gray-500"
                  style={{ fontFamily: "var(--font-light)" }}
                >
                  Try adjusting your search criteria or filters
                </p>
              </div>
            )}
          </div>

          {/* Load More */}
          {!loading && flights.length > 0 && (
            <div className="text-center mt-8 max-w-2xl">
              <button
                className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg transition-colors duration-200"
                style={{ fontFamily: "var(--font-reg)" }}
              >
                Load More Flights
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
