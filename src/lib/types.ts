export interface AirportSearchResponse {
  status: boolean;
  timestamp: number;
  data: AirportSearchResult[];
}

export interface AirportSearchResult {
  presentation: AirportPresentation;
  navigation: AirportNavigation;
}

export interface AirportPresentation {
  title: string;
  suggestionTitle: string;
  subtitle: string;
}

export interface AirportNavigation {
  entityId: string;
  entityType: 'CITY' | 'AIRPORT';
  localizedName: string;
  relevantFlightParams: RelevantFlightParams;
  relevantHotelParams: RelevantHotelParams;
}

export interface RelevantFlightParams {
  skyId: string;
  entityId: string;
  flightPlaceType: 'CITY' | 'AIRPORT';
  localizedName: string;
}

export interface RelevantHotelParams {
  entityId: string;
  entityType: 'CITY' | 'AIRPORT';
  localizedName: string;
}

// Flight Search Interfaces
export interface FlightSearchResponse {
  status: boolean;
  timestamp: number;
  sessionId: string;
  data: FlightSearchData;
}

export interface FlightSearchData {
  context: FlightContext;
  itineraries: FlightItinerary[];
  messages: unknown[];
  filterStats: FilterStats;
}

export interface FlightContext {
  status: string;
  totalResults: number;
}

export interface FlightItinerary {
  id: string;
  price: FlightPrice;
  legs: FlightLeg[];
  isSelfTransfer: boolean;
  isProtectedSelfTransfer: boolean;
  farePolicy: FarePolicy;
  eco?: EcoInfo;
  tags: string[];
  isMashUp: boolean;
  hasFlexibleOptions: boolean;
  score: number;
}

export interface FlightPrice {
  raw: number;
  formatted: string;
}

export interface FlightLeg {
  id: string;
  origin: FlightLocation;
  destination: FlightLocation;
  durationInMinutes: number;
  stopCount: number;
  isSmallestStops: boolean;
  departure: string;
  arrival: string;
  timeDeltaInDays: number;
  carriers: FlightCarriers;
  segments: FlightSegment[];
}

export interface FlightLocation {
  id: string;
  name: string;
  displayCode: string;
  city: string;
  isHighlighted: boolean;
}

export interface FlightCarriers {
  marketing: MarketingCarrier[];
  operationType: string;
}

export interface MarketingCarrier {
  id: number;
  logoUrl: string;
  name: string;
}

export interface FlightSegment {
  id: string;
  origin: FlightPlace;
  destination: FlightPlace;
  departure: string;
  arrival: string;
  durationInMinutes: number;
  flightNumber: string;
  marketingCarrier: CarrierInfo;
  operatingCarrier: CarrierInfo;
}

export interface FlightPlace {
  flightPlaceId: string;
  displayCode: string;
  parent: FlightPlaceParent;
  name: string;
  type: string;
}

export interface FlightPlaceParent {
  flightPlaceId: string;
  displayCode: string;
  name: string;
  type: string;
}

export interface CarrierInfo {
  id: number;
  name: string;
  alternateId: string;
  allianceId: number;
}

export interface FarePolicy {
  isChangeAllowed: boolean;
  isPartiallyChangeable: boolean;
  isCancellationAllowed: boolean;
  isPartiallyRefundable: boolean;
}

export interface EcoInfo {
  ecoContenderDelta: number;
}

export interface FilterStats {
  duration: DurationFilter;
  airports: AirportFilter[];
  carriers: CarrierFilter[];
  stopPrices: StopPrices;
}

export interface DurationFilter {
  min: number;
  max: number;
}

export interface AirportFilter {
  city: string;
  airports: AirportInfo[];
}

export interface AirportInfo {
  id: string;
  name: string;
}

export interface CarrierFilter {
  id: number;
  logoUrl: string;
  name: string;
}

export interface StopPrices {
  direct: StopPrice;
  one: StopPrice;
  twoOrMore: StopPrice;
}

export interface StopPrice {
  isPresent: boolean;
  formattedPrice?: string;
}