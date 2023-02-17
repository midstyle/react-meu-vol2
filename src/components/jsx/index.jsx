import React from "react";
import "../../components/style/index.css";
import WebFont from "webfontloader";
import logo from "../../components/img/download_low.png";
import { HiTranslate } from "react-icons/hi";
import { BiHelpCircle } from "react-icons/bi";
import Script from "../scripts/popupindex";
import { GrClose } from "react-icons/gr";


function index() {
  return (
    <>
      <div className="container">
        <div className="grid-item2" id="blur">
          <img src={logo} alt="Logo" className="Logo" />
          <h1>Student Management System</h1>

          <div className="form">
            <div className="form-item">
              <input type="text" placeholder="Username" id="user" /> <br />
              <input type="password" placeholder="Password" id="pass" />
            </div>
            <div className="button-form">
              <a href="forgot_password" className="forgotpass">
                <label>Forgot Pass</label>
              </a>

              <div className="login-btn">
                <a href="dashboard">
                  <button value="" className="login-button">Sign In</button>
                </a>
              </div>
            </div>
          </div>
          <div className="translate">
            <a href="#" onClick={window['toggle']}>
              <HiTranslate />
            </a>
          </div>
          <div className="help">
            <a href="#" onClick={window['toggle2']}>
              <BiHelpCircle />
            </a>
          </div>
        </div>
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
    </>
  );
}

export default index;
