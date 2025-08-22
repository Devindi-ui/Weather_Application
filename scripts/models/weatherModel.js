class WeatherModal {
  constructor() {
    this.apiKey = "c6f09946f8451cd29bb94ff1b159a60b";
    this.baseUrl = "https://api.openweathermap.org/data/2.5";
  }

  getCurrentWeather(location, units = "metric") {
    let url = "";
    if (/^-?\d+\.\d+,-?\d+\.\d+$/.test(location)) {
      url = `${this.baseUrl}/weather?lat=${location.split(","[0])}&lon=${location.split(",")[1]}&units=${units}&appid=${this.apiKey}`;
    } else {
      url = `${this.baseUrl}/weather?q=${location}&units=${units}&appid=${this.apiKey}`;
    }

    return fetch(url).then((response) => {
      if (!response.ok) {
        throw new Error("Location Not Found");
      }
      return response.json();
    });
  }

  getForecast(location, units = 'metric'){
    let url = ''

    if (/^-?\d+\.\d+,-?\d+\.\d+$/.test(location)) {
      url = `${this.baseUrl}/forecast?lat=${location.split(","[0])}&lon=${location.split(",")[1]}&units=${units}&appid=${this.apiKey}`;
    } else {
      url = `${this.baseUrl}/forecast?q=${location}&units=${units}&appid=${this.apiKey}`;
    }

    return fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error("Location Not Found");
        }
        return response.json();
    })
  }
}
