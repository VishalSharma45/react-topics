import CounterContext from "./CounterContext";

import React, { useState } from 'react'

const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    return (
        <CounterContext.Provider value={{ count, setCount, name: "Vishal" }}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterProvider;