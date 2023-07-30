function displayOnScreeen(weather_location){
  document.getElementById("country-name").textContent=weather_location.country;
  document.getElementById("tempC").textContent="TempC : "+weather_location.temp_in_celcius+"C";
  document.getElementById("tempF").textContent="TempC : "+weather_location.temp_in_fahrenheit+"F";
  document.getElementById("humidity").textContent="Humidity : "+weather_location.humidity+"%";
  document.getElementById("cloud").textContent="Cloud Cover : "+weather_location.cloud+"%";
}

function WeatherObject(response){
  this.country=response.location.country;
  this.temp_in_celcius=response.current.temp_c;
  this.temp_in_fahrenheit=response.current.temp_c;
  this.humidity=response.current.humidity;
  this.cloud=response.current.cloud;
  this.displayOutput=()=>{
    console.table(this.country);
    console.table(this.temp_in_celcius);
    console.table(this.temp_in_fahrenheit);
    console.table(this.humidity);
}
}
async function callWeatherApi(location) {
  let weatherUrl =
    "https://api.weatherapi.com/v1/current.json?key=d2f01e9920074d3bb9950726230905&q=" +
    location;
  const urlCall = await fetch(weatherUrl, { mode: "cors" });
  const response = await urlCall.json();
  console.log(response)
  let weather_location=new WeatherObject(response);
  weather_location.displayOutput();
  displayOnScreeen(weather_location);
}
function eventCall() {
  const search_event = document.getElementById("search_icon");
  search_event.addEventListener("click", (ev) => {
    ev.preventDefault();
    const search_location=document.getElementById("search_location");
    callWeatherApi(search_location.value);
    document.getElementById("search_location").value="";
  });
}
eventCall();
