import Search from "./components/search.component";
import CurrentWeather from "./components/currentWeather.component";
import { useState } from "react";
import { City, CurrentWeatherType } from "./types/types";
import { getCities, getWeather } from "./api/weather.api";
import "./App.scss";

function App() {
  const [cities, setCities] = useState<City[]>([]);
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherType>({});
  const [isLoading, setLoading] = useState(false);
  const onSearch = async (term: string) => {
    let res = await getCities(term);
    setCities(res);
    setLoading(false);
  };
  const onSelect = async (lat: string, lon: string) => {
    let res = await getWeather(lat, lon);
    setCurrentWeather(res);
    setLoading(false);
  };

  return (
    <div className="container">
      <Search
        onSearch={onSearch}
        cities={cities}
        onSelect={onSelect}
        setLoading={setLoading}
        isLoading={isLoading}
        setCities={setCities}
      />
      <CurrentWeather currentWeather={currentWeather} />
    </div>
  );
}

export default App;
