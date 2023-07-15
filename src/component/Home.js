import React from 'react'


function Home() {
  return (
    <div>
         {/* <!-- section - 1 top-banner --> */}
        <section id="#home">
            <div className="container-fluid px-0 top-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6">
                            <h1>UNLIMITED <br/> MEDIUM <span>PIZZAS</span></h1>
                            <h2>Medium 2-topping* pizza</h2>
                            <p>*Additional charge for premium toppings. Minimum of 2 required.</p>
                            <div className="mt-4">
                                <button className="main-btn">Order-now <i className="fas fa-shopping-basket ps-3"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


      {/* <!-- section-2 our menu --> */}

      <section className="our-menu p-4">
        <div className="container text-center">
          <h2 className="pb-4">Our Menu</h2>
          <div className="row">
            <div className="col-6 col-sm-2 mb-4 mb-lg-0">
              <div className="card">
                <div className="cat-img">
                  <a className="link_category_product" href="#">
                    <img src="./images/img/category1.png" alt="" className="img-fluid"/>
                  </a>
                </div>
                <div className="cat-title">
                  <a href="#">Pizza</a>
                </div>
              </div>
            </div>

            <div className="col-6 col-sm-2 mb-4 mb-lg-0">
              <div className="card">
                <div className="cat-img">
                  <a className="link_category_product" href="#">
                    <img src="./images/img/category2.png" alt="" className="img-fluid"/>
                  </a>
                </div>
                <div className="cat-title">
                  <a href="#">Sauces</a>
                </div>
              </div>
            </div>

            <div className="col-6 col-sm-2 mb-4 mb-lg-0">
              <div className="card">
                <div className="cat-img">
                  <a className="link_category_product" href="#">
                    <img src="./images/img/category3.png" alt="" className="img-fluid"/>
                  </a>
                </div>
                <div className="cat-title">
                  <a href="#">Combo</a>
                </div>
              </div>
            </div>

            <div className="col-6 col-sm-2 mb-4 mb-lg-0">
              <div className="card">
                <div className="cat-img">
                  <a className="link_category_product" href="#">
                    <img src="./images/img/category4.png" alt="" className="img-fluid"/>
                  </a>
                </div>
                <div className="cat-title">
                  <a href="#">Kids menus</a>
                </div>
              </div>
            </div>

            <div className="col-6 col-sm-2 mb-4 mb-lg-0">
              <div className="card">
                <div className="cat-img">
                  <a className="link_category_product" href="#">
                    <img src="./images/img/category2.png" alt="" className="img-fluid"/>
                  </a>
                </div>
                <div className="cat-title">
                  <a href="#">Dosa</a>
                </div>
              </div>
            </div>

            <div className="col-6 col-sm-2 mb-4 mb-lg-0">
              <div className="card">
                <div className="cat-img">
                  <a className="link_category_product" href="#">
                    <img src="./images/img/category6.png" alt="" className="img-fluid"/>
                  </a>
                </div>
                <div className="cat-title">
                  <a href="#">Box meals</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- section-3 about --> */}

      <section id="about">
        <div className="about-section wrapper">
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
                <button className="main-btn mt-4">Learn More</button>
              </div>
              <div className="col-lg-7 col-md-12">
                <div className="card border-0">
                  <img src="images/img/img-2.png" alt="" className="img-fluid"/>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* <!-- section-4 explore food  --> */}

      <section id="explore-foods">
        <div className="explore-food wrapper">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="text-content text-center">
                  <h2>We Pride Ourselves On Making Real Food From The Best Ingredients.</h2>
                  <p>We believe that the key to a truly satisfying meal lies in the freshness of its ingredients. That's why we partner with local farmers and trusted suppliers who share our commitment to quality</p>
                  <button className="main-btn mt-4">Learn More</button>
                </div>

              </div>
            </div>
            <div className="row pt-5">
              <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
                <div className="card border">
                  <img src="images/img/img-3.jpg" alt="" className="img-fluid"/>
                </div>
                <div className="p-3">
                  <h5>10 Reasond To Do A Digital Detox Challenge</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eius accusamus
                    voluptatum fugit voluptas sunt in quo officiis molestiae aliquam.</p>
                  <button className="mt-2 main-btn">Read More</button>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
                <div className="card border">
                  <img src="images/img/img-4.jpg" alt="" className="img-fluid"/>
                </div>
                <div className="p-3">
                  <h5>The Ultimate Hangover Burger:Cheese in a Hole Burger Grilled Cheese</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eius accusamus
                    voluptatum fugit voluptas sunt in quo officiis molestiae aliquam.</p>
                  <button className="mt-2 main-btn">Read More</button>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
                <div className="card border">
                  <img src="images/img/img-5.jpg" alt="" className="img-fluid"/>
                </div>
                <div className="p-3">
                  <h5>Traditional Soft Pretzels with Sweet Beer Cheese</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eius accusamus
                    voluptatum fugit voluptas sunt in quo officiis molestiae aliquam.</p>
                  <button className="mt-2 main-btn">Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- section-5 testimonial --> */}

      <section id="testinomial">
        <div className="wrapper testimonial-section">
          <div className="container text-center">
            <div className="text-center pb-4">
              <h2>Testimonial</h2>
            </div>
            <div className="row">
              <div className="col-sm-12 col-lg-10 offset-lg-1">
                <div id="carouselExampleIndicators" className="carousel slide">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                      className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                      aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                      aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="carousel-caption">
                        <img src="images/review/review-1.jpg"/>
                          <p>"Far far away,behind the mountain ,far from the countries Vokalia and
                            Consonantia, there live the blind texts. "</p>
                          <h5>Johnthan Doe - UX Designer</h5>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="carousel-caption">
                        <img src="images/review/review-2.jpg"/>
                          <p>"Far far away,behind the mountain ,far from the countries Vokalia and
                            Consonantia, there live the blind texts. "</p>
                          <h5>Maccy Doe - Front End</h5>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="carousel-caption">
                        <img src="images/review/review-1.jpg"/>
                          <p>"Far far away,behind the mountain ,far from the countries Vokalia and
                            Consonantia, there live the blind texts. "</p>
                          <h5>Johnthan Doe - UX Designer</h5>
                      </div>
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button"
                    data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button"
                    data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default Home
