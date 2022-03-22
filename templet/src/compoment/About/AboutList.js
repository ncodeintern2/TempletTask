import React from "react";


const AboutList = () => {
    return (
        <section className="banner-bottom  py-5">
            <div className="container py-md-5">
                <h3 className="heading text-center mb-3 mb-sm-5">Our Team</h3>
                <div className="row mt-lg-5 mt-4">
                    <div className="col-md-4 team-gd text-center">
                        <div className="team-img mb-4">
                            <img src="assets/images/t1.jpg" className="img-fluid" alt="user-image" />
                        </div>
                        <div className="team-info">
                            <h3 className="mt-md-4 mt-3">JAMES Men spa</h3>
                            <p>Lorem Ipsum has been the industry's standard since the 1500s.</p>
                            <ul className="list-unstyled team-icons mt-4">
                                <li>
                                    <a href="#" className="t-icon">
                                        <span className="fa fa-facebook-f"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="t-icon">
                                        <span className="fa fa-twitter"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="t-icon">
                                        <span className="fa fa-dribbble"></span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className="col-md-4 team-gd second text-center my-md-0 my-5">
                        <div className="team-img mb-4">
                            <img src="assets/images/t2.jpg" className="img-fluid" alt="user-image" />
                        </div>
                        <div className="team-info">
                            <h3 className="mt-md-4 mt-3">DEEN MUSTACHIO</h3>
                            <p>Lorem Ipsum has been the industry's standard since the 1500s.</p>
                            <ul className="list-unstyled team-icons mt-4">
                                <li>
                                    <a href="#" className="t-icon">
                                        <span className="fa fa-facebook-f"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="t-icon">
                                        <span className="fa fa-twitter"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="t-icon">
                                        <span className="fa fa-dribbble"></span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 team-gd text-center">
                        <div className="team-img mb-4">
                            <img src="assets/images/t3.jpg" className="img-fluid" alt="user-image" />
                        </div>
                        <div className="team-info">
                            <h3 className="mt-md-4 mt-3"> CLINT HAIRISTA</h3>
                            <p>Lorem Ipsum has been the industry's standard since the 1500s.</p>
                            <ul className="list-unstyled team-icons mt-4">
                                <li>
                                    <a href="#" className="t-icon">
                                        <span className="fa fa-facebook-f"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="t-icon">
                                        <span className="fa fa-twitter"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="t-icon">
                                        <span className="fa fa-dribbble"></span>
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )

}
export default AboutList;