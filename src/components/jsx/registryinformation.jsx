import React from "react";
import "../style/registryinformation.css";
import { BsArrowLeft } from "react-icons/bs";
import { BiImage } from "react-icons/bi";
import { BsFillHouseFill } from "react-icons/bs";

function registryinformation() {
  return (
    <div>
      <h1>Student Name</h1>
      <div class="registryinformation-container">
        <div>Name:</div>
        <div></div>
        <div>Class:</div>
        <div></div>
        <div>Contact Details:</div>
        <div>Parents Contact Details:</div>
        <div class="contact-info">+94</div>
        <div class="contact-info">+94</div>
        <div class="contact-info">
          <BsFillHouseFill /> Lorem ipsum dolor sit.
        </div>
        <div class="contact-info">
          <BsFillHouseFill /> Lorem ipsum dolor sit.
        </div>
        <div>Team:</div>
        <div>Age:</div>
      </div>
      <div class="image-block">
        <div className="image-icon">
          <BiImage />
        </div>
      </div>
      <div>
        <a href="registry">
          <button className="exitbutton">
            <BsArrowLeft />
          </button>
        </a>
      </div>
    </div>
  );
}

export default registryinformation;
