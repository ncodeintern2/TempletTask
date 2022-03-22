import React from "react";
import ClientData from "./ClientData";

const Client =()=>{
    return(
        <div>
            <section className="order-sec py-5">
                <div className="container py-md-5">
                    <div className="test-info text-center">
                        <h3 className="tittle order">
                            <span>CALL US TO BOOK An APPOINTMENT</span>Our team will call back immediately and Book the Appointment</h3>
                        <h4 className="tittle my-2">123456789  </h4>

                        <div className="read-more mx-auto m-0 text-center">
                            <a href="contact.html" className="read-more scroll btn">Click here</a> </div>
                    </div>
                </div>
            </section>

            <section className="testimonials py-5" id="testimonials">
                <div className="container py-md-5">
                    <h3 className="heading text-center mb-3 mb-sm-5">Client Reviews</h3>
                    <div className="row mt-3">

                        <div className="col-md-4 test-grid text-left px-lg-3">
                            <div className="test-info">

                                <p>Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.</p>
                                <h3 className="mt-md-4 mt-3"> Abraham Smith</h3>

                                <div className="test-img text-center mb-3">
                                    <img src="assets/images/test1.jpg" className="img-fluid" alt="user-image" />
                                </div>
                                <div className="mobl-footer test-soc text-center">
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#">
                                                <span className="fa fa-facebook-f"></span>
                                            </a>
                                        </li>
                                        <li className="mx-1">
                                            <a href="#">
                                                <span className="fa fa-twitter"></span>
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 test-grid text-left px-lg-3 py-sm-5 py-md-0 py-3">
                            <div className="test-info">

                                <p>Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.</p>
                                <h3 className="mt-md-4 mt-3"> Mariana Noe</h3>
                                <div className="test-img text-center mb-3">
                                    <img src="assets/images/test2.jpg" className="img-fluid" alt="user-image" />
                                </div>
                                <div className="mobl-footer test-soc text-center">
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#">
                                                <span className="fa fa-facebook-f"></span>
                                            </a>
                                        </li>
                                        <li className="mx-1">
                                            <a href="#">
                                                <span className="fa fa-twitter"></span>
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 test-grid text-left px-lg-3">
                            <div className="test-info">

                                <p>Lorem Ipsum has been the industry's standard since the 1500s. Praesent ullamcorper dui turpis.</p>
                                <h3 className="mt-md-4 mt-3">Nebula Nairobi</h3>

                                <div className="test-img text-center mb-3">
                                    <img src="assets/images/test3.jpg" className="img-fluid" alt="user-image" />
                                </div>
                                <div className="mobl-footer test-soc text-center">
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#">
                                                <span className="fa fa-facebook-f"></span>
                                            </a>
                                        </li>
                                        <li className="mx-1">
                                            <a href="#">
                                                <span className="fa fa-twitter"></span>
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>

            <section className="subscribe" id="subscribe">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 d-flex subscribe-left p-lg-5 py-sm-5 py-4">
                            <div className="news-icon mr-3">
                                <span className="fa fa-paper-plane" aria-hidden="true"></span>
                            </div>
                            <div className="text">
                                <h3>Subscribe To Our Newsletter</h3>
                            </div>
                        </div>
                        <ClientData/>
                    </div>
                </div>
            </section>

        </div>
    )

}
export default Client;