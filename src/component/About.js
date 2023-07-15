import React from 'react'

function About() {
  return (
    <>
         {/* <!-- section-1 about --> */}

<section id="about">
    <div className="about-section wrapper about-page">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7 col-md-12 mb-lg-0 mb-5">
                    <div className="card border-0">
                        <img src="images/img/img-1.png" className="img-fluid"/>
                    </div>
                </div>

                <div className="col-lg-5 clo-md-12 text-sec">
                    <h2>We Pride Ourselves On Making Real Food From The Best Ingredients.</h2>
                    <p>We believe that the key to a truly satisfying meal lies in the freshness of its ingredients. That's why we partner with local farmers and trusted suppliers who share our commitment to quality</p>
                    <button className="main-btn mt-4">Learn More</button>
                </div>
            </div>
        </div>
        <div className="container food-type">
            <div className="row align-items-center">
                <div className="col-lg-5 col-md-12 text-sec mb-lg-0 mb-5">
                    <h2>We make everything by hand with the best possible ingredients.</h2>
                    <p>We believe in the art of cooking. That's why our team of skilled chefs and culinary experts prepares each and every meal by hand, ensuring the highest level of craftsmanship and attention to detail. From chopping fresh ingredients to seasoning and garnishing, every step is executed with care and passion.</p>
                    <ul className="list-unstyled py-3">
                        <li>Thoughtfully Curated Menu.</li>
                        <li>Unique Flavor Combinations.</li>
                        <li>Thoughtfully Curated Menu.</li>
                    </ul>
                    <button className="main-btn mt-4">Lern More</button>
                </div>
                <div className="col-lg-7 col-md-12">
                    <div className="card border-0">
                        <img src="images/img/img-2.png" alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
        <hr className="text-light"/>

    </div>
   
</section>
    </>

  )
}

export default About

