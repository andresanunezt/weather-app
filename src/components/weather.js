import React from "react";
import "../style.css";
import moment from "moment";
import { Card } from "semantic-ui-react";

const CardExampleCard = ({ weatherData }) => (
  <Card>
    {/* <Card.Content> */}
    <div className="main">
      <Card.Header className="header">{weatherData.name}</Card.Header>
      <div className="flex">
        <p className="day">
          Day: {moment().format("dddd")}, {moment().format("LL")}{" "}
        </p>

        <p className="temp">Temprature: {weatherData.main.temp} C°</p>
      </div>
      <br></br>
      <div className="flex">
        <p>
          Sunrise:{" "}
          {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("en-US")}
        </p>
        <p>
          Sunset:{" "}
          {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("en-US")}
        </p>
      </div>
      <div className="flex">
        <p>Description: {weatherData.weather[0].description}</p>
        <p>Humidity: {weatherData.main.humidity} %</p>
      </div>
    </div>
    {/* </Card.Content> */}
  </Card>
);

export default CardExampleCard;
