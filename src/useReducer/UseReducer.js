/* import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
    console.log(state, action);
    console.log(action.type);
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <p>Count: {state.count}</p>
        </>
    );
}
export default Counter; */

//$ Payload

/* import React, { useReducer } from 'react';
const initialState = { count: 0 };
function reducer(state, action) {
    console.log(action.type);
    const countData = state.count;
    const payload = action.payload;
    switch (action.type) {
        case 'increment':
            return { count: countData + payload };
        case 'decrement':
            return { count: countData - payload };
        default:
            throw new Error();
    }
}
function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            Count: {state.count}
            <button onClick={() =>
                dispatch({ type: 'decrement', payload: 2 })}>-2</button>
            <button onClick={() =>
                dispatch({ type: 'increment', payload: 2 })}>+2</button>
        </>
    );
}
export default Counter; */
