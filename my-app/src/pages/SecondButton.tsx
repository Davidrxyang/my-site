import { useState } from "react";

const SecondButton: React.FC = () => {
    
    const useButton = () => {
        const [count, setCount] = useState<number>(0);

        const increment = () => {
            setCount(count + 1);
        };

        const decrement = () => {
            setCount(count - 1);
        };

        return {count, increment, decrement};
    };

    const {count, increment, decrement} = useButton();

    return (
        <div>
            <button onClick = {increment}> increment </button>
            <button onClick = {decrement}> decrement </button>
            <p>the count is {count}</p>
        </div>
    );
};

export default SecondButton;