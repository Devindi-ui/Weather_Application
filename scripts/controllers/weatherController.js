class WeatherController {
    constructor (weatherModel, weatherView,storageModel){
        this.weatherModel = weatherModel;
        this.weatherView = weatherView;
        this.storageModel = storageModel;
        this.currentUnit = 'metric';
        this.currentLocation = null;
    }

    init(){
        this.handleSearch('Colombo');
    }

    handleSearch(location){
        this.currentLocation = location;

        //get current weather
        this.weatherModel.getCurrentWeather(location, this.currentUnit)
        .then(data => {
            this.weatherView.displayCurrentWeather(data);

            const user = firebase.auth().currentUser;
            if(user){
                this.storageModel.saveUserLocation(user.uid, location)
                .catch(error => console.error('Error saving location: ', error));
            }
        })
        .catch(error => {
            this.weatherView.showError(error.message);
            console.log(error.message);
        });

        //get forecast
        this.weatherModel.getForecast(location, this.currentUnit)
        .then(data => {
            this.weatherView.displayForecast(data);
        })
        .catch(error => {
            this.weatherView.showError(error.message);
        })
    }
}