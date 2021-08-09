import React from "react";
import "../style.css";
import moment from "moment";
import { Card } from "semantic-ui-react";

const CardExampleCard = ({ weatherData }) => (
  <Card>
    <Card.Content>
      <Card.Header className="header">{weatherData.name}</Card.Header>
      <p className="day">
        Day: {moment().format("dddd")}, {moment().format("LL")}{" "}
      </p>
      <p className="temp">Temprature: {weatherData.main.temp}</p>
      <p>
        Sunrise:{" "}
        {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-US")}
      </p>
      <p>
        Sunset:{" "}
        {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-US")}
      </p>
      <p>Description: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity} %</p>
    </Card.Content>
  </Card>
);

export default CardExampleCard;
