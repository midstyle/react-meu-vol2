import React from "react";
import Sidenav from "./sidenav";
import "../style/studentspage.css";
import { BsPeopleFill } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

function sp() {
  return (
    <div>
      <Sidenav />
      <h1>Classes</h1>
      <div className="grid-container-classes" id="blur">
        <div className="item-list-classes">
          <a href="students">SE01</a>
          <div className="participant-counter">
            <BsPeopleFill /> 14
          </div>
        </div>
        <div className="item-list-classes">
          <a href="students">SE02</a>
          <div className="participant-counter">
            <BsPeopleFill /> 17
          </div>
        </div>
        <div className="item-list-classes">
          <a href="students">SE03</a>
          <div className="participant-counter">
            <BsPeopleFill /> 10
          </div>
        </div>
        <div className="item-list-classes">
          <a href="students">SE04</a>
          <div className="participant-counter">
            <BsPeopleFill /> 29
          </div>
        </div>
        <div className="item-list-classes">
          <a href="students">SE05</a>
          <div className="participant-counter">
            <BsPeopleFill /> 13
          </div>
        </div>
        <div className="item-list-classes">
          <a href="students">SE06</a>
          <div className="participant-counter">
            <BsPeopleFill /> 23
          </div>
        </div>
        <div className="item-list-classes">
          <a href="students">SE07</a>
          <div className="participant-counter">
            <BsPeopleFill /> 32
          </div>
        </div>
      </div>
      {/* adding and removing buttons */}
      <div className="adding-removing">
        <button className="adding-icon" onClick={window['addclass']}>
          <AiOutlinePlus />
        </button>

        <button className="minus-icon">
          <BiMinus />
        </button>
      </div>
      {/* popup for add class */}
      <div id="popup-add-class">
        <div className="add-class-text">Add Class</div>
        <div className="create-name">
          <input type="text" placeholder="Enter Name Of Class" />
        </div>
        <div className="max-participants">
          <div className="icon-add-class">
            <BsPeopleFill />
          </div>
          <input type="number" />
        </div>
        <button className="create-class-btn" onClick={window['addclass']}>Create</button>
      </div>
    </div>
  );
}

export default sp;
