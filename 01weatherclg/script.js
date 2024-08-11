const apiKey = ""; //put the api key here
const city = "manila";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

async function fetchWeather() {
  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
fetchWeather();
