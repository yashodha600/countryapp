import React, { useState } from "react";

import "./App.css";

function Weather(data) {
  const [condition, setCondition] = useState("");

  const url = `http://api.weatherstack.com/current?access_key=a6713fbb1d64a9ae561d0c451bd89e75&query=${data.data}`;

  const getData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCondition(data);
        console.log(condition);
      });
  };
  return (
    <div className="Weather">
      <button onClick={getData}>Enter</button>
      <div>
        {typeof condition.current === "undefined" ? (
          <div>
            <p>Weather Report</p>
          </div>
        ) : (
          <div>
            <h4>Temperature:{condition.current.temperature}℃</h4>
            <h4>Wind Speed:{condition.current.wind_speed} m/s</h4>
            <h4>weather_icon</h4>
            <img
              src={condition.current.weather_icons}
              alt={condition.location.name}
              width="150px"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
