import React, { Component } from "react";

class Calculator extends Component {
	
	constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container w-75">
        <div className="row">
          <div className="col bg-secondary text-end border-secondary text-white">0</div>
        </div>
				<div className="row">
          <div className="col-3 bg-light text-center border-secondary border border-1">AC</div>
					<div className="col-3 bg-light text-center border-secondary border border-1">+/-</div>
					<div className="col-3 bg-light text-center border-secondary border border-1">%</div>
					<div className="col-3 bg-warning text-center border-secondary border border-1">/</div>
        </div>
				<div className="row">
          <div className="col-3 bg-light text-center border-secondary border border-1">7</div>
					<div className="col-3 bg-light text-center border-secondary border border-1">8</div>
					<div className="col-3 bg-light text-center border-secondary border border-1">9</div>
					<div className="col-3 bg-warning text-center border-secondary border border-1">*</div>
        </div>
				<div className="row">
          <div className="col-3 bg-light text-center border-secondary border border-1">4</div>
					<div className="col-3 bg-light text-center border-secondary border border-1">5</div>
					<div className="col-3 bg-light text-center border-secondary border border-1">6</div>
					<div className="col-3 bg-warning text-center border-secondary border border-1">-</div>
        </div>
				<div className="row">
          <div className="col-3 bg-light text-center border-secondary border border-1">1</div>
					<div className="col-3 bg-light text-center border-secondary border border-1">2</div>
					<div className="col-3 bg-light text-center border-secondary border border-1">3</div>
					<div className="col-3 bg-warning text-center border-secondary border border-1">+</div>
        </div>
				<div className="row">
          <div className="col-6 bg-light text-center border-secondary border border-1">0</div>
					<div className="col-3 bg-light text-center border-secondary border border-1">.</div>
					<div className="col-3 bg-warning text-center border-secondary border border-1">=</div>
        </div>
      </div>
    );
  }
}

export default Calculator;
