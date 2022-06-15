import { React, useState } from "react";
function Navbar() {
  /* Toggle between adding and removing the "responsive" className to topnav when the user clicks on the icon */
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <div id="navbar">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <div className="topnav" id="myTopnav">
        <a href="#home" className="active">
          Home
        </a>
        <a href="#games">Games</a>
        <a href="#contact">Chat</a>
        <a href="#about">Profile</a>
        <a href="javascript:void(0);" className="icon" onClick={myFunction}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
