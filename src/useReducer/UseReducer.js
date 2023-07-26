import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
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
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </>
    );
}

//$ Payload
/* const initialState = { count: 0 };
function reducer(state, action) {
    console.log(action.type);
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload };
        case 'decrement':
            return { count: state.count - action.payload };
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
 */
export default Counter;
