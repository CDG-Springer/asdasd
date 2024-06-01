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

                <h3>Portfólio</h3>
                <ul id="listaItemsMenu">
                    <li>a</li>
                    <li>v</li>
                    <li>s</li>
                </ul>                
            </nav>
            <center>
            <div className="linhaDivisoriaNavBar"></div>
            </center>
        </>
    )
}

export default NavBar