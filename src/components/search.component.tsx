import React from "react";
import { useState, useEffect } from "react";
import { SearchProps, City } from "../types/types";
import "./search.style.scss";

const Search: React.FC<SearchProps> = ({
  setLoading,
  isLoading,
  onSearch,
  onSelect,
  setCities,
  cities,
}) => {
  const [search, setSearch] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    setSearch(e.target.value);
  };

  const selectCity = (city: City) => {
    onSelect(city.latitude, city.longitude);
    setCities([]);
    setSearch("");
  };
  useEffect(() => {
    // SET DEBOUNCE OF INPUT SEARCH TERM FOR API REQ
    const timer = setTimeout(() => {
      if (search) {
        onSearch(search);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);
  return (
    <>
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Search city"
          value={search}
          onChange={onChange}
          className="user-input"
          autoFocus
        />
        {isLoading ? <span className="loading-spinner"></span> : null}
      </div>
      <div className="sugestion-wrapper">
        {cities.length > 0 && (
          <ul className="suggestions-list">
            {cities.map((city: City) => {
              return (
                <li
                  key={city.id}
                  onClick={() => selectCity(city)}
                  className="suggestion"
                >
                  {city.name}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
};

export default Search;
