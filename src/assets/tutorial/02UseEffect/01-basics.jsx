import {useState, useEffect} from 'react'

import Jumbotron from '../../components/Jumbotron'

const UseEffectBasics = () => {
    const title = 'use effect basics';
    const [value, setValue] = useState(0)

    useEffect(()=>{
        document.title = `Messages (${value})`;
    })
  return (
    <>
        <Jumbotron title={title}/>
        <div className="container">
            <p className='text-center text-primary' style={{fontSize: '15rem'}}>{value}</p>
            <button className="btn btn-lg btn-outline-primary m-auto d-block"
            onClick={()=>setValue((prev)=>prev + 1)}
            >Click to increment</button>
        </div>
    </>
  )
}

export default UseEffectBasics