import React, { Component } from "react";
import Header from "../../Header";
import "./BellePromesse.css";

class BellePromesse extends Component {
  render() {
    return (
      <div className="bodyCheval">
        <Header />
        <h1 className="nomCheval">Belle Promesse</h1>
        <img
          className="imgDetail"
          src={require("../../../img/XXL/sauteursXXL/belle/belle1.jpg")}
          alt="belle_promesse"
        />
        <p>14 courses</p>
        <p>6 victoires à Bordeaux et Auteuil</p>
        <p>4 places</p>
        <div className="row">
          <div className="col-sm-3">
            <img
              className="imgDetail2"
              src={require("../../../img/XXL/sauteursXXL/belle/belle2.jpg")}
              alt="belle2"
            />
          </div>
          <div className="col-sm-3">
            <img
              className="imgDetail2"
              src={require("../../../img/XXL/sauteursXXL/belle/belle3.jpg")}
              alt="belle3"
            />
          </div>
          <div className="col-sm-3">
            <img
              className="imgDetail2"
              src={require("../../../img/XXL/sauteursXXL/belle/belle4.jpg")}
              alt="belle4"
            />
          </div>
          <div className="col-sm-3">
            <img
              className="imgDetail2"
              src={require("../../../img/XXL/sauteursXXL/belle/belle5.jpg")}
              alt="belle5"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-3">
            <img
              className="imgDetail2"
              src={require("../../../img/XXL/sauteursXXL/belle/belle6.jpg")}
              alt="belle6"
            />
          </div>
          <div className="col-sm-3">
            <img
              className="imgDetail2"
              src={require("../../../img/XXL/sauteursXXL/belle/belle7.jpg")}
              alt="belle7"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BellePromesse;
