import React from "react";
import './style.module.css'
import s from "./style.module.css";
import logo from "./images/React-icon.svg"

function Header() {
    return (
        <header>
            <nav className={s.myFlex} style={{display: "flex", justifyContent: "space-around"}}>
                <div className={s.insideHeader}>
                    <img src={logo} alt="React online logo" width="20%"/>
                    <h2>ReactFacts</h2>
                </div>
                <div className={s.myLinks}>
                    <a href="">Pricing</a>
                    <a href="">About us</a>
                    <a href="">Contact</a>
                </div>
            </nav>
        </header>
    )
}

export default Header