import {useState, useEffect} from "react";

import Jumbotron from "../../components/Jumbotron";

const ShortCircuit = () => {
    return(
        <>
            <Jumbotron title="short circuit example"/>
            <div className="container">
                <p>Hello</p>
            </div>
        </>
    )
}

export default ShortCircuit;