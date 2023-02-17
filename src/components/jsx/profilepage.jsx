import React from "react";
import "../style/profilepage.css";
import Sidenav from "../jsx/sidenav";
import PlusSign from "../img/32339.png"

function profilepage() {
  return (
    <div>
      <h1>Profile Page</h1>
      <Sidenav />
      <div class="container-profilepage">
        <div class="item-box">
          <div class="img-circle"></div>
          <h2>Name:</h2>
          <h2>Role:</h2>
          <h3>Username:</h3>
          <h3>Password:</h3>
          <h3>No: +94</h3>
        </div>
        <div class="item-box">
          <div class="img-circle"></div>
          <h2>Name:</h2>
          <h2>Role:</h2>
          <h3>Username:</h3>
          <h3>Password:</h3>
          <h3>No: +94</h3>
        </div>
        <div class="item-box">
          <div class="img-circle"></div>
          <h2>Name:</h2>
          <h2>Role:</h2>
          <h3>Username:</h3>
          <h3>Password:</h3>
          <h3>No: +94</h3>
        </div>
        <div class="item-box">
          <a href="profilepageadd">
            <img src={PlusSign} alt="plus sign" className="plus-sign"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default profilepage;
