import { useState, useEffect } from "react";
import "./home.css";

function NavBar() {
  return (
    <>
      <div id="homeContainer">
        <div id="containerTexto">
          <h1>Eric Springer</h1>
          <p>Dev web</p>
        </div>

        <div id="containerImagem">

          <div className="blob">
            <img src="/imgs/ricardo.png" id="pfp" alt="" />
          </div>
          
        </div>
      </div>
    </>
  );
}

export default NavBar;
