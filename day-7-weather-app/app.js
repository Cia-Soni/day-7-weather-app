const apiKey = "e9704c53b1fe7b76805476c2b87a6af3"; // Replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const weatherResult = document.getElementById("weatherResult");
  const errorMsg = document.getElementById("errorMsg");

  // Reset previous results
  weatherResult.innerHTML = "";
  errorMsg.innerHTML = "";

  if (!city) {
    errorMsg.textContent = "Please enter a city name.";
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    const { name } = data;
    const { temp, humidity } = data.main;
    const { description, icon } = data.weather[0];

    weatherResult.innerHTML = `
      <h3>Weather in ${name}</h3>
      <p>Temperature: ${temp}°C</p>
      <p>Humidity: ${humidity}%</p>
      <p>Conditions: ${description}</p>
      <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}">
    `;
  } catch (error) {
    errorMsg.textContent = error.message;
  }
}
