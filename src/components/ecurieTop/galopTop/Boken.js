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
         <p>4 courses</p>
         <p>1 place</p>
        <div className="row">
          
        </div>
      </div>
    );
  }
}

export default Boken;
