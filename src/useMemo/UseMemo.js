import React, { useState, useMemo } from 'react';
function UseMemo() {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
    const doubleNumber = slowFunction(number);

    /* const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number]); //* useMemo */

    const colorStyles = {
        backgroundColor : dark ? 'black' : 'white',
        color : dark ? 'white' : 'black'
    }
    //* Funzione molto lenta
    function slowFunction(num) {
        for(let i=1;i<=999999999;++i){};
        return num * 2;
    }
    return (
        <>
            <input
                type="number"
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))}/>
            <button onClick={() => setDark(prevDark => !prevDark)}>
                Change Theme
            </button>
            <div style={colorStyles}>Numero doppio: {doubleNumber}</div>
        </>
    );
}
export default UseMemo;







