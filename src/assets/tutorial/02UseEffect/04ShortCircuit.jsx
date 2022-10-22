import {useState} from "react";

import Jumbotron from "../../components/Jumbotron";

const ShortCircuit = () => {
    const [text, setText] = useState('');
    // Introducing short circuit
    const firstValue = text || 'Hello'; // This would pick hello if text is empty
    const secondValue = text && 'Hi'; // This would pick hi if text exist

    const toggleValues=()=>{
        if (secondValue) setText('');
        else setText('Bye');
    }
    return(
        <>
            <Jumbotron title="short circuit example"/>
            <div className="container">
                <p>{firstValue}</p>
                <p>{secondValue ? secondValue : ' '}</p>
                <p>{secondValue || ' '}</p>
                <button className="btn btn-outline-primary mt-2" onClick={toggleValues}>Toggle values</button>
            </div>
        </>
    )
}

export default ShortCircuit;