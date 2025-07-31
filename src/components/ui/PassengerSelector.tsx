import { useState } from "react";
import { ChevronDownIcon } from "./Icons";

interface PassengerCounts {
  adults: number;
  children: number;
  infants: number;
}

interface PassengerSelectorProps {
  passengers: PassengerCounts;
  onPassengersChange: (passengers: PassengerCounts) => void;
}

export default function PassengerSelector({
  passengers,
  onPassengersChange,
}: PassengerSelectorProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  const totalPassengers =
    passengers.adults + passengers.children + passengers.infants;

  const updatePassengerCount = (
    type: keyof PassengerCounts,
    increment: boolean
  ) => {
    const newPassengers = { ...passengers };
    if (increment) {
      newPassengers[type]++;
    } else {
      if (type === "adults") {
        newPassengers[type] = Math.max(1, newPassengers[type] - 1);
      } else {
        newPassengers[type] = Math.max(0, newPassengers[type] - 1);
      }
    }
    onPassengersChange(newPassengers);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="w-full min-w-[140px] pl-3 pr-8 py-2 sm:py-1 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-left focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 hover:bg-gray-100"
      >
        <span
          className="text-xs text-gray-700"
          style={{ fontFamily: "var(--font-reg)" }}
        >
          {totalPassengers} {totalPassengers === 1 ? "Passenger" : "Passengers"}
        </span>
      </button>
      <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
        <div
          className={`transition-transform duration-200 ${
            showDropdown ? "rotate-180" : ""
          }`}
        >
          <ChevronDownIcon />
        </div>
      </div>

      {/* Dropdown Content */}
      {showDropdown && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 p-3 w-48">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <div
                  className="text-xs text-gray-900"
                  style={{ fontFamily: "var(--font-med)" }}
                >
                  Adults
                </div>
                <div
                  className="text-xs text-gray-500"
                  style={{ fontFamily: "var(--font-light)" }}
                >
                  12+ years
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updatePassengerCount("adults", false)}
                  className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors text-xs"
                  style={{ fontFamily: "var(--font-med)" }}
                >
                  -
                </button>
                <span
                  className="w-6 text-center text-xs"
                  style={{ fontFamily: "var(--font-med)" }}
                >
                  {passengers.adults}
                </span>
                <button
                  onClick={() => updatePassengerCount("adults", true)}
                  className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors text-xs"
                  style={{ fontFamily: "var(--font-med)" }}
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div
                  className="text-xs text-gray-900"
                  style={{ fontFamily: "var(--font-med)" }}
                >
                  Children
                </div>
                <div
                  className="text-xs text-gray-500"
                  style={{ fontFamily: "var(--font-light)" }}
                >
                  2-11 years
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updatePassengerCount("children", false)}
                  className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors text-xs"
                  style={{ fontFamily: "var(--font-med)" }}
                >
                  -
                </button>
                <span
                  className="w-6 text-center text-xs"
                  style={{ fontFamily: "var(--font-med)" }}
                >
                  {passengers.children}
                </span>
                <button
                  onClick={() => updatePassengerCount("children", true)}
                  className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors text-xs"
                  style={{ fontFamily: "var(--font-med)" }}
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div
                  className="text-xs text-gray-900"
                  style={{ fontFamily: "var(--font-med)" }}
                >
                  Infants
                </div>
                <div
                  className="text-xs text-gray-500"
                  style={{ fontFamily: "var(--font-light)" }}
                >
                  Under 2 years
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updatePassengerCount("infants", false)}
                  className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors text-xs"
                  style={{ fontFamily: "var(--font-med)" }}
                >
                  -
                </button>
                <span
                  className="w-6 text-center text-xs"
                  style={{ fontFamily: "var(--font-med)" }}
                >
                  {passengers.infants}
                </span>
                <button
                  onClick={() => updatePassengerCount("infants", true)}
                  className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors text-xs"
                  style={{ fontFamily: "var(--font-med)" }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
