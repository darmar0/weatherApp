export interface City {
  id: number;
  name: string;
  country: string;
  latitude: string;
  longitude: string;
  error?: string;
}
export interface Weather {
  description: string;
  icon: string;
}
export interface CurrentWeatherType {
  main?: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  wind?: { speed: number };
  [key: string]: any;
  name?: string;
}
export interface WeatherProps {
  currentWeather: CurrentWeatherType;
}

export interface SearchProps {
  onSearch: (e: string) => void;
  onSelect: (at: string, lon: string) => void;
  isLoading: boolean;
  setLoading: (arg: boolean) => void;
  setCities: (arg: []) => void;
  cities: City[];
}
export interface Error {
  message: string;
}
