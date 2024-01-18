import axios from "axios";
const errorMsg = "Something went wrong, please try again.";

export const getCities = async (searchTerm: string) => {
  const options = {
    method: "GET",
    url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${searchTerm}`,
    headers: {
      "X-RapidAPI-Key": "6b9eeb4ebfmsh687977cfc6850f8p186e0ajsnfac9ef4b4120",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };
  try {
    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.response?.data);
      if (error.response?.data) {
        return error.response?.data;
      } else {
        return { message: errorMsg };
      }
    } else {
      console.error(error);
    }
  }
};

export const getWeather = async (lat: string, lon: string) => {
  const options = {
    method: "GET",
    url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=26f2bd9b77e38154a74ae1e626a19863
    `,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.response);
      if (error.response?.data) {
        return error.response?.data;
      } else {
        return { error: errorMsg };
      }
    } else {
      console.error(error);
    }
  }
};
