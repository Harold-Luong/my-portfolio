import logo from "./logo.svg";
import "./App.css";
import "./style/style-open-div.scss";
import { useState } from "react";

function App() {
  function myMove() {
    let divLeft = document.getElementById("div-left");
    divLeft.className += " animate";
    let divRight = document.getElementById("div-right");
    divRight.className += " animate";
  }

  return (
    <>
      <div className="App App-header open">
        <div id="div-left" className="div-left"></div>
        <div id="div-right" className="div-right"></div>
        <div className="clear"></div>
      </div>
      <button onClick={myMove} className="click-open">
        click
      </button>
    </>
  );
}

export default App;
