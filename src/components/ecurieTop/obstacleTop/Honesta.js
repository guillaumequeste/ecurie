import React, { Component } from "react";
import Header from "../../Header";
import "./Honesta.css";

class Honesta extends Component {
  render() {
    return (
      <div className="bodyCheval">
        <Header />
        <h1 className="nomCheval">Honesta</h1>
        <img
          className="imgDetail"
          src={require("../../../img/Top/obstacleTop/honesta/honesta01.jpg")}
          alt="honesta01"
        />
        <p>5 courses</p>
        <p>4 places</p>
        <div className="row">
          <div className="col-sm-3">
            <img
              className="imgDetail2"
              src={require("../../../img/Top/obstacleTop/honesta/honesta02.jpg")}
              alt="honesta02"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Honesta;
