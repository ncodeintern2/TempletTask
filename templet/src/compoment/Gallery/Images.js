import React from "react";
import { Link } from "react-router-dom";
import ImagesList from "./ImagesList";

const Images = (props) => {
    return (
        <div>
            <section className="inner-page-banner" id="home">
            </section>
            <div className="breadcrumb-agile">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Gallery</li>
                </ol>
            </div>

            <section className="gallery py-5" id="gallery">
                <div className="container py-md-5">
                    <h3 className="heading text-center mb-3 mb-sm-5">Our Gallery</h3>
                    <div className="gallery-content">
                        <ImagesList/>
                        


                    </div>



                </div>


            </section>

        </div>
                            
                            // <div className="col-md-4 col-sm-6 gal-img">
                            //     <a href="#gal2"><img src="assets/images/g2.jpg" alt="aegis" className="img-fluid mt-4" /></a>
                            // </div>
                            // <div className="col-md-4 col-sm-6 gal-img">
                            //     <a href="#gal3"><img src="assets/images/g3.jpg" alt="aegis" className="img-fluid mt-4" /></a>
                            // </div>
                            // <div className="col-md-4 col-sm-6 gal-img">
                            //     <a href="#gal4"><img src="assets/images/g4.jpg" alt="aegis" className="img-fluid mt-4" /></a>
                            // </div>
                            // <div className="col-md-4 col-sm-6 gal-img">
                            //     <a href="#gal5"><img src="assets/images/g5.jpg" alt="aegis" className="img-fluid mt-4" /></a>
                            // </div>
                            // <div className="col-md-4 col-sm-6 gal-img">
                            //     <a href="#gal6"><img src="assets/images/g6.jpg" alt="aegis" className="img-fluid mt-4" /></a>
                            // </div> 

    )

}
export default Images