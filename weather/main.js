const api = {
    key:"f87a7475b188192afdcc12e2d517519d",
    base:"http://api.openweathermap.org/data/2.5/"

}


const weatherImg = {
    Clouds: "cloudy.png",
    Rain: "rain.png",
    Clear: "clear.png"
}



const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery); //change func name


function setQuery(e) {
    if (e.keyCode == 13){
        getResults(searchbox.value);
        searchbox.value = "";
    }
}



function getResults(search){
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}

function displayResults(weather){
    console.log(weather)
    document.querySelector('.place').innerHTML=`${weather.name}, ${weather.sys.country}`
    document.querySelector('.info').classList.add('card')
    const temp = Math.floor(weather.main.temp)
    document.querySelector('.temp').innerHTML=`${temp}°C`
    const icon = weather.weather[0].main
    console.log(icon)
    document.querySelector('.icon').src = weatherImg[icon]
    document.querySelector('.icon').classList.add('iconh')
    document.querySelector('.detail').innerHTML=`
    <p> Humidity: ${weather.main.humidity}%<p>
    <br>
    <p>Feels Like: ${weather.main.feels_like}°C</P`

}


//https://developer.accuweather.com/weather-icons