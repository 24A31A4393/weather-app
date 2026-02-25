function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "79a9dad70d2e29bdb675ab35ab5d9e9e";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.cod === 200) {
            document.getElementById("result").innerHTML =
                `<p>City: ${data.name}</p>
                 <p>Temperature: ${data.main.temp} °C</p>
                 <p>Weather: ${data.weather[0].description}</p>`;
        } else {
            document.getElementById("result").innerHTML = "City not found!";
        }
    })
    .catch(error => {
        document.getElementById("result").innerHTML = "Error fetching data";
    });
}
