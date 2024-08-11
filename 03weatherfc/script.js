function getWeatherForecast() {
  const apiKey = ""; //put the api key here
  const cityInput = document.getElementById("cityInput");
  const cityName = cityInput.value;
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`;

  if (cityName === "") {
    alert("Please enter a city name");
    return;
  }

  axios
    .get(url)
    .then((response) => {
      const forecastData = response.data;
      displayWeatherForecast(forecastData);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
}

function displayWeatherForecast(data) {
  const forecastContainer = document.getElementById("forecastContainer");
  forecastContainer.innerHTML = "";

  for (let i = 0; i < data.list.length; i += 8) {
    const weatherData = data.list[i];
    const date = new Date(weatherData.dt_text);
    const day = date.toLocaleDateString(undefined, {
      weekday: "long",
    });
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <p>Day: ${day}</p>
    <p>Temperature: ${weatherData.main.temp} °C</p>
    <p>Humidity: ${weatherData.main.humidity}%</p>
    <p>Atmospheric Pressure: ${weatherData.main.pressure} hPa</p>
    <p>Weather Description: ${weatherData.weather[0].description}</p>
    `;
    forecastContainer.appendChild(card);
  }
}

//24 hours in a day --> every 3 hours
// 24 / 3 = 8 --> increment of 8 for every looping
//Day
//temp
//humidity
//pressure
//description
