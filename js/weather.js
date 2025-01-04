const API_KEY = "5e5f68e90ecea4c095b090155938d2d1";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url).then(response => response.json()).then(data=>{
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        const weatherCondition = data.weather[0].main;
        let weatherIcon = '';

        if (weatherCondition === "Clouds") {
            weatherIcon = '<i class="fa-solid fa-cloud"></i>';
        }
        else if (weatherCondition === "Clear") {
            weatherIcon = '<i class="fa-solid fa-sun"></i>';
        }
        else if (weatherCondition === "Rain") {
            weatherIcon = '<i class="fa-solid fa-cloud-rain"></i>';
        }
        else if (weatherCondition === "Snow") {
            weatherIcon = '<i class="fa-solid fa-snowflake"></i>';
        }
        else if (weatherCondition === "Thunderstorm") {
            weatherIcon = '<i class="fa-solid fa-cloud-bolt"></i>';
        }
        else if (weatherCondition === "Drizzle") {
            weatherIcon = '<i class="fa-solid fa-cloud-showers-heavy"></i>';
        }

        city.innerText = data.name;
        weather.innerHTML = `${weatherIcon} ${Math.round(data.main.temp)}°C`;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);