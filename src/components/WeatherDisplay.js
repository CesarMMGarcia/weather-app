import React from 'react';
import './WeatherDisplay.css';

const WeatherDisplay = ({ city, temperature, country, description, error }) => {
    let icon = '';
    let color = '';

    function weatherCheck() {
        if (description) {
            const weatherDescription = description.split(" ");
            const cloudy = ["cloudy", "overcast", "clouds", "cloud"];
            const rainy = ['rain', 'shower', 'thunderstorm'];
            const snow = ['snow'];
            for (let i = 0; i < weatherDescription.length; i++) {
                if (cloudy.includes(weatherDescription[i])) {
                    icon = 'cloud';
                } else if (rainy.includes(weatherDescription[i])) {
                    icon = 'tint';
                } else if (snow.includes(weatherDescription[i])) {
                    icon = 'snowflake';
                } else {
                    icon = 'sun outline';
                }
            }
        }
    }

    const temperatureCheck = () => {
        if (temperature >= 90) {
            color = 'red';
        } else if (temperature < 90 && temperature >= 79) {
            color = 'orange';
        } else if (temperature < 79 && temperature >= 60) {
            color = 'aliceblue';
        } else if (temperature < 60 && temperature >= 30) {
            color = 'blue';
        }
    }

    weatherCheck(description);
    temperatureCheck(temperature);

    return (
        <div className={`ui segment center aligned weather-display ${color}`}>
            {city && country && <div> {city},{country} </div>}
            {temperature && <div>temperature: <br />{temperature} °F</div>}
            <div>
                {console.log(color)}
                {description && <div> {description} </div>}
                <i className={`${icon} icon massive`} />
            </div>
            {error && <p>{error} </p>}
        </div >



    );
};

// WeatherDisplay.defaultProps = {
//     temperature: 60
// };

export default WeatherDisplay;