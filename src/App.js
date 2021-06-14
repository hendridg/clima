import React, { useState, useEffect } from "react"
import Container from "./components/Container"
import Header from "./components/Header"
import WeatherSearch from "./components/WeatherSearch"
import WeatherData from "./components/WeatherData"
import ErrorMessage from "./components/ErrorMessage"

import "./App.css"

function App() {
  const [weatherData, setWeatherData] = useState({})
  const [showError, setShowError] = useState(false)
  const [errorMensaje, setErrorMensaje] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)
  const API_KEY = "0f6caaa489c36ec06a84ce44ddb0ccb6"

  async function query(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      setWeatherData(data)
      setIsLoaded(true)
      setShowError(false)
    } else {
      setIsLoaded(false)
      setShowError(true)
      setErrorMensaje(response.status)
    }
  }
  useEffect(() => {
    document.title = "Wheather App"
  })

  return (
    <>
      <Container>
        <Header />
        <WeatherSearch query={query} />
        {isLoaded && <WeatherData weatherData={weatherData} />}
        {showError && <ErrorMessage errorMensaje={errorMensaje} />}
      </Container>
    </>
  )
}

export default App
