import React from "react"
import Me1 from "../images/me1.jpg"
console.log(Me1);
export default function Header() {
    return (
        <div className="outer-header">
            <img src={Me1} alt='a'/>
            <div className="inner-header">
                <h1>Sahil Dalal</h1>
                <h3>Software Developer</h3>
                <h4>sahil.dalal</h4>
                <div className="btn">
                   <a className="email"><ion-icon name="mail-outline"></ion-icon><span> Email </span></a> 
                   <a className="linkedin"><ion-icon name="logo-linkedin"></ion-icon> LinkedIn</a> 
                </div>
            </div>
        </div>
    )
}