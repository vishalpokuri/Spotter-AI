import { useState } from "react";
import { ChevronDownIcon } from "./Icons";

interface PassengerCounts {
  adults: number;
  children: number;
  infants: number;
}

interface PassengerDropdownProps {
  passengers: PassengerCounts;
  cabinClass: string;
  onPassengersChange: (passengers: PassengerCounts) => void;
  onCabinClassChange: (cabinClass: string) => void;
}

export default function PassengerDropdown({
  passengers,
  cabinClass,
  onPassengersChange,
  onCabinClassChange,
}: PassengerDropdownProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  
  const totalPassengers = passengers.adults + passengers.children + passengers.infants;

  const updatePassengerCount = (type: keyof PassengerCounts, increment: boolean) => {
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
      <label className="block text-gray-700 text-sm mb-2" style={{ fontFamily: 'var(--font-light)' }}>
        Passengers & Class
      </label>
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="w-full pl-4 pr-10 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-left focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 hover:bg-gray-100"
      >
        <div className="flex flex-col">
          <span className="text-sm text-gray-700" style={{ fontFamily: 'var(--font-reg)' }}>
            {totalPassengers} {totalPassengers === 1 ? "Passenger" : "Passengers"}
          </span>
          <span className="text-xs text-gray-500 capitalize" style={{ fontFamily: 'var(--font-light)' }}>{cabinClass}</span>
        </div>
      </button>
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <div className={`transition-transform duration-200 ${showDropdown ? "rotate-180" : ""}`}>
          <ChevronDownIcon />
        </div>
      </div>

      {/* Dropdown Content */}
      {showDropdown && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 p-4">
          {/* Passengers */}
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-gray-900" style={{ fontFamily: 'var(--font-med)' }}>Adults</div>
                <div className="text-sm text-gray-500" style={{ fontFamily: 'var(--font-light)' }}>12+ years</div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => updatePassengerCount("adults", false)}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  style={{ fontFamily: 'var(--font-med)' }}
                >
                  -
                </button>
                <span className="w-8 text-center" style={{ fontFamily: 'var(--font-med)' }}>{passengers.adults}</span>
                <button
                  onClick={() => updatePassengerCount("adults", true)}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  style={{ fontFamily: 'var(--font-med)' }}
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-gray-900" style={{ fontFamily: 'var(--font-med)' }}>Children</div>
                <div className="text-sm text-gray-500" style={{ fontFamily: 'var(--font-light)' }}>2-11 years</div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => updatePassengerCount("children", false)}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  style={{ fontFamily: 'var(--font-med)' }}
                >
                  -
                </button>
                <span className="w-8 text-center" style={{ fontFamily: 'var(--font-med)' }}>{passengers.children}</span>
                <button
                  onClick={() => updatePassengerCount("children", true)}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  style={{ fontFamily: 'var(--font-med)' }}
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-gray-900" style={{ fontFamily: 'var(--font-med)' }}>Infants</div>
                <div className="text-sm text-gray-500" style={{ fontFamily: 'var(--font-light)' }}>Under 2 years</div>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => updatePassengerCount("infants", false)}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  style={{ fontFamily: 'var(--font-med)' }}
                >
                  -
                </button>
                <span className="w-8 text-center" style={{ fontFamily: 'var(--font-med)' }}>{passengers.infants}</span>
                <button
                  onClick={() => updatePassengerCount("infants", true)}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  style={{ fontFamily: 'var(--font-med)' }}
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Class Selection */}
          <div className="border-t border-gray-200 pt-4">
            <div className="text-sm text-gray-900 mb-3" style={{ fontFamily: 'var(--font-med)' }}>Cabin Class</div>
            <div className="grid grid-cols-2 gap-2">
              {["economy", "premium", "business", "first"].map((cls) => (
                <button
                  key={cls}
                  onClick={() => onCabinClassChange(cls)}
                  className={`p-3 rounded-lg text-sm transition-colors ${
                    cabinClass === cls
                      ? "bg-blue-100 text-blue-700 border border-blue-200"
                      : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
                  style={{ fontFamily: 'var(--font-med)' }}
                >
                  {cls === "economy" && "Economy"}
                  {cls === "premium" && "Premium"}
                  {cls === "business" && "Business"}
                  {cls === "first" && "First Class"}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}