interface TripTypeSelectorProps {
  tripType: string;
  onTripTypeChange: (type: string) => void;
}

export default function TripTypeSelector({ tripType, onTripTypeChange }: TripTypeSelectorProps) {
  return (
    <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1 w-fit">
      <button
        onClick={() => onTripTypeChange("roundtrip")}
        className={`px-3 py-2 sm:px-2 sm:py-1 rounded-md transition-all duration-200 text-sm sm:text-xs ${
          tripType === "roundtrip"
            ? "bg-blue-600 text-white shadow-sm"
            : "text-gray-600 hover:bg-gray-200"
        }`}
        style={{ fontFamily: 'var(--font-med)' }}
      >
        Round Trip
      </button>
      <button
        onClick={() => onTripTypeChange("oneway")}
        className={`px-3 py-2 sm:px-2 sm:py-1 rounded-md transition-all duration-200 text-sm sm:text-xs ${
          tripType === "oneway"
            ? "bg-blue-600 text-white shadow-sm"
            : "text-gray-600 hover:bg-gray-200"
        }`}
        style={{ fontFamily: 'var(--font-med)' }}
      >
        One Way
      </button>
    </div>
  );
}