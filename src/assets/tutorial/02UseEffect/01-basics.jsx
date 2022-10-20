import {useState, useEffect} from 'react'

import Jumbotron from '../../components/Jumbotron'

const UseEffectBasics = () => {
    const title = 'use effect basics';
    const [size, setSize] = useState(window.innerWidth)
    const [value, setValue] = useState(0)

    const CheckSize = ()=>{
            setSize(window.innerWidth);
        }

    useEffect(()=>{
        if (value > 1) {
            document.title = `Messages (${value})`;
        }
    }, [value]) // Add empty list dependency if you want the effect to run only on initial render
    // You can always add as many use effects as possible

    useEffect(() => {
        window.addEventListener('resize', CheckSize);
        // Clean up to avoid window hanging
        return ()=>{
            window.addEventListener('resize', CheckSize);
        }
    }, [size])
  return (
    <>
        <Jumbotron title={title}/>
        <div className="container">
            <p className='text-center text-primary fs-bg'>{value}</p>
            <button className="btn btn-lg btn-outline-primary m-auto d-block mt-3 mb-3"
            onClick={()=>setValue((prev)=>prev + 1)}
            >Click to increment value and window title</button>
            <p className='text-center fs-1'>Window Width: <span className='text-primary'>{size}px</span></p>
        </div>
    </>
  )
}

export default UseEffectBasics