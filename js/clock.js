const day = document.querySelector("h2#date");
const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth();
    const dateMonth = date.getDate();
    // const day = date.getDay();
    day.innerText = `${year}.${month}.${dateMonth}`;

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);