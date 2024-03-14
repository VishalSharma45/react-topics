import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Item } from './components/Item'
import { Cart } from './components/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Item name="Macbook Pro" price={100000} />
      <Item name="Mobile" price={45000} />
      <Item name="Play Station" price={55000} />
      <Cart />
    </>
  )
}

export default App
