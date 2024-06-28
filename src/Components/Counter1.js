import React, {useState} from "react";

function Counter1() {
    const [count, setCount] = useState(10);

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
          
    };
    return (
        <div>
            <h1>Click counter</h1>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Click me</button>
          
        </div>
    );
}

export default Counter1;