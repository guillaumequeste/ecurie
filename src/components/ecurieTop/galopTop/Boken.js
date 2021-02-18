import React, { Component } from "react";
import Header from "../../Header";
import "./Boken.css";

class Boken extends Component {
  render() {
    return (
      <div className="bodyCheval">
        <Header />
        <h1 className="nomCheval">Boken</h1>
        <img
          className="imgDetail"
          src={require("../../../img/Top/galopTop/boken/boken01.jpg")}
          alt="boken01"
        />
      </div>
    );
  }
}

export default Boken;
