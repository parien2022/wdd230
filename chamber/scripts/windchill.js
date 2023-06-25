let tempInput = document.getElementById('temperature');
let windSpInput = document.getElementById('windspeed');

function calculateWindChill() {

    const temperature = parseFloat(tempInput.textContent);
    const windSpeed = parseFloat(windSpInput.textContent);

  const temperatureInFar = temperature * (9/5) + 32
  const windSpeedInMiles = windSpeed / 1.609

  if (temperatureInFar <= 50 && windSpeedInMiles > 3.0){

    const windChill = performCalulation(temperatureInFar, windSpeedInMiles);

    document.getElementById('windchill').textContent = windChill.toFixed(2);
  } else {
    document.getElementById('windchill').textContent = 'N/A';
  }
}

function performCalulation(temperature, windSpeed) {

    const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    return windChill
}

calculateWindChill()