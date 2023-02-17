import React from "react";
import "../style/profilepageadd.css"
import background from "../img/normal_bg.jpg"
import { MdCall } from "react-icons/md";
import { RxArrowLeft } from "react-icons/rx";
import { BiCheckCircle } from "react-icons/bi";

function profilepageadd() {
  return (
    <div>
      <div style={{ backgroundImage: `url(${background})` }}></div>
      <h1>Profile Page</h1>
      <div id="container">
        <div>
          Name: <span contenteditable="True"></span>
        </div>
        <div></div>
        <div>
          Role: <span contenteditable="True"></span>
        </div>
        <div></div>
        <div>Contact Details:</div>
        <div></div>
        <div class="contact">
          Username: <span contenteditable="True"></span>
        </div>
        <div class="contact">
          Password: <span contenteditable="True"></span>
        </div>
        <div class="contact">
          <MdCall/> +94
          <span contenteditable="True"></span>
        </div>
        <div class="contact">
          <i class="fa-solid fa-house"></i>
          <span contenteditable="True"></span>
        </div>
        <div>
          Age: <span contenteditable="True"></span>
        </div>
        <div></div>
      </div>
      <div class="image-block" id="blur"></div>
      <div class="image-block2-prf" id="blur2">
        biography
        <span contentEditable="true"></span>
      </div>
      <div>
        <a href="profilepage">
          <button   class="exitbutton">
            <RxArrowLeft/>
          </button>
        </a>
      </div>
      <button class="savebtn-prf" onClick={window['toggle3']}>
        Save
      </button>
      <a href="profilepage">
        <button class="delbtn">Delete</button>
      </a>
      <div id="popup-save">
        <h1>
          <BiCheckCircle/>
        </h1>
        <h1>The contents was saved successfully</h1>
        <a href="profilepage">click to return to profile page</a>
      </div>
    </div>
  );
}

export default profilepageadd;
