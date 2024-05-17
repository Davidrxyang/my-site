import { useState } from "react";

const FirstButton: React.FC = () => {

    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(count + 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div>
            <button onClick = {increment}>click me</button>
            <button onClick = {reset}>reset</button>
            <p>the count is ... {count}</p>
        </div>

    );
};

export default FirstButton;