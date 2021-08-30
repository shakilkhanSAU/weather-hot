const weatherResult = document.getElementById('weather-result');
const errorMessage = document.getElementById('text-not-found');

const loadWeatherData = () => {
    const searchField = document.getElementById('search-input');
    const searchText = searchField.value;
    const textToLoweCase = searchText.toLowerCase();
    const cityName = textToLoweCase.slice(0, 1).toUpperCase() + textToLoweCase.slice(1);

    if (searchText === '') {
        errorMessage.classList.remove('d-none');
        weatherResult.classList.add('d-none')
    }
    else {
        errorMessage.classList.add('d-none')
        weatherResult.classList.remove('d-none')
        const apiKey = 'b3168838c11ef74854ce16f3d2b142f6';
        let url = `
        https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}
    `;
        fetch(url)
            .then(res => res.json())
            .then(data => displayWeatherData(data))
            .catch(error => errorShow(error))
    };
};
// error show
function errorShow(error) {
    console.log('this error', error)
}

const displayWeatherData = (data) => {
    const temperature = (data.main.temp - 273).toFixed(2);
    weatherResult.innerHTML = `
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            <h1>${data.name}</h1>
            <h3><span>${temperature}</span>&deg;C</h3>
            <h1 class="lead">${data.weather[0].main}</h1>
        `;

}


