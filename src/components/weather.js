import React from "react";
import "../style.css";
import moment from "moment";
import { Card } from "semantic-ui-react";
import RefreshButton from "./RefreshButton";

const WeatherCard = ({ weatherData }) => (
  <Card className="centered">
    {console.log(weatherData)}
    {/* <Card.Content> */}
    <div className="main">
      <Card.Header className="header">
        <div className="flex">
          {weatherData.name}
          <RefreshButton />
        </div>
      </Card.Header>

      <div className="flex">
        <p className="day">
          Day: {moment().format("dddd")}, {moment().format("LL")}{" "}
        </p>
        <p className="description">{weatherData.weather[0].description}</p>
      </div>
      <br></br>
      <div className="flex">
        <p className="stats">Temprature: {weatherData.main.temp} C°</p>
        <p className="stats">Feels Like: {weatherData.main.feels_like} C°</p>
      </div>
      <br></br>
      <div className="flex">
        <p className="sunrise-sunset">
          Sunrise:
          {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-US")}
        </p>
        {console.log(weatherData.sys.sunset * 1000)}
        {console.log(weatherData.sys.sunset)}
        <p className="sunrise-sunset">
          Sunset:{" "}
          {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-US")}
        </p>
      </div>
      <div className="flex">
        <p className="temp">Max Temprature: {weatherData.main.temp_max}°</p>
        <p className="temp">Humidity: {weatherData.main.humidity} %</p>
      </div>
    </div>

    {/* </Card.Content> */}
  </Card>
);

export default WeatherCard;
