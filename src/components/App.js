import React, { useState } from 'react';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';


const key = "84c708fc9daddefdba7bfd2183216ad4";

const App = () => {

    const [weather, setWeather] = useState([]);

    async function fetchWeather(e) {
        e.preventDefault();
        const city = e.target.elements.city.value;

        const apiData = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`)
            .then(res => res.json())
            .then(data => data)
        if (city) {
            setWeather({
                data: apiData,
                city: apiData.name,
                country: apiData.sys.country,
                temperature: Math.round(apiData.main.temp),
                description: apiData.weather[0].description,
                error: ''
            }
            )
        } else {
            setWeather({
                data: '',
                city: '',
                country: '',
                temperature: '',
                description: '',
                error: 'please enter a city'
            })
        }
    }

    return (
        <div className="ui container">
            <SearchBar fetchWeather={fetchWeather} />
            <WeatherDisplay
                city={weather.city}
                country={weather.country}
                temperature={weather.temperature}
                description={weather.description}
                error={weather.error}
            />
        </div>
    );
};

export default App;


// onSubmit={this.onSearchSubmit} deleted prop from searchbar 
/// 84c708fc9daddefdba7bfd2183216ad4


  // state = { location: "", weather: [], temp: '' };

    // onSearchSubmit = async (location) => {
    //     const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${key}`)
    //     console.log(response.data.main.temp);
    //     console.log(response.data.sys.country);
    //     console.log(response.data);

    //     this.setState({ location: response.data.sys.country, weather: response.data.weather });

    // }

    //  0: {id: 800, main: "Clear", description: "clear sky", icon: "01n"}
    // data.weather is for the above array