const city = document.querySelector('#city');
const btn = document.querySelector('#btn');

btn.addEventListener('click', async function () {
    const cityName = city.value;
    const apiKey = 'b03a2cfad336d11bd9140ffd92074504';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        document.querySelector('#coordinates').innerHTML = `${data.coord.lat}, ${data.coord.lon}`;
        document.querySelector('#temperature').innerHTML = `${data.main.temp}°C`;
        document.querySelector('#feelsLike').innerHTML = `${data.main.feels_like}°C`;
        document.querySelector('#pressure').innerHTML = `${data.main.pressure} hPa`;
        document.querySelector('#humidity').innerHTML = `${data.main.humidity}%`;
        document.querySelector('#windSpeed').innerHTML = `${data.wind.speed} м/с`;
        document.querySelector('#windDirection').innerHTML = `${data.wind.deg}°`;
        document.querySelector('#windGust').innerHTML = data.wind.gust ? `${data.wind.gust} м/с` : 'N/A';
        document.querySelector('#cloudiness').innerHTML = `${data.clouds.all}%`;
        document.querySelector('#rain').innerHTML = data.rain ? `${data.rain['1h']} мм` : 'Нету дождя';

    } catch (error) {
        console.error('Error:', error);
    }
});



