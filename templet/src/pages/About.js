import React from "react";
import { Link } from "react-router-dom";
import AboutList from "../compoment/About/AboutList";

const About = () => {
    return (
        <div>
            <section className="inner-page-banner" id="home">
            </section>

            <div className="breadcrumb-agile">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">About Us</li>
                </ol>
            </div>

            <section className="banner-bottom py-5" id="exp">
                <div className="container py-md-5">
                    <h3 className="heading text-center mb-3 mb-sm-5">About More</h3>
                    <div className="row mid-grids mt-lg-5 mt-3">
                        <div className="col-md-5 content-w3pvt-img">
                            <img src="assest/images/ab1.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="col-md-7 content-left-bottom entry-w3ls-info text-left mt-3">
                            <h5 className="mt-1">classNameIC HAIR STYLING </h5>
                            <h4>real men go to
                                <br />real Men spas</h4>
                            <p className="mt-2 text-left">Integer pulvinar leo id viverra feugiat.Pellentesque libero justo, semper at tempus vel, ultrices in sed ligula. Nulla uter sollicitudin velit. Sed porttitor orci vel fermentum elit maximus. Curabitur ut turpis massa in condimentum libero. Pellentesque maximus Pellentesque libero justo Nulla uter sollicitudin velit. Sed porttitor orci vel ferm semper at vel, ultrices in ligula semper at vel.Curabitur ut turpis massa in condimentum libero.</p>

                        </div>


                    </div>
                    <div className="row mid-grids mt-lg-5 mt-3 py-3">

                        <div className="col-md-7 content-left-bottom entry-w3ls-info text-left mt-3">
                            <h5 className="mt-1">classNameIC BEARD STYLING</h5>
                            <h4>checkout hottest
                                <br />beard styling</h4>
                            <p className="mt-2 text-left">Integer pulvinar leo id viverra feugiat.Pellentesque libero justo, semper at tempus vel, ultrices in sed ligula. Nulla uter sollicitudin velit. Sed porttitor orci vel fermentum elit maximus. Curabitur ut turpis massa in condimentum libero. Pellentesque maximus Pellentesque libero justo Nulla uter sollicitudin velit. Sed porttitor orci vel ferm semper at vel, ultrices in ligula semper at vel.Curabitur ut turpis massa in condimentum libero.</p>

                        </div>
                        <div className="col-md-5 content-w3pvt-img mt-lg-0 mt-3">
                            <img src="assest/images/ab2.jpg" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="stats-count">
                <div className="overlay py-5">
                    <div className="container py-md-5">
                        <div className="row text-center">
                            <div className="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info ">
                                <h5>700</h5>
                                <h6 className="pt-2">Clients</h6>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info">
                                <h5>250 +</h5>
                                <h6 className="pt-2">Awards</h6>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info">
                                <h5>150</h5>
                                <h6 className="pt-2">styles</h6>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-3 col-6 my-3 number-wthree-info">
                                <h5>125</h5>
                                <h6 className="pt-2">Men spas</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           <AboutList/>
        </div>
    )

}
export default About;