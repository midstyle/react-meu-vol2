import React from "react";
import "../style/forgotpass.css";
import logo from "../img/download_low.png";
import { HiTranslate } from "react-icons/hi";
import { BiHelpCircle } from "react-icons/bi";
import { GrClose } from "react-icons/gr";

function forgotpass() {
  return (
    <div>
      <div class="container">
        <div class="grid-item2" id="blur">
          <div class="logo">
            <img src={logo} alt="meulabs logo" />
          </div>
          <h1>Student Management System</h1>

          <div class="form">
            <div class="form-item">
              <input
                type="text"
                placeholder="Please enter your name"
                id="user"
              />
              <br />
              <input
                type="email"
                placeholder="Please enter your email"
                id="pass"
              />
            </div>
            <div class="button-form">
              <a href="/" class="exitbtn-forgotpass">
                <label>Exit</label>
              </a>

              <a href="#" onClick={window['popup_pass_submit']}>
                <button value="" className="login-button">
                  Send
                </button>
              </a>
            </div>
          </div>
          <div class="translate">
            <a href="#" onClick={window['toggle']}>
              <HiTranslate/>
            </a>
          </div>
          <div class="help">
            <a href="#" onClick={window['toggle2']}>
              <BiHelpCircle/>
            </a>
          </div>
        </div>
      </div>

      <div id="popup">
        <i class="fa-solid fa-check"></i>
        <h3>Thank You</h3>
        <h4>Your request has been submitted</h4>
        <a href="/" onClick={window['popup_pass_submit']}>
          <button value="" className="exitbtn-forgotpass">Close</button>
        </a>
      </div>

      <div id="popup-trans">
        <ul>
          <li>English</li>
          <li>Sinhala</li>
          <li>Hindi</li>
        </ul>

        <a href="#" onClick={window['toggle']}>
          <button value="" className="close-btn">
            <GrClose/>
          </button>
        </a>
      </div>

      <div id="popup-help">
        <h3>Need help?</h3>
        <h3>Contact your admin or supervisor</h3>
        <div className="form">
          <input type="email" placeholder="Enter their email" id="form2" />
        </div>
        <a href="#" onClick={window['toggle2']}>
          <button value="" className="close-btn">
            <GrClose/>
          </button>
        </a>
      </div>


    </div>
  );
}

export default forgotpass;
