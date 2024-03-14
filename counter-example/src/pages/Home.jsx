import React from 'react'
import { Counter } from '../components/Counter'
import CounterContext from '../context/CounterContext'
import { useContext } from 'react'

export const Home = () => {
    const counter = useContext(CounterContext);

    return (
        <div>
            <h2>Count: {counter.count}</h2>
            <Counter />
            <Counter />
            <Counter />
            <Counter />
        </div>
    )
}
