import React from 'react'
import './layout.css'
import Footer from './footer'
import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <main>
                <div className="header">
                    <Link to="/" className="logo">
                        CompanyLogo
                    </Link>
                    <div className="header-right">
                        <Link to="/" className="active">
                            Home
                        </Link>
                        <Link to="contact">Contact</Link>
                        <Link to="about">About</Link>
                        <Link to="/guest">Guest</Link>
                    </div>
                </div>

                {/* <div style={{ paddingLeft: "20px" }}>
                    <h1>Responsive Header</h1>
                    <p>Resize the browser window to see the effect.</p>
                    <p>Some content..</p>
                </div> */}
                <Outlet />
                <Footer />
            </main>
        </div>
    )
}

export default Layout