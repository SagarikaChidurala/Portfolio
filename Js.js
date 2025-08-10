// API endpoint and API key
const apiEndpoint = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = '02d51f72c96c7be11fb8464ec70384a6'; // Replace with your OpenWeatherMap API key

// Fetch weather data
async function getWeatherData(city) {
  try {
    const response = await fetch(`${apiEndpoint}?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

// Display weather data
function displayWeatherData(weatherData) {
  const cityElement = document.getElementById('city');
  const temperatureElement = document.getElementById('temperature');
  const descriptionElement = document.getElementById('description');

  cityElement.textContent = weatherData.name;
  temperatureElement.textContent = `Temperature: ${weatherData.main.temp}°C`;
  descriptionElement.textContent = `Weather: ${weatherData.weather[0].description}`;
}

// Search button click event
const searchButton = document.getElementById('search-button');
const cityInput = document.getElementById('city-input');

searchButton.addEventListener('click', async () => {
  const city = cityInput.value.trim();
  if (city) {
    const weatherData = await getWeatherData(city);
    if (weatherData && weatherData.main) {
      displayWeatherData(weatherData);
    } else {
      alert('City not found!');
    }
  }
});
