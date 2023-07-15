import React from 'react'
import {Link}  from "react-router-dom"


function Header() {
    return (
        <>
          {/* <!-- navbar design --> */}

<nav className="navbar navbar-expand-lg navigation-wrap">
    <div className="container">
        <a className="navbar-brand" href="/">
            <img src="images/logo.png" alt=""/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
            {/* <i className="fas fa-stream navbar-toggler-icon"></i> */}
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/about">About Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contact">Contact Us</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/explorefoods">Explore Foods</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Reviews</a>
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


