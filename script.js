const apiKey = "&appid=bd073888cd875d36c7fab53c5a77d726";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchBox = document.querySelector(".searchbox");
        const searchBtn = document.querySelector(".searchBtn");
        const weatherIcon = document.querySelector(".icon img");

        async function checkWeather(city) {
            const response = await fetch(apiUrl + city + apiKey);

            if (response.status == 404) {
                document.querySelector(".error").style.display = "block";
                document.querySelector(".wrapper").style.display = "none";
            }
            else {


                var data = await response.json();

                console.log(data)

                document.querySelector(".temp h2").innerHTML = Math.round(data.main.temp) + "°C";
                document.querySelector(".location h3").innerHTML = data.name;
                document.querySelector(".location h4").innerHTML = data.sys.country;
                document.querySelector(".max").innerHTML = Math.round(data.main.temp_max) + "°C";
                document.querySelector(".min").innerHTML = Math.round(data.main.temp_min) + "°C";
                document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
                document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                document.querySelector(".situation").innerHTML = data.weather[0].main;

                if (data.weather[0].main == "clear") {
                    weatherIcon.src = "rr";
                }
                else if (data.weather[0].main == "clouds") {
                    weatherIcon.src = "images/clouds.png";
                }
                else if (data.weather[0].main == "drizzle") {
                    weatherIcon.src = "images/drizzle.png";
                }
                else if (data.weather[0].main == "mist") {
                    weatherIcon.src = "images/mist.png";
                }
                else if (data.weather[0].main == "rain") {
                    weatherIcon.src = "www";
                }
                else if (data.weather[0].main == "snow") {
                    weatherIcon.src = "images/snow.png";
                }

                document.querySelector(".searchbar").style.marginTop = "0";
                document.querySelector(".wrapper").style.display = "block";
                document.querySelector(".error").style.display ="none"


            }
        }
        searchBtn.addEventListener(("click"), () => {
            checkWeather(searchBox.value);
        })