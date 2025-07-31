import { type ReactNode } from "react";
import type { AirportSearchResult } from "../../lib/types";

interface LocationInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  icon: ReactNode;
  showSuggestions?: boolean;
  searchResults?: AirportSearchResult[];
  isSearching?: boolean;
  onSearch?: (query: string) => void;
  onSelectAirport?: (airport: AirportSearchResult) => void;
  selectedAirport?: AirportSearchResult;
}

export default function LocationInput({
  label,
  value,
  onChange,
  placeholder,
  icon,
  showSuggestions = false,
  searchResults = [],
  isSearching = false,
  onSearch,
  onSelectAirport,
  selectedAirport,
}: LocationInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSearch && value.trim()) {
      e.preventDefault();
      onSearch(value.trim());
    }
  };

  const handleSelectAirport = (airport: AirportSearchResult) => {
    if (onSelectAirport) {
      onSelectAirport(airport);
      onChange(airport.presentation.title);
    }
  };
  return (
    <div className={`border rounded-lg p-3 sm:p-2 sm:px-3 bg-white ${selectedAirport ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}>
      <div className="flex items-center gap-2 mb-1">
        {icon}
        <label
          className="text-gray-700 text-xs"
          style={{ fontFamily: "var(--font-light)" }}
        >
          {label}
        </label>
        {selectedAirport && (
          <span 
            className="ml-auto text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded"
            style={{ fontFamily: "var(--font-med)" }}
          >
            {selectedAirport.navigation.relevantFlightParams.skyId}
          </span>
        )}
      </div>
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full px-0 bg-transparent border-none text-gray-900 placeholder-gray-500 focus:outline-none text-sm"
          style={{ fontFamily: "var(--font-reg)" }}
        />
        {showSuggestions && (
          (isSearching || searchResults.length > 0 || (value && searchResults.length === 0 && !selectedAirport))
        ) && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-64 overflow-y-auto">
            <div className="p-2">
              {isSearching ? (
                <div className="flex items-center justify-center p-4">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                  <span className="ml-2 text-sm text-gray-500">
                    Searching...
                  </span>
                </div>
              ) : searchResults.length > 0 ? (
                searchResults.map((airport) => (
                  <div
                    key={airport.navigation.entityId}
                    className="flex items-center p-4 sm:p-3 hover:bg-blue-50 rounded-lg cursor-pointer transition-colors"
                    onClick={() => handleSelectAirport(airport)}
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                      <span
                        className="text-blue-600 text-xs font-medium"
                        style={{ fontFamily: "var(--font-med)" }}
                      >
                        {airport.navigation.relevantFlightParams.skyId}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className="text-gray-900 text-sm sm:text-base font-medium truncate"
                        style={{ fontFamily: "var(--font-reg)" }}
                      >
                        {airport.presentation.title}
                      </div>
                      <div
                        className="text-sm text-gray-500 truncate"
                        style={{ fontFamily: "var(--font-light)" }}
                      >
                        {airport.presentation.subtitle}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-4 text-sm text-gray-500 text-center">
                  Press Enter to search for "{value}"
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
