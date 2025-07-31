import { useState } from "react";
import { ChevronDownIcon } from "./Icons";

interface CabinClassSelectorProps {
  cabinClass: string;
  onCabinClassChange: (cabinClass: string) => void;
}

export default function CabinClassSelector({
  cabinClass,
  onCabinClassChange,
}: CabinClassSelectorProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  const getClassDisplayName = (cls: string) => {
    switch (cls) {
      case "economy":
        return "Economy";
      case "premium":
        return "Premium";
      case "business":
        return "Business";
      case "first":
        return "First Class";
      default:
        return cls;
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="w-full min-w-[120px] pl-3 pr-8 py-2 sm:py-1 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 text-left focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 hover:bg-gray-100"
      >
        <span
          className="text-xs text-gray-700 capitalize"
          style={{ fontFamily: "var(--font-reg)" }}
        >
          {getClassDisplayName(cabinClass)}
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
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 p-2">
          <div className="space-y-1">
            {["economy", "premium", "business", "first"].map((cls) => (
              <button
                key={cls}
                onClick={() => {
                  onCabinClassChange(cls);
                  setShowDropdown(false);
                }}
                className={`w-full p-2 rounded-md text-xs text-left transition-colors ${
                  cabinClass === cls
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                style={{ fontFamily: "var(--font-med)" }}
              >
                {getClassDisplayName(cls)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
