'use client';
import {useEffect, useState} from "react";
import Spinner from "../Spinner";

function Counter() {
    const [count, setCount] = useState<number | null>(null);

    useEffect(() => {
        const savedCount = localStorage.getItem('saved-count');
        setCount(savedCount ? Number(savedCount) : 0);
    }, []);

    useEffect(() => {
        if (count) window.localStorage.setItem('saved-count', count.toString());
    }, [count]);

    return (
        <button
            className="count-btn"
            onClick={() => setCount(count + 1)}
        >
            Count: {count ? count : <Spinner/>}
        </button>
    );
}

export default Counter;
