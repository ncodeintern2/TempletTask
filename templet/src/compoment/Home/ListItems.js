import React from "react";
import { Link } from "react-router-dom";

const ListItems = () => {
    return (
        <div>
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
        </div>

    )

}
export default ListItems;