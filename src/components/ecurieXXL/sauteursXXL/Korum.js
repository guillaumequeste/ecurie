import React, { Component } from "react";
import Header from "../../Header";
import "./Korum.css";

class Korum extends Component {
  render() {
    return (
      <div className="bodyCheval">
        <Header />
        <h1 className="nomCheval">Korum</h1>
        <img
          className="imgDetail"
          src={require("../../../img/XXL/sauteursXXL/korum/korum1.jpg")}
          alt="korum"
        />
        <p>12 courses</p>
        <p>2 victoires à Lyon Parilly et Moulins</p>
        <p>6 places</p>
        <div className="row">
          <div className="col-sm-3">
            <img
              className="imgDetail2"
              src={require("../../../img/XXL/sauteursXXL/korum/korum2.jpg")}
              alt="korum2"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Korum;
