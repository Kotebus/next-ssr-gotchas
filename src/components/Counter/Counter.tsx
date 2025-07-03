'use client';
import {useEffect, useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const savedCount = localStorage.getItem('saved-count');
        if (savedCount) setCount(Number(savedCount));
    }, []);

    useEffect(() => {
        window.localStorage.setItem('saved-count', count.toString());
    }, [count]);

    return (
        <button
            className="count-btn"
            onClick={() => setCount(count + 1)}
        >
            Count: {count}
        </button>
    );
}

export default Counter;
