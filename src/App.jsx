import React, { Suspense, lazy } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './about'
const Home = lazy(() => import("./home"))
const Contact = lazy(() => import("./contact"))
const Layout = lazy(() => import("./layout"))
const GuestPage = lazy(() => import("./guestPage"))


const App = () => {

    return (
        <>
            <Suspense fallback={<div className='loader'></div>}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route path="/" element={<Home />} />
                            <Route path="about" element={<About />} />
                            <Route path="contact" element={<Contact />} />
                        </Route>
                        <Route path="guest" element={<GuestPage />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </>
    )
}

export default App