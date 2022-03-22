import React from "react";
import About from "../compoment/Home/About";
import Client from "../compoment/Home/Client";

import MenuItem from "../compoment/Home/MenuItem";
import Service from "../compoment/Home/Service";
import AppointmentList from "../compoment/Home/AppointmentList";

const Home = () => {
    return (
        <div>

            <AppointmentList/>
            <About/>
            <Service/>
            <MenuItem />
            <Client/>

        </div>
    )

}
export default Home;