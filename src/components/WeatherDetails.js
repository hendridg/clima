import React from "react"

const WeatherDetails = (props) => {
    const { pressure, humidity } = props.main
    return (
        <div className="weather-details">
            <p className="weather-detail">Pressure: {pressure}</p>
            <p className="weather-detail">Humidity: {humidity}</p>
        </div>
    )
}

export default WeatherDetails