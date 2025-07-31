import type { FlightItinerary } from "../lib/types";

interface SidebarFiltersProps {
  flights: FlightItinerary[];
  loading: boolean;
}

export default function SidebarFilters({ flights, loading }: SidebarFiltersProps) {
  return (
    <div className="w-80 bg-white shadow-lg p-6 h-screen sticky top-0 overflow-y-auto">
      {/* Header */}
      <div className="mb-6">
        <h2
          className="text-lg font-bold text-gray-900 mb-2"
          style={{ fontFamily: "var(--font-med)" }}
        >
          Filter & Sort
        </h2>
        <p
          className="text-sm text-gray-600"
          style={{ fontFamily: "var(--font-light)" }}
        >
          {loading ? "Searching..." : `${flights.length} flights found`}
        </p>
      </div>

      {/* Sort By */}
      <div className="mb-6">
        <h3
          className="text-sm font-medium text-gray-900 mb-3"
          style={{ fontFamily: "var(--font-med)" }}
        >
          Sort by
        </h3>
        <div className="space-y-2">
          {[
            { value: "price", label: "Price (Low to High)" },
            { value: "duration", label: "Duration (Short to Long)" },
            { value: "departure", label: "Departure Time" },
            { value: "arrival", label: "Arrival Time" },
            { value: "airline", label: "Airline" }
          ].map((option) => (
            <label key={option.value} className="flex items-center">
              <input
                type="radio"
                name="sort"
                value={option.value}
                defaultChecked={option.value === "price"}
                className="mr-2 w-4 h-4 text-slate-600 border-gray-300 focus:ring-slate-500"
              />
              <span
                className="text-sm text-gray-700"
                style={{ fontFamily: "var(--font-light)" }}
              >
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3
          className="text-sm font-medium text-gray-900 mb-3"
          style={{ fontFamily: "var(--font-med)" }}
        >
          Price Range
        </h3>
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max="3000"
            defaultValue="2000"
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>$0</span>
            <span>$2000</span>
          </div>
        </div>
      </div>

      {/* Stops */}
      <div className="mb-6">
        <h3
          className="text-sm font-medium text-gray-900 mb-3"
          style={{ fontFamily: "var(--font-med)" }}
        >
          Stops
        </h3>
        <div className="space-y-2">
          {[
            { value: "all", label: "Any number of stops" },
            { value: "nonstop", label: "Non-stop only" },
            { value: "1stop", label: "1 stop or fewer" },
            { value: "2stops", label: "2 stops or fewer" }
          ].map((option) => (
            <label key={option.value} className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="stops"
                  value={option.value}
                  defaultChecked={option.value === "all"}
                  className="mr-2 w-4 h-4 text-slate-600 border-gray-300 focus:ring-slate-500"
                />
                <span
                  className="text-sm text-gray-700"
                  style={{ fontFamily: "var(--font-light)" }}
                >
                  {option.label}
                </span>
              </div>
              <span className="text-xs text-gray-500">
                {flights.length}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Airlines */}
      <div className="mb-6">
        <h3
          className="text-sm font-medium text-gray-900 mb-3"
          style={{ fontFamily: "var(--font-med)" }}
        >
          Airlines
        </h3>
        <div className="space-y-2">
          {["Lufthansa", "United", "Emirates", "Qatar Airways"].map((airline) => (
            <label key={airline} className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2 w-4 h-4 text-slate-600 border-gray-300 rounded focus:ring-slate-500"
                />
                <span
                  className="text-sm text-gray-700"
                  style={{ fontFamily: "var(--font-light)" }}
                >
                  {airline}
                </span>
              </div>
              <span className="text-xs text-gray-500">
                {Math.floor(flights.length / 4)}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Departure Time */}
      <div className="mb-6">
        <h3
          className="text-sm font-medium text-gray-900 mb-3"
          style={{ fontFamily: "var(--font-med)" }}
        >
          Departure Time
        </h3>
        <div className="space-y-2">
          {[
            { value: "all", label: "Any time" },
            { value: "morning", label: "Morning (5AM - 12PM)" },
            { value: "afternoon", label: "Afternoon (12PM - 6PM)" },
            { value: "evening", label: "Evening (6PM - 12AM)" },
            { value: "night", label: "Night (12AM - 5AM)" }
          ].map((option) => (
            <label key={option.value} className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="departureTime"
                  value={option.value}
                  defaultChecked={option.value === "all"}
                  className="mr-2 w-4 h-4 text-slate-600 border-gray-300 focus:ring-slate-500"
                />
                <span
                  className="text-sm text-gray-700"
                  style={{ fontFamily: "var(--font-light)" }}
                >
                  {option.label}
                </span>
              </div>
              <span className="text-xs text-gray-500">
                {Math.floor(flights.length / 5)}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Reset Filters */}
      <button
        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm transition-colors duration-200"
        style={{ fontFamily: "var(--font-reg)" }}
      >
        Reset All Filters
      </button>
    </div>
  );
}