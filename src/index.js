const locationInput = document.getElementById('locationInput');
const locationDisplay = document.getElementById('locationDisplay')
const temperatureDisplay = document.getElementById('temperatureDisplay')
const feelsLikeDisplay = document.getElementById('feelsLikeDisplay')
const conditionsDisplay = document.getElementById('conditionsDisplay')
const conditionsImage = document.getElementById('conditionsImage')
const getWeatherButton = document.getElementById('getWeatherButton')

const API_KEY = '1fc1165584224c2184e181414233010';

async function getWeather() {
    const location = locationInput.value
    const endpoint = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${location}&aqi=no`;

    
    try {
        const response = await fetch(endpoint);
        if(response.ok) {
            const data = await response.json();
            locationDisplay.textContent = data.location.name + ", " + data.location.country
            temperatureDisplay.textContent = "Temperature: " + data.current.temp_f + "°F"
            feelsLikeDisplay.textContent = "Feels like: " + data.current.feelslike_f + "°F"
            conditionsDisplay.textContent = "Conditions: " + data.current.condition.text
            conditionsImage.setAttribute("src", "http:" + data.current.condition.icon)
            conditionsImage.style.display = 'inline-block'
    } else {
        console.error("Error fetching weather data: ", response.statusText)
    }
} catch (error) {
    console.error("There was an error: ", error);
    }
}

getWeatherButton.addEventListener('click', getWeather)

