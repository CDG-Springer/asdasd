import { useState, useEffect } from "react"
import './navbar.css'

function NavBar() {
    return (
        <>
            <nav>
                <div id="hamburger">
                    <div className="hamb1"></div>
                    <div className="hamb1"></div>
                    <div className="hamb1"></div>
                </div>

                <ul id="listaItemsMenu">
                    <li>Technologies</li>
                    <li>About me</li>
                    <li>Projects</li>
                </ul>

                <ul id="listaItemsMenu">
                    <li><i className="bi bi-github"></i></li>
                    <li><i className="bi bi-linkedin"></i></li>
                    <li><i className="bi bi-envelope-at-fill"></i></li>
                    <li><i className="bi bi-telephone-forward-fill"></i></li>
                </ul>                
            </nav>
            <center>
            <div className="linhaDivisoriaNavBar"></div>
            </center>
        </>
    )

    window.addEventListener('scroll', () =>{
        console.log('teste')
    })
}

export default NavBar