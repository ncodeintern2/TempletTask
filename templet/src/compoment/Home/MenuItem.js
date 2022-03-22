import React from 'react'
import MenuList from './MenuList'

const MenuItem = () => {
    return (
        <section className="pricing py-5">
            <div className="container py-md-5">
                <h3 className="heading text-capitalize text-center mb-3 mb-sm-5"> Our Pricing</h3>
                <div className="row pricing-grids">
                    <div className="col-lg-6  mb-lg-0 mb-5">
                        <div className="padding">
                            <h3>PRICES FOR MUSTACHE TRIMMING</h3>
                            <MenuList/>

                            {/* <div className="menu-item" key = {props.key}>
                                <li>
                                    <div className="row border-dot no-gutters">

                                        <div className="col-8 menu-item-name">
                                            <h6>{props.data}</h6>
                                        </div>
                                        <div className="col-4 menu-item-price text-right">
                                            <h6>{props.amount}</h6>
                                        </div>


                                    </div> */}

                                {/* </li> */}


                        </div>
                            {/* 
                        <div className="menu-item my-4">
                            <div className="row border-dot no-gutters">
                                <div className="col-8 menu-item-name">
                                    <h6>Trim your Mustaches style 2</h6>
                                </div>
                                <div className="col-4 menu-item-price text-right">
                                    <h6>$10</h6>
                                </div>
                            </div>
                        </div>

                        <div className="menu-item">
                            <div className="row border-dot no-gutters">
                                <div className="col-8 menu-item-name">
                                    <h6>Trim your Mustaches style 3</h6>
                                </div>
                                <div className="col-4 menu-item-price text-right">
                                    <h6>$15</h6>
                                </div>
                            </div>

                        </div>

                        <div className="menu-item mt-4">
                            <div className="row border-dot no-gutters">
                                <div className="col-8 menu-item-name">
                                    <h6>Trim your Mustaches style 4</h6>
                                </div>
                                <div className="col-4 menu-item-price text-right">
                                    <h6>$15</h6>
                                </div>
                            </div>
                        </div>

                        <div className="menu-item mt-4">
                            <div className="row border-dot no-gutters">
                                <div className="col-8 menu-item-name">
                                    <h6>Trim your Mustaches style 5</h6>
                                </div>
                                <div className="col-4 menu-item-price text-right">
                                    <h6>$20</h6>
                                </div>
                            </div>
                        </div>


                        <div className="menu-item mt-4">
                            <div className="row border-dot no-gutters">
                                <div className="col-8 menu-item-name">
                                    <h6>Trim your Mustaches style 6</h6>
                                </div>
                                <div className="col-4 menu-item-price text-right">
                                    <h6>$25</h6>
                                </div>
                            </div>
                        </div> */}

                        </div>
                    </div>
                    <div className="col-lg-6  mb-lg-0 mb-5">
                        <div className="padding">
                            <h3>HAIR AND BEARD CUT PRICES</h3>

                            <div className="menu-item">
                                <div className="row border-dot no-gutters">
                                    <div className="col-8 menu-item-name">
                                        <h6>Dye your hair and beard 1</h6>
                                    </div>
                                    <div className="col-4 menu-item-price text-right">
                                        <h6>$27</h6>
                                    </div>
                                </div>

                            </div>

                            <div className="menu-item my-4">
                                <div className="row border-dot no-gutters">
                                    <div className="col-8 menu-item-name">
                                        <h6>Dye your hair and beard 2</h6>
                                    </div>
                                    <div className="col-4 menu-item-price text-right">
                                        <h6>$21</h6>
                                    </div>
                                </div>

                            </div>

                            <div className="menu-item">
                                <div className="row border-dot no-gutters">
                                    <div className="col-8 menu-item-name">
                                        <h6>Dye your hair and beard 3</h6>
                                    </div>
                                    <div className="col-4 menu-item-price text-right">
                                        <h6>$25</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="menu-item mt-4">
                                <div className="row border-dot no-gutters">
                                    <div className="col-8 menu-item-name">
                                        <h6>Dye your hair and beard 4</h6>
                                    </div>
                                    <div className="col-4 menu-item-price text-right">
                                        <h6>$28</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="menu-item mt-4">
                                <div className="row border-dot no-gutters">
                                    <div className="col-8 menu-item-name">
                                        <h6>Dye your hair and beard 5</h6>
                                    </div>
                                    <div className="col-4 menu-item-price text-right">
                                        <h6>$30</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="menu-item mt-4">
                                <div className="row border-dot no-gutters">
                                    <div className="col-8 menu-item-name">
                                        <h6>Dye your hair and beard 6</h6>
                                    </div>
                                    <div className="col-4 menu-item-price text-right">
                                        <h6>$35</h6>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
        
        </section>

    )

}
export default MenuItem;