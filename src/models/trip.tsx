export interface Trip {
    _id: string
    userId: string
    data: Data
    createdAt: string
    updatedAt: string
    __v: number
  }
  
  export interface Data {
    queryParameters: QueryParameters
    planName: string
    budgetEstimation: BudgetEstimation
    accommodationOptions: AccommodationOption[]
    aiRecommendations: AiRecommendations
    itinerary: Itinerary[]
    weatherForecast: WeatherForecast
  }
  
  export interface QueryParameters {
    destination: string
    startDate: string
    endDate: string
    budget: string
    accommodationType: string
    travelType: string
    preferredActivities: string[]
    additionalRequests: any[]
  }
  
  export interface BudgetEstimation {
    currency: string
    accommodation: Accommodation
    travel: Travel
    activities: Activities
    food: Food
    miscellaneous: Miscellaneous
    totalEstimatedCost: number
  }
  
  export interface Accommodation {
    estimatedCost: number
    description: string
  }
  
  export interface Travel {
    estimatedCost: number
    description: string
  }
  
  export interface Activities {
    estimatedCost: number
    description: string
  }
  
  export interface Food {
    estimatedCost: number
    description: string
  }
  
  export interface Miscellaneous {
    estimatedCost: number
    description: string
  }
  
  export interface AccommodationOption {
    hotelName: string
    address: string
    pricePerNight: number
    imageURL: string
    geoCoordinates: GeoCoordinates
    rating: number
    description: string
    aiRecommendation: string
  }
  
  export interface GeoCoordinates {
    latitude: number
    longitude: number
  }
  
  export interface AiRecommendations {
    attractions: string[]
    restaurants: string[]
    transport: string[]
  }
  
  export interface Itinerary {
    day: number
    date: string
    schedule: Schedule[]
  }
  
  export interface Schedule {
    time: string
    locationName: string
    description: string
    imageURL: string
    geoCoordinates: GeoCoordinates2
    ticketPricing?: TicketPricing
    estimatedTravelTime?: string
    aiRecommendation: string
  }
  
  export interface GeoCoordinates2 {
    latitude: number
    longitude: number
  }
  
  export interface TicketPricing {
    adult: number
    child: number
    currency: string
  }
  
  export interface WeatherForecast {
    date: string
    temperature: Temperature
    condition: string
    windSpeed: number
    windUnit: string
    aiRecommendation: string
  }
  
  export interface Temperature {
    high: number
    low: number
    unit: string
  }
  