const API_KEY = "5e5f68e90ecea4c095b090155938d2d1";

function onGeoOk(position){
    // console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    // console.log("You live in ",lat, lng)
    // console.log(url);
    fetch(url).then(response => response.json()).then(data=>{
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${Math.round(data.main.temp)}°C`;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);