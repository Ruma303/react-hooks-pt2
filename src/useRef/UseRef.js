//$ Esempio di utilizzo per accedere ai nodi diretti del DOM.

import React, { useRef } from 'react';
const UseRef = () => {
    const input = useRef(null);
    const onButtonClick = () => {
        console.log(input)
        input.current.focus();
        input.current.value = 'Hello World';
    };
    return (
        <>
            <h1>useRef</h1>
            <input ref={input} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    )
}


//$ Esempio di utilizzo per memorizzare un valore mutabile che persiste tra i render.
/* import React, { useRef, useEffect, useState } from 'react';
function UseRef() {
    const [seconds, setSeconds] = useState(0); //* Stato per i secondi
    const intervalRef = useRef();
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            console.log('Interval ran');
            setSeconds((prevSeconds) => prevSeconds + 1); //* Aggiorna i secondi ogni volta che l'intervallo è eseguito
        }, 1000);
        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);
    return (
        <div>
            <p>Seconds: {seconds}s</p>
            <button onClick={() => clearInterval(intervalRef.current)}>
                Clear Interval
            </button>
        </div>
    );
} */
export default UseRef;