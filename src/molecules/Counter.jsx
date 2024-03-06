import React, { useReducer } from "react";
import reducer from '../hooks/CounterHook'

const initialState = { count: 0 };

export default function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <>
        Count: {state.count}
        <button onClick={() => dispatch({ type: "increment" })}>+</button>
        <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      </>
    );
}