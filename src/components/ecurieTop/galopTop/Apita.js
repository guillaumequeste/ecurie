import React, { Component } from "react";
import Header from "../../Header";
import "./Apita.css";

class Apita extends Component {
  render() {
    return (
      <div className="bodyCheval">
        <Header />
        <h1 className="nomCheval">Apita</h1>
        <img
          className="imgDetail"
          src={require("../../../img/Top/galopTop/apita/apita01.jpg")}
          alt="apita01"
        />
        <p>2 courses</p>
        <div className="row">
          <div className="col-sm-3">
            <img
              className="imgDetail2"
              src={require("../../../img/Top/galopTop/apita/apita02.jpg")}
              alt="apita02"
            />
          </div>
          <div className="col-sm-3">
            <img
              className="imgDetail2"
              src={require("../../../img/Top/galopTop/apita/apita03.jpg")}
              alt="apita03"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Apita;
