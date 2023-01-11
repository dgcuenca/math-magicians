import React, { Component } from "react";
import calculate from '../logic/calculate';
import operate from '../logic/operate'

class Calculator extends Component {
	
	constructor(props) {
    super(props);
    this.state = {};
  }

  onChangeHandler = (event) => {
    console.log(event.target.innerText, typeof event.target.innerText);
  };

  render() {
    return (
      <div className="container w-75">
        <div className="row">
          <div className="col bg-secondary text-end border-secondary text-white">0</div>
        </div>
				<div className="row">
          <button className="col-3 bg-light text-center border-secondary border border-1" onClick={this.onChangeHandler}>AC</button>
					<button className="col-3 bg-light text-center border-secondary border border-1" onClick={this.onChangeHandler}>+/-</button>
					<button className="col-3 bg-light text-center border-secondary border border-1" onClick={this.onChangeHandler}>%</button>
					<button className="col-3 bg-warning text-center border-secondary border border-1" onClick={this.onChangeHandler}>/</button>
        </div>
				<div className="row">
          <button className="col-3 bg-light text-center border-secondary border border-1" onClick={this.onChangeHandler}>7</button>
					<button className="col-3 bg-light text-center border-secondary border border-1" onClick={this.onChangeHandler}>8</button>
					<button className="col-3 bg-light text-center border-secondary border border-1" onClick={this.onChangeHandler}>9</button>
					<button className="col-3 bg-warning text-center border-secondary border border-1" onClick={this.onChangeHandler}>*</button>
        </div>
				<div className="row">
          <button className="col-3 bg-light text-center border-secondary border border-1" onClick={this.onChangeHandler}>4</button>
					<button className="col-3 bg-light text-center border-secondary border border-1" onClick={this.onChangeHandler}>5</button>
					<button className="col-3 bg-light text-center border-secondary border border-1" onClick={this.onChangeHandler}>6</button>
					<button className="col-3 bg-warning text-center border-secondary border border-1" onClick={this.onChangeHandler}>-</button>
        </div>
				<div className="row">
          <button className="col-3 bg-light text-center border-secondary border border-1" onClick={this.onChangeHandler}>1</button>
					<button className="col-3 bg-light text-center border-secondary border border-1" onClick={this.onChangeHandler}>2</button>
					<button className="col-3 bg-light text-center border-secondary border border-1" onClick={this.onChangeHandler}>3</button>
					<button className="col-3 bg-warning text-center border-secondary border border-1" onClick={this.onChangeHandler}>+</button>
        </div>
				<div className="row">
          <button className="col-6 bg-light text-center border-secondary border border-1" onClick={this.onChangeHandler}>0</button>
					<button className="col-3 bg-light text-center border-secondary border border-1" onClick={this.onChangeHandler}>.</button>
					<button className="col-3 bg-warning text-center border-secondary border border-1" onClick={this.onChangeHandler}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
