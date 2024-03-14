// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Layout } from './components/Layout'
import { Counter } from './components/Counter'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
          </Route>
          <Route path='/counter' element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
