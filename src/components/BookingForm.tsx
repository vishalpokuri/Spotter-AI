import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TakeoffIcon, LandingIcon, SwapIcon, CalendarIcon } from "./ui/Icons";
import TripTypeSelector from "./ui/TripTypeSelector";
import LocationInput from "./ui/LocationInput";
import DateInput from "./ui/DateInput";
import PassengerSelector from "./ui/PassengerSelector";
import CabinClassSelector from "./ui/CabinClassSelector";
import { DateRangePicker } from "./daterangepicker/date-range-picker";
import type { AirportSearchResult } from "../lib/types";
import { searchMockAirports } from "../data/mockAirports";

interface PassengerCounts {
  adults: number;
  children: number;
  infants: number;
}

export default function BookingForm() {
  const navigate = useNavigate();
  const [isSwapping, setIsSwapping] = useState(false);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [tripType, setTripType] = useState("roundtrip");
  const [departureDate, setDepartureDate] = useState<Date | undefined>(
    new Date()
  );
  const [passengers, setPassengers] = useState<PassengerCounts>({
    adults: 1,
    children: 0,
    infants: 0,
  });
  const [cabinClass, setCabinClass] = useState("economy");
  const [fromSearchResults, setFromSearchResults] = useState<
    AirportSearchResult[]
  >([]);
  const [toSearchResults, setToSearchResults] = useState<AirportSearchResult[]>(
    []
  );
  const [isSearchingFrom, setIsSearchingFrom] = useState(false);
  const [isSearchingTo, setIsSearchingTo] = useState(false);
  const [selectedFromAirport, setSelectedFromAirport] = useState<
    AirportSearchResult | undefined
  >();
  const [selectedToAirport, setSelectedToAirport] = useState<
    AirportSearchResult | undefined
  >();

  const searchAirport = async (query: string, field: "from" | "to") => {
    if (!query.trim()) return;

    const setIsSearching =
      field === "from" ? setIsSearchingFrom : setIsSearchingTo;
    const setResults =
      field === "from" ? setFromSearchResults : setToSearchResults;

    setIsSearching(true);

    // mock delay
    await new Promise((resolve) =>
      setTimeout(resolve, 500 + Math.random() * 500)
    );

    try {
      const results = searchMockAirports(query.trim());
      setResults(results);
    } catch (error) {
      console.error("Error searching airports:", error);
      setResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSwap = () => {
    setIsSwapping(true);
    setTimeout(() => {
      const tempValue = from;
      const tempAirport = selectedFromAirport;

      setFrom(to);
      setTo(tempValue);
      setSelectedFromAirport(selectedToAirport);
      setSelectedToAirport(tempAirport);

      setIsSwapping(false);
    }, 150);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border p-4 sm:p-6">
      {/* Row 1: Small Selectors */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start mb-4 gap-3 sm:gap-4">
        <TripTypeSelector tripType={tripType} onTripTypeChange={setTripType} />

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          <PassengerSelector
            passengers={passengers}
            onPassengersChange={setPassengers}
          />
          <CabinClassSelector
            cabinClass={cabinClass}
            onCabinClassChange={setCabinClass}
          />
        </div>
      </div>

      {/* Row 2: Inputs (Location, Dates) */}
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="relative lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <LocationInput
              label="From"
              value={from}
              onChange={(value) => {
                setFrom(value);
                if (
                  selectedFromAirport &&
                  value !== selectedFromAirport.presentation.title
                ) {
                  setSelectedFromAirport(undefined);
                }
              }}
              placeholder="City or airport"
              icon={<TakeoffIcon />}
              showSuggestions={true}
              searchResults={fromSearchResults}
              isSearching={isSearchingFrom}
              onSearch={(query) => searchAirport(query, "from")}
              onSelectAirport={(airport) => {
                setFrom(airport.presentation.title);
                setSelectedFromAirport(airport);
                setFromSearchResults([]);
              }}
              selectedAirport={selectedFromAirport}
            />
            {/* Mobile Swap Button */}
            <div className="sm:hidden flex justify-center mt-2">
              <button
                onClick={handleSwap}
                className={`w-10 h-8 bg-blue-500 hover:bg-blue-600 border-2 border-white rounded-xl flex items-center justify-center text-white hover:scale-105 transition-all duration-200 ${
                  isSwapping ? "rotate-180" : ""
                }`}
              >
                <SwapIcon />
              </button>
            </div>
            <LocationInput
              label="To"
              value={to}
              onChange={(value) => {
                setTo(value);
                if (
                  selectedToAirport &&
                  value !== selectedToAirport.presentation.title
                ) {
                  setSelectedToAirport(undefined);
                }
              }}
              placeholder="City or airport"
              icon={<LandingIcon />}
              showSuggestions={true}
              searchResults={toSearchResults}
              isSearching={isSearchingTo}
              onSearch={(query) => searchAirport(query, "to")}
              onSelectAirport={(airport) => {
                setTo(airport.presentation.title);
                setSelectedToAirport(airport);
                setToSearchResults([]);
              }}
              selectedAirport={selectedToAirport}
            />
            {/* Swap Button */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden sm:block">
              <button
                onClick={handleSwap}
                className={`w-8 h-10 bg-blue-500 hover:bg-blue-600 border-2 border-white rounded-full flex items-center justify-center text-white hover:scale-110 transition-all duration-200 ${
                  isSwapping ? "rotate-180" : ""
                }`}
              >
                <SwapIcon />
              </button>
            </div>
          </div>
          {tripType === "roundtrip" ? (
            <div className="border border-gray-300 rounded-lg p-2 px-3 bg-white">
              <div className="flex items-center gap-2 mb-1">
                <CalendarIcon />
                <label
                  className="text-gray-700 text-xs"
                  style={{ fontFamily: "var(--font-light)" }}
                >
                  Departure & Return
                </label>
              </div>
              <DateRangePicker
                onUpdate={() => {
                  /* Date range updated */
                }}
                initialDateFrom={new Date()}
                initialDateTo={new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)}
                align="start"
                locale="en-GB"
                showCompare={false}
              />
            </div>
          ) : (
            <DateInput
              label="Departure"
              icon={<CalendarIcon />}
              placeholder="Select date"
              value={departureDate}
              onChange={setDepartureDate}
            />
          )}
          {/* Search Button */}
          <div className="lg:text-center">
            <button
              onClick={() => {
                const params = new URLSearchParams({
                  from,
                  to,
                  tripType,
                  adults: passengers.adults.toString(),
                  children: passengers.children.toString(),
                  infants: passengers.infants.toString(),
                  cabinClass,
                  departureDate: departureDate?.toISOString() || "",
                });
                navigate(`/flights?${params.toString()}`);
              }}
              className="w-full lg:w-auto px-6 lg:px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-sm lg:text-base"
              style={{ fontFamily: "var(--font-med)" }}
            >
              <div className="flex items-center justify-center space-x-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span>Search Flights</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
