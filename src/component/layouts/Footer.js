import React from 'react'

function Footer() {
  return (
    <div>
            {/* <!-- section-6 footer --> */}

<section id="footer">
    <div className="footer pt-5">
        <div className="container">
            <div className="row">
                <div className="col-md-6 text-center">
                    <div className="footer-social pb-4 text-center">
                        <a href="/"><i className="fab fa-facebook-f"></i></a>
                        <a href="/"><i className="fab fa-twitter"></i></a>
                        <a href="/"><i className="fab fa-youtube"></i></a>
                        <a href="/"><i className="fab fa-dribbble"></i></a>
                        <a href="/"><i className="fab fa-linkedin"></i></a>
                        <a href="/"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="col-md-6">
                    <form action="" className="newsletter">
                        <div className="d-flex">
                            <input className="form-control" type="email" placeholder="Email Address here"/>
                            <button className="main-btn" type="submit">Subscribe</button>
                        </div>
                    </form>
                </div>
                <div className="col-sm-12">
                    <div className="footer-copy">
                        <div className="copy-right text-center pt-5">
                            <p className="text-light">© 2021.PIZZA. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Footer