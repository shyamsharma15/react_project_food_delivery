import react from 'react'
function Contact() {
    return (
        <>
            {/* <!-- section-1 contact page --> */}

            <section id="">

                <div className="wrapper testimonial-section contactus">
                    <div className="container mtb-4">
                        <div className="text-center pb-4">
                            <h2 className="mt-4">Contact Us</h2>
                        </div>
                        <div className="container">
                            <div className="container contact-section">
                                <div className="container">
                                    <form action="">
                                        <div className="mb-4">
                                            <label className="mb-3" for="name">Enter your name</label>
                                            <input type="text" className="form-control" name="name" placeholder="Enter your name here" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="mb-3" for="name">Enter your email</label>
                                            <input type="email" className="form-control" name="email" placeholder="Enter your email here" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="mb-3" for="name">Enter your mobile</label>
                                            <input type="number" className="form-control" name="message" placeholder="Enter you mobile here" />
                                        </div>
                                        <div className="mb-4">
                                            <label className="mb-3" for="name">Message</label>
                                            <textarea type="text" className="form-control" name="name"></textarea>
                                        </div>
                                        <div className="container text-center">
                                            <button type="submit" className="main-btn">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Contact