import FlightPath from "./FlightPath";
import type { FlightItinerary } from "../../lib/types";

interface FlightCardProps {
  flight: FlightItinerary;
  isOneway?: boolean;
}

export default function FlightCard({
  flight,
  isOneway = false,
}: FlightCardProps) {
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const getStopsText = (stopCount: number) => {
    if (stopCount === 0) return "Non-stop";
    if (stopCount === 1) return "1 stop";
    return `${stopCount} stops`;
  };

  const outboundLeg = flight.legs[0];
  const returnLeg = flight.legs[1];
  const mainCarrier = outboundLeg.carriers.marketing[0];

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-3 hover:shadow-lg transition-shadow duration-200">
      <div className="flex items-start gap-3">
        {/* Left: Flight Details with individual logos */}
        <div className="flex-1">
          {/* Outbound Flight */}
          <div className="flex items-center gap-2 mb-2">
            {/* Outbound Logo */}
            <div className="flex flex-col items-center min-w-[40px]">
              {mainCarrier.logoUrl && (
                <img
                  src={mainCarrier.logoUrl}
                  alt={mainCarrier.name}
                  className="w-6 h-6 object-contain mb-1"
                />
              )}
              <div
                className="text-xs text-gray-600 text-center"
                style={{ fontFamily: "var(--font-light)" }}
              >
                {mainCarrier.name.substring(0, 2)} {outboundLeg.segments[0].flightNumber}
              </div>
            </div>

            {/* Flight Path */}
            <div className="flex-1">
              <FlightPath
                departureTime={formatTime(outboundLeg.departure)}
                arrivalTime={formatTime(outboundLeg.arrival)}
                departureCode={outboundLeg.origin.displayCode}
                arrivalCode={outboundLeg.destination.displayCode}
                duration={formatDuration(outboundLeg.durationInMinutes)}
                stops={getStopsText(outboundLeg.stopCount)}
              />
            </div>
          </div>

          {/* Return Flight */}
          {returnLeg && !isOneway && (
            <>
              <div className="border-t border-gray-200 my-3"></div>
              <div className="flex items-center gap-2">
                {/* Return Logo */}
                <div className="flex flex-col items-center min-w-[40px]">
                  {returnLeg.carriers.marketing[0].logoUrl && (
                    <img
                      src={returnLeg.carriers.marketing[0].logoUrl}
                      alt={returnLeg.carriers.marketing[0].name}
                      className="w-6 h-6 object-contain mb-1"
                    />
                  )}
                  <div
                    className="text-xs text-gray-600 text-center"
                    style={{ fontFamily: "var(--font-light)" }}
                  >
                    {returnLeg.carriers.marketing[0].name.substring(0, 2)}{" "}
                    {returnLeg.segments[0].flightNumber}
                  </div>
                </div>

                {/* Flight Path */}
                <div className="flex-1">
                  <FlightPath
                    departureTime={formatTime(returnLeg.departure)}
                    arrivalTime={formatTime(returnLeg.arrival)}
                    departureCode={returnLeg.origin.displayCode}
                    arrivalCode={returnLeg.destination.displayCode}
                    duration={formatDuration(returnLeg.durationInMinutes)}
                    stops={getStopsText(returnLeg.stopCount)}
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Right: Price and Button */}
        <div className="flex flex-col items-end justify-center gap-1 min-w-[100px]">
          {/* Price */}
          <div
            className="text-lg font-bold text-slate-700"
            style={{ fontFamily: "var(--font-med)" }}
          >
            {flight.price.formatted}
          </div>

          {/* Select Button */}
          <button
            className="bg-slate-600 hover:bg-slate-700 text-white px-3 py-1.5 rounded-md text-xs transition-colors duration-200 mt-1"
            style={{ fontFamily: "var(--font-med)" }}
          >
            Select Flight
          </button>
        </div>
      </div>
    </div>
  );
}
