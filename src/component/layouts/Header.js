import React from 'react'
import {Link}  from "react-router-dom"


function Header() {
    return (
        <>
          {/* <!-- navbar design --> */}

<nav className="navbar navbar-expand-lg navigation-wrap">
    <div className="container">
        <Link className="navbar-brand" to="/">
            <img src="images/logo.png" alt=""/>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
            {/* <i className="fas fa-stream navbar-toggler-icon"></i> */}
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/explorefoods">Explore Foods</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/">Reviews</Link>
                </li>
                <li>
                    <button className="main-btn">1200 345 123</button>
                </li>

            </ul>
        </div>
    </div>
</nav>
        </>

    )
}

export default Header


