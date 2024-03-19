import React from 'react';
import { increment, decrement } from '../reducer/counterReducer';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {

  // Selector
  const count = useSelector((state) => state.counter.value);

  // Dispatch
  const dispatch = useDispatch();

  return(
    <React.Fragment>
      <div className="counter-row">
        <button
          className="counter-button"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className="counter-value">{count}</span>
        <button
          className="counter-button"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </React.Fragment>
  )

}

export default Counter;
