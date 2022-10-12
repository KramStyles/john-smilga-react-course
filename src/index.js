// import dependencies
import React from "react"
import root from "react-dom"

// Import external components
import './app.css'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import App from './App'

let facts = (
    <div>
        <Header/>
        <Main/>
        <Footer/>
    </div>
)


function Temporary() {
    return (facts)
}


root.render(<Temporary/>, document.getElementById('root'));
root.render(facts, document.getElementById('root'));
root.render(<App/>, document.getElementById('root'))