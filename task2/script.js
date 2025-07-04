// function getWeather() {
//   const city = document.getElementById('cityInput').value;

//   // Simulated temperature data (fake for learning)
//   const fakeWeatherData = {
//     Ahmedabad: 40,
//     Mumbai: 32,
//     Delhi: 38,
//     Bengaluru: 28,
//     default: 35
//   };

//   const temp = fakeWeatherData[city] || fakeWeatherData.default;

//   document.getElementById('weatherOutput').textContent = 
//     `The weather in ${city} is ${temp}°C`;
// }
function getWeather() {
  const city = document.getElementById('cityInput').value;

  const fakeWeatherData = {
    Ahmedabad: 40,
    Mumbai: 32,
    Delhi: 38,
    Bengaluru: 28,
    default: 35
  };

  const temp = fakeWeatherData[city] || fakeWeatherData.default;

  document.getElementById('weatherOutput').textContent = 
    `The weather in ${city} is ${temp}°C`;
}
