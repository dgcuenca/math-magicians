import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = ({total: initialTotal, next: initialNext, operation: initialOperation }) => {
	
  const [total, setTotal] = useState(initialTotal);
  const [next, setNext] = useState(initialNext);
  const [operation, setOperation] = useState(initialOperation)

  const onChangeHandler = (event) => {
    const {
      total: newTotal,
      next: newNext,
      operation: newOperation,
    } = calculate({ total, next, operation },  event.target.innerText);
    setTotal(newTotal);
    setNext(newNext);
    setOperation(newOperation);
  };

    return (
      <div className="container w-75">
        <div className="row">
          <div className="col bg-secondary text-end border-secondary text-white">{next||operation||total}</div>
        </div>
				<div className="row">
          <button className="col-3 bg-light text-center border-secondary border border-1" onClick={onChangeHandler}>AC</button>
					<button className="col-3 bg-light text-center border-secondary border border-1" onClick={onChangeHandler}>+/-</button>
					<button className="col-3 bg-light text-center border-secondary border border-1" onClick={onChangeHandler}>%</button>
					<button className="col-3 bg-warning text-center border-secondary border border-1" onClick={onChangeHandler}>÷</button>
        </div>
				<div className="row">
          <button className="col-3 bg-light text-center border-secondary border border-1" onClick={onChangeHandler}>7</button>
					<button className="col-3 bg-light text-center border-secondary border border-1" onClick={onChangeHandler}>8</button>
					<button className="col-3 bg-light text-center border-secondary border border-1" onClick={onChangeHandler}>9</button>
					<button className="col-3 bg-warning text-center border-secondary border border-1" onClick={onChangeHandler}>x</button>
        </div>
				<div className="row">
          <button className="col-3 bg-light text-center border-secondary border border-1" onClick={onChangeHandler}>4</button>
					<button className="col-3 bg-light text-center border-secondary border border-1" onClick={onChangeHandler}>5</button>
					<button className="col-3 bg-light text-center border-secondary border border-1" onClick={onChangeHandler}>6</button>
					<button className="col-3 bg-warning text-center border-secondary border border-1" onClick={onChangeHandler}>-</button>
        </div>
				<div className="row">
          <button className="col-3 bg-light text-center border-secondary border border-1" onClick={onChangeHandler}>1</button>
					<button className="col-3 bg-light text-center border-secondary border border-1" onClick={onChangeHandler}>2</button>
					<button className="col-3 bg-light text-center border-secondary border border-1" onClick={onChangeHandler}>3</button>
					<button className="col-3 bg-warning text-center border-secondary border border-1" onClick={onChangeHandler}>+</button>
        </div>
				<div className="row">
          <button className="col-6 bg-light text-center border-secondary border border-1" onClick={onChangeHandler}>0</button>
					<button className="col-3 bg-light text-center border-secondary border border-1" onClick={onChangeHandler}>.</button>
					<button className="col-3 bg-warning text-center border-secondary border border-1" onClick={onChangeHandler}>=</button>
        </div>
      </div>
    );
}

export default Calculator;