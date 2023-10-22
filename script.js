const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a7ed64ad82mshe52deb5ae758904p1ee05ejsncff43a201468",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
getweather("Mumbai");
const getweather = (city) => {
  fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city, options)
    .then((response) => response.json())
    .then((response) => {
      // console.log(response);
      city_name.innerHTML = city;
      cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      temp.innerHTML = response.temp;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let cityName = document.getElementById("cityName").value;
  // console.log(cityName);

  getweather(cityName);
})

fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi", options)
  .then((response) => response.json())
  .then((response) => {
    // console.log(response);

    Cp1.innerHTML = response.cloud_pct;
    Fl1.innerHTML = response.feels_like;
    Hu1.innerHTML = response.humidity;
    Maxt1.innerHTML = response.max_temp;
    Mint1.innerHTML = response.min_temp;
    SuR1.innerHTML = response.sunrise;
    SuS1.innerHTML = response.sunset;
    Tem1.innerHTML = response.temp;
    Wind1.innerHTML = response.wind_degrees;
    Wins1.innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));

fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai", options)
  .then((response) => response.json())
  .then((response) => {
    // console.log(response);

    Cp2.innerHTML = response.cloud_pct;
    Fl2.innerHTML = response.feels_like;
    Hu2.innerHTML = response.humidity;
    Maxt2.innerHTML = response.max_temp;
    Mint2.innerHTML = response.min_temp;
    SuR2.innerHTML = response.sunrise;
    SuS2.innerHTML = response.sunset;
    Tem2.innerHTML = response.temp;
    Wind2.innerHTML = response.wind_degrees;
    Wins2.innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));

fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Brazil", options)
  .then((response) => response.json())
  .then((response) => {
    // console.log(response);

    Cp3.innerHTML = response.cloud_pct;
    Fl3.innerHTML = response.feels_like;
    Hu3.innerHTML = response.humidity;
    Maxt3.innerHTML = response.max_temp;
    Mint3.innerHTML = response.min_temp;
    SuR3.innerHTML = response.sunrise;
    SuS3.innerHTML = response.sunset;
    Tem3.innerHTML = response.temp;
    Wind3.innerHTML = response.wind_degrees;
    Wins3.innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));

fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai", options)
  .then((response) => response.json())
  .then((response) => {
    // console.log(response);

    Cp4.innerHTML = response.cloud_pct;
    Fl4.innerHTML = response.feels_like;
    Hu4.innerHTML = response.humidity;
    Maxt4.innerHTML = response.max_temp;
    Mint4.innerHTML = response.min_temp;
    SuR4.innerHTML = response.sunrise;
    SuS4.innerHTML = response.sunset;
    Tem4.innerHTML = response.temp;
    Wind4.innerHTML = response.wind_degrees;
    Wins4.innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));

fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Japan", options)
  .then((response) => response.json())
  .then((response) => {
    // console.log(response);

    Cp5.innerHTML = response.cloud_pct;
    Fl5.innerHTML = response.feels_like;
    Hu5.innerHTML = response.humidity;
    Maxt5.innerHTML = response.max_temp;
    Mint5.innerHTML = response.min_temp;
    SuR5.innerHTML = response.sunrise;
    SuS5.innerHTML = response.sunset;
    Tem5.innerHTML = response.temp;
    Wind5.innerHTML = response.wind_degrees;
    Wins5.innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));

fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Israel", options)
  .then((response) => response.json())
  .then((response) => {
    // console.log(response);

    Cp6.innerHTML = response.cloud_pct;
    Fl6.innerHTML = response.feels_like;
    Hu6.innerHTML = response.humidity;
    Maxt6.innerHTML = response.max_temp;
    Mint6.innerHTML = response.min_temp;
    SuR6.innerHTML = response.sunrise;
    SuS6.innerHTML = response.sunset;
    Tem6.innerHTML = response.temp;
    Wind6.innerHTML = response.wind_degrees;
    Wins6.innerHTML = response.wind_speed;
  })
  .catch((err) => console.error(err));

