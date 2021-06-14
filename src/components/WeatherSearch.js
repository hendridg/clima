import React from "react"

const WeatherSearch = ({ query }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        query(e.target.location.value)
      }}
      className="search-form"
    >
      <input
        name="location"
        className="user-input"
        type="text"
        placeholder="Location"
      />
      <button className="search-button">&rarr;</button>
    </form>
  )
}

export default WeatherSearch
