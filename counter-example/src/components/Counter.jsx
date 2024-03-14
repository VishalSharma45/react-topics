import React from 'react'
import CounterContext from '../context/CounterContext'
import { useContext } from 'react'

export const Counter = () => {
    const counter = useContext(CounterContext);

    return (
        <div>
            <button onClick={() => counter.setCount(counter.count + 1)}>Increment</button>
            <button onClick={() => counter.setCount(counter.count - 1)}>Decrement</button>
        </div>
    )
}
