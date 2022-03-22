import CustomerResponse from "./CustomerResponse"
import Comment from "./Comment"

const SaloonInfo = () => {
    return (
        <div>

            <section className="banner-bottom py-5">
                <div className="container py-md-5">
                    <h3 className="heading text-center mb-3 mb-sm-5">Saloon Info</h3>
                    <div className="single-w3pvt-page mt-md-5 mt-4 px-lg-5">
                        <div className="content-sing-w3ls px-lg-5">
                            <img className="img-fluid" src="assets/images/ban3.jpg" alt="" />
                            <h4>Lorem ipsum dolor sit amet</h4>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod magna .Lorem ipsum dolor sit amet, consectetuer adipiscing elit,Sed diam nonummy nibh euismod magna .Integer pulvinar leo id viverra feugiat. Pellentesque Libero Justo, Semper At Tempus Vel, Ultrices In Sed Ligula. Nulla Uter Sollicitudin Velit.</p>
                            <p className="mt-3">Integer pulvinar leo id viverra feugiat. Pellentesque Libero Justo, Semper At Tempus Vel, Ultrices In Sed Ligula. Nulla Uter Sollicitudin Velit.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod magna.</p>
                            <ul className="w3ls_social_list list-unstyled mt-4">
                                <li className="lead">
                                    Catch On Social :
                                </li>
                                <li>
                                    <a href="#" className="w3pvt_facebook">
                                        <span className="fa fa-facebook-f"></span>
                                    </a>
                                </li>
                                <li className="mx-2">
                                    <a href="#" className="w3pvt_twitter">
                                        <span className="fa fa-twitter"></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="w3pvt_dribble">
                                        <span className="fa fa-dribbble"></span>
                                    </a>
                                </li>
                                <li className="ml-2">
                                    <a href="#" className="w3pvt_google">
                                        <span className=" fa-google-plus"></span>
                                    </a>
                                </li>
                            </ul>



                        </div>
                        <div className="row my-lg-5 mt-3 mx-0">
                            <div className="col-lg-6 text-info pl-0">
                                <p>Proin eget tortor risus. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis porttitor volutpat Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor elementum id enim volutpat...</p>
                            </div>
                            <div className="col-lg-6 mt-3 team-img">
                                <div className="row">
                                    <div className="col-6">
                                        <img src="assets/images/s1.jpg" className="img-fluid" alt="user-image" />
                                    </div>
                                    <div className="col-6">
                                        <img src="assets/images/s2.jpg" className="img-fluid" alt="user-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Comment />
                        <CustomerResponse />

                    </div>


                </div>
            </section>
        </div>

    )

}
export default SaloonInfo