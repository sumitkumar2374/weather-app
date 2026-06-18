async function getWeather() {
    const city = document.getElementById("city").value.trim();
    const result = document.getElementById("result");

    if (!city) {
        result.innerHTML = "<h3>Please enter a city name!</h3>";
        return;
    }

    const apiKey = "ac2b2a5b5dbb2242ffb3fbffd6cf6ff1";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    try {
        const response = await fetch(url);

        const data = await response.json();


        if (data.cod != 200) {
            result.style.display = "block";
            result.innerHTML = "<h2>City Not Found!</h2>";
            return;
        }

        const cityName = data.name;
        const temp = data.main.temp;
        const humidity = data.main.humidity;
        const wind = data.wind.speed;
        const weather = data.weather[0].description;

        // let emoji = "🌍";

        // if (weather === "Clear") {
        //     emoji = "☀️";
        // }
        // else if (weather === "Clouds") {
        //     emoji = "☁️";
        // }
        // else if (weather === "Rain") {
        //     emoji = "🌧️";
        // }
        // else if (weather === "Mist") {
        //     emoji = "🌫️";
        // }
        // else if (weather === "Thunderstorm") {
        //     emoji = "⛈️";
        // }
        // else if (weather === "Snow") {
        //     emoji = "❄️";
        // }

        result.style.display = "block";

        document.getElementById("result").innerHTML = `
            <h2>${cityName}</h2>

            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather-icon">

            <h3>${weather}</h3>
            <p>🌡️ Temperature: ${temp}°C</p>
            <p>💧 Humidity: ${humidity}%</p>
            <p>💨 Wind: ${wind} m/s</p>
        `;

    } catch (error) {
        result.innerHTML = "<h2>Something went wrong! Try again.</h2>";
        console.log(error);
    }

}