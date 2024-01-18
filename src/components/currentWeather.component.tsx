import { WeatherProps } from "../types/types";
import "./currentWeather.style.scss";

const CurrentWeather: React.FC<WeatherProps> = ({ currentWeather }) => {
  return (
    <>
      {currentWeather.main ? (
        <div className="currentWeather-wrapper">
          <div className="top">
            <span>
              <p className="city">{currentWeather.name}</p>
              <p className="weather-desc">
                {currentWeather.weather[0].description}
              </p>
            </span>

            <img
              alt="weather"
              className="weather-icon"
              src={`icons/${currentWeather.weather[0].icon}.png`}
            ></img>
          </div>
          <div className="bottom">
            <p className="temperature">
              {Math.round(currentWeather.main.temp)}°C
            </p>
            <div className="details">
              <div className="paramater-row">
                <span className="paramater-label top">Details</span>
              </div>
              <div className="paramater-row">
                <span className="paramater-label">Feels like</span>
                <span className="paramater-value">
                  {Math.round(currentWeather.main.feels_like)}°C
                </span>
              </div>
              <div className="paramater-row">
                <span className="paramater-label">Wind</span>
                <span className="paramater-value">
                  {currentWeather?.wind?.speed}m/s
                </span>
              </div>
              <div className="paramater-row">
                <span className="paramater-label">Humidity</span>
                <span className="paramater-value">
                  {currentWeather.main.humidity}%
                </span>
              </div>
              <div className="paramater-row">
                <span className="paramater-label">Pressure</span>
                <span className="paramater-value">
                  {currentWeather.main.pressure}hPa
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h3 className="error-msg">{currentWeather.error}</h3>
      )}
    </>
  );
};

export default CurrentWeather;
