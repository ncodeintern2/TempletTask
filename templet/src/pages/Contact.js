import React from "react";
import SaloonInfo from "../compoment/Contact/SaloonInfo";
const Contact = () => {
    return (
        <div>
            <section className="inner-page-banner" id="home">
            </section>

            <div className="breadcrumb-agile">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Single page</li>
                </ol>
            </div>
            <SaloonInfo/>


        </div>
    )

}
export default Contact;