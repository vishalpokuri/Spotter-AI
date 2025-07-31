interface FlightPathProps {
  departureTime: string;
  arrivalTime: string;
  departureCode: string;
  arrivalCode: string;
  duration: string;
  stops?: string;
  departureCity?: string;
  arrivalCity?: string;
}

export default function FlightPath({
  departureTime,
  arrivalTime,
  departureCode,
  arrivalCode,
  duration,
  stops,
}: FlightPathProps) {
  return (
    <div className="flex items-center justify-between w-full">
      {/* Departure Info */}
      <div className="text-right w-24">
        <div
          className="text-sm font-bold text-gray-900"
          style={{ fontFamily: "var(--font-med)" }}
        >
          {departureTime}
        </div>
        <div
          className="text-xs font-light text-gray-700"
          style={{ fontFamily: "var(--font-med)" }}
        >
          {departureCode}
        </div>
      </div>

      {/* Flight Path */}
      <div className="flex-1 mx-4 relative">
        <div className="flex items-center justify-center relative">
          {/* Flight duration */}
          <div
            className="absolute -top-6  text-gray-500 bg-white px-1 "
            style={{ fontFamily: "var(--font-light)", fontSize: "11px" }}
          >
            {duration}
          </div>

          {/* Line */}
          <div className="w-full h-px bg-gray-300 relative">
            {/* Airplane icon */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-1">
              <svg
                className="w-4 h-4 text-slate-600 transform rotate-90"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
              </svg>
            </div>

            {/* Stops info below the line */}
            {stops && (
              <div
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-gray-500 bg-white px-1"
                style={{ fontFamily: "var(--font-light)", fontSize: "11px" }}
              >
                {stops}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Arrival Info */}
      <div className="text-left w-24">
        <div
          className="text-sm font-bold text-gray-900"
          style={{ fontFamily: "var(--font-med)" }}
        >
          {arrivalTime}
        </div>
        <div
          className="text-xs font-light text-gray-700"
          style={{ fontFamily: "var(--font-med)" }}
        >
          {arrivalCode}
        </div>
      </div>
    </div>
  );
}
