import React from "react";
// import "./styles.css";
import moment from "moment";
import { Card } from "semantic-ui-react";

const CardExampleCard = ({ weatherData }) => (
  <Card>
    <Card.Content>
      <Card.Header className="header">{weatherData.name}</Card.Header>
      <p>Temprature: {weatherData.main.temp}</p>
      <p>Sunrise: {weatherData.sys.sunrise}</p>
      <p>Sunset: {weatherData.sys.sunset}</p>
      <p>Description: {weatherData.weather[0].description}</p>
      <p>
        Sunrise formatted TIME:{" "}
        {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-US")}
      </p>
      <p>
        Sunset formatted TIME:{" "}
        {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-US")}
      </p>
      <p>Humidity: {weatherData.main.humidity} %</p>
      <p>
        Day: {moment().format("dddd")}, {moment().format("LL")}{" "}
      </p>
    </Card.Content>
  </Card>
);

export default CardExampleCard;
