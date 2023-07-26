import React, { useState, useCallback, useMemo } from 'react';
const UseCallback = () => {
    const [number, setNumber] = useState(1);
    const getItems = () => {
        console.log('Callback getItems() attivata');
        return [number, number + 1, number + 2];
    };
    /* //* useCallback()
    const getItems = useCallback(() => {
        console.log('Callback getItems() attivata');
        return [number, number + 1, number + 2];
    }, [number]); */
    const items = useMemo(() => getItems(), [getItems]);
    return (
        <>
            <h1>UseCallback</h1>
            <input
                type="number"
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))}/>
            <div>
                {items.map((num, index) => (
                    <div key={index}>{num}</div>
                ))}
            </div>
        </>
    );
}
export default UseCallback;
