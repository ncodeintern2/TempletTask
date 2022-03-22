import React from "react";
import { Link } from "react-router-dom";

const ListItems = () => {
    return (
        <div className="banner_w3lspvt" id="home">
                <div className="csslider infinity" id="slider1">
                    <input type="radio" name="slides" id="slides_1" />
                    <input type="radio" name="slides" id="slides_2" />
                    <input type="radio" name="slides" id="slides_3" />
                    <input type="radio" name="slides" id="slides_4" />

                    <ul className="banner_slide_bg">
                        <li>
                            <div className="slider-info bg1">
                                <div className="bs-slider-overlay">
                                    <div className="banner-text">
                                        <div className="container">
                                            <h2 className="movetxt agile-title text-capitalize">We Create and Renovate Hair Style Trends</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>
                                            <Link to="/contact" className="btn"> Get appointment </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="slider-info bg2">
                                <div className="bs-slider-overlay1">
                                    <div className="banner-text">
                                        <div className="container">
                                            <h4 className="movetxt agile-title text-capitalize">We Help to grow your hair as well beard </h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>
                                            <Link to="/contact" className="btn">Get appointment </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="slider-info bg3">
                                <div className="bs-slider-overlay1">
                                    <div className="banner-text">
                                        <div className="container">
                                            <h2 className="movetxt agile-title text-capitalize">We Design and Create Hair Style Latest</h2>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>
                                            <Link to="/contact" className="btn"> Get appointment</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="slider-info bg4">
                                <div className="bs-slider-overlay1">
                                    <div className="banner-text">
                                        <div className="container">
                                            <h4 className="movetxt agile-title text-capitalize">We design latest trending haircuts </h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.</p>
                                            <Link to="/contact" className="btn"> Get appointment </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="navigation">
                        <div>
                            <label htmlFor="slides_1"></label>
                            <label htmlFor="slides_2"></label>
                            <label htmlFor="slides_3"></label>
                            <label htmlFor="slides_4"></label>
                        </div>
                    </div>
                </div>
            </div>

    )

}
export default ListItems;