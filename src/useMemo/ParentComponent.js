import React, { useState } from 'react';
import MemoizedChildComponent from './ChildComponent';
function ParentComponent() {
    console.log("ParentComponent renderizzato.");
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <MemoizedChildComponent count={count} />
        </div>
    );
}
export default ParentComponent;

