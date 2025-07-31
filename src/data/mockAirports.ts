import type { AirportSearchResult } from "../lib/types";

export const mockAirports: Record<string, AirportSearchResult[]> = {
  "new york": [
    {
      presentation: {
        title: "New York",
        suggestionTitle: "New York (Any)",
        subtitle: "United States"
      },
      navigation: {
        entityId: "27537542",
        entityType: "CITY",
        localizedName: "New York",
        relevantFlightParams: {
          skyId: "NYCA",
          entityId: "27537542",
          flightPlaceType: "CITY",
          localizedName: "New York"
        },
        relevantHotelParams: {
          entityId: "27537542",
          entityType: "CITY",
          localizedName: "New York"
        }
      }
    },
    {
      presentation: {
        title: "New York John F. Kennedy",
        suggestionTitle: "New York John F. Kennedy (JFK)",
        subtitle: "United States"
      },
      navigation: {
        entityId: "95565058",
        entityType: "AIRPORT",
        localizedName: "New York John F. Kennedy",
        relevantFlightParams: {
          skyId: "JFK",
          entityId: "95565058",
          flightPlaceType: "AIRPORT",
          localizedName: "New York John F. Kennedy"
        },
        relevantHotelParams: {
          entityId: "27537542",
          entityType: "CITY",
          localizedName: "New York"
        }
      }
    },
    {
      presentation: {
        title: "New York LaGuardia",
        suggestionTitle: "New York LaGuardia (LGA)",
        subtitle: "United States"
      },
      navigation: {
        entityId: "95565057",
        entityType: "AIRPORT",
        localizedName: "New York LaGuardia",
        relevantFlightParams: {
          skyId: "LGA",
          entityId: "95565057",
          flightPlaceType: "AIRPORT",
          localizedName: "New York LaGuardia"
        },
        relevantHotelParams: {
          entityId: "27537542",
          entityType: "CITY",
          localizedName: "New York"
        }
      }
    },
    {
      presentation: {
        title: "New York Newark",
        suggestionTitle: "New York Newark (EWR)",
        subtitle: "United States"
      },
      navigation: {
        entityId: "95565059",
        entityType: "AIRPORT",
        localizedName: "New York Newark",
        relevantFlightParams: {
          skyId: "EWR",
          entityId: "95565059",
          flightPlaceType: "AIRPORT",
          localizedName: "New York Newark"
        },
        relevantHotelParams: {
          entityId: "27537542",
          entityType: "CITY",
          localizedName: "New York"
        }
      }
    }
  ],
  "london": [
    {
      presentation: {
        title: "London",
        suggestionTitle: "London (Any)",
        subtitle: "United Kingdom"
      },
      navigation: {
        entityId: "27544008",
        entityType: "CITY",
        localizedName: "London",
        relevantFlightParams: {
          skyId: "LOND",
          entityId: "27544008",
          flightPlaceType: "CITY",
          localizedName: "London"
        },
        relevantHotelParams: {
          entityId: "27544008",
          entityType: "CITY",
          localizedName: "London"
        }
      }
    },
    {
      presentation: {
        title: "London Heathrow",
        suggestionTitle: "London Heathrow (LHR)",
        subtitle: "United Kingdom"
      },
      navigation: {
        entityId: "95565050",
        entityType: "AIRPORT",
        localizedName: "London Heathrow",
        relevantFlightParams: {
          skyId: "LHR",
          entityId: "95565050",
          flightPlaceType: "AIRPORT",
          localizedName: "London Heathrow"
        },
        relevantHotelParams: {
          entityId: "27544008",
          entityType: "CITY",
          localizedName: "London"
        }
      }
    },
    {
      presentation: {
        title: "London Gatwick",
        suggestionTitle: "London Gatwick (LGW)",
        subtitle: "United Kingdom"
      },
      navigation: {
        entityId: "95565051",
        entityType: "AIRPORT",
        localizedName: "London Gatwick",
        relevantFlightParams: {
          skyId: "LGW",
          entityId: "95565051",
          flightPlaceType: "AIRPORT",
          localizedName: "London Gatwick"
        },
        relevantHotelParams: {
          entityId: "27544008",
          entityType: "CITY",
          localizedName: "London"
        }
      }
    }
  ],
  "paris": [
    {
      presentation: {
        title: "Paris",
        suggestionTitle: "Paris (Any)",
        subtitle: "France"
      },
      navigation: {
        entityId: "27539793",
        entityType: "CITY",
        localizedName: "Paris",
        relevantFlightParams: {
          skyId: "PARI",
          entityId: "27539793",
          flightPlaceType: "CITY",
          localizedName: "Paris"
        },
        relevantHotelParams: {
          entityId: "27539793",
          entityType: "CITY",
          localizedName: "Paris"
        }
      }
    },
    {
      presentation: {
        title: "Paris Charles de Gaulle",
        suggestionTitle: "Paris Charles de Gaulle (CDG)",
        subtitle: "France"
      },
      navigation: {
        entityId: "95565040",
        entityType: "AIRPORT",
        localizedName: "Paris Charles de Gaulle",
        relevantFlightParams: {
          skyId: "CDG",
          entityId: "95565040",
          flightPlaceType: "AIRPORT",
          localizedName: "Paris Charles de Gaulle"
        },
        relevantHotelParams: {
          entityId: "27539793",
          entityType: "CITY",
          localizedName: "Paris"
        }
      }
    }
  ],
  "tokyo": [
    {
      presentation: {
        title: "Tokyo",
        suggestionTitle: "Tokyo (Any)",
        subtitle: "Japan"
      },
      navigation: {
        entityId: "27536542",
        entityType: "CITY",
        localizedName: "Tokyo",
        relevantFlightParams: {
          skyId: "TYOA",
          entityId: "27536542",
          flightPlaceType: "CITY",
          localizedName: "Tokyo"
        },
        relevantHotelParams: {
          entityId: "27536542",
          entityType: "CITY",
          localizedName: "Tokyo"
        }
      }
    },
    {
      presentation: {
        title: "Tokyo Narita",
        suggestionTitle: "Tokyo Narita (NRT)",
        subtitle: "Japan"
      },
      navigation: {
        entityId: "95565048",
        entityType: "AIRPORT",
        localizedName: "Tokyo Narita",
        relevantFlightParams: {
          skyId: "NRT",
          entityId: "95565048",
          flightPlaceType: "AIRPORT",
          localizedName: "Tokyo Narita"
        },
        relevantHotelParams: {
          entityId: "27536542",
          entityType: "CITY",
          localizedName: "Tokyo"
        }
      }
    }
  ],
  "los angeles": [
    {
      presentation: {
        title: "Los Angeles",
        suggestionTitle: "Los Angeles (Any)",
        subtitle: "United States"
      },
      navigation: {
        entityId: "27533771",
        entityType: "CITY",
        localizedName: "Los Angeles",
        relevantFlightParams: {
          skyId: "LAXA",
          entityId: "27533771",
          flightPlaceType: "CITY",
          localizedName: "Los Angeles"
        },
        relevantHotelParams: {
          entityId: "27533771",
          entityType: "CITY",
          localizedName: "Los Angeles"
        }
      }
    },
    {
      presentation: {
        title: "Los Angeles International",
        suggestionTitle: "Los Angeles International (LAX)",
        subtitle: "United States"
      },
      navigation: {
        entityId: "95565049",
        entityType: "AIRPORT",
        localizedName: "Los Angeles International",
        relevantFlightParams: {
          skyId: "LAX",
          entityId: "95565049",
          flightPlaceType: "AIRPORT",
          localizedName: "Los Angeles International"
        },
        relevantHotelParams: {
          entityId: "27533771",
          entityType: "CITY",
          localizedName: "Los Angeles"
        }
      }
    }
  ],
  "dubai": [
    {
      presentation: {
        title: "Dubai",
        suggestionTitle: "Dubai (Any)",
        subtitle: "United Arab Emirates"
      },
      navigation: {
        entityId: "27536739",
        entityType: "CITY",
        localizedName: "Dubai",
        relevantFlightParams: {
          skyId: "DXBA",
          entityId: "27536739",
          flightPlaceType: "CITY",
          localizedName: "Dubai"
        },
        relevantHotelParams: {
          entityId: "27536739",
          entityType: "CITY",
          localizedName: "Dubai"
        }
      }
    },
    {
      presentation: {
        title: "Dubai International",
        suggestionTitle: "Dubai International (DXB)",
        subtitle: "United Arab Emirates"
      },
      navigation: {
        entityId: "95565047",
        entityType: "AIRPORT",
        localizedName: "Dubai International",
        relevantFlightParams: {
          skyId: "DXB",
          entityId: "95565047",
          flightPlaceType: "AIRPORT",
          localizedName: "Dubai International"
        },
        relevantHotelParams: {
          entityId: "27536739",
          entityType: "CITY",
          localizedName: "Dubai"
        }
      }
    }
  ]
};

export const searchMockAirports = (query: string): AirportSearchResult[] => {
  if (!query.trim()) return [];
  
  const lowerQuery = query.toLowerCase().trim();
  
  // Exact match first
  if (mockAirports[lowerQuery]) {
    return mockAirports[lowerQuery];
  }
  
  // Partial match - search through all airports
  const results: AirportSearchResult[] = [];
  
  Object.entries(mockAirports).forEach(([key, airports]) => {
    if (key.includes(lowerQuery) || lowerQuery.includes(key)) {
      results.push(...airports);
    } else {
      // Search within airport names
      airports.forEach(airport => {
        if (
          airport.presentation.title.toLowerCase().includes(lowerQuery) ||
          airport.presentation.suggestionTitle.toLowerCase().includes(lowerQuery) ||
          airport.navigation.relevantFlightParams.skyId.toLowerCase().includes(lowerQuery)
        ) {
          results.push(airport);
        }
      });
    }
  });
  
  // Remove duplicates based on entityId
  const uniqueResults = results.filter((airport, index, arr) => 
    arr.findIndex(a => a.navigation.entityId === airport.navigation.entityId) === index
  );
  
  return uniqueResults.slice(0, 8); // Limit to 8 results
};