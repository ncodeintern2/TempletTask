import React from "react";
import ClientReviews from "../compoment/Service/ClientReviews";
import HairStyle from "../compoment/Service/HairStyle";

const Service = () => {
    return (
        <div>
            <section className="inner-page-banner" id="home">
            </section>
        
            <div className="breadcrumb-agile">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Services</li>
                </ol>
            </div>
        
           <HairStyle/>
           <ClientReviews/>
           

        </div>
    )

}
export default Service;