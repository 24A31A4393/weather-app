const apiKey = "79a9dad70d2e29bdb675ab35ab5d9e9e";

document.getElementById("searchBtn").addEventListener("click", getWeather);
document.getElementById("city").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        getWeather();
    }
});

function getWeather() {
    const city = document.getElementById("city").value;
    const resultDiv = document.getElementById("result");

    if (city === "") {
        resultDiv.innerHTML = "Please enter a city name!";
        return;
    }

    resultDiv.innerHTML = "Loading... ⏳";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.cod === 200) {
            const icon = data.weather[0].icon;
            resultDiv.innerHTML =
                `<h3>${data.name}</h3>
                 <img src="https://openweathermap.org/img/wn/${icon}@2x.png">
                 <p>🌡 ${data.main.temp} °C</p>
                 <p>${data.weather[0].description}</p>`;
        } else {
            resultDiv.innerHTML = "City not found ❌";
        }
    })
    .catch(() => {
        resultDiv.innerHTML = "Error fetching data!";
    });
}
